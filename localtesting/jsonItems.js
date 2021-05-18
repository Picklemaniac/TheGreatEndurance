// const lootTiers = [
//     {min: 0, max: 0.2}, //trash 20%
//     {min: 0.2, max: 0.5}, // bad 30%
//     {min: 0.5, max: 0.8}, // medium 30%
//     {min: 0.8, max: 0.95}, // good 15%
//     {min: 0.95, max: Infinity} // valuable 5%
// ]
//
// const lootTypes = [
//     {min: 0, max: 0.5}, //Consumable (50%)
//     {min: 0.5, max: 0.8}, // Item (30%)
//     {min: 0.8, max: Infinity}, // Equipment (20%)
// ]
//
// function generateRoomLoot() {
//     let lootType = Math.random(); // define a random loot type
//     let lootRarity = Math.random(); // define a random loot tier
//
//     const selectedLootType = lootTypes.findIndex(rarity => rarity.min <= lootType && rarity.max > lootType); // Random loot type
//     const selectedRarity = lootTiers.findIndex(rarity => rarity.min <= lootRarity && rarity.max > lootRarity); // Random loot tier
//
//     let matchingLoot; //Variable that gets filled with all possible loot
//
//     switch (selectedLootType) {
//         //Case Consumable
//         case 0:
//             matchingLoot = items.consumables.filter(item => item.rarity === selectedRarity); //Fill with all possible loot
//             break;
//         //Case Item
//         case 1:
//             matchingLoot = items.items.filter(item => item.rarity === selectedRarity); //Fill with all possible lootbreak;
//             break;
//         //Case Weapon
//         case 2:
//             matchingLoot = items.equipment.filter(item => item.rarity === selectedRarity); //Fill with all possible loot
//             break;
//     }
//
//     //Return a random piece of all the possible loot. If it doesn't exist give nothing.
//     return matchingLoot[[Math.floor(Math.random() * matchingLoot.length)] ?? null];
// }