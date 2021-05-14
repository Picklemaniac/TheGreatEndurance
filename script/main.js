
let player1 = new Player(2, 3); //I should be able to move north and south from here
let map1 = new Map();

function move(y, x) {
    player1.ylocation += y;
    player1.xlocation += x;
    player1.controls();
    map1.mapShow();
    console.log('move werkt');
    switch (map1.grid[player1.ylocation][player1.xlocation]) {
        case 2:
            if (confirm("Do you want this chest?") == true) {
                let itemKind = Math.floor(Math.random() * 2);
                let itemKindSub = Math.floor(Math.random() * 4);
                let itemRarity = Math.floor(Math.random() * 3);
                document.getElementById("inventory").value += map1.ItemPool(itemKind, itemKindSub, itemRarity) + "\n";
                map1.grid[player1.ylocation][player1.xlocation] = 1;
            }

            break;
    }
}
player1.controls();














