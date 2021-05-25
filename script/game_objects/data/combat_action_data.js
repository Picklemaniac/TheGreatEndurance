const combat_actions = {
    //Changes enemy stats in some way
    offensive: [
        {id: 0, name: "Attack", stamina_usage: 20, damage: [0, 5]},
        {id: 1, name: "Light Attack", stamina_usage: 10, damage: [2, 4]},
        {id: 2, name: "Heavy Attack", stamina_usage: 50, damage: [5, 15]},
        {id: 3, name: "Small Bite", stamina_usage: 15, damage: [1, 5]},
        {id: 4, name: "Big Bite", stamina_usage: 80, damage: [1, 20]},
    ],

    //Prevents your own stats from changing in some way
    defensive: [
        {id: 0, name: "Hold up sword", stamina_usage: 20, blocks: [0, 20], fail_chance: 40},
        {id: 1, name: "Hold up shield", stamina_usage: 60, blocks: [0, 50], fail_chance: 20},
        {id: 2, name: "Quick Step", stamina_usage: 30, blocks: [100, 100], fail_chance: 80},
        {id: 3, name: "Evade", stamina_usage: 60, blocks: [100, 100], fail_chance: 50},
    ],

    //Custom combat ability
    special: [
        {id: 0, name: "Parry"},
    ]
}