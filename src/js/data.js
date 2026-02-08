// Data Layer for Bezpečně na Netu

/**
 * Scenarios for Task 1 (Quiz)
 * Based on PRD section 5.3 and 11.2
 */
const SCENARIOS = [
    {
        id: 'humor',
        title: 'Vtipný příspěvek',
        description: 'Sdílel/a jsi vtipný příspěvek, ale ostatní se smějí tobě, ne vtipu. Co uděláš?',
        options: [
            { text: 'Smazat příspěvek', type: 'ideal', feedback: '🌟 Skvělé! Ukončíš nepříjemnou situaci a dáš najevo, že umíš uznat, když něco nevyšlo.' },
            { text: 'Uznat chybu (např. "Tohle nevyšlo 😅")', type: 'ideal', feedback: '🌟 Výborně! Krátká reakce často napětí rychle rozpustí.' },
            { text: 'Ignorovat komentáře', type: 'ok', feedback: '🤔 Jde to. Pokud nejde o urážky, pozornost lidí často sama odezní.' },
            { text: 'Svěřit se někomu blízkému', type: 'ok', feedback: '🤔 Dobrý nápad. Pomůže ti to zpracovat stud a získat odstup.' },
            { text: 'Dát si na chvíli pauzu od sítí', type: 'ok', feedback: '🤔 Rozumné. Krátké odpojení sníží emoční tlak.' },
            { text: 'Bránit se v komentářích', type: 'bad', feedback: '⚠️ Pozor! Obrana nebo vysvětlování humoru většinou zesílí posměch.' }
        ]
    },
    {
        id: 'flirting',
        title: 'Neznámý člověk',
        description: 'Píše ti neznámý člověk, flirtuje a ptá se na osobní informace. Co vybereš?',
        options: [
            { text: 'Zablokovat dotyčného', type: 'ideal', feedback: '🌟 Skvělá práce! Okamžitě přerušíš kontakt a ochráníš své soukromí.' },
            { text: 'Nahlásit profil nebo zprávy', type: 'ideal', feedback: '🌟 Super! Pomáháš zastavit obtěžování a chráníš i ostatní.' },
            { text: 'Svěřit se někomu dospělému', type: 'ok', feedback: '🤔 Dobře děláš. Získáš podporu a radu, jak situaci řešit.' },
            { text: 'Omezit, kdo ti může psát', type: 'ok', feedback: '🤔 Správně. Snížíš pravděpodobnost, že se to bude opakovat.' },
            { text: 'Ignorovat, ono to přestane', type: 'bad', feedback: '⚠️ Rizikové. Často to vede k tomu, že dotyčný pokračuje.' },
            { text: 'Navázat konverzaci a odpovídat', type: 'bad', feedback: '⚠️ Nebezpečné! Zvyšuješ riziko manipulace a zneužití informací.' }
        ]
    },
    {
        id: 'comparison',
        title: 'Srovnávání se',
        description: 'Často se porovnáváš s ostatními na sítích a máš pocit, že žijí lepší život než ty. Co uděláš?',
        options: [
            { text: 'Dát si pauzu od sítí', type: 'ideal', feedback: '🌟 Nejlepší řešení! Přerušíš srovnávání a vrátíš se k vlastnímu prožívání.' },
            { text: 'Omezit čas na sítích', type: 'ideal', feedback: '🌟 Skvělé! Získáš více podnětů z offline života.' },
            { text: 'Skrýt účty, co ti vadí', type: 'ok', feedback: '🤔 Pomůže to. Snížíš množství spouštěčů negativního srovnávání.' },
            { text: 'Připomínat si, že lidé sdílí jen to pěkné', type: 'ok', feedback: '🤔 Pravda. Lidé na sítě dávají jen to nejlepší, ne realitu.' },
            { text: 'Odinstalovat aplikaci', type: 'ok', feedback: '🤔 Radikální, ale účinné. Změna prostředí zlepší duševní pohodu.' },
            { text: 'Ignorovat, vždyť ono to přejde', type: 'bad', feedback: '⚠️ Pozor. Neřešené emoce se hromadí a mohou vést k úzkosti.' }
        ]
    }
];

/**
 * Activities for Task 2 (Planner)
 * Based on PRD section 5.7 and 11.2
 * Colors are compliant with Tailwind classes or hex codes generally usable.
 * Using generic color names that will be mapped to classes in UI if needed, 
 * or directly using hex for style binding.
 */
const ACTIVITIES = [
    // Mandatory
    { id: 'sleep', name: 'Spánek', type: 'mandatory', icon: '😴', color: 'bg-indigo-200' },
    { id: 'food', name: 'Jídlo', type: 'mandatory', icon: '🍔', color: 'bg-green-200' },
    { id: 'school', name: 'Škola', type: 'mandatory', icon: '🏫', color: 'bg-blue-200' },
    { id: 'hygiene', name: 'Hygiena', type: 'mandatory', icon: '🚿', color: 'bg-cyan-200' },

    // Optional
    { id: 'sport', name: 'Pohyb', type: 'optional', icon: '⚽', color: 'bg-orange-200' },
    { id: 'art', name: 'Tvoření', type: 'optional', icon: '🎨', color: 'bg-pink-200' },
    { id: 'chat', name: 'Povídání', type: 'optional', icon: '🗣️', color: 'bg-yellow-200' },
    { id: 'relax', name: 'Odpočinek', type: 'optional', icon: '🧘', color: 'bg-purple-200' },
    { id: 'screen', name: 'Obrazovky', type: 'optional', icon: '📱', color: 'bg-red-200' }, // This affects screen time stats
    { id: 'read', name: 'Čtení', type: 'optional', icon: '📖', color: 'bg-emerald-200' },
    { id: 'travel', name: 'Cestování', type: 'optional', icon: '🚌', color: 'bg-gray-200' },
    { id: 'other', name: 'Jiné', type: 'optional', icon: '✨', color: 'bg-teal-200' }
];
