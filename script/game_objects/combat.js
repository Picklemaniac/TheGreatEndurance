let combatActions

class CombatActions {
    offensive(target, self, action) {
        if (self.stamina > this.staminaDrain(self, action.stamina_usage)) {
            let damage;

            if (self === player) {
                damage = player.weaponEquiped.attack + (((player.weaponEquiped.attack +  player.prowess) / 100)) * (player.prowess  + action.damage);
            }
            else if (self === currentEnemy) {
                damage = action.damage + (((action.damage + currentEnemy.prowess) / 100) * currentEnemy.prowess)
            }

            damage += (damage / 100 * Math.floor(Math.random()*16));

            target.health -= Math.round(damage);
            self.stamina -= this.staminaDrain(self, action.stamina_usage);
        }
    }

    defensive() {

    }

    staminaDrain(self, baseStaminaUsage) {
        if (self === player) {
            return Math.round(baseStaminaUsage - ((baseStaminaUsage / 100) + player.strength - player.equipLoad));
        }
        else if (self === currentEnemy) {
            return Math.round(baseStaminaUsage - ((baseStaminaUsage / 100) + currentEnemy.strength));
        }
    }

    staminaGain(self) {
        let staminaGain;

        if (self === player) {
            staminaGain = (player.endurance * 0.10) + (player.strength - player.equipLoad);
        }
        else if (self === currentEnemy) {
            staminaGain = (currentEnemy.endurance * 0.10) + currentEnemy.strength;
        }

        if (self.stamina < self.endurance) {
            self.stamina += staminaGain;
        }

        if (self.stamina > self.endurance) {
            self.stamina = self.endurance;
        }
    }
}