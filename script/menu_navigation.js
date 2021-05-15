const history = document.getElementById("historyText");
const centerDiv = document.getElementById("currentEvents");
const currentActions = document.getElementById("currentActions");

function backToGame() {
    history.style.visibility = "visible";
    centerDiv.style.height = "auto";
    currentActions.style.visibility = "visible";
    centerDiv.innerHTML = "";
}

//This function sets the default navigation (Sets up a sepperate window in the center and adds a back button)
function baseNavigation() {
    history.style.visibility = "hidden";
    centerDiv.style.height = "25vw";
    centerDiv.innerHTML = "";
    currentActions.style.visibility = "hidden";

    let backButton = document.createElement("button");
    backButton.innerText = "Back"
    backButton.className = "navBtnStyling"
    backButton.addEventListener ("click",function() {
        backToGame();
    });

    centerDiv.append(backButton);
}

function openInventory() {
    baseNavigation();

    let useItemButton = document.createElement("button");
    let throwItemAwayButton = document.createElement("button");
}

function openCrafting() {
    baseNavigation();
}

function openMisc() {
    baseNavigation();
}

function openSkills() {
    baseNavigation();
}

function openStatsMood() {
    baseNavigation();
}

function openCharacterMenu() {
    baseNavigation();
}

function openMainMenu() {
    //Back to home menu?
}