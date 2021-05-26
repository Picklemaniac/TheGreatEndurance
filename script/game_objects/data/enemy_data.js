const enemies = {
    pest: [
        {
            name: "Rat",
            stats: [10, 5, 0, 4, 60],
            offensive: ['Attack', 'Small bite'],
            defensive: ['Quick step'],
            special: []
        }
    ],
    weak: [
        {
            name: "Starving Wolf",
            stats: [40, 6, 0, 10, 80],
            offensive: ['Light attack', 'Heavy attack'],
            defensive: ['Quick step'],
            special: []
        },
        {
            name: "Crawling Corpse",
            stats: [25, 10, 0, 5, 100],
            offensive: ['Light attack', 'Big bite'],
            defensive: ['Hold up shield'], special: []}
    ],
    normal: [
        {
            name: "Hungry Wolf",
            stats: [40, 10, 0, 15, 100],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Hold up sword', 'Evade'],
            special: []},
    ],
    strong: [
        {
            name: "Ravenous Wolf",
            stats: [40, 10, 0, 20, 150],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Evade'],
            special: []
        },
        {
            name: "Withering Bear",
            stats: [100, 15, 0, 30, 100],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Evade'],
            special: []
        },
    ],
    beast: [
        {
            name: "QMusic",
            stats: [200, 20, 0, 30, 100],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Evade']
        }
    ]
}

// health
// attack
// stamina
// staminaRegen
// maxStamina