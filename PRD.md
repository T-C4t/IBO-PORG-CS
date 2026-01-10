# Product Requirements Document (PRD)
## Bezpečně na Netu - Vzdělávací workshop aplikace

**Verze:** 1.0  
**Datum:** 2024  
**Autor:** Product Team  
**Stakeholder:** Vědecká knihovna Ostrava / MSVK

---

## 1. Overview

### 1.1 Shrnutí produktu

**Bezpečně na Netu** je interaktivní vzdělávací webová aplikace určená pro workshopy v knihovnách. Aplikace učí děti a dospívající bezpečnému chování na internetu prostřednictvím dvou hlavních aktivit:

1. **Reakce na situace** - Scénářové kvízy zaměřené na správné reakce v rizikových situacích na sociálních sítích
2. **Můj Den** - Nástroj pro plánování dne a analýzu času stráveného u obrazovek

Aplikace se přizpůsobuje věku uživatele (pod/ nad 14 let) a mění vizuální styl i jazyk komunikace.

### 1.2 Problém, který řeší

- **Nedostatečná digitální gramotnost** dětí a dospívajících v oblasti online bezpečnosti
- **Nedostatek praktických nástrojů** pro vzdělávání o kyberšikaně, ochraně soukromí a zdravém vztahu k technologiím
- **Potřeba interaktivního vzdělávacího obsahu** pro knihovnické workshopy
- **Nedostatečné povědomí** o doporučeném čase stráveném u obrazovek

### 1.3 Cíloví uživatelé

**Primární uživatelé:**
- **Děti ve věku 11-14 let** - hlavní cílová skupina pro dětský režim
- **Dospívající 15+ let** - sekundární cílová skupina pro dospělý režim
- **Dospělí účastníci workshopů** - rodiče, pedagogové, knihovníci

**Sekundární uživatelé:**
- **Knihovníci** - facilitátoři workshopů
- **Pedagogové** - využití ve výuce

---

## 2. Goals & Success Metrics

### 2.1 Produktové cíle

1. **Vzdělávací cíl**
   - Zvýšit povědomí o bezpečném chování na internetu
   - Naučit správné reakce na kyberšikanu, cizí lidi online a ochranu hesel
   - Zlepšit kritické myšlení při rozhodování v online situacích

2. **Behaviorální cíl**
   - Podpořit reflexi času stráveného u obrazovek
   - Pomoci uživatelům naplánovat vyvážený den
   - Zvýšit povědomí o doporučených limitech screen time

3. **Engagement cíl**
   - Poskytnout zábavnou a interaktivní formu vzdělávání
   - Udržet pozornost po celou dobu workshopu
   - Vytvořit pozitivní zážitek z učení

### 2.2 Metriky úspěchu (KPIs)

**Kvantitativní metriky:**
- **Dokončení úkolů:** % uživatelů, kteří dokončí oba úkoly
- **Čas v aplikaci:** Průměrná doba strávená v aplikaci (cílové: 15-30 min)
- **Správné odpovědi:** % ideálních řešení v Úkolu 1 (cílové: >60% po dokončení)
- **Reflexe screen time:** % uživatelů, kteří překročí doporučený limit a vidí feedback

**Kvalitativní metriky:**
- Spokojenost účastníků workshopu (dotazníky)
- Feedback od knihovníků/facilitátorů
- Opakované použití v dalších workshopech

---

## 3. User Personas

### 3.1 Dítě (11-14 let) - "Hrdina"

**Charakteristika:**
- Aktivní uživatel sociálních sítí (Instagram, TikTok, Facebook)
- Částečné povědomí o online rizicích, ale nedostatek praktických zkušeností
- Potřebuje jasné, jednoduché instrukce a okamžitou zpětnou vazbu
- Preferuje vizuálně atraktivní, hravý design

**Potřeby:**
- Zábavná forma učení
- Jasné příklady situací, se kterými se může setkat
- Pozitivní posílení správného chování
- Motivace k reflexi vlastního chování

### 3.2 Dospívající (15+ let) - "Reflexivní"

**Charakteristika:**
- Zkušenější uživatel internetu
- Možná již zažil/a některé rizikové situace
- Potřebuje profesionálnější přístup, méně "dětský" design
- Otevřenější k sebereflexi a analýze vlastního chování

