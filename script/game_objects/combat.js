let combat;
let playerCombat;
let enemyCombat;

class Combat {
    offensive(target, self, action) {
        if (self.stamina > this.staminaDrain(self, action.stamina_usage)) {
            let damage;
            let combatText = '';

            if (self === player) {
                damage = player.weaponEquiped.attack + (((player.weaponEquiped.attack +  player.prowess) / 100)) * (player.prowess  + action.damage);
                combatText = combatManager.generatePlayerCombatText(action, currentEnemy, player.weaponEquiped, 'offensive');
            }

            else if (self === currentEnemy) {
                damage = action.damage + (((action.damage + currentEnemy.prowess) / 100) * currentEnemy.prowess)
                combatText = 'The enemy attacks you';
            }

            damage += (damage / 100 * Math.floor(Math.random()*16));
            damage = Math.round(damage);

            if (target.defensiveStance !== null) {
                damage -= (damage / 100) * target.defensiveStance;

                if (target === currentEnemy) {
                    combatText = `You try to attack the ${target.name} but he evaded it`
                }
                else if (target === player) {
                    combatText = `The ${currentEnemy.name} tries to attack you using ${action.name}, but you evaded it`
                }

                target.defensiveStance = null;
            }

            target.health -= Math.round(damage);
            self.stamina -= this.staminaDrain(self, action.stamina_usage);
            combatManager.displayCombatText(combatText)
        }
    }

    defensive(self, action) {
        let combatText = '';
        self.defensiveStance = Math.floor(Math.random() * (action.blocks[1] - action.blocks[0] + 1)) + action.blocks[0];
        self.stamina -= this.staminaDrain(self, action.stamina_usage);

        if (self === player) {
            combatText = combatManager.generatePlayerCombatText(action, currentEnemy, player.weaponEquiped, 'defensive');
        }
        else if (self === currentEnemy) {
            combatText = 'The enemy prepares a defense'
        }

        combatManager.displayCombatText(combatText)
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

    //Define special things here:
}