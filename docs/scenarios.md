# Vzdělávací Scénáře

Tento dokument obsahuje detailní přehled všech 12 scénářů použitých v aplikaci. Pro každou situaci je uvedeno ID (pro technické účely), kategorie a tabulka reakcí.

## 🛠️ Přehled Scénářů

### 1. Humor vs. Urážka
- **ID:** `humor_fail`
- **Kategorie:** `empathy`
- **Situace:** Sdílel/a jsi vtipný příspěvek, ale ostatní se smějí tobě, ne vtipu.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Smazat příspěvek | `ideal` | Ukončíš nepříjemnou situaci a dáš najevo, že umíš uznat, když něco nevyšlo. |
| Uznat chybu (např. "OK, tenhle vtip asi nevyšel 😅") | `ideal` | Krátká reakce často napětí rychle rozpustí a ukáže nadhled. |
| Ignorovat komentáře | `ok` | Pokud nejde o urážky, pozornost lidí často sama odezní. |
| Svěřit se někomu blízkému | `ok` | Pomůže ti zpracovat stud nebo trapný pocit a získat odstup. |
| Dát si na chvíli pauzu od sítí | `ok` | Krátké odpojení sníží emoční tlak a zabrání impulzivním reakcím. |
| Bránit se v komentářích | `bad` | Obrana nebo vysvětlování humoru většinou zesílí posměch a konflikt. |

---

### 2. Neznámý kontakt
- **ID:** `flirting_stranger`
- **Kategorie:** `safety`
- **Situace:** Píše ti neznámý člověk, flirtuje a ptá se na osobní informace.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Zablokovat dotyčného | `ideal` | Okamžitě přerušíš kontakt a ochráníš své soukromí i psychickou pohodu. |
| Nahlásit profil nebo zprávy | `ideal` | Pomáháš zastavit obtěžování a chráníš i ostatní uživatele. |
| Svěřit se někomu | `ok` | Získáš podporu a radu, jak situaci řešit bezpečně a s klidem. |
| Omezit, kdo ti může psát | `ok` | Snížíš pravděpodobnost, že se podobná situace bude opakovat. |
| Ignorovat, ono to přestane | `bad` | Krátkodobě může fungovat, ale často vede k tomu, že dotyčný pokračuje. |
| Navázat konverzaci a odpovídat | `bad` | Zvyšuješ riziko manipulace, zneužití osobních informací nebo nátlaku. |

---

### 3. Srovnávání se
- **ID:** `social_comparison`
- **Kategorie:** `wellbeing`
- **Situace:** Často se porovnáváš s ostatními na sociálních sítích a máš pocit, že žijí lepší život než ty.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Dát si pauzu od sítí | `ideal` | Přerušíš neustálé srovnávání a dáš prostoru návrat k vlastnímu prožívání. |
| Omezit čas na sítích | `ideal` | Získáš více podnětů z offline života a nebudeš se tolik soustředit na obraz ostatních. |
| Skrýt účty, které způsobují nepříjemné pocity | `ok` | Snížíš množství spouštěčů negativního srovnávání. |
| Připomínat si, že lidi sdílí jen to pěkné | `ok` | Pomáhá kognitivně oslabit zkreslení „všichni se mají lépe než já“. |
| Odinstalovat aplikaci | `ok` | Dlouhodobá změna prostředí může výrazně zlepšit sebevědomí i psychickou pohodu. |
| Ignorovat pocity, vždyť ono to přejde | `bad` | Neřešené emoce se hromadí a mohou vést k dlouhodobé nespokojenosti nebo úzkosti. |

---

### 4. Hádka v komentářích
- **ID:** `comment_fight`
- **Kategorie:** `empathy`
- **Situace:** Dostaneš se do vyhrocené hádky v komentářích a ostatní se začnou spojovat proti tobě.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Dát si pauzu a přestat reagovat | `ideal` | Zabráníš dalšímu vyhrocování a dáš prostor emocím, aby se uklidnily. |
| Odejít z diskuze | `ideal` | Ukončíš konflikt bez dalšího psychického zatížení. |
| Svěřit se někomu blízkému | `ok` | Pomůže ti zpracovat pocit nespravedlnosti a osamění, který v takové situaci často vzniká. |
| Smazat příspěvek nebo komentář | `ok` | Pokud jsi spustil/a diskuzi, může to pomoci konflikt rychle utlumit. |
| Zablokovat ty, kteří tě napadají | `ok` | Chráníš se před osobními útoky, i když to neřeší celou diskuzi. |
| Obhajovat dál svůj názor | `bad` | Přitahuješ další útočníky a konflikt se obvykle ještě více vyhrotí. |

