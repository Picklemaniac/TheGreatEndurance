let player1 = new Player(2, 3);
let map1 = new Map();
let inventory1 = new Inventory();

let selectedItem;

const weaponsDisplay = document.getElementById('weaponsDisplay');
const foodsDisplay = document.getElementById('foodsDisplay');
const drinksDisplay = document.getElementById('drinksDisplay');

function move(y, x) {
    player1.ylocation += y;
    player1.xlocation += x;
    player1.displayControls();
    map1.renderMap();
    switch (map1.grid[player1.ylocation][player1.xlocation]) {
        case 2:
            if (confirm("Take this item?") === true) {
                let item = generateRoomLoot();
                inventory1.addItemToInventory(item);
                console.log(inventory1.inventoryContent)
                inventory1.displayInventory();
                map1.grid[player1.ylocation][player1.xlocation] = 1;
            }
            break;
    }
}

function selectItem(type) {
    switch(type) {
        case "food":
            selectedItem = foodsDisplay.value;
            break;
        case "drink":
            selectedItem = foodsDisplay.value;
            break;
        case "weapon":
            selectedItem = weaponsDisplay.value;
            break;
        default:
            alert("Impossible selection? How did you do this?!");
            break;
    }
}

function consume(type) {
    switch(type) {
        case "food":
            player1.consume(JSON.parse(foodsDisplay.value));
            break;
        case "drink":
            player1.consume(JSON.parse(drinksDisplay.value));
            break;
        default:
            alert("Nothing selected");
            break;
    }
    player1.displayStats();
}

function discard() {
    if (selectedItem === 0 || selectedItem === undefined) return;

    if (confirm(`Are you sure you want to discard ${selectedItem}?`)) {
        inventory1.removeItemFromInventory(selectedItem);
    }
}

document.getElementById("north").addEventListener("click", function () {move(-1, 0);});
document.getElementById("east").addEventListener("click", function () {move(0, 1);});
document.getElementById("south").addEventListener("click", function () {move(1, 0);});
document.getElementById("west").addEventListener("click", function () {move(0, -1);});

player1.displayStats();
player1.displayControls();