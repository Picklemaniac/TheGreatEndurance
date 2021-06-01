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
            damage = Math.round(damage);

            if (target.defensiveStance !== null) {
                console.log(`
                Blocked for: ${target.defensiveStance}
                ----------------
                Damage first was: ${damage}
                `)


                damage -= (damage / 100) * target.defensiveStance;


                console.log(`
                ----------------
                New damage is: ${damage}
                `)

                target.defensiveStance = null;
            }

            combatManager.displayCombatText("An attack just happened");

            target.health -= Math.round(damage);
            self.stamina -= this.staminaDrain(self, action.stamina_usage);
        }
    }

    defensive(self, action) {
        combatManager.displayCombatText("A <span class='bad'>defense</span> just happened");
        //Pick the percentage of damage blocked based on the action
        console.log("Block Activated")
        self.defensiveStance = Math.floor(Math.random() * (action.blocks[1] - action.blocks[0] + 1)) + action.blocks[0];
        self.stamina -= this.staminaDrain(self, action.stamina_usage);
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