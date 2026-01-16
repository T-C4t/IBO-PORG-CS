# Cursor Agent Prompt: Bezpečně na Netu

You are an expert web developer tasked with building "Bezpečně na Netu" (Safely on the Net), an interactive educational web application for library workshops.
This application teaches children and teenagers about online safety through scenarios and screen time planning.

**Constraint:** You must follow the **Product Requirements Document (PRD)** provided in the context strictly.

## 1. Project Context & Goals
- **Purpose:** Teach online safety (cyberbullying, privacy) and healthy screen time habits.
- **Target Audience:**
  - **Children (11-14)**: Requires playful, colorful design, simple language, emojis.
  - **Teens (15+)**: Requires professional, cleaner design, mature tone.
- **Key Feature**: **Age Gate** at start determines the entire visual theme ("Child Mode" vs "Adult Mode") and tone.
- **Persistence**: No backend. Use `localStorage` to save state during the session (optional, but good for stability), but the app is designed for one-time workshop use with a "Reset" button.

## 2. Technology Stack
- **HTML5**: Semantic structure.
- **Tailwind CSS (via CDN)**: For all styling. Use utility classes for layout, typography, and theming.
- **Alpine.js (via CDN)**: For reactive state management, business logic, and interactions.
- **Google Fonts**: `Fredoka` (Child mode), `Inter` (Adult mode).
- **Icons**: Use emojis 🌟 or SVG icons if necessary.

## 3. Architecture Layers

Divide your thinking and code into these three distinct layers:

### A. Data Layer (The "Model")
Define the static content and data structures clearly.
1.  **Scenarios Data** (Array of Objects):
    *   `id`: unique ID.
    *   `title`: e.g., "Kyberšikana".
    *   `description`: The situation text.
    *   `options`: Array of 3 choices. Each choice has `text`, `type` ('ideal', 'ok', 'bad'), and `feedback` (explanation text).
2.  **Activities Data** (Array of Objects):
    *   `id`: e.g., 'sleep', 'school'.
    *   `name`: Label.
    *   `type`: 'mandatory' or 'optional'.
    *   `color`: Hex code or Tailwind class for the block.
    *   `icon`: Emoji.

### B. Business Logic Layer (The "ViewModel")
Use Alpine.js `x-data` to manage the application state.
1.  **Global Store (`app` state)**:
    *   `currentView`: 'age-gate', 'menu', 'task-1', 'task-2', 'results'.
    *   `ageMode`: 'child' (<14) or 'adult' (15+).
    *   `ageGate(isChild)`: Function to set mode and route to menu.
    *   `resetApp()`: Function to clear all state and go back to 'age-gate'.
2.  **Quiz Store (`task-1` state)**:
    *   `currentScenarioIndex`: Integer.
    *   `answers`: Array of user choices.
    *   `showFeedback`: Boolean modal state.
    *   `selectAnswer(option)`: Logic to save answer and show feedback.
    *   `nextScenario()`: Logic to advance or finish.
    *   `getResults()`: Logic to calculate score/summary.
3.  **Planner Store (`task-2` state)**:
    *   `dayType`: 'weekday' or 'weekend'.
    *   `grid`: Array of 48 items (null or activity ID).
    *   `selectedActivityId`: ID currently being placed.
    *   `usedMandatory`: Track which mandatory activities are used.
    *   `stats`: Computed property for total screen time vs recommended limit (2h).
    *   `validateAndFinish()`: Check if grid is full and mandatory items used.

### C. Presentation Layer (The "View")
Implement the UI using HTML and Tailwind, bound to the Logic Layer.
1.  **Theming Strategy**:
    *   Use a wrapper `div` or `body` class to toggle themes.
    *   **Child Mode**: Font `Fredoka`, colors #FFD23F/ #EE4266, rounded-3xl, bounce animations.
    *   **Adult Mode**: Font `Inter`, colors Slate/Blue, rounded-lg, minimal animations.
    *   *Tip*: Use Alpine's `:class` to switch generic color classes based on `ageMode`.
2.  **Components**:
    *   **Age Gate**: Simple split screen or modal.
    *   **Menu**: 2 large cards for tasks.
    *   **Task 1 (Quiz)**: Card with question, 3 distinct option buttons, Feedback Modal (overlay).
    *   **Task 2 (Planner)**:
        *   **Palette**: Sidebar/Top bar with activity buttons (draggable or click-to-select).
        *   **Grid**: 12 cols x 4 rows CSS Grid. Each cell represents 30 min.
        *   **Stats Bar**: Sticky or prominent display of current "Screen Time".
3.  **Responsive**: Must work on Tablet and Desktop. Grid should adapt (stack on mobile, full grid on generic screens).

## 4. Implementation Steps

Follow these steps to build the project. Generate the code for a single `index.html` file (containing CSS/JS for simplicity, or split if preferred, but keep it easy to run).

1.  **Step 1: Scaffolding**: Setup HTML5 boilerplate, import Tailwind & Alpine.js CDNs. Define the basic `x-data="app()"` structure.
2.  **Step 2: Data & State**: Implement the `scenarios` and `activities` data consts and the Alpine reactive stores (`app`, `quiz`, `planner`).
3.  **Step 3: UI - Age Gate & Menu**: Build the view to switch modes. Verify fonts and colors change based on selection.
4.  **Step 4: UI - Task 1 (Quiz)**: specific implementation of the scenario flow + feedback modal.
5.  **Step 5: UI - Task 2 (Planner)**: specific implementation of the 48-block grid, activity selection, and generic validation logic.
6.  **Step 6: Review & Refine**: Ensure "Reset" works, check responsiveness, and verify all specific PRD constraints (e.g., Mandatory activities check).

**Tone for Generated Content**:
- Ensure the code comments explain the "Why" connecting back to the PRD (e.g., "Using 48 blocks because PRD specifies 30min intervals").
