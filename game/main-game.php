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
            <select id='weapons'>
                <option value="0" disabled selected> Select weapon</option>
            </select>
            <select id='foods'>
                <option value="0" disabled selected> Select food</option>
            </select>
            <select id='drinks'>
                <option value="0" disabled selected> Select drink</option>
            </select>
        </div>
    </div>
    <script src="..\script\game_objects\map.js"></script>
    <script src="..\script\game_objects\player.js"></script>
    <script src="..\script\game_objects\item.js"></script>
    <script src="..\script\main.js"></script>
</body>

</html>