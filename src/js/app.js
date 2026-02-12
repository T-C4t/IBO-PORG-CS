// Application Logic (Alpine.js) - Educational Edition

document.addEventListener('alpine:init', () => {

    /**
     * Global App Store
     * Manages 'Modules' and overall progression.
     */
    Alpine.data('app', () => ({
        currentView: 'menu',

        // Competency Profile (0-100 scale per category)
        profile: {
            safety: 0,
            empathy: 0,
            wellbeing: 0
        },

        // Detailed feedback strings
        feedback: {
            safety: '',
            empathy: '',
            wellbeing: '',
            planner: '', // NEW: Specific feedback for Task 2
            mistakes: [], // NEW: Array of objects { question, answer, feedback, type }
            tips: []
        },

        // Progress Tracking
        appStorage: {
            module1Completed: false,
            module2Completed: false
        },

        init() {
            const savedState = localStorage.getItem('bnn_app_state');
            if (savedState) {
                const parsed = JSON.parse(savedState);
                this.appStorage = parsed.appStorage || this.appStorage;

                if (this.appStorage.module1Completed && this.appStorage.module2Completed) {
                    this.calculateProfile();
                }
            }
        },

        saveState() {
            localStorage.setItem('bnn_app_state', JSON.stringify({
                appStorage: this.appStorage
            }));
        },

        setView(view) {
            this.currentView = view;
        },

        resetApp() {
            if (confirm('Opravdu resetovat celý postup?')) {
                localStorage.clear();
                location.reload();
            }
        },

        completeModule(moduleId) {
            if (moduleId === 1) this.appStorage.module1Completed = true;
            if (moduleId === 2) this.appStorage.module2Completed = true;

            this.saveState();

            if (this.appStorage.module1Completed && this.appStorage.module2Completed) {
                this.calculateProfile();
            }
        },

        /**
         * Core Logic: Competency Calculation
         */
        calculateProfile() {
            // --- Analysis 1: Quiz ---
            const quizState = JSON.parse(localStorage.getItem('bnn_quiz_state') || '{}');
            const answers = quizState.answers || [];
            const activeScenarios = quizState.activeScenarios || [];

            let safetyScore = 50;
            let empathyScore = 50;
            let wellbeingScore = 50;

            let mistakes = [];
            let tips = [];

            answers.forEach((ans, index) => {
                if (!ans) return;

                // Find the question title either from saved scenario or by index if robust
                const questionTitle = activeScenarios[index] ? activeScenarios[index].title : "Otázka " + (index + 1);

                let points = 0;
                if (ans.type === 'ideal') {
                    points = 15;
                } else {
                    // Collect Feedback for OK/BAD answers
                    mistakes.push({
                        question: questionTitle,
                        answer: ans.text,
                        feedback: ans.feedback,
                        type: ans.type
                    });

                    // Removed: if (ans.feedback) tips.push(ans.feedback);
                    // To prevent duplication in final report.

                    if (ans.type === 'ok') points = 5;
                    else if (ans.type === 'bad') points = -10;
                }

                if (ans.category === 'safety') safetyScore += points;
                if (ans.category === 'empathy') empathyScore += points;
                if (ans.category === 'wellbeing') wellbeingScore += points;
            });

            // --- Analysis 2: Day Audit ---
            const plannerState = JSON.parse(localStorage.getItem('bnn_planner_state') || '{}');
            const grid = plannerState.grid || [];

            const passiveBlocks = grid.filter(id => id === 'screen_passive').length;
            const activeBlocks = grid.filter(id => id === 'screen_active').length;

            let plannerFeedback = [];

            if (passiveBlocks > 4) {
                wellbeingScore -= (passiveBlocks - 4) * 5;
                const hours = passiveBlocks * 0.5;
                plannerFeedback.push(`⚠️ Trávíš ${hours}h pasivním scrollováním (doportučeno max 2h).`);
                tips.push("Omez pasivní scrollování a nastav si limity aplikací.");
            } else {
                const hours = passiveBlocks * 0.5;
                plannerFeedback.push(`✅ Tvůj čas na sítích (${hours}h) je v normě.`);
            }

            if (activeBlocks > 0 && activeBlocks < 6) {
                wellbeingScore += 10;
                plannerFeedback.push(`🎨 Skvělé! Využíváš technologie i aktivně.`);
            }

            const firstSleepIndex = grid.indexOf('sleep');
            if (firstSleepIndex > 0) {
                const preSleepActivity = grid[firstSleepIndex - 1];
                if (preSleepActivity === 'screen_passive' || preSleepActivity === 'screen_active') {
                    wellbeingScore -= 15;
                    plannerFeedback.push("⚠️ Pozor: Obrazovka těsně před spaním narušuje spánek.");
                    tips.push("Hodinu před spaním odlož telefon, zlepšíš si kvalitu spánku.");
                } else {
                    plannerFeedback.push("✅ Chválíme: Před spaním si dáváš pauzu od displeje.");
                }
            }

            this.profile.safety = Math.max(0, Math.min(100, safetyScore));
            this.profile.empathy = Math.max(0, Math.min(100, empathyScore));
            this.profile.wellbeing = Math.max(0, Math.min(100, wellbeingScore));

            this.feedback.mistakes = mistakes;
            this.feedback.tips = [...new Set(tips)];
            this.feedback.planner = plannerFeedback.join(" "); // New visual feedback string for planner

            this.generateFeedback();

            localStorage.setItem('bnn_profile', JSON.stringify(this.profile));
        },

        generateFeedback() {
            if (this.profile.safety > 80) this.feedback.safety = "Výborné! Jsi digitální ninja, tvá hesla a data jsou v bezpečí.";
            else if (this.profile.safety > 50) this.feedback.safety = "Standardní. Znáš základy, ale pozor na sofistikované podvody (phishing).";
            else this.feedback.safety = "Rizikové. Doporučujeme okamžitě změnit hesla a nastavit dvoufázové ověření.";

            if (this.profile.empathy > 80) this.feedback.empathy = "Máš skvělou emoční inteligenci. Pomáháš tvořit bezpečnější internet.";
            else if (this.profile.empathy > 50) this.feedback.empathy = "Většinou reaguješ správně, ale nenech se strhnout davem k negativitě.";
            else this.feedback.empathy = "Pozor na toxicitu. I online slova mohou ublížit skutečným lidem.";

            let baseWellbeing = "";
            if (this.profile.wellbeing > 80) baseWellbeing = "Máš to pod kontrolou! Technologie ti slouží, ne naopak.";
            else if (this.profile.wellbeing > 50) baseWellbeing = "Tvůj digitální balanc je průměrný. Zkus více offline aktivit.";
            else baseWellbeing = "Varování: Technologie ti berou příliš mnoho času.";

            this.feedback.wellbeing = baseWellbeing;
        }

    }));

    /**
     * Module 1 Store (Quiz/Analysis) with Randomization
     */
    Alpine.data('quizStore', () => ({
        activeScenarios: [], // Shuffled copy
        currentScenarioIndex: 0,
        showFeedback: false,
        showResults: false,
        currentFeedbackBlock: null,
        answers: [],

        init() {
            const saved = localStorage.getItem('bnn_quiz_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.activeScenarios = parsed.activeScenarios || [];
                this.currentScenarioIndex = parsed.currentScenarioIndex;
                this.answers = parsed.answers || [];

                // Consistency check
                if (this.activeScenarios.length === 0) this.startNewQuiz();

                if (this.currentScenarioIndex >= this.activeScenarios.length && this.activeScenarios.length > 0) {
                    this.showResults = true;
                }
            } else {
                this.startNewQuiz();
            }
        },

        startNewQuiz() {
            // 1. Shuffle Scenarios
            let scenarios = JSON.parse(JSON.stringify(SCENARIOS)); // Deep copy
            this.shuffleArray(scenarios);

            // 2. Shuffle Options within Scenarios
            scenarios.forEach(s => this.shuffleArray(s.options));

            this.activeScenarios = scenarios;
            this.currentScenarioIndex = 0;
            this.answers = [];
            this.showResults = false;
            this.saveState();
        },

        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        },

        get scenario() {
            return this.activeScenarios[this.currentScenarioIndex];
        },

        get progressPercentage() {
            if (!this.activeScenarios.length) return 0;
            return (this.currentScenarioIndex / this.activeScenarios.length) * 100;
        },

        selectAnswer(option) {
            this.currentFeedbackBlock = option;
            this.showFeedback = true;

            // Save answer WITH category context for the global calculator
            const currentScenario = this.activeScenarios[this.currentScenarioIndex];

            this.answers[this.currentScenarioIndex] = {
                ...option, // text, type, feedback
                scenarioId: currentScenario.id,
                category: currentScenario.category
            };

            this.saveState();
        },

        nextScenario() {
            this.showFeedback = false;
            this.currentScenarioIndex++;
            this.saveState();

            if (this.currentScenarioIndex >= this.activeScenarios.length) {
                this.finishModule();
            }
        },

        saveState() {
            localStorage.setItem('bnn_quiz_state', JSON.stringify({
                activeScenarios: this.activeScenarios, // Save order
                currentScenarioIndex: this.currentScenarioIndex,
                answers: this.answers
            }));
        },

        finishModule() {
            this.showResults = true;
            this.$dispatch('module-complete', { moduleId: 1 });
        },

        restartModule() { // Renamed from restartQuiz to be consistent if called
            this.startNewQuiz();
        }
    }));

    /**
     * Module 2 Store (Planner/Audit)
     */
    Alpine.data('plannerStore', () => ({
        grid: new Array(48).fill(null),
        selectedActivityId: null,
        showResults: false,
        isDragging: false,

        init() {
            const saved = localStorage.getItem('bnn_planner_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.grid = parsed.grid || new Array(48).fill(null);
            }
        },

        saveState() {
            localStorage.setItem('bnn_planner_state', JSON.stringify({
                grid: this.grid
            }));
        },

        // Helper Getters
        get mandatoryActivities() { return ACTIVITIES.filter(a => a.type === 'mandatory'); },
        get optionalActivities() { return ACTIVITIES.filter(a => a.type === 'optional'); },

        get mandatoryComplete() {
            const usedIds = new Set(this.grid);
            return this.mandatoryActivities.every(a => usedIds.has(a.id));
        },

        get isGridFull() {
            return this.grid.every(cell => cell !== null);
        },

        get totalPassiveScreenTime() {
            return this.grid.filter(id => id === 'screen_passive').length * 0.5;
        },

        selectActivity(id) {
            const activity = ACTIVITIES.find(a => a.id === id);
            // Allow optional only if mandatory done? user didn't complain, keeping logic.
            if (activity.type === 'optional' && !this.mandatoryComplete) {
                alert('Nejdříve vyplň základní věci (Spánek, Škola, Jídlo).');
                return;
            }
            this.selectedActivityId = id;
        },

        toggleSlot(index) {
            if (!this.selectedActivityId) return;
            this.grid[index] = this.selectedActivityId;
            this.saveState();
        },

        // Drag logic
        startDrag(index) { this.isDragging = true; this.toggleSlot(index); },
        onDragOver(index) { if (this.isDragging) this.toggleSlot(index); },
        stopDrag() { this.isDragging = false; },

        getActivityColor(id) {
            return ACTIVITIES.find(a => a.id === id)?.color || 'bg-white';
        },
        getActivityIcon(id) {
            return ACTIVITIES.find(a => a.id === id)?.icon || '';
        },

        formatTime(index) {
            const totalMin = index * 30;
            const h = Math.floor(totalMin / 60);
            const m = totalMin % 60;
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        },

        evaluateDay() {
            if (!this.isGridFull) return;
            this.showResults = true;
            this.$dispatch('module-complete', { moduleId: 2 });
        }
    }));
});
