// Data Layer for Bezpečně na Netu - Educational Edition

/**
 * Module 1: Situational Analysis (Case Studies)
 * Focuses on critical thinking and digital footprint analysis.
 */
const SCENARIOS = [
    {
        id: 'humor_fail',
        category: 'empathy',
        title: 'Humor vs. Urážka',
        description: 'Sdílel/a jsi vtipný příspěvek, ale ostatní se smějí tobě, ne vtipu.',
        options: [
            {
                text: 'Smazat příspěvek',
                type: 'ideal',
                feedback: 'Ukončíš nepříjemnou situaci a dáš najevo, že umíš uznat, když něco nevyšlo.'
            },
            {
                text: 'Uznat chybu (např. "OK, tenhle vtip asi nevyšel 😅")',
                type: 'ideal',
                feedback: 'Krátká reakce často napětí rychle rozpustí a ukáže nadhled.'
            },
            {
                text: 'Ignorovat komentáře',
                type: 'ok',
                feedback: 'Pokud nejde o urážky, pozornost lidí často sama odezní.'
            },
            {
                text: 'Svěřit se někomu blízkému',
                type: 'ok',
                feedback: 'Pomůže ti zpracovat stud nebo trapný pocit a získat odstup.'
            },
            {
                text: 'Dát si na chvíli pauzu od sítí',
                type: 'ok',
                feedback: 'Krátké odpojení sníží emoční tlak a zabrání impulzivním reakcím.'
            },
            {
                text: 'Bránit se v komentářích',
                type: 'bad',
                feedback: 'Obrana nebo vysvětlování humoru většinou zesílí posměch a konflikt.'
            }
        ]
    },
    {
        id: 'flirting_stranger',
        category: 'safety',
        title: 'Neznámý kontakt',
        description: 'Píše ti neznámý člověk, flirtuje a ptá se na osobní informace.',
        options: [
            {
                text: 'Zablokovat dotyčného',
                type: 'ideal',
                feedback: 'Okamžitě přerušíš kontakt a ochráníš své soukromí i psychickou pohodu.'
            },
            {
                text: 'Nahlásit profil nebo zprávy',
                type: 'ideal',
                feedback: 'Pomáháš zastavit obtěžování a chráníš i ostatní uživatele.'
            },
            {
                text: 'Svěřit se někomu',
                type: 'ok',
                feedback: 'Získáš podporu a radu, jak situaci řešit bezpečně a s klidem.'
            },
            {
                text: 'Omezit, kdo ti může psát',
                type: 'ok',
                feedback: 'Snížíš pravděpodobnost, že se podobná situace bude opakovat.'
            },
            {
                text: 'Ignorovat, ono to přestane',
                type: 'bad',
                feedback: 'Krátkodobě může fungovat, ale často vede k tomu, že dotyčný pokračuje.'
            },
            {
                text: 'Navázat konverzaci a odpovídat',
                type: 'bad',
                feedback: 'Zvyšuješ riziko manipulace, zneužití osobních informací nebo nátlaku.'
            }
        ]
    },
    {
        id: 'social_comparison',
        category: 'wellbeing',
        title: 'Srovnávání se',
        description: 'Často se porovnáváš s ostatními na sociálních sítích a máš pocit, že žijí lepší život než ty.',
        options: [
            {
                text: 'Dát si pauzu od sítí',
                type: 'ideal',
                feedback: 'Přerušíš neustálé srovnávání a dáš prostoru návrat k vlastnímu prožívání.'
            },
            {
                text: 'Omezit čas na sítích',
                type: 'ideal',
                feedback: 'Získáš více podnětů z offline života a nebudeš se tolik soustředit na obraz ostatních.'
            },
            {
                text: 'Skrýt účty, které způsobují nepříjemné pocity',
                type: 'ok',
                feedback: 'Snížíš množství spouštěčů negativního srovnávání.'
            },
            {
                text: 'Připomínat si, že lidi sdílí jen to pěkné',
                type: 'ok',
                feedback: 'Pomáhá kognitivně oslabit zkreslení „všichni se mají lépe než já“.'
            },
            {
                text: 'Odinstalovat aplikaci',
                type: 'ok',
                feedback: 'Dlouhodobá změna prostředí může výrazně zlepšit sebevědomí i psychickou pohodu.'
            },
            {
                text: 'Ignorovat pocity, vždyť ono to přejde',
                type: 'bad',
                feedback: 'Neřešené emoce se hromadí a mohou vést k dlouhodobé nespokojenosti nebo úzkosti.'
            }
        ]
    },
    {
        id: 'comment_fight',
        category: 'empathy',
        title: 'Hádka v komentářích',
        description: 'Dostaneš se do vyhrocené hádky v komentářích a ostatní se začnou spojovat proti tobě.',
        options: [
            {
                text: 'Dát si pauzu a přestat reagovat',
                type: 'ideal',
                feedback: 'Zabráníš dalšímu vyhrocování a dáš prostor emocím, aby se uklidnily.'
            },
            {
                text: 'Odejít z diskuze',
                type: 'ideal',
                feedback: 'Ukončíš konflikt bez dalšího psychického zatížení.'
            },
            {
                text: 'Svěřit se někomu blízkému',
                type: 'ok',
                feedback: 'Pomůže ti zpracovat pocit nespravedlnosti a osamění, který v takové situaci často vzniká.'
            },
            {
                text: 'Smazat příspěvek nebo komentář',
                type: 'ok',
                feedback: 'Pokud jsi spustil/a diskuzi, může to pomoci konflikt rychle utlumit.'
            },
            {
                text: 'Zablokovat ty, kteří tě napadají',
                type: 'ok',
                feedback: 'Chráníš se před osobními útoky, i když to neřeší celou diskuzi.'
            },
            {
                text: 'Obhajovat dál svůj názor',
                type: 'bad',
                feedback: 'Přitahuješ další útočníky a konflikt se obvykle ještě více vyhrotí.'
            }
        ]
    },
    {
        id: 'sleep_notifications',
        category: 'wellbeing',
        title: 'Spánek a telefon',
        description: 'Snažíš se usnout, ale neustálá upozornění z telefonu tě stresují.',
        options: [
            {
                text: 'Změnit nastavení notifikací',
                type: 'ideal',
                feedback: 'Získáš kontrolu nad rušivými podněty a podpoříš klidný spánek.'
            },
            {
                text: 'Používat režim Nerušit / noční režim',
                type: 'ideal',
                feedback: 'Mozek se lépe zklidní a snáze přejde do režimu spánku.'
            },
            {
                text: 'Odinstalovat nebo omezit rušivé aplikace',
                type: 'ok',
                feedback: 'Dlouhodobě tím snížíš stres, i když je to spíš radikálnější krok.'
            },
            {
                text: 'Nastavit si pravidlo „bez mobilu před spaním“',
                type: 'ok',
                feedback: 'Pomáhá vytvořit zdravý návyk, i když vyžaduje disciplínu.'
            },
            {
                text: 'Ignorovat upozornění',
                type: 'bad',
                feedback: 'Stres se tím zvyšuje a tělo zůstává v pohotovosti namísto odpočinku.'
            },
            {
                text: 'Neřešit to a spoléhat, že si tělo zvykne',
                type: 'bad',
                feedback: 'Dlouhodobě to může vést k poruchám spánku a vyčerpání.'
            }
        ]
    },
    {
        id: 'fake_news',
        category: 'safety',
        title: 'Škodlivý obsah',
        description: 'Narazíš na příspěvek, který považuješ za nepravdivý, škodlivý nebo jinak nevhodný.',
        options: [
            {
                text: 'Nahlásit příspěvek správcům',
                type: 'ideal',
                feedback: 'Pokud porušuje pravidla, je to nejúčinnější a nejbezpečnější způsob, jak zakročit.'
            },
            {
                text: 'Ignorovat příspěvek, pokud není vážně škodlivý',
                type: 'ok',
                feedback: 'Ne každý nesmysl si zaslouží pozornost a další šíření.'
            },
            {
                text: 'Svěřit se někomu zkušenějšímu',
                type: 'ok',
                feedback: 'Pomůže ti ověřit, zda je reakce potřeba a jak ji zvolit.'
            },
            {
                text: 'Vyjádřit věcný a slušný nesouhlas',
                type: 'ok',
                feedback: 'Má smysl jen tehdy, pokud zvládneš zůstat klidný/á. Můžeš ale příspěvku zvýšit dosah.'
            },
            {
                text: 'Impulzivně zareagovat',
                type: 'bad',
                feedback: 'Emoční reakce často posílí konflikt a zvýší dosah problematického obsahu.'
            },
            {
                text: 'Zablokovat autora',
                type: 'bad',
                feedback: 'Uleví to tobě, ale neřeší to šíření škodlivého obsahu pro ostatní.'
            }
        ]
    },
    {
        id: 'creepy_messages',
        category: 'safety',
        title: 'Obtěžující zprávy',
        description: 'Tvůj známý ti opakovaně posílá divné a nepříjemné zprávy.',
        options: [
            {
                text: 'Zablokovat dotyčného',
                type: 'ideal',
                feedback: 'Jasně tím nastavíš hranice a zabráníš dalšímu obtěžování.'
            },
            {
                text: 'Nahlásit chování platformě',
                type: 'ideal',
                feedback: 'Pokud zprávy překračují hranice slušnosti, je to správný a systémový krok.'
            },
            {
                text: 'Svěřit se někomu',
                type: 'ok',
                feedback: 'Získáš podporu, ujištění a případně pomoc s dalším postupem.'
            },
            {
                text: 'Upravit nastavení soukromí nebo zpráv',
                type: 'ok',
                feedback: 'Můžeš snížit riziko, že tě bude kontaktovat znovu nebo že se to bude opakovat u jiných.'
            },
            {
                text: 'Ignorovat zprávy, ono to přestane',
                type: 'bad',
                feedback: 'Krátkodobě to může fungovat, ale často tím dáváme prostor pokračování obtěžování.'
            },
            {
                text: 'Snažit se mu to vysvětlit',
                type: 'bad',
                feedback: 'Reakce může druhého povzbudit k dalším zprávám nebo situaci vyhrotit.'
            }
        ]
    },
    {
        id: 'photo_consent',
        category: 'empathy',
        title: 'Fotka bez souhlasu',
        description: 'Kamarád nebo člen rodiny zveřejnil tvou fotku bez souhlasu, fotka se ti nelíbí a ostatní ji komentují.',
        options: [
            {
                text: 'Vyjádřit klidně nesouhlas',
                type: 'ideal',
                feedback: 'Jasně nastavíš hranice a dáš druhému šanci situaci napravit.'
            },
            {
                text: 'Požádat o smazání fotky nebo odstranění označení',
                type: 'ideal',
                feedback: 'Přímo řešíš problém a chráníš své soukromí.'
            },
            {
                text: 'Svěřit se někomu',
                type: 'ideal',
                feedback: 'Pomůže ti zorientovat se v emocích a zvolit další postup.'
            },
            {
                text: 'Nahlásit příspěvek',
                type: 'ok',
                feedback: 'Je to oprávněný krok, když není respektováno tvé soukromí, ale měl by navazovat až na další kroky.'
            },
            {
                text: 'Upravit nastavení soukromí',
                type: 'ok',
                feedback: 'Pomůže předejít podobným situacím do budoucna (blokování označování).'
            },
            {
                text: 'Dělat, že se nic neděje',
                type: 'bad',
                feedback: 'Dává to signál, že je v pořádku překračovat tvé hranice.'
            }
        ]
    },
    {
        id: 'bystander_bullying',
        category: 'empathy',
        title: 'Šikana někoho jiného',
        description: 'Spolužák nebo kolega je veřejně zesměšňovaný online, nikdo se ho nezastane. Co uděláš?',
        options: [
            {
                text: 'Nahlásit příspěvek platformě',
                type: 'ideal',
                feedback: 'Pomáháš zastavit šíření škodlivého obsahu a chráníš oběť šikany.'
            },
            {
                text: 'Svěřit se autoritě (učiteli, rodiči)',
                type: 'ideal',
                feedback: 'Zajistíš, že se situací bude zabývat někdo, kdo má možnost zasáhnout.'
            },
            {
                text: 'Veřejně se oběti zastat',
                type: 'ideal',
                feedback: 'Dáváš jasně najevo, že šikana není v pořádku, a můžeš tím prolomit „mlčení davu“.'
            },
            {
                text: 'Vyjádřit oběti podporu soukromě',
                type: 'ok',
                feedback: 'Pro oběť může být velmi posilující vědět, že v tom není sama.'
            },
            {
                text: 'Zablokovat zdroj obsahu nebo ho přestat sledovat',
                type: 'ok',
                feedback: 'Chráníš sebe před negativním obsahem, i když tím problém neřešíš systémově.'
            },
            {
                text: 'Ignorovat situaci',
                type: 'bad',
                feedback: 'Mlčení podporuje šikanu a dává agresorům pocit, že je jejich chování přijatelné.'
            }
        ]
    },
    {
        id: 'stranger_request',
        category: 'safety',
        title: 'Žádost od neznámého',
        description: 'Neznámý člověk bez společných přátel si tě přidá a chce si psát.',
        options: [
            {
                text: 'Zablokovat neznámý účet',
                type: 'ideal',
                feedback: 'Okamžitě tím zabráníš kontaktu a ochráníš své soukromí.'
            },
            {
                text: 'Upravit nastavení soukromí',
                type: 'ideal',
                feedback: 'Dlouhodobě snížíš riziko podobných situací.'
            },
            {
                text: 'Nahlásit účet, pokud působí podezřele',
                type: 'ideal',
                feedback: 'Pomáháš chránit sebe i ostatní uživatele platformy.'
            },
            {
                text: 'Ignorovat žádost a nereagovat',
                type: 'ok',
                feedback: 'V mnoha případech kontakt sám ustane, i když nejde o aktivní řešení.'
            },
            {
                text: 'Svěřit se někomu zkušenějšímu',
                type: 'ok',
                feedback: 'Pomůže získat jistotu, že postupuješ správně.'
            },
            {
                text: 'Navázat konverzaci, o nic nejde',
                type: 'bad',
                feedback: 'Zvyšuješ riziko manipulace, podvodu nebo zneužití osobních informací.'
            }
        ]
    },
    {
        id: 'friend_insult',
        category: 'empathy',
        title: 'Konflikt s kamarádem',
        description: 'Dobrý/á kamarád/ka tě během online hry nebo konverzace urazí a hodně tě to zabolí.',
        options: [
            {
                text: 'Říct, že ti to ublížilo',
                type: 'ideal',
                feedback: 'Dáváš druhému šanci pochopit dopad jeho slov a napravit situaci.'
            },
            {
                text: 'Svěřit se někomu',
                type: 'ideal',
                feedback: 'Pomůže ti zpracovat emoce a získat nadhled, než budeš reagovat.'
            },
            {
                text: 'Dát si pauzu na uklidnění',
                type: 'ok',
                feedback: 'Zabráníš impulzivní reakci, i když samotný problém zatím zůstává otevřený.'
            },
            {
                text: 'Promyslet, co mi ublížilo',
                type: 'ok',
                feedback: 'Pojmenování emocí umožňuje se s nimi lépe vyrovnat.'
            },
            {
                text: 'Předstírat, že se nic nestalo',
                type: 'bad',
                feedback: 'Nevyřešené pocity se mohou projevit později a vztah poškodit.'
            },
            {
                text: 'Kamaráda bez varování zablokovat',
                type: 'bad',
                feedback: 'U blízkého vztahu jde o přehnaný krok bez pokusu o domluvu.'
            }
        ]
    },
    {
        id: 'social_exhaustion',
        category: 'wellbeing',
        title: 'Digitální únava',
        description: 'Několik hodin v kuse projíždíš sociální sítě a cítíš se vyčerpaně, nejistě a podrážděně.',
        options: [
            {
                text: 'Dát si pauzu od sítí',
                type: 'ideal',
                feedback: 'Přerušíš zahlcení a dáš psychice prostor se zregenerovat.'
            },
            {
                text: 'Odinstalovat aplikaci',
                type: 'ok',
                feedback: 'Pokud se situace opakuje, dlouhodobá změna může výrazně zlepšit duševní pohodu.'
            },
            {
                text: 'Upravit nastavení (časové limity, notifikace)',
                type: 'ok',
                feedback: 'Pomůže ti lépe regulovat používání sítí, i když vyžaduje sebekontrolu.'
            },
            {
                text: 'Svěřit se někomu blízkému',
                type: 'ok',
                feedback: 'Sdílení pocitů pomáhá vstřebat zkušenost a získat nadhled.'
            },
            {
                text: 'Ignorovat únavu a pokračovat',
                type: 'bad',
                feedback: 'Varovné signály těla se zesilují a hrozí digitální vyčerpání.'
            },
            {
                text: 'Zlepšit si náladu jiným obsahem',
                type: 'bad',
                feedback: 'Přidáváš další podněty, které únavu a frustraci obvykle ještě zhorší.'
            }
        ]
    }
];

