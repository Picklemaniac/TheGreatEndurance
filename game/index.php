<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/inventory.css">
    <title>Test</title>
</head>
<body>
<div class="grid-container">
    <div class="leftMenu">
        <div class="basicActions">
            <div class="eatDrink">
                <table class="basicActionTable">
                    <tr>
                        <td>
                            <select class="foodBtnStyling" id='foodsDisplay'>
                                <option disabled selected>
                                    Select Food
                                </option>
                            </select>
                        </td>
                        <td>
                            <button class="foodBtnStyling" id="eatActionBtn">Eat</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select class="foodBtnStyling" id='drinksDisplay'>
                                <option disabled selected>
                                    Select Drink
                                </option>
                            </select>
                        </td>
                        <td>
                            <button class="foodBtnStyling" id="drinkActionBtn">Drink</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button class="foodBtnStyling">Rest</button>
                        </td>
                    </tr>
                </table>
            </div>
            <hr>
        </div>
        <div class="menuNavLeft">
            <button onclick="openCrafting()" class="bigBtnStyling">Crafting</button>
            <br>
            <button onclick="openInventory()" class="bigBtnStyling" >Inventory</button>
            <br>
            <button onclick="openMisc()" class="bigBtnStyling">Misc</button>
        </div>
    </div>

    <div class="rightMenu">
        <div class="charName">
            <div class="charNameMargin">
                <img class="profilePic" src="../media/img/1.PNG" alt="">
                <p class="charNameText">Picklemaniac</p>
            </div>
        </div>
        <div class="charInfo">
            <hr>
            <p>
                Health: <span class="bad"  id="healthStatDisplay"></span><br>
                Hunger: <span class="bad"  id="hungerStatDisplay"></span><br>
                Thirst: <span class="bad"  id="thirstStatDisplay"></span><br>
            </p>
            <p>
                Attack: <span class="bad"  id="attackStatDisplay"></span><br>
                Stamina: <span class="bad" id="staminaStatDisplay"></span><br>
                Weapon equipped: <span class="bad"  id="weaponEquippedDisplay"></span>
            </p>
            <hr>
        </div>
        <div class="menuNavRight">
            <button onclick="openSkills()" class="mediumBtnStyling">Skills</button>
            <br>
            <button onclick="openStatsMood()" class="mediumBtnStyling">Stats / Mood</button>
            <br>
            <button onclick="openCharacterMenu()" class="mediumBtnStyling">Character</button>
            <br>
            <button onclick="openMainMenu()" class="mediumBtnStyling">Home / Menu</button>
        </div>
    </div>


    <div id="gameBody" class="gameBody">
        <div class="logoText">The Great Endurance</div>
        <div id="historyText" class="historyText">
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
        </div>
        <div id="currentEvents" class="currentEvents">

            <div id="container" style="display: none"></div>
            <div id="enemyStats">

            </div>
            <hr>
            <div>

            </div>

        </div>
        <div id="currentActions" class="currenActions">
            <div class="currentActionButtons">
                <div id="currentActionButtons" class="actionMargin">
                    <button class="navBtnStyling" id="startCombatBtn">Start Combat Test</button>
                </div>
            </div>

            <div class="combat">
                <button class="navBtnStyling">Attack</button><br>
                <button class="navBtnStyling">Defend</button>
            </div>

            <div class="navigation">
                <button class="navBtnStyling" id="north">North</button><br>
                <button class="navBtnStyling" id="west">West</button>
                <button class="navBtnStyling" id="east">East</button><br>
                <button class="navBtnStyling" id="south">South</button>
            </div>
        </div>
    </div>

    <div id="inventoryBody" class="inventoryBody">
        <div class="logoText">The Great Endurance</div>
        <div class="inventoryDiv">

            <button id="backBtn" class="navBtnStyling">Back</button>
            <hr>
            <div id="fullInventory" class="fullInventory">

                <div class="inventoryItems">
                    <p class="invHeader">Inventory: <span id="invSizeDisplay">0 / 20:</span></p>
                    <ul id="inventoryItemsDisplay" class="inventoryItemsDisplay">

                    </ul>
                </div>

                <div class="itemDescription">
                    <p class="invHeader">Item:</p>
                    <div class="selectedItemDescription">
                        <p id="selectedItemName" class="descriptionText"></p>
                        <p id="selectedItemDescription" class="descriptionText"></p>
                        <p id="selectedItemStats" class="descriptionText"></p>
                    </div>
                </div>
            </div>

        </div>

        <div class="inventoryActions">
            <button id="inventoryEquipBtn" class="inventoryButton" style="display: none">Equip</button>
            <button id="inventoryEatBtn" class="inventoryButton" style="display: none">Eat</button>
            <button id="inventoryDrinkBtn" class="inventoryButton" style="display: none">Drink</button>
            <button id="inventoryDiscardBtn" class="inventoryButton" style="display: none">Discard</button>
        </div>
    </div>


</div>

</body>

<!-- Initialize basic navigation -->
<script src="..\script\menu_navigation.js"></script>

<!-- Initialize game content-->
<script src="..\script\game_objects\data\item_data.js"></script>
<script src="..\script\game_objects\data\enemy_data.js"></script>
<script src="..\script\game_objects\data\combat_action_data.js"></script>

<!-- Initialize objects -->
<script src="..\script\game_objects\map.js"></script>
<script src="..\script\game_objects\player.js"></script>
<script src="..\script\game_objects\item.js"></script>
<script src="..\script\game_objects\inventory.js"></script>
<script src="..\script\game_objects\enemy.js"></script>

<script src="..\script\game_objects\combat.js"></script>

<!-- Initialize main scripts -->
<script src="..\script\combat_manager.js"></script>
<script src="..\script\game_manager.js"></script>
<script src="..\script\main.js"></script>

</html>