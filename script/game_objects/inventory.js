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
                console.log('dit is nu de foods inventory:' + this.Foods[0] + '')
                break;
            case 2:
                this.Drinks.push(item);
                console.log('het item' + item.name + ' is toegoevoegd')
                console.log('het soort item is ' + itemKind + ' is toegoevoegd')
                console.log('dit is nu de drinks inventory:' + this.Drinks[0] + '')
                break;
        }
    }

    fillInventory() {
        document.getElementById("weapons").innerHTML = '<option value="0" disabled selected> Select weapon</option>';
        document.getElementById("foods").innerHTML = '<option value="0" disabled selected> Select food</option>';
        document.getElementById("drinks").innerHTML = '<option value="0" disabled selected> Select drink</option>';
        
        for (let weapons = 0; weapons < this.Weapons.length; weapons++) {
            let opt = document.createElement("option");
            opt.textContent = this.Weapons[weapons].name;
            opt.value = JSON.stringify(this.Weapons[weapons]);
            document.getElementById("weapons").appendChild(opt);
        }
        for (let foods = 0; foods < this.Foods.length; foods++) {
            let opt = document.createElement("option");
            opt.textContent = this.Foods[foods].name;
            opt.value = JSON.stringify(this.Foods[foods]);
            document.getElementById("foods").appendChild(opt);
        }
        for (let drinks = 0; drinks < this.Drinks.length; drinks++) {
            let opt = document.createElement("option");
            opt.textContent = this.Drinks[drinks].name;
            opt.value = JSON.stringify(this.Drinks[drinks]);
            document.getElementById("drinks").appendChild(opt);
        }

        this.htmlWeaponsInventory = '';
        this.htmlFoodsInventory = '';
        this.htmlDrinksInventory = '';
    }
}