**Potřeby:**
- Vážnější, ale stále přístupný tón
- Možnost hlubší analýzy vlastního chování
- Respekt k jejich zkušenostem

### 3.3 Facilitátor workshopu - "Knihovník"

**Charakteristika:**
- Organizuje a vede workshopy v knihovně
- Potřebuje nástroj, který podpoří vzdělávací cíle
- Očekává jednoduché použití bez technických komplikací

**Potřeby:**
- Aplikace funguje bez nutnosti registrace
- Jasná struktura pro vedení workshopu
- Možnost resetovat a začít znovu pro další skupinu

---

## 4. User Journeys / Use Cases

### 4.1 Happy Path - Úplné dokončení obou úkolů

**Scénář:** Dítě ve věku 12 let se účastní workshopu v knihovně

1. **Příchod na workshop**
   - Facilitátor otevře aplikaci v prohlížeči
   - Zobrazí se úvodní obrazovka s age gate

2. **Výběr věku**
   - Uživatel klikne "ANO, jsem" (mladší 14 let)
   - Aplikace se přepne do dětského režimu (barevný, hravý design)
   - Zobrazí se hlavní menu s dvěma úkoly

3. **Úkol 1: Reakce na situace**
   - Uživatel klikne na "ÚKOL 1: Reakce na situace"
   - Zobrazí se první scénář (Kyberšikana)
   - Uživatel si přečte situaci a vybere odpověď
   - Zobrazí se feedback modal s hodnocením
   - Uživatel pokračuje na další scénáře (Cizí člověk, Heslo)
   - Po dokončení všech 3 scénářů se zobrazí souhrn výsledků

4. **Návrat do menu**
   - Uživatel klikne "Zpět do menu"
   - Vidí oba úkoly, Úkol 1 je dokončen

5. **Úkol 2: Můj Den**
   - Uživatel klikne na "ÚKOL 2: Můj Den"
   - Vybere typ dne (Všední den / Víkend)
   - Vybere aktivitu z palety (nejdřív povinné: Spánek, Jídlo, Škola, Hygiena)
   - Kliká do časové mřížky a vyplňuje den (48 bloků = 24 hodin, 1 blok = 30 min)
   - Vidí real-time statistiku času u obrazovek
   - Po vyplnění celého dne klikne "Vyhodnotit den"
   - Zobrazí se výsledky s analýzou screen time a rozložením aktivit

6. **Dokončení**
   - Uživatel vidí kompletní přehled
   - Může se vrátit do menu nebo začít znovu

### 4.2 Edge Cases

**Scénář A: Uživatel chce začít znovu**
- Klikne na tlačítko "🔄 Začít znovu" v hlavičce
- Aplikace se resetuje na age gate
- Všechny progresy se vymažou

**Scénář B: Uživatel vyplní volitelné aktivity před povinnými**
- Systém zobrazí alert: "Nejdříve vyplň alespoň jeden dílek od každé povinné aktivity!"
- Volitelné aktivity jsou disabled, dokud nejsou povinné dokončeny

**Scénář C: Uživatel překročí doporučený screen time**
- V výsledcích Úkolu 2 se zobrazí varování
- Zobrazí se doporučení k redukci času u obrazovek
- Statistika se zvýrazní žlutou/červenou barvou

**Scénář D: Dospělý uživatel (15+)**
- Vybere "NE, nejsem" mladší 14 let
- Aplikace se přepne do dospělého režimu (profesionálnější design)
- Funkcionalita zůstává stejná, mění se pouze vizuální styl

---

## 5. Functional Requirements

### 5.1 FR-001: Age Gate (Věková brána)

**Popis:**  
Aplikace musí na začátku zjistit věk uživatele, aby se přizpůsobila vizuální styl a tón komunikace.

**User value:**  
Personalizovaný zážitek přizpůsobený věku uživatele zvyšuje engagement a srozumitelnost.

**Acceptance criteria:**
- [ ] Při prvním načtení se zobrazí age gate s otázkou "Jsi mladší 14 let?"
- [ ] Uživatel může vybrat "ANO, jsem" nebo "NE, nejsem"
- [ ] Po výběru se aplikace přepne do odpovídajícího režimu (dětský/dospělý)
- [ ] Vizuální styl se změní (barvy, fonty, animace, emoji)
- [ ] Po výběru se zobrazí hlavní menu

