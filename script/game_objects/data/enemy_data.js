const enemies = {
    pest: [
        {
            name: "Rat",
            stats: [10, 50, 100, 5, 1],
            offensive: ['Attack', 'Small bite'],
            defensive: ['Quick step'],
            special: []
        }
    ],
    weak: [
        {
            name: "Starving Wolf",
            stats: [40, 50, 100, 5, 3],
            offensive: ['Light attack', 'Heavy attack'],
            defensive: ['Quick step'],
            special: [],
            anatomy: [
                'head', 'torso', 'front left leg', 'front right leg', 'back left leg', 'back right leg'
            ]
        },
        {
            name: "Crawling Corpse",
            stats: [25, 50, 100, 5, 5],
            offensive: ['Light attack', 'Big bite'],
            defensive: ['Hold up shield'],
            special: [],
            anatomy: [
                'head', 'torso', 'left arm', 'right arm', 'left stump', 'right stump'
            ]
        }
    ],
    normal: [
        {
            name: "Hungry Wolf",
            stats: [40, 50, 100, 8, 5],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Hold up sword', 'Evade'],
            special: [],
            anatomy: {

            }
        },
    ],
    strong: [
        {
            name: "Ravenous Wolf",
            stats: [40, 50, 125, 10, 8],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Evade'],
            special: [],
            anatomy: [
                'head', 'torso', 'front left leg', 'front right leg', 'back left leg', 'back right leg'
            ]
        },
        {
            name: "Withering Bear",
            stats: [100, 50, 150, 10, 8],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Evade'],
            special: [],
            anatomy: [
                'head', 'torso', 'front left leg', 'front right leg', 'back left leg', 'back right leg'
            ]
        },
    ],
    beast: [
        {
            name: "Kyumuzic",
            stats: [200, 50, 200, 15, 10],
            offensive: ['Attack', 'Heavy attack', 'Big bite'],
            defensive: ['Evade'],
            special: [],
            anatomy: [
                'left head', 'middle head', 'right head', 'left tenctacle arm', 'right tenctacle arm', 'front left leg', 'front right leg', 'back left leg', 'back right leg'
            ]
        }
    ]
}

// health
// stamina
// endurance
// prowess
// strength