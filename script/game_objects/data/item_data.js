const items = {
    equipment: [
        { type: "weapon", rarity: 0, inv_space: 2, name: "stone blade", description: ""},
        { type: "weapon", rarity: 1, inv_space: 2, name: "iron blade", description: ""},
        { type: "weapon", rarity: 2, inv_space: 2, name: "Cruel Edge", description: ""},

        { type: "weapon", rarity: 0, inv_space: 3, name: "stone blade", description: ""},
        { type: "weapon", rarity: 1, inv_space: 3, name: "iron blade", description: ""},
        { type: "weapon", rarity: 3, inv_space: 3, name: "Cruel Blade", description: ""},

        { type: "weapon", rarity: 0, inv_space: 1, name: "Stone gauntlets", description: "", },
        { type: "weapon", rarity: 1, inv_space: 1, name: "Iron gauntlets", description: "", },
        { type: "weapon", rarity: 4, inv_space: 1, name: "Cruel hands", description: "", },

        { type: "weapon", rarity: 0, inv_space: 2, name: "Stone pole", description: ""},
        { type: "weapon", rarity: 2, inv_space: 2, name: "Iron pole", description: ""},
        { type: "weapon", rarity: 3, inv_space: 2, name: "Cruel Judgement", description: ""},
    ],
    consumables: [
        //Stats == Health, attack, thirst hunger
        { type: "food",  rarity: 0, inv_space: 1, name: "Edible shit", description: "", stats: [0, 0, 0, 1]},
        { type: "food",  rarity: 1, inv_space: 1, name: "Bigger edible shit", description: "", stats: [0, 0, 0, 2]},
        { type: "food",  rarity: 2, inv_space: 1, name: "Legendary edible shit", description: "", stats: [0, 0, 0, 3]},

        { type: "food",  rarity: 0, inv_space: 1, name: "Cookie", description: "", stats: [0, 0, 0, 1]},
        { type: "food",  rarity: 1, inv_space: 1, name: "Big cookie", description: "", stats: [0, 0, 0, 2]},
        { type: "food",  rarity: 2, inv_space: 1, name: "American cookie", description: "", stats: [0, 0, 0, 3]},

        { type: "food",  rarity: 0, inv_space: 1, name: "Rice bowl", description: "", stats: [0, 0, 0, 1]},
        { type: "food",  rarity: 2, inv_space: 1, name: "Big rice bowl", description: "", stats: [0, 0, 0, 2] },
        { type: "food",  rarity: 3, inv_space: 1, name: "Giant rice bowl", description: "", stats: [0, 0, 0, 3] },

        { type: "food",  rarity: 0, inv_space: 1, name: "Bread slice", description: "", stats: [0, 0, 0, 1]},
        { type: "food",  rarity: 1, inv_space: 1, name: "Half bread", description: "", stats: [0, 0, 0, 2]},
        { type: "food",  rarity: 4, inv_space: 1, name: "Full bread", description: "", stats: [0, 0, 0, 3]},

        { type: "drink", rarity: 0, inv_space: 1, name: "Water", description: "", stats: [0, 0, 1, 0]},
        { type: "drink", rarity: 1, inv_space: 1, name: "Clean water", description: "", stats: [0, 0, 2, 0]},
        { type: "drink", rarity: 3, inv_space: 1, name: "Expensive water", description: "", stats: [0, 0, 3, 0]},

        { type: "drink", rarity: 0, inv_space: 1, name: "Sugary drink", description: "", stats: [0, 1, -1, 0]},
        { type: "drink", rarity: 1, inv_space: 1, name: "Big sugary drink", description: "", stats: [0, 2, -2, 0]},
        { type: "drink", rarity: 4, inv_space: 1, name: "Giant sugary drink", description: "", stats: [0, 3, -3, 0]},

        { type: "healing", rarity: 2, inv_space: 1, name: "Mysterious health fluid", description: "",  stats: [5, 0, 5, 0]},
        { type: "healing", rarity: 2, inv_space: 1, name: "Piece of willow bark", description: "",  stats: [5, 0, 0, 5]},

        { type: "healing", rarity: 0, inv_space: 1, name: "Bandage", description: "", stats: [2, 0, 0, 1]},
        { type: "healing", rarity: 4, inv_space: 1, name: "Disinfectant", description: "",  stats: [20, 0, 0, 1]},
        { type: "healing", rarity: 2, inv_space: 1, name: "Anti-Venom", description: "",  stats: [10, 0, 0, 0]}, //Health, attack, thirst hunger
    ],
    items: [
        { type: "junk", rarity: 0, inv_space: 1, name: "Skeleton Bone", description: "",},
        { type: "junk", rarity: 1, inv_space: 1, name: "Piece of shit", description: "" },
        { type: "junk", rarity: 2, inv_space: 1, name: "Mossy pebbles", description: "" },
        { type: "junk", rarity: 3, inv_space: 1, name: "Big ol bowl",   description: "" },
        { type: "junk", rarity: 4, inv_space: 1, name: "Legendary Bowl", description: "" },
    ],
}