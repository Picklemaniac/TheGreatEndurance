class Item {
    constructor(name, info, rarity) {
        this.name = name;
        this.info = info;
        this.rarity = rarity
    }
}

class Food extends Item {
    constructor(name, info, rarity, fills) {
        super(name, info, rarity);
        this.fills = fills;
    }
}

class Weapon extends Item {
    constructor(name, info, rarity) {
        super(name, info, rarity);
    }
}

class Drink extends Item {
    constructor(name, info, rarity) {
        super(name, info, rarity);
    }
}

//weapons

stoneBlade = new Weapon('stone blade', '', 0);
ironBlade = new Weapon('iron blade', '', 1);
cruelEdge = new Weapon('cruel edge', '', 2);

stoneAxe = new Weapon('Stone axe', '', 0);
ironAxe = new Weapon('Stone axe', '', 1);
cruelBrute = new Weapon('Stone axe', '', 2);

stoneGauntlets = new Weapon('Stone gauntlets', '', 0);
ironGauntlets = new Weapon('Iron gauntlets', '', 1)
cruelHands = new Weapon('Cruel hands', '', 2);

stonePole = new Weapon('Stone pole', '', 0);
ironPole = new Weapon('Iron pole', '', 1)
cruelJudgement = new Weapon('Cruel Judgement', '', 2)

//foods

shit = new Food('shit', '', 0, 1);
biggerShit = new Food('bigger shit', '', 1, 2);
legendaryShit = new Food('Legendary shit', '', 2, 3);

cookie = new Food('Cookie', '', 0, 1);
bigCookie = new Food('Big Cookie', '', 1, 2);
americanCookie = new Food('American Cookie', '', 2, 3);

riceBowl = new Food('Rice bowl', '', 0, 1);
bigRiceBowl = new Food('Big Rice bowl', '', 1, 2);
giantRiceBowl = new Food(' Giant Rice bowl', '', 2, 3);

breadSlice = new Food('Bread slice', '', 0, 1);
halfBread = new Food('Half bread', '', 1, 2);
fullBread = new Food('Full bread', '', 2, 3);

// drinks

water = new Drink('water', '', 0);
cleanWater = new Drink('clean water', '', 1);
expenisveWater = new Drink('expenisve water', '', 2);

healthPotion = new Drink('Health potion', '', 0);
bigHealthPotion = new Drink('Big heatlh potion', '', 1);
giantHealthPotion = new Drink('Giant health potion', '', 2);

manaPotion = new Drink('Mana potion', '', 0);
bigManaPotion = new Drink('Big mana potion', '', 1);
giantManaPotion = new Drink('Giant mana potion', '', 2);

sugaryDrink = new Drink('Sugary drink', '', 0);
bigSugaryDrink = new Drink('Big Sugary Drink', '', 1);
giantSugaryDrink = new Drink('Giant sugary drink', '', 2);

//Making the arrays for each kind of item

function ItemPool(itemKind) {
    let itemRarity;
    let types;

    let weapons = [
        [stoneBlade, ironBlade, cruelEdge],
        [stoneAxe, ironAxe, cruelBrute],
        [stoneGauntlets, ironGauntlets, cruelHands],
        [stonePole, ironPole, cruelJudgement],
    ];

    let foods = [
        [shit, biggerShit, legendaryShit],
        [cookie, bigCookie, americanCookie],
        [riceBowl, bigRiceBowl, giantRiceBowl],
        [breadSlice, halfBread, fullBread],
    ];

    let drinks = [
        [water, cleanWater, expenisveWater],
        [healthPotion, bigHealthPotion, giantHealthPotion],
        [manaPotion, bigManaPotion, giantManaPotion],
        [sugaryDrink, bigSugaryDrink, giantSugaryDrink],
    ];

    switch (itemKind) {
        case 0:
            types = weapons.length - 1;
            itemRarity = Math.floor(Math.random() * weapons[types].length);
            return weapons[Math.floor(Math.random() * types)][itemRarity];
        case 1:
            types = foods.length - 1;
            itemRarity = Math.floor(Math.random() * foods[types].length);
            return foods[Math.floor(Math.random() * types)][itemRarity];
        case 2:
            types = drinks.length - 1;
            itemRarity = Math.floor(Math.random() * drinks[types].length);
            return drinks[Math.floor(Math.random() * types)][itemRarity];
    }

}