---

### 5.2 FR-002: Hlavní menu

**Popis:**  
Centrální navigační bod s přehledem dostupných úkolů.

**User value:**  
Uživatel má jasný přehled o dostupných aktivitách a může si vybrat, čím začne.

**Acceptance criteria:**
- [ ] Zobrazí se dvě karty úkolů (Úkol 1 a Úkol 2)
- [ ] Každá karta obsahuje název, popis a tlačítko pro spuštění
- [ ] Karty jsou vizuálně odlišené (různé barvy/gradienty)
- [ ] Kliknutím na kartu se spustí příslušný úkol
- [ ] V hlavičce je tlačítko "Začít znovu" pro reset aplikace

---

### 5.3 FR-003: Úkol 1 - Zobrazení scénářů

**Popis:**  
Systém zobrazuje scénáře rizikových situací na sociálních sítích jeden po druhém.

**User value:**  
Uživatel se učí správným reakcím na reálné situace, se kterými se může setkat.

**Acceptance criteria:**
- [ ] Zobrazí se scénář s názvem, popisem situace a 3 možnostmi odpovědí
- [ ] Zobrazí se indikátor průběhu (např. "Otázka 1 / 3")
- [ ] Uživatel může kliknout na libovolnou z 3 možností
- [ ] Po kliknutí se zobrazí feedback modal
- [ ] Po dokončení všech scénářů se zobrazí výsledky

**Scénáře (minimálně 3):**
1. **Kyberšikana** - Ošklivý komentář pod fotkou
2. **Cizí člověk** - Žádost o přátelství od neznámého
3. **Heslo** - Kamarád chce znát heslo k mobilu

---

### 5.4 FR-004: Úkol 1 - Feedback systém

**Popis:**  
Po výběru odpovědi uživatel dostane okamžitou zpětnou vazbu s vysvětlením.

**User value:**  
Okamžitá zpětná vazba posiluje učení a pomáhá uživateli pochopit správné řešení.

**Acceptance criteria:**
- [ ] Po výběru odpovědi se zobrazí modal s feedbackem
- [ ] Feedback obsahuje:
  - Emoji a barvu podle typu odpovědi (🌟 zelená = ideální, 🤔 žlutá = OK, ⚠️ červená = špatně)
  - Nadpis (např. "Výborně! Ideální řešení." / "OK, ale jde to lépe." / "Pozor! Nevhodné řešení.")
  - Vysvětlující text
  - Pokud není ideální, zobrazí se správná odpověď s ikonou 💡
- [ ] Modal lze zavřít kliknutím na tlačítko "Další otázka" nebo kliknutím mimo modal
- [ ] Po poslední otázce se tlačítko změní na "Zobrazit výsledky"

---

### 5.5 FR-005: Úkol 1 - Souhrn výsledků

**Popis:**  
Po dokončení všech scénářů se zobrazí přehled všech odpovědí a feedbacků.

**User value:**  
Uživatel má přehled o svém výkonu a může si znovu projít správná řešení.

**Acceptance criteria:**
- [ ] Zobrazí se seznam všech scénářů s výsledky
- [ ] Každý scénář obsahuje:
  - Číslo situace
  - Ikona výsledku (✅/⚠️/❌)
  - Feedback text
  - Pokud nebyla ideální odpověď, zobrazí se správné řešení
- [ ] Uživatel může kliknout "Zpět do menu" pro návrat

---

### 5.6 FR-006: Úkol 2 - Výběr typu dne

**Popis:**  
Uživatel si může vybrat, zda plánuje všední den nebo víkend.

**User value:**  
Různé typy dní mají různý rozvrh, uživatel může plánovat podle skutečnosti.

**Acceptance criteria:**
- [ ] Zobrazí se dvě tlačítka: "Všední den" a "Víkend"
- [ ] Aktivní tlačítko je zvýrazněno
- [ ] Při změně typu dne se resetuje časová mřížka
- [ ] Typ dne ovlivní pouze kontext, ne funkcionalitu

---

### 5.7 FR-007: Úkol 2 - Paleta aktivit

**Popis:**  
Uživatel vybírá aktivity z palety, které pak umisťuje do časové mřížky.

**User value:**  
Jasná paleta aktivit usnadňuje plánování a zajišťuje konzistenci.

