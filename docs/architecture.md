# Technická Architektura

## 1. Přehled
Aplikace "Bezpečně na Netu" je lehká klientská webová aplikace (Client-side only). Veškerá logika a data jsou zpracovávána v prohlížeči uživatele.

## 2. Technický Stack
*   **Framework:** Alpine.js (State Management & Reaktivita).
*   **Styling:** Tailwind CSS (Utility classes).
*   **Grafy:** Chart.js (Radar Chart pro kompetenční profil).
*   **Ikony:** Lucide Icons.

## 3. State Management (Persistence)
Aplikace využívá `localStorage` pro uchování stavu mezi jednotlivými moduly.

| Klíč v localStorage | Obsah |
| :--- | :--- |
| `bnn_age_group` | Vybraná věková skupina (`child` nebo `teen`). |
| `bnn_app_state` | Celkový progres (`module1Completed`, `module2Completed`). |
| `bnn_quiz_state` | Aktuální index otázky, zamíchané pořadí a vybrané odpovědi. |
| `bnn_planner_state` | Mřížka 48 aktivit denního plánovače. |
| `bnn_profile` | Vypočítané skóre kompetencí (Safety, Empathy, Wellbeing). |

## 4. Datové Struktury (`src/js/data.js`)

### Scénáře (`SCENARIOS`)
Pole objektů s následující strukturou:
```javascript
{
    id: string,
    category: 'safety' | 'empathy' | 'wellbeing',
    title: string,
    description: string,
    options: Array<{
        text: string,
        type: 'ideal' | 'ok' | 'bad',
        feedback: string
    }>
}
```

### Aktivity (`ACTIVITIES`)
Pole aktivit pro plánovač:
```javascript
{
    id: string,
    name: string,
    type: 'mandatory' | 'optional',
    icon: string,
    color: string (Tailwind classes)
}
```

## 5. Scoring Logic (`calculateProfile`)
Výpočet probíhá v `src/js/app.js` po dokončení obou modulů.

*   **Základní skóre:** 50 bodů v každé kategorii.
*   **Kvíz:**
    *   `ideal` = +15 bodů
    *   `ok` = +5 bodů
    *   `bad` = -10 bodů
*   **Plánovač:**
    *   Pasivní screen time > 2h (4 bloky) = Srážka Wellbeingu (-5 bodů za každých 30 min navíc).
    *   Aktivní screen time = Bonus k Wellbeing (+10 bodů).
    *   Obrazovka před spaním = Výrazná srážka Wellbeing (-15 bodů).

## 6. Barevná Schémata
Dynamicky přepínána v `index.html` na základě `userAgeGroup`:
*   **Child:** Oranžová/Tyrkysová (`paper-bg`), hravá typografie (`Caveat`).
*   **Teen:** Černá/Neonově zelená (`teen-light-bg`), minimalistický high-tech design.
