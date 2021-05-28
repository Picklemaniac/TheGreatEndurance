const items = {
    equipment: [
        { type: "weapon", rarity: 0, inv_space: 2, weight: 2, attack: 3, name: "Stone blade", description: "A big blade made of stone"},
        { type: "weapon", rarity: 1, inv_space: 2, weight: 1, attack: 3, name: "Iron blade", description: "A big blade made of iron"},
        { type: "weapon", rarity: 2, inv_space: 2, weight: 2, attack: 3, name: "Cruel Edge", description: "The cruelest of all blades"},

        { type: "weapon", rarity: 0, inv_space: 3, weight: 2, attack: 3, name: "stone blade", description: ""},
        { type: "weapon", rarity: 1, inv_space: 3, weight: 1, attack: 3, name: "iron blade", description: ""},
        { type: "weapon", rarity: 3, inv_space: 3, weight: 2, attack: 3, name: "Cruel Blade", description: ""},

        { type: "weapon", rarity: 0, inv_space: 1, weight: 2, attack: 3, name: "Stone gauntlets", description: "", },
        { type: "weapon", rarity: 1, inv_space: 1, weight: 1, attack: 3, name: "Iron gauntlets", description: "", },
        { type: "weapon", rarity: 4, inv_space: 1, weight: 2, attack: 3, name: "Cruel hands", description: "", },

        { type: "weapon", rarity: 0, inv_space: 2, weight: 2, attack: 3, name: "Stone pole", description: ""},
        { type: "weapon", rarity: 2, inv_space: 2, weight: 1, attack: 3, name: "Iron pole", description: ""},
        { type: "weapon", rarity: 3, inv_space: 2, weight: 2, attack: 3, name: "Cruel Judgement", description: ""},

        { type: "armor", rarity: 0, inv_space: 2, weight: 1, defense: 1, name: "Leather boots", description: "Boots made of leather"},
        { type: "armor", rarity: 1, inv_space: 2, weight: 2, defense: 3, name: "Torn leggings", description: "Ragged leggings, that look like they haven't been worn in ages"},
        { type: "armor", rarity: 2, inv_space: 2, weight: 1, defense: 2, name: "Iron gauntles (Armor)", description: "Rusty gauntles made of a strong material"},
        { type: "armor", rarity: 3, inv_space: 2, weight: 2, defense: 2, name: "Fur cap", description: "A small, yet thick cap made of fur"},
        { type: "armor", rarity: 4, inv_space: 2, weight: 5, defense: 5, name: "Iron chestplate", description: "A large metalic plate of iron"},
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