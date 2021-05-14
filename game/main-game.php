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
    <button id="north" onclick="move(-1,0)" disabled> North </button>
    <button id="east" onclick="move(0,1)" disabled> East </button>
    <button id="south" onclick="move(1,0)" disabled> South </button>
    <button id="west" onclick="move(0,-1)" disabled> West </button>
<div>
<textarea id="inventory" cols="30" rows="10"></textarea>
</div>
<script src="..\script\game_objects\map.js"></script>
<script src="..\script\game_objects\player.js"></script>
<script src="..\script\main.js"></script>
</body>
</html>