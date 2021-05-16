class Map {
    //Initialize the full map
    //0 = wall 1 = movable location
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
        this.roomShift();
        this.mapShow();
    }

    //This functions adds random loot to some places on the grid.
    roomShift() {
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

    //This functions renders the map and shows the current player location
    mapShow() {
        let html = "<table>";
        //Add a table row for each Y value and a table cell for each X value
        for (let y = 0; y < this.sizeY; y++) {
            html += `<tr>`;
            for (let x = 0; x < this.sizeX; x++) {
                //If the current player location is equal to the cell being rendered, show the player
                if (y === player1.ylocation && x === player1.xlocation) {
                    html += `<td style='background-color: orange'>p</td>`;
                }
                else {
                    //If it's a wall make it red
                    if (this.grid[y][x] == 0) {
                        html += `<td style='background-color: red'>   ` + this.grid[y][x] + `</td>`;
                    }
                    //If it's a moveable location make it green
                    else if (this.grid[y][x] == 1) {
                        html += `<td style='background-color: green'>   ` + this.grid[y][x] + `</td>`;
                    }
                    //If it's a treasure chest show a brown thing?
                    else if (this.grid[y][x] == 2) {
                        html += `<td style='background-color: brown'> c </td>`;
                    }
                    //This shouldn't happen!?!?!
                    else {
                        html += `<td>   ` + map1.grid[y][x] + `</td>`;
                    }
                }
            }
        }
        //End the table and refresh the map container
        html += "</table>";
        document.getElementById("container").innerHTML = html;
    }
}