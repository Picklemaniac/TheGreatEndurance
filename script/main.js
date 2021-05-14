
let map1 = new Map();
let player1 = new Player(2, 3); //I should be able to move north and south from here
roomshift();

function Map() {
    //0 = wall
    //1 = movable
    this.sizeX = 8;
    this.sizeY = 7;
    this.grid = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

}

function roomshift() {
    for (let y = 0; y < map1.sizeY; y++) {
        for (let x = 0; x < map1.sizeX; x++) {
            if (map1.grid[y][x] == 1) {
                let dice = Math.floor(Math.random() * 100) + 1;
                if (dice > 20 && dice < 40) {
                    map1.grid[y][x] = 2;
                }

            }
        }
    }
    map1.grid[player1.ylocation][player1.xlocation] = 1;
}

function Player(ylocation, xlocation) {
    this.ylocation = ylocation;
    this.xlocation = xlocation;
    let inventory;
}

function ItemPool(itemKind, itemKindSub, itemRarity) {
    let weapons = [
        ['Stone blade', 'Iron Blade', 'Cruel Edge'],
        ['Stone axe', 'Iron axe', 'Cruel Brute'],
        ['Stone gauntlets', 'Iron gauntlets', 'Cruel hands'],
        ['Stone pole', 'Iron pole', 'Cruel judgement'],
    ];

    let items = [
        ['shit', 'bigger shit', 'Legendary shit'],
        ['Health potion', 'Health potion+', 'Healthpotion++'],
        ['Mana potion', 'Mana potion+', 'Mana potion++'],
        ['Bread slice', 'Half bread', 'Full bread'],
    ];

    switch (itemKind) {
        case 0:
            return weapons[itemKindSub][itemRarity];
        case 1:
            return items[itemKindSub][itemRarity];
    }
    
}

function test() {
    //Initialize map  & player
    // (B) CREATE HTML TABLE STRING
    var perrow = 8, // 2 CELLS PER ROW
        html = "<table>";

    // LOOP THROUGH ARRAY AND ADD TABLE CELLS
    for (let y = 0; y < map1.sizeY; y++) {
        html += `<tr>`;
        for (let x = 0; x < map1.sizeX; x++) {
            if (y === player1.ylocation && x === player1.xlocation) {
                html += `<td style='background-color: orange'>p</td>`;
            }
            else {
                if (map1.grid[y][x] == 0) {
                    html += `<td style='background-color: red'>   ` + map1.grid[y][x] + `</td>`;
                } else if (map1.grid[y][x] == 1) {
                    html += `<td style='background-color: green'>   ` + map1.grid[y][x] + `</td>`;
                } else if (map1.grid[y][x] == 2) {
                    html += `<td style='background-color: brown'> c </td>`;
                } else {
                    html += `<td>   ` + map1.grid[y][x] + `</td>`;
                }
            }
        }
    }
    html += "</table>";

    // (C) ATTACH HTML TO CONTAINER
    document.getElementById("container").innerHTML = html;


    document.getElementById('east').disabled = true;
    document.getElementById('north').disabled = true;
    document.getElementById('west').disabled = true;
    document.getElementById('south').disabled = true;

    let surrounding = neighbors(map1.grid, player1.ylocation, player1.xlocation);
    console.log(surrounding);
    console.log(player1.ylocation + '/' + player1.xlocation);

    if (surrounding[0] > 0) {
        console.log("Go East");
        document.getElementById('east').disabled = false;
    }
    if (surrounding[1] > 0) {
        console.log("Go South");
        document.getElementById('south').disabled = false;
    }
    if (surrounding[2] > 0) {
        console.log("Go West");
        document.getElementById('west').disabled = false;
    }
    if (surrounding[3] > 0) {
        console.log("Go North");
        document.getElementById('north').disabled = false;
    }

    switch (map1.grid[player1.ylocation][player1.xlocation]) {
        case 2:
            if (confirm("Do you want this chest?") == true) {
                let itemKind = Math.floor(Math.random() * 2);
                let itemKindSub = Math.floor(Math.random() * 4);
                let itemRarity = Math.floor(Math.random() * 3);
                document.getElementById("inventory").value += ItemPool(itemKind, itemKindSub, itemRarity) + "\n";
                map1.grid[player1.ylocation][player1.xlocation] = 1;
            }

            break;
    }


}

function move(y, x) {
    player1.ylocation += y;
    player1.xlocation += x;
    test();
}

function neighbors(arr, m, n) {
    // define what a neighbor is
    let v = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    // filter edges & map
    return v.filter(([h, j]) => h + m >= 0 && h + m < arr.length && j + n >= 0 && j + n < arr[0].length)
        .map(([h, j]) => arr[h + m][j + n])
}

test();