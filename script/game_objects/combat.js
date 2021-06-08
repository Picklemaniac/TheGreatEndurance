let combat;

class Combat {


    offensive(self, target, action) {
        if (self.stamina > this.staminaDrain(self, action.stamina_usage)) {
            let bonus = 0;

            if (action.hasOwnProperty("weapon_attack")) {
                bonus = action.weapon_attack;
            }

            let baseDamage = action.damage + bonus; //Min amount of damage
            let maxDamage = baseDamage + (((baseDamage + self.prowess) / 100) * 20); //max amount of damage is 20% of base + prowess
            let dealtDamage = Math.floor(Math.random() * maxDamage) + baseDamage //random number between min and max

            let bodyPartToHit = target.anatomy[Math.floor(Math.random() * target.anatomy.length)]

            target.health -= dealtDamage;
            bodyPartToHit.health -= dealtDamage;

            self.stamina -= this.staminaDrain(self, action.stamina_usage);

            combatManager.displayCombatText(`${self.name} used ${action.name} on ${target.name}'s ${bodyPartToHit.name}`);

            // console.log(target.anatomy)
            console.log(`
            Name: ${self.name}
            prowess: ${self.prowess}
            base damage: ${baseDamage}
            max damage: ${maxDamage}
            `)
        }
    }

    defensive(self, action) {
        self.defensiveStance = Math.floor(Math.random() * (action.blocks[1] - action.blocks[0] + 1)) + action.blocks[0];
        self.stamina -= this.staminaDrain(self, action.stamina_usage);
        combatManager.displayCombatText(`${self.name} used ${action.name}`)
    }

    staminaDrain(self, baseStaminaUsage) {
       return Math.round(baseStaminaUsage - ((baseStaminaUsage / 100) + self.strength - self.equipLoad));
    }

    staminaGain(self) {
        let staminaGain = (self.endurance * 0.10) + (self.strength - self.equipLoad);

        if (self.stamina < self.endurance) {
            self.stamina += staminaGain;
        }

        if (self.stamina > self.endurance) {
            self.stamina = self.endurance;
        }
    }


    // offensive(target, self, action) {
    //     if (self.stamina > this.staminaDrain(self, action.stamina_usage)) {
    //         let damage;
    //         let combatText = '';
    //
    //         if (self === player) {
    //             damage = player.weaponEquiped.attack + (((player.weaponEquiped.attack +  player.prowess) / 100)) * (player.prowess  + action.damage);
    //             combatText = combatManager.generatePlayerCombatText(action, currentEnemy, player.weaponEquiped, 'offensive');
    //         }
    //
    //         else if (self === currentEnemy) {
    //             damage = action.damage + (((action.damage + currentEnemy.prowess) / 100) * currentEnemy.prowess)
    //             combatText = 'The enemy attacks you';
    //         }
    //
    //         damage += (damage / 100 * Math.floor(Math.random()*16));
    //         damage = Math.round(damage);
    //
    //         if (target.defensiveStance !== null) {
    //             damage -= (damage / 100) * target.defensiveStance;
    //
    //             if (target === currentEnemy) {
    //                 combatText = `You try to attack the ${target.name} but he evaded it`
    //             }
    //             else if (target === player) {
    //                 combatText = `The ${currentEnemy.name} tries to attack you using ${action.name}, but you evaded it`
    //             }
    //
    //             target.defensiveStance = null;
    //         }
    //
    //         target.health -= Math.round(damage);
    //         self.stamina -= this.staminaDrain(self, action.stamina_usage);
    //         combatManager.displayCombatText(combatText)
    //     }
    // }
    //
    // defensive(self, action) {
    //     let combatText = '';
    //     self.defensiveStance = Math.floor(Math.random() * (action.blocks[1] - action.blocks[0] + 1)) + action.blocks[0];
    //     self.stamina -= this.staminaDrain(self, action.stamina_usage);
    //
    //     if (self === player) {
    //         combatText = combatManager.generatePlayerCombatText(action, currentEnemy, player.weaponEquiped, 'defensive');
    //     }
    //     else if (self === currentEnemy) {
    //         combatText = 'The enemy prepares a defense'
    //     }
    //
    //     combatManager.displayCombatText(combatText)
    // }
    //

    //
    // staminaGain(self) {
    //     let staminaGain;
    //
    //     if (self === player) {
    //         staminaGain = (player.endurance * 0.10) + (player.strength - player.equipLoad);
    //     }
    //     else if (self === currentEnemy) {
    //         staminaGain = (currentEnemy.endurance * 0.10) + currentEnemy.strength;
    //     }
    //
    //     if (self.stamina < self.endurance) {
    //         self.stamina += staminaGain;
    //     }
    //
    //     if (self.stamina > self.endurance) {
    //         self.stamina = self.endurance;
    //     }
    // }
    //
    // //Define special things here:
}