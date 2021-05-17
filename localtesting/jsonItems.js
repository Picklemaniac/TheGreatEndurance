const lootTiers = [
    {min: 0, max: 0.2}, //trash 20%
    {min: 0.2, max: 0.5}, // bad 30%
    {min: 0.5, max: 0.8}, // medium 30%
    {min: 0.8, max: 0.95}, // good 15%
    {min: 0.95, max: Infinity} // valuable 5%
]

const lootTypes = [
    {min: 0, max: 0.5}, //Consumable (50%)
    {min: 0.5, max: 0.8}, // Item (30%)
    {min: 0.8, max: Infinity}, // Weapon (20%)
]

function roomLoot() {
    let lootType = Math.random(); // define a random loot type
    let lootRarity = Math.random(); // define a random loot tier

    const selectedLootType = lootTypes.findIndex(rarity => rarity.min <= lootType && rarity.max > lootType); // Random loot type
    const selectedRarity = lootTiers.findIndex(rarity => rarity.min <= lootRarity && rarity.max > lootRarity); // Random loot tier

    let matchingLoot; //Variable that gets filled with all possible loot

    switch (selectedLootType) {
        //Case Consumable
        case 0:
            matchingLoot = items.consumable.filter(item => item.rarity === selectedRarity); //Fill with all possible loot
            break;
        //Case Item
        case 1:
            matchingLoot = items.item.filter(item => item.rarity === selectedRarity); //Fill with all possible loot
            break;
        //Case Weapon
        case 2:
            matchingLoot = items.weapons.filter(item => item.rarity === selectedRarity); //Fill with all possible loot
            break;
    }

    //Return a random piece of all the possible loot. If it doesn't exist give nothing.
    return matchingLoot[Math.floor(Math.random() * matchingLoot.length)] ?? null;
}

console.log(roomLoot())


//Random loot table test
let nothing = 0
let trash = 0;
let bad = 0;
let medium = 0;
let good = 0;
let valuable = 0;

function newLootTable() {
    for (let i = 0; i < 200; i++) {
        let nr = Math.random();

        if (nr < 0.9){
            let room = Math.random();

            if (room < 0.2) {
                trash++;
            }
            else if (room < 0.50) {
                bad++;
            }
            else if (room < 0.80) {
                medium++;
            }
            else if (room < 0.95) {
                good++;
            }
            else if (room < 1) {
                valuable++;
            }
            else {
                console.log("Iets ging mis?");
            }
        }
        else {
            nothing++;
        }
    }

    console.log(`Final results: ${nothing} rooms had nothing.
${trash} rooms had trash loot
${bad} rooms had bad loot
${medium} rooms had medium loot
${good} rooms had good loot
${valuable} rooms had valuable loot
`)
}

