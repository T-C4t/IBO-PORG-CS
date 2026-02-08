// Data Layer for Bezpečně na Netu

/**
 * Scenarios for Task 1 (Quiz)
 * Based on PRD section 5.3 and 11.2
 */
const SCENARIOS = [
    {
        id: 'bullying',
        title: 'Kyberšikana',
        description: 'Pod tvou fotkou na Instagramu se objevil ošklivý komentář: "Jsi trapný/á a nikdo tě nemá rád!" Co uděláš?',
        options: [
            {
                text: 'Napíšu mu taky něco ošklivého, ať vidí!',
                type: 'bad',
                feedback: '⚠️ To není dobrý nápad. Odplácení jen zhorší situaci a můžeš se stát také agresorem. Zlo plodí zlo!'
            },
            {
                text: 'Smažu to a budu dělat, že to nevidím.',
                type: 'ok',
                feedback: '🤔 To je v pořádku, ale agresor to může zkusit znovu. Někdy je lepší to nenechat jen tak.'
            },
            {
                text: 'Komentář nahlásím, autora zablokuju a řeknu to rodičům.',
                type: 'ideal',
                feedback: '🌟 Skvělá práce! To je nejlepší řešení. Nahlášením pomůžeš i ostatním a blokace tě ochrání. Rodiče ti pomůžou situaci řešit.'
            }
        ]
    },
    {
        id: 'stranger',
        title: 'Cizí člověk',
        description: 'Někdo, koho neznáš, ti poslal žádost o přátelství a zprávu: "Ahoj, máš super profil! Nechceš si pokecat? Bydlím kousek."',
        options: [
            {
                text: 'Přijmu ho, chci mít hodně sledujících.',
                type: 'bad',
                feedback: '⚠️ Pozor! Nikdy nevíš, kdo se skrývá za profilem. Cizí lidé na internetu mohou být nebezpeční.'
            },
            {
                text: 'Zeptám se, kdo to je a odkud mě zná.',
                type: 'ok',
                feedback: '🤔 Opatrnost je na místě, ale odepisováním prozrazuješ, že jsi aktivní. Cizí člověk může lhát.'
            },
            {
                text: 'Žádost odmítnu a profil zablokuju. Cizí lidi nepřidávám.',
                type: 'ideal',
                feedback: '🌟 Výborně! Cizí lidi na internetu si do přátel nepřidávej. Bezpečí je přednější než počet sledujících.'
            }
        ]
    },
    {
        id: 'password',
        title: 'Heslo',
        description: 'Nejlepší kamarád/ka po tobě chce heslo k tvému TikToku, aby se mohl/a podívat na videa, co ti chodí "pro tebe".',
        options: [
            {
                text: 'Jasně, je to kámoš/ka, věřím mu/jí.',
                type: 'bad',
                feedback: '⚠️ Nikdy nikomu nedávej své heslo! Ani nejlepšímu kamarádovi. Můžete se pohádat a on/a toho může zneužít.'
            },
            {
                text: 'Napíšu mu/jí heslo na papírek, ne do chatu.',
                type: 'bad',
                feedback: '⚠️ Ani na papírek! Heslo je jen tvoje. Kdo zná heslo, může se vydávat za tebe.'
            },
            {
                text: 'Řeknu ne. Heslo je tajné. Můžeme se kouknout spolu na mém mobilu.',
                type: 'ideal',
                feedback: '🌟 Přesně tak! Heslo je jako kartáček na zuby - nikomu se nepůjčuje. Kouknout se spolu je super řešení.'
            }
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
