const gameBody = document.getElementById('gameBody');
const inventoryBody = document.getElementById('inventoryBody');
const characterInfoBody = document.getElementById('characterInfoBody');
const backButton = document.getElementsByClassName("backBtn");



function resetNavigation() {
    gameBody.style.display = "none";
    inventoryBody.style.display = "none";
    characterInfoBody.style.display = "none";

}

function backToGame() {
    resetNavigation();
    gameBody.style.display = "grid";
}

function openInventory() {
    resetNavigation();
    inventoryBody.style.display = "grid";
}

function openCharacterInfo() {
    resetNavigation();
    characterInfoBody.style.display = "grid";
}

function openCrafting() {

}

function openMisc() {
}

function openSkills() {
}

function openStatsMood() {
}

function openMainMenu() {
    //Back to home menu?
}

for(let i = 0; i < backButton.length; i++) {
    backButton[i].addEventListener("click", function () {
        backToGame();
    });
}

