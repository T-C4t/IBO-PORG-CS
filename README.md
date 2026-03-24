# Bezpečně na Netu

Webová aplikace pro výuku bezpečného chování na internetu, určená pro workshopy v knihovnách a školách.

## Co to je

Aplikace učí děti a dospívající, jak se chovat na internetu. Má dvě části:

- **Reakce na situace** – scénářové kvízy o kyberšikaně, cizích lidech online a ochraně hesel
- **Můj Den** – plánovač dne s analýzou času u obrazovek

Podle věku uživatele se mění vzhled: děti (11–14) vidí hravý barevný design, dospívající (15+) dostanou střízlivější verzi.

## Jak to funguje

Uživatel projde oběma úkoly. V prvním reaguje na scénáře – po každé odpovědi dostane okamžitou zpětnou vazbu. Ve druhém vyplňuje časovou mřížku dne (48 bloků po 30 minutách), kde přiřazuje aktivity jako spánek, škola nebo obrazovky. Systém dopočítá čas u obrazovek a vyhodnotí, jestli uživatel překročil doporučený limit (2 hodiny pro mladší 14 let).

## Technologie

Nic se neinstaluje. Běží to na CDN závislostech:

- Tailwind CSS
- Alpine.js
- Google Fonts (Nunito pro děti, Inter pro dospělé)
- Lucide Icons

Potřebuje internetové připojení.

## Struktura

```
src/
├── index.html       # Hlavní soubor – veškeré UI a logika
├── js/
│   ├── app.js       # Stav aplikace, výpočty
│   └── data.js      # Scénáře a aktivity (data pro kvíz a plánovač)
└── assets/
    └── logo.jpg
```

Pro změnu obsahu se upravuje `js/data.js` (pole `SCENARIOS` a `ACTIVITIES`). Pro změnu vzhledu `index.html` (Tailwind třídy). Pro změnu chování `app.js`.

## Spuštění

Otevřít `src/index.html` v prohlížeči. Hotovo.

Pro lokální server:
```bash
cd src && python -m http.server 8000
```

## Soukromí

Neukládá žádná osobní data. Všechno jde do localStorage v prohlížeči, nikam se nic neposílá. Není potřeba registrace ani přihlášení.

---

*Pro Vědeckou knihovnu Ostrava.*
