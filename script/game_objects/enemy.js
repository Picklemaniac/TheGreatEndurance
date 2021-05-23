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

    combatBehaviour() {
        //Wait until you have enough stamina to do chosen combat action

        //If not enough stamina
        //wait

        //If have enough stamina
        //Decide if you want to do it or not.

        //If not, choose a random different action and repeat process.

        //If yes, do action
        //Drain stamina

        //Choose new combat action and repeat
    }
}