**Acceptance criteria:**
- [ ] Aktivity jsou rozděleny na **Povinné** a **Volitelné**
- [ ] **Povinné aktivity** (musí být použity alespoň jednou):
  - Spánek 😴
  - Jídlo 🍔
  - Škola/Práce 🏫
  - Hygiena 🚿
- [ ] **Volitelné aktivity** (dostupné po vyplnění povinných):
  - Pohyb ⚽
  - Tvoření 🎨
  - Povídání 🗣️
  - Odpočinek 🧘
  - Obrazovky 📱
  - Čtení 📖
  - Cestování 🚌
  - Jiné ✨
- [ ] Každá aktivita má ikonu, název a barevný gradient
- [ ] Vybraná aktivita je zvýrazněna (ring, shadow)
- [ ] Volitelné aktivity jsou disabled, dokud nejsou všechny povinné použity
- [ ] Zobrazí se varování, pokud uživatel zkusí použít volitelnou aktivitu před povinnými

---

### 5.8 FR-008: Úkol 2 - Časová mřížka

**Popis:**  
Interaktivní mřížka reprezentující 24 hodin dne rozdělených do 48 bloků (1 blok = 30 minut).

**User value:**  
Vizuální reprezentace dne pomáhá uživateli naplánovat a reflektovat svůj čas.

**Acceptance criteria:**
- [ ] Mřížka obsahuje 48 bloků (4 řádky × 12 sloupců nebo adaptivní layout)
- [ ] Každý blok reprezentuje 30 minut
- [ ] Bloky zobrazují časový label (např. "00:00", "00:30", "01:00")
- [ ] Uživatel může kliknout na blok pro přiřazení vybrané aktivity
- [ ] Uživatel může táhnout myší pro rychlejší vyplnění (drag & drop)
- [ ] Blok zobrazuje ikonu aktivity a barvu po přiřazení
- [ ] Prázdné bloky mají dashed border
- [ ] Vyplněné bloky mají solid border a shadow
- [ ] Hover efekt zobrazuje preview aktivity

---

### 5.9 FR-009: Úkol 2 - Real-time statistika

**Popis:**  
Během plánování dne se zobrazuje real-time statistika času u obrazovek.

**User value:**  
Uživatel vidí okamžitě, kolik času plánuje u obrazovek, a může upravit plán.

**Acceptance criteria:**
- [ ] Zobrazí se aktuální čas u obrazovek ve formátu "Xh Ym" (např. "2h 30m")
- [ ] Zobrazí se progress bar reprezentující % času u obrazovek z celého dne
- [ ] Pokud čas překračuje doporučený limit (2h pro 11-14 let), barva se změní na žlutou/červenou
- [ ] Statistiky se aktualizují při každé změně v mřížce
- [ ] Zobrazí se doporučený limit (max 2:00 h pro 11-14 let)

---

### 5.10 FR-010: Úkol 2 - Validace a dokončení

**Popis:**  
Systém validuje, zda je den kompletně vyplněn, před zobrazením výsledků.

**User value:**  
Zajišťuje, že uživatel dokončí plánování celého dne před analýzou.

**Acceptance criteria:**
- [ ] Tlačítko "Vyhodnotit den" je disabled, dokud není všech 48 bloků vyplněno
- [ ] Zobrazí se text "Vyplň celý den (všechna políčka)" pokud není mřížka kompletní
- [ ] Po kliknutí na "Vyhodnotit den" se zobrazí výsledky

---

### 5.11 FR-011: Úkol 2 - Výsledky a analýza

**Popis:**  
Po dokončení plánování se zobrazí analýza dne včetně screen time a rozložení aktivit.

**User value:**  
Uživatel vidí přehled svého dne a dostane feedback o zdravém rozložení času.

**Acceptance criteria:**
- [ ] Zobrazí se celkový čas u obrazovek
- [ ] Zobrazí se srovnání s doporučeným limitem (max 2:00 h)
- [ ] Zobrazí se feedback:
  - Pokud čas ≤ 2h: "Výborně! Tvůj čas u obrazovek je v normě. Máš dostatek času na ostatní aktivity! 🌟"
  - Pokud čas > 2h: "Pozor! Trávíš u obrazovek více času, než je zdrávo. Zkus nahradit část tohoto času pohybem nebo čtením. 💪"