/**
 * Module 2: Day Audit (Planner)
 * Focuses on analyzing daily routines and identifying "toxic" patterns.
 */
const ACTIVITIES = [
    // Essentials (Povinné)
    { id: 'sleep', name: 'Spánek (Regenerace)', type: 'mandatory', icon: 'M', color: 'bg-indigo-100 border-indigo-200' },
    { id: 'food', name: 'Jídlo', type: 'mandatory', icon: 'J', color: 'bg-green-100 border-green-200' },
    { id: 'school', name: 'Škola / Práce', type: 'mandatory', icon: 'Š', color: 'bg-blue-100 border-blue-200' },
    { id: 'hygiene', name: 'Hygiena', type: 'mandatory', icon: 'H', color: 'bg-cyan-100 border-cyan-200' },

    // Lifestyle (Volitelné)
    { id: 'sport', name: 'Pohyb (Offline)', type: 'optional', icon: 'P', color: 'bg-orange-100 border-orange-200' },
    { id: 'creative', name: 'Tvoření / Hobby', type: 'optional', icon: 'T', color: 'bg-pink-100 border-pink-200' },
    { id: 'social_off', name: 'Socializace (Offline)', type: 'optional', icon: 'S', color: 'bg-yellow-100 border-yellow-200' },
    { id: 'relax', name: 'Odpočinek (Bez digi)', type: 'optional', icon: 'O', color: 'bg-purple-100 border-purple-200' },

    // Digital Categories - Split for better analysis
    { id: 'screen_passive', name: 'Pasivní Scrollování', type: 'optional', icon: 'D-', color: 'bg-red-100 border-red-200' },
    { id: 'screen_active', name: 'Aktivní Digi (Práce/Hra)', type: 'optional', icon: 'D+', color: 'bg-blue-100 border-blue-200' }, // Gaming/Chatting creates value/connection

    { id: 'transit', name: 'Cestování', type: 'optional', icon: 'C', color: 'bg-gray-100 border-gray-200' },
];
