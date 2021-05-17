<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/designtest.css">
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
                            <select class="foodBtnStyling">
                                <option disabled selected>
                                    Select Food
                                </option>
                                <option>
                                    food1
                                </option>
                            </select>
                        </td>
                        <td>
                            <button class="foodBtnStyling">Eat</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select class="foodBtnStyling">
                                <option disabled selected>
                                    Select Drink
                                </option>
                                <option>
                                    drink1
                                </option>
                            </select>
                        </td>
                        <td>
                            <button class="foodBtnStyling">Drink</button>
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
                Health: <span class="good">15/24</span> <br>
                Stamina: <span class="bad">3/45</span> <br>
                General Mood: <span class="bad">Terrible</span>
            </p>
            <p>
                Hunger: <span class="bad">Malnourished</span> <br>
                Thirst: <span class="bad">Parched</span> <br>
                Rest: <span class="bad">Sleep Deprived</span>
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
    <div class="gameBody">
        <div class="logoText">The Great Endurance</div>
        <div id="historyText" class="historyText">
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
            <p class="historyParagraph">A rat bites your leg as you traverse the dark hallway...</p>
        </div>
        <div id="currentEvents" class="currentEvents">
            <p class="currentText">You’re in a dark room. The mossy stone walls around you are damp with some kind of fungus. Mushrooms are growing on the ceiling.</p>
            <p class="currentText">Upon inspecting the room you notice a strange locked box in the corner. A long dead corpse appears to be guarding it.</p>
            <p class="currentText">There’s a corridor going left, and a corridor going right. There also seems to be a strange hole in the wall to the front, but you’re not sure if it would lead anywhere...</p>
        </div>
        <div id="currentActions" class="currenActions">
            <div class="currentActionButtons">
                <div class="actionMargin">
                    <button class="navBtnStyling">Attack</button>
                    <button class="navBtnStyling">Defend</button>
                    <button class="navBtnStyling">Attack</button>
                    <button class="navBtnStyling">Attack</button>
                    <button class="navBtnStyling">Defend</button>
                    <button class="navBtnStyling">Attack</button>
                    <button class="navBtnStyling">Attack</button>
                    <button class="navBtnStyling">Defend</button>
                    <button class="navBtnStyling">Attack</button>
                </div>
            </div>
            <div class="combat">
                <button class="navBtnStyling">Attack</button><br>
                <button class="navBtnStyling">Defend</button>
            </div>
            <div class="navigation">
                <button class="navBtnStyling">North</button><br>
                <button class="navBtnStyling">West</button>
                <button class="navBtnStyling">East</button><br>
                <button class="navBtnStyling">South</button>
            </div>
        </div>
    </div>
</div>

</body>

<script src="..\script\menu_navigation.js"></script>
</html>