- [ ] Zobrazí se rozložení aktivit:
  - Seznam všech aktivit s procentuálním podílem
  - Progress bar pro každou aktivitu
  - Čas ve formátu "Xh Ym"
  - Seřazeno podle času (nejvíce času nahoře)
- [ ] Uživatel může kliknout "Zpět do menu"

---

### 5.12 FR-012: Reset aplikace

**Popis:**  
Uživatel může kdykoli resetovat aplikaci a začít znovu.

**User value:**  
Umožňuje opakované použití v rámci workshopu nebo pro další skupinu.

**Acceptance criteria:**
- [ ] Tlačítko "🔄 Začít znovu" je dostupné v hlavičce (kromě age gate)
- [ ] Po kliknutí se aplikace resetuje na age gate
- [ ] Všechny progresy se vymažou (scénáře, mřížka, výsledky)
- [ ] Uživatel může znovu projít celou aplikaci

---

### 5.13 FR-013: Responsivní design

**Popis:**  
Aplikace musí fungovat na různých velikostech obrazovek (desktop, tablet, mobil).

**User value:**  
Uživatelé mohou používat aplikaci na jakémkoli zařízení dostupném v knihovně.

**Acceptance criteria:**
- [ ] Aplikace je funkční na desktopu (min. 1024px)
- [ ] Aplikace je funkční na tabletu (768px - 1023px)
- [ ] Aplikace je funkční na mobilu (min. 320px)
- [ ] Layout se přizpůsobuje velikosti obrazovky (grid, flexbox)
- [ ] Texty jsou čitelné na všech velikostech
- [ ] Interaktivní prvky (tlačítka, bloky) mají dostatečnou velikost pro touch

---

### 5.14 FR-014: Navigace mezi sekcemi

**Popis:**  
Uživatel může navigovat mezi menu a jednotlivými úkoly.

**User value:**  
Umožňuje flexibilní průchod aplikací a návrat k dříve dokončeným úkolům.

**Acceptance criteria:**
- [ ] Z každého úkolu je možné se vrátit do menu tlačítkem "Zpět do menu"
- [ ] Po návratu do menu zůstávají dokončené úkoly dostupné
- [ ] Uživatel může znovu spustit úkol (resetuje se progress)

---

## 6. Non-Functional Requirements

### 6.1 Výkon

- **Načítání:** Aplikace se musí načíst do 3 sekund na standardním připojení
- **Interaktivita:** Reakce na kliknutí/touch musí být okamžitá (<100ms)
- **Animace:** Animace musí být plynulé (60 FPS)
- **Offline:** *Assumption:* Aplikace funguje pouze online (není explicitně řečeno)

### 6.2 Bezpečnost

- **Osobní údaje:** Aplikace neukládá žádné osobní údaje uživatelů
- **Session data:** Data se ukládají pouze lokálně v prohlížeči (localStorage/sessionStorage)
- **Žádná registrace:** Uživatelé se nemusí registrovat ani přihlašovat
- **GDPR:** Aplikace je GDPR compliant (neukládá osobní údaje)

### 6.3 Přístupnost (Accessibility)

- **WCAG 2.1:** Aplikace by měla splňovat minimálně úroveň AA
- **Kontrast:** Texty musí mít dostatečný kontrast (min. 4.5:1 pro normální text)
- **Klávesnice:** Základní navigace musí fungovat pomocí klávesnice
- **Screen readers:** *Assumption:* Základní podpora pro screen readery (semantic HTML)

### 6.4 Kompatibilita

- **Prohlížeče:** 
  - Chrome (poslední 2 verze)
  - Firefox (poslední 2 verze)
  - Safari (poslední 2 verze)
  - Edge (poslední 2 verze)
- **Zařízení:**
  - Desktop (Windows, macOS, Linux)
  - Tablet (iPad, Android tablet)
  - Mobil (iOS, Android)
- **Technologie:**
  - Moderní prohlížeče s podporou ES6+
  - Podpora pro CSS Grid a Flexbox

### 6.5 Uživatelská zkušenost

- **Intuitivnost:** Aplikace musí být použitelná bez instrukcí
- **Jasnost:** Všechny texty musí být srozumitelné pro cílovou skupinu
- **Feedback:** Každá akce musí mít vizuální nebo textovou zpětnou vazbu
- **Chyby:** Chybové stavy musí být jasně komunikovány

