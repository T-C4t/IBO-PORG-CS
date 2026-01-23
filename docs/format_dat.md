# Formát dat pro aplikaci "Bezpečně na Netu"

Tento dokument popisuje strukturu dat, kterou aplikace využívá pro scénáře (Kvíz) a aktivity (Plánovač). Pro dodání nového obsahu nebo úpravu stávajícího prosím dodržujte níže uvedenou strukturu. Data nám stačí dodat ve Wordu, Excelu nebo v textovém souboru, my je následně převedeme do kódu.

---

## 1. Scénáře (Úkol 1 - Reakce na situace)

Každý scénář představuje jednu rizikovou situaci, kterou uživatel řeší. Pro každý nový scénář potřebujeme následující informace:

### Struktura scénáře:
1.  **Název (Title):** Krátký, úderný název situace (např. "Kyberšikana").
2.  **Popis situace (Description):** Text popisující děj, do kterého se uživatel má vžít (max 2-3 věty).
3.  **Možnosti odpovědí (Options):** Vždy přesně 3 možnosti řešení.

### Struktura odpovědí:
Ke každé situaci musíte vymyslet **3 varianty řešení**, které se liší svou správností:
*   **Ideální řešení (Ideal):** To nejlepší, co může dítě udělat. Za toto řešení dostane pochvalu.
*   **Přijatelné řešení (OK):** Není to vyloženě chyba, ale existuje lepší postup.
*   **Špatné řešení (Bad):** Nebezpečné nebo nevhodné chování.

**Ke každé odpovědi potřebujeme "Feedback" (Zpětnou vazbu)** – text, který se ukáže poté, co dítě na tuto možnost klikne. Měl by vysvětlit, proč je to dobře nebo špatně.

### Příklad zadání scénáře:

**Název:** Podezřelý e-mail
**Popis:** Přišel ti e-mail, který vypadá jako od tvé banky (nebo herního účtu), ale chce po tobě, abys klikl na odkaz a zadal své heslo.

*   **Možnost A (Špatné):** Kliknu na odkaz a zadám heslo, bojím se o účet.
    *   *Feedback:* ⚠️ Pozor! Banky ani hry nikdy nechtějí heslo přes e-mail. Je to phishing (podvod) a mohl/a bys přijít o účet.
*   **Možnost B (OK):** E-mail smažu a neřeším to.
    *   *Feedback:* 🤔 To je bezpečné, ale podvodník to může zkusit znovu na někoho jiného.
*   **Možnost C (Ideální):** Neklikám na nic. Podívám se na adresu odesílatele a nahlásím e-mail jako spam rodičům nebo správci.
    *   *Feedback:* 🌟 Výborně! Nikdy neklikej na podezřelé odkazy. Nahlášením pomůžeš chránit i ostatní.

---

## 2. Aktivity (Úkol 2 - Můj Den)

Aktivity jsou činnosti, které si děti skládají do svého dne. Pro přidání nové aktivity potřebujeme:

### Struktura aktivity:
1.  **Název (Name):** Krátký název činnosti (např. "Fotbal").
2.  **Ikona (Icon):** Vhodné emoji reprezentující aktivitu (např. ⚽).
3.  **Typ (Type):** Určuje pravidla pro použití:
    *   **Povinná (Mandatory):** Dítě ji MUSÍ alespoň jednou za den v plánu použít (např. Spánek, Jídlo).
    *   **Volitelná (Optional):** Může ji použít, pokud chce, až po splnění povinných.
4.  **Barva (Color):** Preferovaná barva nebo kategorie (např. "oranžová", "pastelová modrá").

### Příklad zadání aktivity:

*   **Název:** Čtení knihy
*   **Ikona:** 📖
*   **Typ:** Volitelná
*   **Barva:** Světle zelená

---

## Shrnutí pro dodání podkladů

Pokud máte nápady na nové situace nebo aktivity, pošlete nám je prosím v tomto formátu. Zajistíte tím, že je budeme moci rychle a bez chyb zapracovat do aplikace.