---

### 5. Spánek a telefon
- **ID:** `sleep_notifications`
- **Kategorie:** `wellbeing`
- **Situace:** Snažíš se usnout, ale neustálá upozornění z telefonu tě stresují.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Změnit nastavení notifikací | `ideal` | Získáš kontrolu nad rušivými podněty a podpoříš klidný spánek. |
| Používat režim Nerušit / noční režim | `ideal` | Mozek se lépe zklidní a snáze přejde do režimu spánku. |
| Odinstalovat nebo omezit rušivé aplikace | `ok` | Dlouhodobě tím snížíš stres, i když je to spíš radikálnější krok. |
| Nastavit si pravidlo „bez mobilu před spaním“ | `ok` | Pomáhá vytvořit zdravý návyk, i když vyžaduje disciplínu. |
| Ignorovat upozornění | `bad` | Stres se tím zvyšuje a tělo zůstává v pohotovosti namísto odpočinku. |
| Neřešit to a spoléhat, že si tělo zvykne | `bad` | Dlouhodobě to může vést k poruchám spánku a vyčerpání. |

---

### 6. Škodlivý obsah
- **ID:** `fake_news`
- **Kategorie:** `safety`
- **Situace:** Narazíš na příspěvek, který považuješ za nepravdivý, škodlivý nebo jinak nevhodný.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Nahlásit příspěvek správcům | `ideal` | Pokud porušuje pravidla, je to nejúčinnější a nejbezpečnější způsob, jak zakročit. |
| Ignorovat příspěvek, pokud není vážně škodlivý | `ok` | Ne každý nesmysl si zaslouží pozornost a další šíření. |
| Svěřit se někomu zkušenějšímu | `ok` | Pomůže ti ověřit, zda je reakce potřeba a jak ji zvolit. |
| Vyjádřit věcný a slušný nesouhlas | `ok` | Má smysl jen tehdy, pokud zvládneš zůstat klidný/á. Můžeš ale příspěvku zvýšit dosah. |
| Impulzivně zareagovat | `bad` | Emoční reakce často posílí konflikt a zvýší dosah problematického obsahu. |
| Zablokovat autora | `bad` | Uleví to tobě, ale neřeší to šíření škodlivého obsahu pro ostatní. |

---

### 7. Obtěžující zprávy
- **ID:** `creepy_messages`
- **Kategorie:** `safety`
- **Situace:** Tvůj známý ti opakovaně posílá divné a nepříjemné zprávy.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Zablokovat dotyčného | `ideal` | Jasně tím nastavíš hranice a zabráníš dalšímu obtěžování. |
| Nahlásit chování platformě | `ideal` | Pokud zprávy překračují hranice slušnosti, je to správný a systémový krok. |
| Svěřit se někomu | `ok` | Získáš podporu, ujištění a případně pomoc s dalším postupem. |
| Upravit nastavení soukromí nebo zpráv | `ok` | Můžeš snížit riziko, že tě bude kontaktovat znovu nebo že se to bude opakovat u jiných. |
| Ignorovat zprávy, ono to přestane | `bad` | Krátkodobě to může fungovat, ale často tím dáváme prostor pokračování obtěžování. |
| Snažit se mu to vysvětlit | `bad` | Reakce může druhého povzbudit k dalším zprávám nebo situaci vyhrotit. |

---

### 8. Fotka bez souhlasu
- **ID:** `photo_consent`
- **Kategorie:** `empathy`
- **Situace:** Kamarád nebo člen rodiny zveřejnil tvou fotku bez souhlasu, fotka se ti nelíbí a ostatní ji komentují.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Vyjádřit klidně nesouhlas | `ideal` | Jasně nastavíš hranice a dáš druhému šanci situaci napravit. |
| Požádat o smazání fotky nebo odstranění označení | `ideal` | Přímo řešíš problém a chráníš své soukromí. |
| Svěřit se někomu | `ideal` | Pomůže ti zorientovat se v emocích a zvolit další postup. |
| Nahlásit příspěvek | `ok` | Je to oprávněný krok, když není respektováno tvé soukromí, ale měl by navazovat až na další kroky. |
| Upravit nastavení soukromí | `ok` | Pomůže předejít podobným situacím do budoucna (blokování označování). |
| Dělat, že se nic neděje | `bad` | Dává to signál, že je v pořádku překračovat tvé hranice. |