---

## 7. UX & UI Notes

### 7.1 Dva vizuální režimy

**Dětský režim (pod 14 let):**
- **Barvy:** Jasné, syté barvy (žlutá #FFD23F, růžová #EE4266, zelená #3BCEAC)
- **Font:** Fredoka (zaoblený, hravý)
- **Animace:** Bounce-in, float, wiggle, pulse-glow
- **Dekorace:** Plovoucí emoji (⭐, 🌟, ✨, 💫, 🎈, 🎨)
- **Tón:** Hravý, povzbuzující ("Staň se internetovým hrdinou! 🦸")
- **Karty:** Zaoblené rohy (24px), výrazné stíny, gradienty

**Dospělý režim (15+ let):**
- **Barvy:** Profesionální (modrá #3B82F6, šedá #64748B, tmavá #0F172A)
- **Font:** Inter (čistý, profesionální)
- **Animace:** Minimální, jemné přechody
- **Dekorace:** Žádné plovoucí emoji
- **Tón:** Vážnější, ale stále přátelský
- **Karty:** Zaoblené rohy (16px), jemné stíny, plné barvy

### 7.2 Komponenty a jejich chování

**Tlačítka:**
- Dětský režim: Velké, zaoblené, s 3D efektem (shadow), hover scale
- Dospělý režim: Standardní, s hover efektem
- Aktivní stavy: Zvýrazněné barvou a ring/shadow

**Karty:**
- Hover efekt: Mírné zvednutí (translateY)
- Klikatelnost: Cursor pointer, celá karta je klikatelná

**Modaly:**
- Backdrop blur pro zaměření pozornosti
- Bounce-in animace při otevření
- Kliknutí mimo modal ho zavře

**Progress indikátory:**
- Časová mřížka: Real-time aktualizace
- Progress bar: Plynulá animace při změně

### 7.3 Pravidla validace

**Úkol 1:**
- Uživatel musí vybrat odpověď před pokračováním
- Feedback se zobrazí okamžitě po výběru

**Úkol 2:**
- Povinné aktivity musí být použity alespoň jednou před volitelnými
- Celá mřížka (48 bloků) musí být vyplněna před vyhodnocením
- Validace se provádí při pokusu o použití volitelné aktivity nebo kliknutí na "Vyhodnotit"

### 7.4 Mikrointerakce

- **Hover efekty:** Scale, shadow změny, barva borderu
- **Kliknutí:** Mírné stlačení (active state)
- **Animace:** Float pro emoji, bounce-in pro nové sekce
- **Feedback:** Okamžitá vizuální reakce na všechny akce

### 7.5 Texty a copywriting

**Dětský režim:**
- Použití emoji v nadpisech a tlačítkách
- Povzbuzující jazyk ("Skvělá práce!", "Výborně!")
- Zkrácené formy ("h" místo "hodin")

**Dospělý režim:**
- Profesionálnější tón, méně emoji
- Stále přátelský, ale vážnější

---

## 8. Out of Scope

### 8.1 Co produkt **neřeší**

- **Ukládání výsledků:** Aplikace neukládá výsledky uživatelů mezi session
- **Uživatelské účty:** Žádná registrace, přihlášení, profily
- **Sdílení výsledků:** Uživatelé nemohou sdílet výsledky na sociálních sítích
- **Export dat:** Nelze exportovat výsledky do PDF nebo jiného formátu
- **Více jazyků:** Aplikace je pouze v češtině
- **Offline režim:** Aplikace vyžaduje internetové připojení
- **Analytika pro administrátory:** Žádný dashboard pro knihovníky s agregovanými statistikami
- **Přizpůsobení obsahu:** Scénáře a aktivity jsou pevně dané, nelze je upravit
- **Gamifikace:** Žádné body, odznaky, leaderboardy
- **Multimédia:** Žádná videa, audio, animované scénáře
- **Tisk:** Aplikace není optimalizovaná pro tisk

---

## 9. Assumptions & Open Questions

### 9.1 Assumptions (Předpoklady)

**A1: Cílová skupina**
- *Assumption:* Primární cílová skupina jsou děti 11-14 let, sekundární 15+ let
- *Důvod:* Age gate rozděluje na pod/nad 14 let, doporučený screen time je pro 11-14 let

**A2: Workshop kontext**
- *Assumption:* Aplikace se používá v rámci skupinových workshopů v knihovně
- *Důvod:* Footer obsahuje "Knihovna - Vzdělávací workshop"

**A3: Jednorázové použití**
- *Assumption:* Aplikace je navržena pro jednorázové použití v rámci workshopu, ne pro opakované denní použití
- *Důvod:* Žádné ukládání dat, reset funkcionalita

**A4: Screen time doporučení**
- *Assumption:* Doporučený limit 2h je pro věkovou skupinu 11-14 let (podle WHO/APA doporučení)
- *Důvod:* V kódu je `recommendedMax: 2` a text "Doporučeno (11-14 let)"

**A5: Časové bloky**
- *Assumption:* 1 blok = 30 minut je dostatečně detailní pro plánování dne
- *Důvod:* V kódu je 48 bloků = 24 hodin, každý blok = 30 min

**A6: Počet scénářů**
- *Assumption:* 3 scénáře v Úkolu 1 jsou dostatečné pro workshop (možná se budou rozšiřovat)
- *Důvod:* V prototypu jsou 3 scénáře, ale struktura umožňuje snadné přidání dalších

**A7: Povinné aktivity**
- *Assumption:* 4 povinné aktivity (Spánek, Jídlo, Škola, Hygiena) musí být použity alespoň jednou
- *Důvod:* Validace v kódu kontroluje, zda jsou všechny povinné aktivity použity

**A8: Offline funkcionalita**
- *Assumption:* Aplikace vyžaduje internetové připojení (používá CDN pro Tailwind, Alpine.js)
- *Důvod:* Externí závislosti na CDN

**A9: Datové ukládání**
- *Assumption:* Data se ukládají pouze lokálně v prohlížeči (localStorage/sessionStorage), ne na serveru
- *Důvod:* Žádná backend infrastruktura v prototypu

**A10: Přizpůsobení pro různé věkové skupiny**
- *Assumption:* Doporučený screen time limit (2h) je fixní pro všechny uživatele, i když se aplikace používá v dospělém režimu
- *Důvod:* V kódu je `recommendedMax: 2` fixní hodnota

### 9.2 Open Questions (Otevřené otázky)

**Q1: Rozšiřitelnost scénářů**
- Jak často se budou scénáře aktualizovat nebo rozšiřovat?
- Kdo bude mít oprávnění přidávat nové scénáře?
- Bude potřeba CMS pro správu scénářů?

**Q2: Analytika a reporting**
- Budou knihovníci potřebovat přehled o výsledcích workshopů?
- Měla by aplikace sbírat anonymizovaná data pro evaluaci workshopů?
- Jak se bude měřit úspěšnost workshopů?

**Q3: Přizpůsobení doporučení**
- Měla by se doporučení pro screen time přizpůsobovat věku uživatele (např. 15+ let má jiný limit)?
- Měla by se doporučení lišit pro všední den vs. víkend?

**Q4: Lokalizace**
- Plánuje se anglická nebo jiná jazyková verze?
- Jak se bude řešit lokalizace pro různé knihovny?

**Q5: Technická infrastruktura**
- Bude aplikace hostována na vlastním serveru knihovny nebo externě?
- Jaká je požadovaná dostupnost (uptime)?
- Bude potřeba backup a disaster recovery?

**Q6: Integrace s dalšími systémy**
- Měla by se aplikace integrovat s knihovním systémem?
- Bude potřeba export dat pro další analýzu?

**Q7: Přístupnost pro osoby se specifickými potřebami**
- Jaká je požadovaná úroveň WCAG compliance?
- Budou potřeba alternativní formáty (např. audio verze scénářů)?

**Q8: Mobilní aplikace**
- Plánuje se nativní mobilní aplikace, nebo stačí responsive web?
- Měla by fungovat jako PWA (Progressive Web App)?

**Q9: Obsah a aktualizace**
- Kdo bude zodpovědný za aktualizaci scénářů a obsahu?
- Jak často se bude obsah aktualizovat?

**Q10: Školení facilitátorů**
- Budou knihovníci potřebovat školení pro použití aplikace?
- Měla by být součástí PRD dokumentace pro facilitátory?

---

## 10. Dependencies & Risks

### 10.1 Technické závislosti

**Externí závislosti:**
- **Tailwind CSS** (CDN) - Pro styling
- **Alpine.js** (CDN) - Pro interaktivitu a state management
- **Google Fonts** - Pro fonty (Fredoka, Inter)

**Rizika:**
- **CDN dostupnost:** Pokud CDN selže, aplikace nebude fungovat
- **Mitigace:** Zvážit self-hosting závislostí nebo fallback mechanismy

**Browser závislosti:**
- ES6+ JavaScript
- CSS Grid a Flexbox
- LocalStorage/SessionStorage API

### 10.2 Produktové závislosti

**Obsah:**
- Scénáře musí být připraveny a schváleny před spuštěním
- Aktivity a jejich kategorie musí být definovány
- Texty a copywriting musí být finalizovány

**Design:**
- Vizuální identita (barvy, fonty) musí být schválena
- UI komponenty musí být navrženy a implementovány

**Validace:**
- Scénáře a správné odpovědi musí být validovány odborníky na online bezpečnost
- Doporučení pro screen time musí být v souladu s aktuálními guidelines (WHO, APA)

### 10.3 Rizika a mitigace

**R1: Technické riziko - CDN výpadek**
- **Dopad:** Vysoký - aplikace nebude fungovat
- **Pravděpodobnost:** Nízká
- **Mitigace:** 
  - Self-hostovat závislosti nebo použít více CDN providerů
  - Implementovat fallback mechanismy

**R2: Produktové riziko - Neaktuální scénáře**
- **Dopad:** Střední - obsah může být zastaralý
- **Pravděpodobnost:** Střední
- **Mitigace:**
  - Pravidelná revize scénářů (např. každé 6 měsíců)
  - Zvážit CMS pro snadnou aktualizaci obsahu

**R3: UX riziko - Příliš složité pro mladší děti**
- **Dopad:** Střední - nižší engagement
- **Pravděpodobnost:** Nízká (prototyp je již navržen pro děti)
- **Mitigace:**
  - User testing s cílovou skupinou
  - Iterativní vylepšování na základě feedbacku

**R4: Technické riziko - Kompatibilita prohlížečů**
- **Dopad:** Střední - někteří uživatelé nebudou moci použít aplikaci
- **Pravděpodobnost:** Nízká (moderní prohlížeče)
- **Mitigace:**
  - Testování na různých prohlížečích a zařízeních
  - Polyfilly pro starší prohlížeče (pokud potřeba)

**R5: Produktové riziko - Nedostatečná edukativní hodnota**
- **Dopad:** Vysoký - produkt nesplní svůj účel
- **Pravděpodobnost:** Nízká (obsah je navržen odborníky)
- **Mitigace:**
  - Validace obsahu s odborníky na online bezpečnost
  - Evaluace workshopů a sběr feedbacku

**R6: Organizační riziko - Nedostatečné školení facilitátorů**
- **Dopad:** Střední - špatné použití aplikace v workshopech
- **Pravděpodobnost:** Střední
- **Mitigace:**
  - Vytvořit dokumentaci pro facilitátory
  - Organizovat školení pro knihovníky

---

## 11. Přílohy

### 11.1 Technický stack (z prototypu)

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS (via CDN)
- **Framework:** Alpine.js (via CDN)
- **Fonty:** Google Fonts (Fredoka, Inter)
- **Hosting:** *Assumption:* Web server (Apache/Nginx) nebo static hosting

### 11.2 Struktura dat (z prototypu)

**Scénáře:**
```javascript
{
  title: string,
  description: string,
  options: [
    {
      text: string,
      type: "ideal" | "ok" | "bad",
      feedback: string
    }
  ]
}
```

**Aktivity:**
```javascript
{
  id: string,
  name: string,
  color: string (hex),
  darkColor: string (hex),
  type: "mandatory" | "optional",
  icon: string (emoji)
}
```

**Časová mřížka:**
```javascript
[
  {
    activityId: string | null,
    color: string | null
  }
] // 48 prvků
```

---

## 12. Verze a změny

| Verze | Datum | Autor | Změny |
|-------|-------|-------|-------|
| 1.0 | 2024 | Product Team | První verze PRD na základě prototypu |

---

**Konec dokumentu**
