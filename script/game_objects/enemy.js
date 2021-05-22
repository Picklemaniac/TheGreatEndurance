let currentEnemy;

class Enemy{
    constructor(name,health, attack, stamina, staminaRegen, maxStamina){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.stamina = stamina;
        this.staminaRegen = staminaRegen;
        this.maxStamina = maxStamina;
    }

    battleAction(){
        player.health -= this.attack;
        gameManager.displayStats();
    }

    checkEnemyDeath() {
        return this.health <= 0;
    }
}
