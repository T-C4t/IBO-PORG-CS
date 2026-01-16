// Application Logic (Alpine.js)

document.addEventListener('alpine:init', () => {

    /**
     * Global App Store
     * Manages high-level state: age mode, current view, persistence.
     */
    Alpine.data('app', () => ({
        ageMode: null, // 'child' | 'adult'
        currentView: 'age-gate', // 'age-gate', 'menu', 'task-1', 'task-2'

        // Simple persistence object to track overall progress
        appStorage: {
            task1Completed: false,
            task2Completed: false
        },

        init() {
            // Load state from localStorage if available
            const savedState = localStorage.getItem('bnn_app_state');
            if (savedState) {
                const parsed = JSON.parse(savedState);
                this.ageMode = parsed.ageMode;
                this.appStorage = parsed.appStorage || this.appStorage;

                // Navigate to menu if mode was already selected
                if (this.ageMode) {
                    this.currentView = 'menu';
                }
            }
        },

        saveState() {
            localStorage.setItem('bnn_app_state', JSON.stringify({
                ageMode: this.ageMode,
                appStorage: this.appStorage
            }));
        },

        setAgeMode(mode) {
            this.ageMode = mode;
            this.currentView = 'menu';
            this.saveState();
        },

        setView(view) {
            this.currentView = view;
        },

        resetApp() {
            if (confirm('Opravdu chceš začít úplně od začátku? Vše se vymaže.')) {
                localStorage.removeItem('bnn_app_state');
                localStorage.removeItem('bnn_quiz_state');
                localStorage.removeItem('bnn_planner_state');
                location.reload();
            }
        },

        // Helper to mark tasks as complete (called from child stores)
        completeTask(taskId) {
            if (taskId === 1) this.appStorage.task1Completed = true;
            if (taskId === 2) this.appStorage.task2Completed = true;
            this.saveState();
        }
    }));

    /**
     * Quiz Store (Task 1)
     */
    Alpine.data('quizStore', () => ({
        currentScenarioIndex: 0,
        showFeedback: false,
        showResults: false,
        currentFeedback: null,
        answers: [], // Array to store user's result for each scenario

        init() {
            // Load state if exists
            const saved = localStorage.getItem('bnn_quiz_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.currentScenarioIndex = parsed.currentScenarioIndex;
                this.answers = parsed.answers || [];
                // If they were done, show results
                if (this.currentScenarioIndex >= SCENARIOS.length) {
                    this.showResults = true;
                }
            }
        },

        get scenario() {
            return SCENARIOS[this.currentScenarioIndex];
        },

        get progressPercentage() {
            return ((this.currentScenarioIndex) / SCENARIOS.length) * 100;
        },

        saveState() {
            localStorage.setItem('bnn_quiz_state', JSON.stringify({
                currentScenarioIndex: this.currentScenarioIndex,
                answers: this.answers
            }));
        },

        selectAnswer(option) {
            this.currentFeedback = option;
            this.showFeedback = true;

            // Save answer if not already saved for this index
            // (Simpler logic: just push/update current index)
            this.answers[this.currentScenarioIndex] = option;
        },

        nextScenario() {
            this.showFeedback = false;
            this.currentScenarioIndex++;
            this.saveState();

            if (this.currentScenarioIndex >= SCENARIOS.length) {
                this.finishQuiz();
            }
        },

        finishQuiz() {
            this.showResults = true;
            // Notify global app that task 1 is done
            // access parent scope event or store? 
            // In Alpine, we can dispatch an event or access global store if injected.
            // But here we rely on the DOM structure or just saving locally.
            // Better: Dispatch custom event that 'app' listens to, or update appStorage directly if accessible.
            // Since we are inside x-data, $dispatch is best.
            this.$dispatch('task-complete', { taskId: 1 });
        },

        isPerfectScore() {
            return this.answers.every(a => a.type === 'ideal');
        },

        restartQuiz() {
            this.currentScenarioIndex = 0;
            this.answers = [];
            this.showResults = false;
            this.showFeedback = false;
            this.saveState();
        }
    }));

    /**
     * Planner Store (Task 2)
     */
    Alpine.data('plannerStore', () => ({
        dayType: 'weekday', // 'weekday' | 'weekend'
        grid: new Array(48).fill(null), // 48 blocks of 30 min
        selectedActivityId: null,
        showResults: false,
        isDragging: false,

        init() {
            // Load state if exists
            const saved = localStorage.getItem('bnn_planner_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.dayType = parsed.dayType || 'weekday';
                this.grid = parsed.grid || new Array(48).fill(null);

                // If grid is full and marked done, show results? Maybe not force it here.
            }
        },

        saveState() {
            localStorage.setItem('bnn_planner_state', JSON.stringify({
                dayType: this.dayType,
                grid: this.grid
            }));
        },

        get mandatoryActivities() {
            return ACTIVITIES.filter(a => a.type === 'mandatory');
        },

        get optionalActivities() {
            return ACTIVITIES.filter(a => a.type === 'optional');
        },

        // Check if all mandatory activities are present in the grid
        get mandatoryComplete() {
            const usedIds = new Set(this.grid);
            return this.mandatoryActivities.every(a => usedIds.has(a.id));
        },

        get isGridFull() {
            return this.grid.every(cell => cell !== null);
        },

        get totalScreenTime() {
            // Screen time is 'screen', maybe 'gaming' if added. PRD implies 'screen' items.
            // Looking at ACTIVITIES, only 'screen' seems explicit, but 'gaming' might be 'other'?
            // PRD says: "Pokud čas > 2h". 1 block = 0.5h.
            // Let's count blocks with id 'screen'.
            const blocks = this.grid.filter(id => id === 'screen').length;
            return blocks * 0.5; // Hours
        },

        get statsByActivity() {
            // Aggregate time per activity
            const counts = {};
            this.grid.forEach(id => {
                if (id) counts[id] = (counts[id] || 0) + 0.5;
            });
            return Object.entries(counts)
                .map(([id, hours]) => {
                    const act = ACTIVITIES.find(a => a.id === id);
                    return { ...act, hours, percent: (hours / 24) * 100 };
                })
                .sort((a, b) => b.hours - a.hours);
        },

        setDayType(type) {
            if (confirm('Změna typu dne vymaže aktuální plán. Pokračovat?')) {
                this.dayType = type;
                this.grid = new Array(48).fill(null);
                this.showResults = false;
                this.saveState();
            }
        },

        selectActivity(id) {
            // Prevent selecting optional if mandatory not done
            const activity = ACTIVITIES.find(a => a.id === id);

            if (activity.type === 'optional' && !this.mandatoryComplete) {
                alert('Nejdříve musíš naplánovat všechny povinné aktivity (škola, jídlo, spánek, hygiena)!');
                return;
            }
            this.selectedActivityId = id;
        },

        toggleSlot(index) {
            if (!this.selectedActivityId) return;

            // Simple toggle vs overwrite
            // PRD says "Assign selected activity". 
            // If dragging, we just overwrite.
            this.grid[index] = this.selectedActivityId;
            this.saveState();
        },

        startDrag(index) {
            this.isDragging = true;
            this.toggleSlot(index);
        },

        onDragOver(index) {
            if (this.isDragging) {
                this.toggleSlot(index);
            }
        },

        stopDrag() {
            this.isDragging = false;
        },

        getActivityColor(id) {
            if (!id) return 'bg-white';
            return ACTIVITIES.find(a => a.id === id)?.color || 'bg-gray-200';
        },

        getActivityIcon(id) {
            if (!id) return '';
            return ACTIVITIES.find(a => a.id === id)?.icon || '';
        },

        evaluateDay() {
            if (!this.isGridFull) return;
            this.showResults = true;
            this.$dispatch('task-complete', { taskId: 2 });
        },

        formatTime(index) {
            // Index 0 = 00:00, 1 = 00:30, etc.
            const totalMin = index * 30;
            const h = Math.floor(totalMin / 60);
            const m = totalMin % 60;
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        }
    }));

});
