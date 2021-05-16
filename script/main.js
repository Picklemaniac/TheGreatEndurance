
let player1 = new Player(2, 3); //I should be able to move north and south from here
let map1 = new Map();
let inventory1 = new Inventory();


function move(y, x) {
    player1.ylocation += y;
    player1.xlocation += x;
    player1.controls();
    map1.mapShow();
    switch (map1.grid[player1.ylocation][player1.xlocation]) {
        case 2:
            if (confirm("Do you want this chest?") == true) {
                let itemKind = Math.floor(Math.random() * 2);
                let item = ItemPool(itemKind);
                inventory1.addItem(itemKind, item);
                inventory1.fillInventory();
                // document.getElementById("weapons").innerHTML = '<option value="0" disabled selected> Select weapon</option>';
                // document.getElementById("foods").innerHTML = '<option value="0" disabled selected> Select food</option>';
                // document.getElementById("drinks").innerHTML = '<option value="0" disabled selected> Select drink</option>';
                map1.grid[player1.ylocation][player1.xlocation] = 1;
            }

            break;
    }
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
player1.controls();