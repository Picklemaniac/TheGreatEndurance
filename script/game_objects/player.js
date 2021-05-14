class Player {
    constructor(ylocation, xlocation) {
        this.ylocation = ylocation;
        this.xlocation = xlocation;
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
    }
}

class Inventory {
    constructor() {
        this.Foods = [];
        this.Drinks = [];
        this.Weapons = [];
    }

    addItem(itemKind, item) {
        switch (itemKind) {
            case 0:
                this.Weapons.push(item);
                console.log('het item' + item + ' is toegoevoegd')
                console.log('het soort item is ' + itemKind + ' is toegoevoegd')
                console.log('dit is nu de weapons inventory:' + this.Weapons + '')
                break;
            case 1:
                this.Foods.push(item);
                console.log('het item' + item + ' is toegoevoegd')
                console.log('het soort item is ' + itemKind + ' is toegoevoegd')
                console.log('dit is nu de foods inventory:' + this.Foods + '')
                break;
            case 2:
                this.Drinks.push(item);
                console.log('het item' + item + ' is toegoevoegd')
                console.log('het soort item is ' + itemKind + ' is toegoevoegd')
                console.log('dit is nu de drinks inventory:' + this.Drinks + '')
                break;
        }
    }
}