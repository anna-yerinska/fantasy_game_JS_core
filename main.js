'use strict';

function Battle(health) {
    this.fight = function () {

        console.log(kingdom.power + " - Kingdom's Start Power, " + 
                    kingdom.health + " - Kingdom's Start health");
        console.log(enemy.power + " - Enemy's Start Power, " + 
                    enemy.health + " - Enemy's Start health");

        while(enemy.health >= 0 && kingdom.health >= 0) {
            kingdom.attack();

                if (enemy.health >= 0) {
                    console.log(enemy.health + " - Enemy's health after Attack");
                    enemy.attack();
                        if (kingdom.health >= 0) {
                            console.log(kingdom.health + " - Kingdom's health after Attack");
                        } else {
                            console.log('Enemy was win! :(');
                        }
                } else {
                    console.log('Kingdom was win :)');
            }    
        }   
    }
    return this;
}

var elf = new Warrior(),
    ork = new Warrior(),
    hobbit = new Warrior(),
    kingdom = new Kingdom(),
    enemy = new Enemy(),
    battle = new Battle();


function randomValue(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1),
        power;

    rand = Math.round(rand);
    power = rand;
    return rand;
}

window.addEventListener('onload', battle.fight(), true);