---

### 9. Šikana někoho jiného
- **ID:** `bystander_bullying`
- **Kategorie:** `empathy`
- **Situace:** Spolužák nebo kolega je veřejně zesměšňovaný online, nikdo se ho nezastane. Co uděláš?

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Nahlásit příspěvek platformě | `ideal` | Pomáháš zastavit šíření škodlivého obsahu a chráníš oběť šikany. |
| Svěřit se autoritě (učiteli, rodiči) | `ideal` | Zajistíš, že se situací bude zabývat někdo, kdo má možnost zasáhnout. |
| Veřejně se oběti zastat | `ideal` | Dáváš jasně najevo, že šikana není v pořádku, a můžeš tím prolomit „mlčení davu“. |
| Vyjádřit oběti podporu soukromě | `ok` | Pro oběť může být velmi posilující vědět, že v tom není sama. |
| Zablokovat zdroj obsahu nebo ho přestat sledovat | `ok` | Chráníš sebe před negativním obsahem, i když tím problém neřešíš systémově. |
| Ignorovat situaci | `bad` | Mlčení podporuje šikanu a dává agresorům pocit, že je jejich chování přijatelné. |

---

### 10. Žádost od neznámého
- **ID:** `stranger_request`
- **Kategorie:** `safety`
- **Situace:** Neznámý člověk bez společných přátel si tě přidá a chce si psát.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Zablokovat neznámý účet | `ideal` | Okamžitě tím zabráníš kontaktu a ochráníš své soukromí. |
| Upravit nastavení soukromí | `ideal` | Dlouhodobě snížíš riziko podobných situací. |
| Nahlásit účet, pokud působí podezřele | `ideal` | Pomáháš chránit sebe i ostatní uživatele platformy. |
| Ignorovat žádost a nereagovat | `ok` | V mnoha případech kontakt sám ustane, i když nejde o aktivní řešení. |
| Svěřit se někomu zkušenějšímu | `ok` | Pomůže získat jistotu, že postupuje správně. |
| Navázat konverzaci, o nic nejde | `bad` | Zvyšuješ riziko manipulace, podvodu nebo zneužití osobních informací. |

---

### 11. Konflikt s kamarádem
- **ID:** `friend_insult`
- **Kategorie:** `empathy`
- **Situace:** Dobrý/á kamarád/ka tě během online hry nebo konverzace urazí a hodně tě to zabolí.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Říct, že ti to ublížilo | `ideal` | Dáváš druhému šanci pochopit dopad jeho slov a napravit situaci. |
| Svěřit se někomu | `ideal` | Pomůže ti zpracovat emoce a získat nadhled, než budeš reagovat. |
| Dát si pauzu na uklidnění | `ok` | Zabráníš impulzivní reakci, i když samotný problém zatím zůstává otevřený. |
| Promyslet, co mi ublížilo | `ok` | Pojmenování emocí umožňuje se s nimi lépe vyrovnat. |
| Předstírat, že se nic nestalo | `bad` | Nevyřešené pocity se mohou projevit později a vztah poškodit. |
| Kamaráda bez varování zablokovat | `bad` | U blízkého vztahu jde o přehnaný krok bez pokusu o domluvu. |

---

### 12. Digitální únava
- **ID:** `social_exhaustion`
- **Kategorie:** `wellbeing`
- **Situace:** Několik hodin v kuse projíždíš sociální sítě a cítíš se vyčerpaně, nejistě a podrážděně.

| Reakce | Typ | Zpětná vazba (Feedback) |
| :--- | :---: | :--- |
| Dát si pauzu od sítí | `ideal` | Přerušíš zahlcení a dáš psychice prostor se zregenerovat. |
| Odinstalovat aplikaci | `ok` | Pokud se situace opakuje, dlouhodobá změna může výrazně zlepšit duševní pohodu. |
| Upravit nastavení (časové limity, notifikace) | `ok` | Pomůže ti lépe regulovat používání sítí, i když vyžaduje sebekontrolu. |
| Svěřit se někomu blízkému | `ok` | Sdílení pocitů pomáhá vstřebat zkušenost a získat nadhled. |
| Ignorovat únavu a pokračovat | `bad` | Varovné signály těla se zesilují a hrozí digitální vyčerpání. |
| Zlepšit si náladu jiným obsahem | `bad` | Přidáváš další podněty, které únavu a frustraci obvykle ještě zhorší. |
