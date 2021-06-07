let combat;

class Combat {


    offensive(self, target, action) {
        if (self.stamina > this.staminaDrain(self, action.stamina_usage)) {
            //Your damage is a random number between the base damage of the attack,
            // and the maximum amount of damage you can do using your general combat skill

            //Eventually where you hit will also matter. So sharp weapons will be stronger against flesh, and will create more bleeds
            //Blunt weapons will have an easier time with armor, and shattering bones
            //Armor will also take quite a toll on this
            //etc...

            let bonus = 0;

            if (action.hasOwnProperty("weapon_attack")) {
                bonus = action.weapon_attack;
            }

            let baseDamage = action.damage + bonus;
            //max damage = base damage + 20 percent of the base damage + your prowess
            let maxDamage = baseDamage + (((baseDamage + currentEnemy.prowess) / 100) * 20);

            let dealtDamage = Math.floor(Math.random() * maxDamage) + baseDamage

            let bodyPartToHit = target.anatomy[Math.floor(Math.random() * target.anatomy.length)]

            bodyPartToHit.health -= dealtDamage;
            this.staminaDrain(self, action.stamina_usage);


            console.log(dealtDamage);
            combatManager.displayCombatText(`${self.name} used ${action.name} on ${target.name}'s ${bodyPartToHit.name}`);
        }
    }

    defensive() {

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