class Map {
    constructor() {
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
        this.roomshift();
        this.mapShow();
    }

    roomshift() {
        for (let y = 0; y < this.sizeY; y++) {
            for (let x = 0; x < this.sizeX; x++) {
                if (this.grid[y][x] == 1) {
                    let dice = Math.floor(Math.random() * 100) + 1;
                    if (dice > 20 && dice < 40) {
                        this.grid[y][x] = 2;
                    }

                }
            }
        }
        this.grid[player1.ylocation][player1.xlocation] = 1;
    }

    mapShow() {
        //Initialize map  & player
        // (B) CREATE HTML TABLE STRING
        let html = "<table>";

        // LOOP THROUGH ARRAY AND ADD TABLE CELLS
        for (let y = 0; y < this.sizeY; y++) {
            html += `<tr>`;
            for (let x = 0; x < this.sizeX; x++) {
                if (y === player1.ylocation && x === player1.xlocation) {
                    html += `<td style='background-color: orange'>p</td>`;
                }
                else {
                    if (this.grid[y][x] == 0) {
                        html += `<td style='background-color: red'>   ` + this.grid[y][x] + `</td>`;
                    } else if (this.grid[y][x] == 1) {
                        html += `<td style='background-color: green'>   ` + this.grid[y][x] + `</td>`;
                    } else if (this.grid[y][x] == 2) {
                        html += `<td style='background-color: brown'> c </td>`;
                    } else {
                        html += `<td>   ` + map1.grid[y][x] + `</td>`;
                    }
                }
            }
        }
        html += "</table>";
        document.getElementById("container").innerHTML = html;
    }

    ItemPool(itemKind, itemKindSub, itemRarity) {
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
    //0 = wall
    //1 = movable
}