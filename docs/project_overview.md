# Projekt "Bezpečně na Netu" - Přehled

## 1. O projektu

**Bezpečně na Netu** je interaktivní vzdělávací webová aplikace určená pro workshopy v knihovnách (primárně pro Vědeckou knihovnu Ostrava / MSVK). Aplikace učí děti a dospívající bezpečnému chování na internetu zábavnou a interaktivní formou.

### Cíle projektu
*   **Vzdělávání:** Naučit děti rozpoznat a řešit rizikové situace online (kyberšikana, predátoři, fake news).
*   **Reflexe:** Umožnit uživatelům analyzovat svůj čas strávený u obrazovek a jeho dopad na ostatní životní aktivity.
*   **Interaktivita:** Udržet pozornost účastníků workshopu pomocí gamifikace a okamžité zpětné vazby.

### Cílová skupina
*   **Děti (11-14 let):** Speciální "dětský" vizuální režim (`userAgeGroup === 'child'`).
*   **Dospívající (15+):** Seriózní "dospělý" režim (`userAgeGroup === 'teen'`).

## 2. Funkcionalita aplikace

Aplikace je SPA (Single Page Application) postavená na **Alpine.js**.

### Modul 1: Reakce na situace (Kvíz)
*   **Účel:** Simulace rizikových scénářů.
*   **Kód:** Implementováno v `Alpine.data('quizStore', ...)` v `src/js/app.js`.
*   **Data:** Scénáře definovány v `SCENARIOS` v `src/js/data.js`.
*   **Logika:** 12 náhodně řazených scénářů, 3-6 možností s typy `ideal`, `ok`, `bad`.

### Modul 2: Můj Den (Plánovač)
*   **Účel:** Audit denního režimu a screen time.
*   **Kód:** Implementováno v `Alpine.data('plannerStore', ...)` v `src/js/app.js`.
*   **Data:** Aktivity definovány v `ACTIVITIES` v `src/js/data.js`.
*   **Logika:** 48 slotů (po 30 min), výpočet `totalPassiveScreenTime`.

### Finální Report (Kompetenční Profil)
*   **Účel:** Souhrnná analýza (Radar Chart).
*   **Logika:** Metoda `calculateProfile()` v `src/js/app.js`.
*   **Kategorie:** Bezpečnost (Safety), Empatie (Empathy), Wellbeing.

## 3. Technické Specifikace
*   **Frontend:** HTML5, Tailwind CSS, Alpine.js, Chart.js.
*   **State Management:** `localStorage` (klíče `bnn_app_state`, `bnn_quiz_state`, `bnn_planner_state`).
*   **Bezpečnost:** Žádný backend, veškerá data zůstávají v prohlížeči.

## 4. Stav projektu
Aplikace je ve verzi **1.1**.

### Novinky v aktuální verzi
*   **Podrobná analýza chyb:** Report nyní obsahuje "Optimální řešení" pro chybně zodpovězené otázky.
*   **Barevné kódování:** Kategorie v kvízu jsou vizuálně odlišeny barvami (Child vs Teen schémata).
*   **Refaktorovaný Scoring:** Přesnější výpočet kompetencí na základě typu odpovědi a pasivního screen timu.

## 5. Historie změn
*   **2024:** Vytvoření detailního PRD a specifikací.
*   **Q4 2024:** Vývoj prototypu (v1.0).
*   **Q1 2026:** Implementace pokročilé analýzy, vizuálních témat a optimalizace pro AI (v1.1).
