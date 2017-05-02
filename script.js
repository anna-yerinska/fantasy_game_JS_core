'use strict';

function Battle(fight) {
    this.fight = function battleFight() {
        var warrior = new Kingdom(),
            enemy = new Enemy();

        console.log(warrior.power + " - Kingdom's Start Power");
        console.log(enemy.power + " - Enemy's Start Power"); 

        while(enemy.power >= 0 && warrior.power >= 0) {
            warrior.attack();

                if (warrior.power >= 0) {
                    console.log(warrior.power + " - Kingdom's Power after Attack");
                    enemy.attack();
                        if (enemy.power >= 0) {
                            console.log(enemy.power + " - Enemy's Power after Attack");
                        } else {
                            console.log('Enemy was failed! :)');
                        }
                } else {
                    console.log('Kingdom was failed :(');
                }    
        }   
    }
    return this;
}

function Kingdom(power, attack) {
    this.power = randomPower(0, 100);
    this.attack = function kingdomAttack() {
        this.power -= 10;             
    };
    return this;
}

function Enemy(power, attack) {
    this.power = randomPower(0, 100);
    this.attack = function enemyAttack() {
        this.power -= 10;                 
    };
    return this;
}

function randomPower(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1),
        power;

    rand = Math.round(rand);
    power = rand;
    return rand;
}

var battle = new Battle();

battle.fight();




