<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="container"></div>
    <button id="north" disabled> North </button>
    <button id="east" disabled> East </button>
    <button id="south" disabled> South </button>
    <button id="west" disabled> West </button>
    <div>
        <div id="inventory">
            <button id="inventoryToggle">Inventory</button>
            <select id='weapons' onchange="weaponSelected()">
                <option value="0" disabled selected> Select weapon</option>
            </select>
            <select id='foods' onchange="foodSelected(this.value)">
                <option value="0" disabled selected> Select food</option>
            </select>
            <select id='drinks' onchange="drinkSelected()">
                <option value="0" disabled selected> Select drink</option>
            </select>
            <br>
            <button id="eat" onclick="eat()" disabled>Eat</button>
            <button id="drink" disabled>Drink</button>
            <button id="equip" disabled>Equip</button>
            <button id="discard" disabled>Discard</button>
        </div>
    </div>
    <div>
        <p>health: <span id="health"></span> </p>
        <p>attack: <span id="attack"></span></p>
        <p>thirst: <span id="thirst"></span></p>
        <p>hunger: <span id="hunger"></span></p>
        <p>weapon: <span id="weapon"></span></p>
    </div>
    <script src="..\script\game_objects\map.js"></script>
    <script src="..\script\game_objects\player.js"></script>
    <script src="..\script\game_objects\item.js"></script>
    <script src="..\script\main.js"></script>
</body>

</html>