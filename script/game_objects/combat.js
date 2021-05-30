let playerCombat
let enemyCombat

class PlayerCombat {
    offensive(action) {
        if (player.stamina > this.staminaDrain(action.stamina_usage)) {
            let damage = player.weaponEquiped.attack + (((player.weaponEquiped.attack +  player.prowess) / 100)) * (player.prowess  + action.damage);
            damage += (damage / 100 * Math.floor(Math.random()*16));
            currentEnemy.health -= Math.round(damage);
            player.stamina -= this.staminaDrain(action.stamina_usage);
        }
    }

    defensive() {

    }

    staminaDrain(baseStaminaUsage) {
        return Math.round(baseStaminaUsage - ((baseStaminaUsage / 100) + player.strength - player.equipLoad));
    }

    staminaGain() {
        let staminaGain = (player.endurance * 0.10) + (player.strength - player.equipLoad);

        if (player.stamina < player.endurance) {
            player.stamina += staminaGain;
        }
        if (player.stamina > player.endurance) {
            player.stamina = player.endurance;
        }
    }
}

class EnemyCombat {
    offensive(action) {
        if (currentEnemy.stamina > this.staminaDrain(action.stamina_usage)) {
            let damage = action.damage + (((action.damage + currentEnemy.prowess) / 100) * currentEnemy.prowess)
            damage += (damage / 100 * Math.floor(Math.random()*16));
            player.health -= Math.round(damage);
            currentEnemy.stamina -= this.staminaDrain(action.stamina_usage);
        }
    }

    defensive() {

    }

    staminaDrain(baseStaminaUsage) {
        return Math.round(baseStaminaUsage - ((baseStaminaUsage / 100) + currentEnemy.strength));
    }

    staminaGain() {
        let staminaGain = (currentEnemy.endurance * 0.10) + currentEnemy.strength;

        if (currentEnemy.stamina < currentEnemy.endurance) {
            currentEnemy.stamina += staminaGain;
        }

        if (currentEnemy.stamina > currentEnemy.endurance) {
            currentEnemy.stamina = currentEnemy.endurance;
        }
    }


}