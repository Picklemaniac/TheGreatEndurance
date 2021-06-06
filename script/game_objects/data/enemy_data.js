const enemies = {
    pest: [
        {
            name: "Rat",
            stats: [20, 50, 100, 5, 1],
            anatomy: [
                {name: 'head', health: 20, weapon: null, armor: null, offensive : ['Small bite'], defensive: []},
                {name: 'body', health: 20, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front left paw', health: 6, weapon: null, armor: null, offensive : ['Light attack'], defensive: []},
                {name: 'front right paw', health: 6, weapon: null, armor: null, offensive : ['Light attack'], defensive: []},
                {name: 'back left paw', health: 6, weapon: null, armor: null, offensive : [], defensive: ['Quick step']},
                {name: 'back right paw', health: 6, weapon: null, armor: null, offensive : [], defensive: ['Quick step']},
            ]
        }
    ],
    weak: [
        {
            name: "Starving Wolf",
            stats: [40, 50, 100, 5, 3],
            anatomy: [
                {name: 'head', health: 40, weapon: null, armor: null, offensive : ['Small bite'], defensive: []},
                {name: 'body', health: 150, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front left leg', health: 25, weapon: null, armor: null, offensive : ['Light attack'], defensive: []},
                {name: 'front right leg', health: 25, weapon: null, armor: null, offensive : ['Light attack'], defensive: []},
                {name: 'back left leg', health: 25, weapon: null, armor: null, offensive : [], defensive: ['Quick step']},
                {name: 'back right leg', health: 25, weapon: null, armor: null, offensive : [], defensive: ['Quick step']},
            ]
        },
        {
            name: "Crawling Corpse",
            stats: [25, 50, 100, 5, 5],
            anatomy: [
                {name: 'head', health: 40, weapon: null, armor: null, offensive : ['Small bite'], defensive: []},
                {name: 'body', health: 150, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'left claw', health: 15, weapon: 'iron blade', armor: null, offensive: ['Attack'], defensive: []},
                {name: 'right claw', health: 15, weapon: null, armor: null, offensive : ['Attack', 'Light attack'], defensive: []},
                {name: 'left stump', health: 5, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'right stump', health: 5, weapon: null, armor: null, offensive : [], defensive: []},
            ]
        }
    ],
    normal: [
        {
            name: "Hungry Wolf",
            stats: [40, 50, 100, 8, 5],
            anatomy: [
                {name: 'head', health: 40, weapon: null, armor: null, offensive : ['Big bite'], defensive: []},
                {name: 'body', health: 150, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front left leg', health: 35, weapon: null, armor: null, offensive : ['Light attack'], defensive: []},
                {name: 'front right leg', health: 35, weapon: null, armor: null, offensive : ['Light attack'], defensive: []},
                {name: 'back left leg', health: 25, weapon: null, armor: null, offensive : [], defensive: ['Quick step']},
                {name: 'back right leg', health: 25, weapon: null, armor: null, offensive : [], defensive: ['Quick step']},
            ]
        },
    ],
    strong: [
        {
            name: "Ravenous Wolf",
            stats: [70, 50, 125, 10, 8],
            anatomy: [
                {name: 'head', health: 70, weapon: null, armor: null, offensive : ['Big bite'], defensive: []},
                {name: 'body', health: 200, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front left leg', health: 50, weapon: null, armor: null, offensive : ['Heavy attack'], defensive: ['Quick step']},
                {name: 'front right leg', health: 50, weapon: null, armor: null, offensive : ['Heavy attack'], defensive: ['Quick step']},
                {name: 'back left leg', health: 35, weapon: null, armor: null, offensive : [], defensive: ['Evade']},
                {name: 'back right leg', health: 35, weapon: null, armor: null, offensive : [], defensive: ['Evade']},
            ]
        },
        {
            name: "Withering Bear",
            stats: [100, 50, 150, 10, 8],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Evade'],
            special: [],
            anatomy: [
                {name: 'head', health: 100, weapon: null, armor: null, offensive : ['Big bite'], defensive: []},
                {name: 'body', health: 200, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front left leg', health: 50, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front left claw', health: 50, weapon: null, armor: null, offensive : ['Heavy attack'], defensive: []},

                {name: 'front right leg', health: 50, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front right claw', health: 50, weapon: null, armor: null, offensive : ['Heavy attack'], defensive: []},

                {name: 'back left leg', health: 35, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'back right leg', health: 35, weapon: null, armor: null, offensive : [], defensive: []},
            ]
        },
    ],
    beast: [
        {
            name: "Kyumuzic",
            stats: [200, 50, 200, 15, 10],
            anatomy: [
                {name: 'left head', health: 75, weapon: null, armor: null, offensive : ['Big bite'], defensive: []},
                {name: 'middle head', health: 75, weapon: null, armor: null, offensive : ['Big bite'], defensive: []},
                {name: 'right head', health: 75, weapon: null, armor: null, offensive : ['Big bite'], defensive: []},

                {name: 'torso', health: 80, weapon: null, armor: null, offensive : [], defensive: []},

                {name: 'front right leg', health: 90, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'front right claw', health: 90, weapon: null, armor: null, offensive : [], defensive: []},

                {name: 'back left leg', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
                {name: 'back right leg', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            ]
        }
    ]
}

// health
// stamina
// endurance
// prowess
// strength