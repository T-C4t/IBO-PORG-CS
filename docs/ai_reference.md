# AI Agent Reference Guide

Technical "Cheat Sheet" for AI agents working on the **Bezpečně na Netu** project.

## 🧭 Core Components

| Logic Item | Location | Responsibility |
| :--- | :--- | :--- |
| **Global Store** | `Alpine.data('app', ...)` | Age gate, routing, profile calculation, high-level feedback. |
| **Quiz Store** | `Alpine.data('quizStore', ...)` | Shuffling, answer selection, local quiz progression. |
| **Planner Store** | `Alpine.data('plannerStore', ...)` | Drag & drop grid logic, time formatting, screen time calculation. |
| **Data Layer** | `src/js/data.js` | Source of truth for scenarios and activities. |

## 💾 State Schema (`localStorage`)

### `bnn_quiz_state`
```json
{
  "activeScenarios": [], // Array of scenario objects (shuffled)
  "currentScenarioIndex": 0,
  "answers": [] // Array of selected option objects
}
```

### `bnn_planner_state`
```json
{
  "grid": [] // Array(48) of activity IDs or null
}
```

## 📈 Scoring Algorithm (Quick Reference)

Executed in `app.js -> calculateProfile()`:

1.  **Initialize:** `safety=50`, `empathy=50`, `wellbeing=50`.
2.  **Quiz Impact:** Apply points based on `option.type` (`ideal:+15`, `ok:+5`, `bad:-10`) to the scenario's `category`.
3.  **Planner Impact (Wellbeing):**
    *   `passive_screen > 4 slots (2h)`: `-5` per extra slot.
    *   `active_screen (1-5 slots)`: `+10` bonus.
    *   `screen_before_sleep`: `-15` penalty.
4.  **Clamping:** All scores `Math.max(0, Math.min(100, score))`.

## 🎨 UI & Themes

| Variable | `child` (11-14) | `teen` (15+) |
| :--- | :--- | :--- |
| **CSS Class** | `.paper-bg` | `.teen-light-bg` |
| **Font** | `Caveat` | `Inter` |
| **Primary Color** | `#E8722A` (Orange) | `#BFFF00` (Lime) |
| **Grid Boundary** | Rounded (12px) | Sharp (0px) |

## 🛠️ Debugging Shortcuts

Expose debug menu by **double-clicking** the "Vítej v kurzu" title on the main menu.
*   `debugFinishM1()`: Completes 5 scenarios instantly.
*   `debugFinishM2()`: Fills planner with sleep blocks.
*   `debugShowReport()`: Forces transition to results page.
