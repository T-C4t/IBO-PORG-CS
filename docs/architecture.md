# Technická Architektura

## 1. Přehled
Aplikace "Bezpečně na Netu" je navržena jako jednoduchá, lehká klientská webová aplikace (Client-side only). Nevyžaduje backend server pro svou funkčnost, což usnadňuje nasazení a údržbu.

## 2. Technický Stack

### Core
*   **HTML5:** Sémantická struktura stránek.
*   **JavaScript (ES6+):** Aplikační logika.
*   **CSS3:** Stylování.

### Knihovny a Frameworky
*   **Alpine.js:** Lehký JavaScript framework pro reaktivitu a správu stavu (State Management). Načítán přes CDN.
*   **Tailwind CSS:** Utility-first CSS framework pro rychlý a konsistentní design. Načítán přes CDN.

### Data
*   **Lokální úložiště:** Progress uživatele se ukládá do `localStorage` prohlížeče. To zajišťuje, že data přežijí refresh stránky, ale nejsou odesílána na žádný server.
*   **Žádná databáze:** Aplikace nepoužívá externí databázi. Všechna vzdělávací data (scénáře, aktivity) jsou uložena přímo v kódu (`src/js/data.js`).

## 3. Struktura souborů

```
/
├── index.html          # Hlavní vstupní bod aplikace
├── src/
│   ├── js/
│   │   ├── app.js      # Hlavní aplikační logika (Alpine.js komponenty)
│   │   └── data.js     # Definice scénářů a aktivit (Data Layer)
│   └── css/            # (Volitelné) Vlastní CSS styly
├── docs/               # Dokumentace projektu
└── archive/            # Starší verze dokumentace a podklady
```

## 4. Klíčové komponenty

### Data Layer (`data.js`)
Obsahuje konstanty `SCENARIOS` (pole objektů pro kvíz) a `ACTIVITIES` (pole objektů pro plánovač). Tento soubor slouží jako "databáze" a je oddělen od logiky pro snadnější úpravy obsahu.

### Logic Layer (`app.js`)
Obsahuje logiku v Alpine.js:
*   `game()`: Hlavní komponenta řídící stav aplikace.
*   **State:** Uchovává aktuální obrazovku (`screen`), věk uživatele (`isChild`), progress v kvízu a data plánovače.
*   **Methods:** Funkce pro přepínání obrazovek, vyhodnocování odpovědí a výpočet statistik.

## 5. Nasazení (Deployment)
Aplikace je "static site". Může být hostována na jakémkoli webovém serveru (Apache, Nginx) nebo službách jako GitHub Pages, Netlify či Vercel. Stačí naservírovat složku projektu.
