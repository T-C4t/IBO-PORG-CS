# Update Prompt 1

You are tasked with updating the "Bezpečně na Netu" application.

## 1. UX Improvement: Font Change
- The current font for the **Child Mode** (under 15/14) is reported as unreadable.
- **Action**: Replace the `Fredoka` font with a more readable, yet still friendly sans-serif font (e.g., `Nunito`, `Quicksand`, or `Comic Neue` if appropriate, or simply a cleaner Google Font). Update the HTML import and Tailwind config in `index.html`.

## 2. New Feature: Final Evaluation Screen
- **Goal**: Display a "Report Card" or Final Summary screen after the user completes **BOTH** Task 1 (Quiz) and Task 2 (Planner).
- **Trigger**: The screen should automatically appear or become available once `appStorage.task1Completed` and `appStorage.task2Completed` are both true.
- **Grading Logic (A - F)**:
    - Assess success based on:
        1. **Task 1**: Number of "ideal" answers (0-3).
        2. **Task 2**: Screen time management (e.g., meeting the <= 2h limit).
    - **Grading Scale Propoal**:
        - **A**: All 3 Quiz answers correct + Planner screen time <= 2h.
        - **B**: 2 Quiz answers correct + Planner screen time <= 2h.
        - **C**: 1 Quiz answer correct OR Planner screen time > 2h.
        - **D/F**: Poor results in both.
    - Calculate this grade dynamically.
- **UI**:
    - A new view (e.g., `final-results`).
    - Display the Grade (A, B, C, D, F) prominently.
    - Show a brief summary message.
    - Provide a "Restart" button.

## Implementation Steps
1. Modify `index.html` to change the Child Mode font.
2. Update `js/app.js` to:
    - Add logic to check for overall completion.
    - Implement `calculateFinalGrade()` function.
    - Add the new `final-results` view state.
3. Update `index.html` to include the **Final Results View** markup (styled according to the current theme).
