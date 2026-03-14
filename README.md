# Bezpečně na Netu

Interaktivní vzdělávací webová aplikace pro výuku bezpečného chování na internetu. Aplikace je určena pro workshopy v knihovnách a školách.

## 📋 Popis projektu

**Bezpečně na Netu** je interaktivní webová aplikace, která učí děti a dospívající bezpečnému chování na internetu. Aplikace se přizpůsobuje věku uživatele a nabízí dvě hlavní aktivity:

- **Úkol 1: Reakce na situace** – Scénářové kvízy zaměřené na správné reakce v rizikových situacích na sociálních sítích (kyberšikana, cizí lidé online, ochrana hesel)
- **Úkol 2: Můj Den** – Nástroj pro plánování dne a analýzu času stráveného u obrazovek

## 🎯 Cílová skupina

| Věková skupina | Režim aplikace |
|----------------|----------------|
| 11–14 let | Dětský režim (hravý, barevný, s emoji) |
| 15+ let | Dospělý režim (profesionálnější design) |

## 🚀 Funkce

### Age Gate (Věková brána)
- Na začátku aplikace uživatel vybere, zda je mladší 14 let
- Podle výběru se změní vizuální styl celé aplikace

### Hlavní menu
- Přehled dvou úkolů s indikací dokončení
- Možnost resetovat aplikaci a začít znovu

### Úkol 1: Kvízové scénáře
- 3 interaktivní scénáře rizikových situací
- Okamžitá zpětná vazba po každé odpovědi
- Souhrn výsledků na konci

### Úkol 2: Plánovač dne
- 48 bloků representujících 24 hodin (1 blok = 30 minut)
- Povinné aktivity: Spánek, Jídlo, Škola/Práce, Hygiena
- Volitelné aktivity: Pohyb, Tvoření, Čtení, Obrazovky a další
- Real-time statistika času u obrazovek
- Vyhodnocení s doporučeními

## 🛠️ Technologie

- **HTML5** – Semantická struktura
- **Tailwind CSS** – Stylování (via CDN)
- **Alpine.js** – Interaktivita a správa stavu (via CDN)
- **Google Fonts** – Fredoka (dětský režim), Inter (dospělý režim)

## 📁 Struktura projektu

```
IBO-PORG-CS/
├── src/
│   ├── index.html       # Hlavní HTML soubor aplikace
│   ├── js/
│   │   └── app.js       # Logika aplikace (volitelné)
│   └── assets/          # Statické assety
├── docs/
│   ├── PRD.md           # Product Requirements Document
│   └── stav_aplikace.md # Aktuální stav aplikace
└── archive/
    ├── dev-prompts/     # Interní vývojové prompty
    └── old-deliverables/ # Starší verze dokumentů
```

## 💻 Spuštění aplikace

### Varianta 1: Přímé otevření
Otevřete soubor `src/index.html` v libovolném moderním prohlížeči.

### Varianta 2: Lokální vývojový server
```bash
cd src
python -m http.server 8000
# nebo
npx serve .
```
Poté otevřete http://localhost:8000 v prohlížeči.

## 🔧 Vývoj

Aplikace nevyžaduje žádnou instalaci závislostí. Stačí:
1. Klonovat repository
2. Otevřít `src/index.html` v prohlížeči
3. Pro úpravy použít libovolný textový editor

## 📝 Obsah dat

Scénáře a aktivity jsou definovány přímo v kódu v `src/index.html`. Pro úpravu obsahu:
- Vyhledejte sekci `x-data` v HTML souboru
- Upravte pole `scenarios` pro Úkol 1
- Upvelte pole `activities` pro Úkol 2

## 🔒 Soukromí a GDPR

- Aplikace **neukládá** žádné osobní údaje uživatelů
- Data se ukládají pouze lokálně v prohlížeči (localStorage)
- Není nutná registrace ani přihlášení
- Aplikace je plně GDPR compliant

## 📞 Kontakt

Pro více informací kontaktujte tým projektu nebo navštivte webové stránky Vědecké knihovny Ostrava.

---

*Vytvořeno jako vzdělávací nástroj pro knihovny a školy.*
