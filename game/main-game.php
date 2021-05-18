<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing</title>
</head>

<body>
    <div id="container"></div>
    <button id="north" disabled> North </button>
    <button id="east" disabled> East </button>
    <button id="south" disabled> South </button>
    <button id="west" disabled> West </button>
    <div>
        <div id="inventory">
            <select id='weaponsDisplay' onchange="selectItem('weapon')">
                <option value="0" disabled selected> Select weapon</option>
            </select>
            <select id='foodsDisplay' onchange="selectItem('food')">
                <option value="0" disabled selected> Select food</option>
            </select>
            <select id='drinksDisplay' onchange="selectItem('drink')">
                <option value="0" disabled selected> Select drink</option>
            </select>
            <br>
            <button id="eatActionBtn" onclick="consume('food')">Eat</button>
            <button id="drinkActionBtn" onclick="consume('drink')">Drink</button>
            <button id="equipActionBtn" onclick="equip()">Equip</button>
            <button id="discardActionBtn" onclick="discard()">Discard</button>
        </div>
    </div>
    <div>
        <p>health: <span id="healthStatDisplay"></span> </p>
        <p>attack: <span id="attackStatDisplay"></span></p>
        <p>thirst: <span id="thirstStatDisplay"></span></p>
        <p>hunger: <span id="hungerStatDisplay"></span></p>
        <p>weapon: <span id="weaponEquippedDisplay"></span></p>
    </div>

    <!-- Initialize game content-->
    <script src="..\script\game_objects\data\item_data.js"></script>

    <!-- Initialize objects -->
    <script src="..\script\game_objects\map.js"></script>
    <script src="..\script\game_objects\player.js"></script>
    <script src="..\script\game_objects\item.js"></script>
    <script src="..\script\game_objects\inventory.js"></script>

    <!-- Initialize main scripts -->
    <script src="..\script\main.js"></script>
</body>

</html>