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

                // Recalculate grade if tasks are done
                if (this.appStorage.task1Completed && this.appStorage.task2Completed) {
                    this.calculateGrade();
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

            // Calculate grade if both done
            if (this.appStorage.task1Completed && this.appStorage.task2Completed) {
                this.calculateGrade();
            }

            this.saveState();

            // Check if both are done
            if (this.appStorage.task1Completed && this.appStorage.task2Completed) {
                // Determine if we should show final results immediately or waiting for user
                // For now, let's just make the view available or show a notification?
                // PRD/Prompt implies automatic transition or availability. 
                // Let's auto-transition if they are on a task view, or wait if menu.
                // Actually prompt says "automatically appear or become available".
                // Safest UX: Show a "Final Evaluation Ready" button in Menu, or redirect.
                // Let's add a check in Menu view to show the "Final Result" button.
            }
        },

        grade: null,

        calculateGrade() {
            // Calculate grade (0-5 points)
            // 1. Quiz Score: Count 'ideal' answers
            const quizState = JSON.parse(localStorage.getItem('bnn_quiz_state') || '{}');
            const answers = quizState.answers || [];
            const quizScore = answers.filter(a => a && a.type === 'ideal').length; // Max 3

            // 2. Planner Score: <= 2h = 2 pts, > 2h = 0 pts
            const plannerState = JSON.parse(localStorage.getItem('bnn_planner_state') || '{}');
            const grid = plannerState.grid || [];
            const screenBlocks = grid.filter(id => id === 'screen').length;
            const hours = screenBlocks * 0.5;
            const plannerScore = hours <= 2 ? 2 : 0; // Max 2

            const totalScore = quizScore + plannerScore; // Max 5

            if (totalScore >= 5) this.grade = 'A';
            else if (totalScore === 4) this.grade = 'B';
            else if (totalScore === 3) this.grade = 'C';
            else if (totalScore === 2) this.grade = 'D';
            else this.grade = 'F';
        },

        get finalFeedback() {
            const grade = this.grade;
            if (grade === 'A') return 'Fantastické! Jsi skutečný digitální mistr. 🏆';
            if (grade === 'B') return 'Skvělá práce! Rozumíš tomu, jen malý kousek chyběl k dokonalosti.';
            if (grade === 'C') return 'Dobrá práce, ale je tu prostor pro zlepšení. Zkus se zamyslet nad svým časem nebo reakcemi.';
            if (grade === 'D') return 'Pozor! V online světě bys měl být opatrnější a hlídat si čas.';
            return 'Fíha! Tohle se nepovedlo. Zkus si kurz projít znovu a naučit se víc o bezpečí.';
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
