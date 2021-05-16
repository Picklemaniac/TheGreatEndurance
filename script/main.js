
let player1 = new Player(2, 3); //I should be able to move north and south from here
let map1 = new Map();
let inventory1 = new Inventory();
let selectedItem;
let selectedItemtype;
const eatButton = document.getElementById('eat');
const drinkButton = document.getElementById('drink');
const equipButton = document.getElementById('equip');
const discardButton = document.getElementById('discard');


function move(y, x) {
    player1.ylocation += y;
    player1.xlocation += x;
    player1.controls();
    map1.mapShow();
    switch (map1.grid[player1.ylocation][player1.xlocation]) {
        case 2:
            if (confirm("Do you want this chest?") == true) {
                let itemKind = Math.floor(Math.random() * 3);
                let item = ItemPool(itemKind);
                inventory1.addItem(itemKind, item);
                inventory1.fillInventory();
                map1.grid[player1.ylocation][player1.xlocation] = 1;
            }

            break;
    }
}

function eat() {
    player1.hunger += selectedItem.fills;
    showStats();
    let index = inventory1.Foods.indexOf(selectedItem);
    inventory1.Foods.splice(index, 1);
    inventory1.fillInventory();
    selectedItem = null;

}

function discard() {
    if (confirm('are you sure you want to discard this item?')) {
        switch (selectedItemtype) {
            case 'weapon':

                break;

            case 'food':

                let index = inventory1.Foods.indexOf(selectedItem);
                inventory1.Foods.splice(index, 1);
                inventory1.fillInventory();
                break;

            case 'drink':

                break;
        }
    }

}

function showStats() {
    document.getElementById('health').innerText = player1.health
    document.getElementById('attack').innerText = player1.attack
    document.getElementById('thirst').innerText = player1.thirst
    document.getElementById('hunger').innerText = player1.hunger
    //document.getElementById('weapon').innerText = player1.weaponSelected
}

function weaponSelected() {
    eatButton.disabled = true;
    drinkButton.disabled = true;
    equipButton.disabled = false;
    discardButton.disabled = false;
}

function foodSelected(selectedFood) {
    eatButton.disabled = false;
    drinkButton.disabled = true;
    equipButton.disabled = true;
    discardButton.disabled = false;
    selectedItem = JSON.parse(selectedFood)
    selectedItemtype = 'food';
    console.log(selectedItem);
}

function drinkSelected() {
    eatButton.disabled = true;
    drinkButton.disabled = false;
    equipButton.disabled = true;
    discardButton.disabled = false;
}

document.getElementById("north").addEventListener("click", function () {
    move(-1, 0);
});
document.getElementById("east").addEventListener("click", function () {
    move(0, 1);
});
document.getElementById("south").addEventListener("click", function () {
    move(1, 0);
});
document.getElementById("west").addEventListener("click", function () {
    move(0, -1);
});
showStats()
player1.controls();