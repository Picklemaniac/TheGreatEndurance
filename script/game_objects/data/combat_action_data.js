const combat_actions = {
    //Changes enemy stats in some way
    offensive: [
        {name: "Punch", stamina_usage: 15, damage: 1},
        {name: "Claw", stamina_usage: 20, damage: 2},
        {name: "Scratch", stamina_usage: 40, damage: 4},
        {name: "Tear", stamina_usage: 50, damage: 5},

        {name: "Uppercut", stamina_usage: 30, damage: 3},
        {name: "Slash", stamina_usage: 40, damage: 5},

        {name: "Attack", stamina_usage: 20, damage: 1},
        {name: "Light attack", stamina_usage: 10, damage: 2},
        {name: "Heavy attack", stamina_usage: 50, damage: 3},
        {name: "Small bite", stamina_usage: 15, damage: 2},
        {name: "Big bite", stamina_usage: 80, damage: 4},
    ],

    //Prevents your own stats from changing in some way
    defensive: [
        {name: "Defend", stamina_usage: 20, blocks: [0, 20]},
        {name: "Hold up sword", stamina_usage: 20, blocks: [0, 20]},
        {name: "Hold up shield", stamina_usage: 60, blocks: [0, 50]},
        {name: "Quick step", stamina_usage: 30, blocks: [100, 100]},
        {name: "Evade", stamina_usage: 60, blocks: [100, 100]},
    ],
}