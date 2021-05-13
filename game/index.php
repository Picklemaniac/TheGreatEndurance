<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Great Endurance (Name TBD)</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <div class="grid-container">
        <div class="gameBody">
            <div class="logoText">The Great Endurance</div>
            <div class="history">
                <p class="historyText">A rat bites you as you walk....</p>
                <p class="historyText">A rat bites you as you walk....</p>
                <p class="historyText">A rat bites you as you walk....</p>
                <p class="historyText">A rat bites you as you walk....</p>
                <p class="historyText">A rat bites you as you walk....</p>
            </div>
            <div class="current">
               <div class="currentTextContainer">
                   <p class="currentText">You’re in a dark room. The mossy stone walls around you are damp with some kind of fungus. Mushrooms are growing on the ceiling.</p>
                   <p class="currentText">Upon inspecting the room you notice a strange locked box in the corner. A long dead corpse appears to be guarding it.</p>
                   <p class="currentText">There’s a corridor going left, and a corridor going right. There also seems to be a strange hole in the wall to the front, but you’re not sure if it would lead anywhere...</p>
               </div>
            </div>
            <div class="actions">
                <div class="currentActions">
                    <button class="actionBtnStyling">Inspect left corridor</button>
                    <button class="actionBtnStyling">Inspect hole in wall</button>
                    <button class="actionBtnStyling">Inspect right corridor</button>
                    <button class="actionBtnStyling">Inspect mushrooms</button>
                    <button class="actionBtnStyling">Collect mushrooms</button>
                    <button class="actionBtnStyling">Inspect treasure chest</button>
                    <button class="actionBtnStyling">Inspect corpse</button>
                    <button class="actionBtnStyling">Open treasure chest</button>

                </div>
                <div class="Combat">
                    <button class="navBtnStyling">Attack</button><br>
                    <button class="navBtnStyling">Defend</button><br>
                </div>
                <div class="Navigation">
                    <button class="navBtnStyling">North</button><br>
                    <button class="navBtnStyling">East</button><br>
                    <button class="navBtnStyling">South</button><br>
                    <button class="navBtnStyling">West</button><br>
                </div>
            </div>
        </div>
        <div class="leftMenu">
            <div class="basicActions">
                <div class="food">
                    <select class="mainBtnStyling">
                        <option disabled selected>
                            Select Food
                        </option>
                        <option>
                            food2
                        </option>
                    </select>
                    <button class="mainBtnStyling">Eat</button>
                </div>
                <div class="drink">
                    <select class="mainBtnStyling">
                        <option disabled selected>
                            Select Drink
                        </option>
                        <option>
                            drink2
                        </option>
                    </select>
                    <button class="mainBtnStyling">Drink</button>
                </div>
                <div class="rest">
                    <button class="mainBtnStyling">Rest</button>
                </div>
                <hr>
            </div>
            <div class="Crafting">
                <button class="bigBtnStyling">Crafting</button>
            </div>
            <div class="Inventory">
                <button class="bigBtnStyling">Inventory</button>
            </div>
            <div class="Misc">
                <button class="bigBtnStyling">Misc</button>
            </div>
        </div>
        <div class="rightMenu">
            <div class="charBasic">
                <div>[face]</div>
                <div>[charactername]</div>
            </div>
            <div class="charInfo"></div>
            <div class="rightButtons"></div>
        </div>
    </div>
</body>
</html>