class Player {
    constructor(ylocation, xlocation) {
        this.ylocation = ylocation;
        this.xlocation = xlocation;
        this.health = 20;
        this.attack = 3;
        this.thirst = 50;
        this.hunger = 50;
        this.weaponEquiped;

        //this.inventory;
    }

    neighbors(arr, m, n) {
        // define what a neighbor is
        let v = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        // filter edges & map
        return v.filter(([h, j]) => h + m >= 0 && h + m < arr.length && j + n >= 0 && j + n < arr[0].length)
            .map(([h, j]) => arr[h + m][j + n])
    }

    controls() {
        // (C) ATTACH HTML TO CONTAINER
        document.getElementById('east').disabled = true;
        document.getElementById('north').disabled = true;
        document.getElementById('west').disabled = true;
        document.getElementById('south').disabled = true;

        let surrounding = this.neighbors(map1.grid, player1.ylocation, player1.xlocation);

        if (surrounding[0] > 0) {
            document.getElementById('east').disabled = false;
        }
        if (surrounding[1] > 0) {
            document.getElementById('south').disabled = false;
        }
        if (surrounding[2] > 0) {
            document.getElementById('west').disabled = false;
        }
        if (surrounding[3] > 0) {
            document.getElementById('north').disabled = false;
        }
    }
}