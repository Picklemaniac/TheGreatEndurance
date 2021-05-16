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
                console.log('het item' + item.name + ' is toegoevoegd')
                console.log('het soort item is ' + itemKind + ' is toegoevoegd')
                console.log('dit is nu de weapons inventory:' + this.Weapons[0] + '')
                break;
            case 1:
                this.Foods.push(item);
                console.log('het item' + item.name + ' is toegoevoegd')
                console.log('het soort item is ' + itemKind + ' is toegoevoegd')
                console.log('dit is nu de foods inventory:' + this.Foods[0]  + '')
                break;
            case 2:
                this.Drinks.push(item);
                console.log('het item' + item.name + ' is toegoevoegd')
                console.log('het soort item is ' + itemKind + ' is toegoevoegd')
                console.log('dit is nu de drinks inventory:' + this.Drinks[0]  + '')
                break;
        }
    }

    fillInventory(){
        for (let weapons = 0; weapons < this.Weapons.length; weapons++) {
            let opt = document.createElement("option");
            opt.textContent = this.Weapons[weapons].name;
            document.getElementById("weapons").appendChild(opt);
        }
        for (let foods = 0; foods < this.Foods.length; foods++) {
            let opt = document.createElement("option");
            opt.textContent = this.Foods[foods].name;
            document.getElementById("foods").appendChild(opt);
        }
        for (let drinks = 0; drinks < this.Drinks.length; drinks++) {
            let opt = document.createElement("option");
            opt.textContent = this.Drinks[drinks].name;
            document.getElementById("drinks").appendChild(opt); 
        }

        this.htmlWeaponsInventory = '';
        this.htmlFoodsInventory = '';
        this.htmlDrinksInventory = '';
    }
}