let playerCombat
let enemyCombat

class PlayerCombat {

    staminaDrain() {
       let actionDrain = 20; //temporary. will later be the stamina drain of the given action
       return Math.round(actionDrain - ((actionDrain / 100) + player.strength - player.equipLoad));
    }

    //Default actions
    offensive() {
        if (player.stamina > this.staminaDrain()) {
            let actionDamage = 5; //temporary. will later be the damage of the given action (E.G attack, uppercut, etc)
            let damage = player.weaponEquiped.attack + (((player.weaponEquiped.attack +  player.prowess) / 100)) * (player.prowess  + actionDamage);
            damage += (damage / 100 * Math.floor(Math.random()*16));
            currentEnemy.health -= Math.round(damage);
            player.stamina -= this.staminaDrain();
        }
    }

    defensive() {

    }

    //Special abilities go here:

}

class EnemyCombat {
    //Default actions
    offensive() {

    }

    defensive() {

    }

    //Special abilities go here:

}
