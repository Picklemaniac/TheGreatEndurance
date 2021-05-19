let map;

class Map {
    //Initialize the full map
    //0 = wall 1 = movable location
    constructor() {
        this.grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        this.roomShift();
        this.renderMap();
    }

    //This functions adds random loot to some places on the grid. Now at 90%
    roomShift() {
        for (let y = 0; y < this.grid.length; y++) {
            for (let x = 0; x < this.grid[y].length; x++) {
                if (this.grid[y][x] === 1) {
                    let dice = Math.random();
                    if (dice < 0.90) {
                        this.grid[y][x] = 2;
                    }
                }
            }
        }
        this.grid[player.ylocation][player.xlocation] = 1;
    }

    //This functions renders the map and shows the current player location
    renderMap() {
        let html = "<table>";
        //Add a table row for each Y value and a table cell for each X value
        for (let y = 0; y < this.grid.length; y++) {
            html += `<tr>`;
            for (let x = 0; x < this.grid[y].length; x++) {
                //If the current player location is equal to the cell being rendered, show the player
                if (y === player.ylocation && x === player.xlocation) {
                    html += `<td style='background-color: orange'>p</td>`;
                }
                else {
                    //If it's a wall make it red
                    if (this.grid[y][x] === 0) {
                        html += `<td style='background-color: red'>   ` + this.grid[y][x] + `</td>`;
                    }
                    //If it's a moveable location make it green
                    else if (this.grid[y][x] === 1) {
                        html += `<td style='background-color: green'>   ` + this.grid[y][x] + `</td>`;
                    }
                    //If it's a treasure chest show a brown thing?
                    else if (this.grid[y][x] === 2) {
                        html += `<td style='background-color: brown'> c </td>`;
                    }
                    //This shouldn't happen!?!?!
                    else {
                        html += `<td>   ` + map.grid[y][x] + `</td>`;
                    }
                }
            }
        }
        //End the table and refresh the map container
        html += "</table>";
        document.getElementById("container").innerHTML = html;
    }
}