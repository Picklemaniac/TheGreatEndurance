const gameBody = document.getElementById('gameBody');
const inventoryBody = document.getElementById('inventoryBody');
const backButton = document.getElementById("backBtn");



function backToGame() {
    gameBody.style.display = "grid";
    inventoryBody.style.display = "none";
}

function openInventory() {
    gameBody.style.display = "none";
    inventoryBody.style.display = "grid";
}

function openCrafting() {
}

function openMisc() {
}

function openSkills() {
}

function openStatsMood() {
}

function openCharacterMenu() {
}

function openMainMenu() {
    //Back to home menu?
}

backButton.addEventListener("click", function () {
    backToGame();
});