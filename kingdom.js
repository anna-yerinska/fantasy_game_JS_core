'use strict';

function Kingdom() {
    this.power = kingdomPower();

    this.health = kingdomHealth(); 

    this.attack = function() {
        console.log('Kingdom attack!');             
    };

    this.getPower = function() {
        kingdomPower();
    };

    this.getHealth = function() {
        kingdomHealth();
        
    };

    this.defend = function(enemy) {
        warriorList.forEach (function(warrior) {
                        
            warrior.health -= enemy.power;
            warrior.isAlive();
/*            allHealthAfterAttack = warrior.health;  */        
        });     
    };

    this.isAlive = function () {
        if (this.health <= 0) {
            console.log('Kingdom is dead');
            return true;
        }
        
    };

    startInfoKingdom(this);

    return this;
}

function kingdomPower() {
    var allPower = Number();

    warriorList.forEach (function(warrior) {
        if (warrior.power > 0) {
            allPower += warrior.power;
        }
    });
    return allPower;
}

function kingdomHealth() {
    var allHealth = Number();

    warriorList.forEach (function(warrior) {
        if (warrior.health > 0) {
            allHealth += warrior.health;
        }
    });
    return allHealth;
}

function startInfoKingdom (kingdom) {
    var battleContainer = document.querySelector('.start-container'),
        info = document.createElement('div'),
        attack = document.createElement('button');

        attack.classList.add('btn-attack--kingdom');
        attack.innerHTML = "Kingdom attacks!";
        info.classList.add('info-kingdom');
        info.innerHTML = kingdom.power + "<span>&nbsp;- Kingdom's Start Power,</span><br>" + kingdom.health + "<span>&nbsp;- Kingdom's Start Health;</span>";
        battleContainer.appendChild(info);
        info.appendChild(attack); 
}

function infoKingdomAfterAttack(kingdom) {
    var battleContainer = document.querySelector('.start-container'),
        infoAfter = document.createElement('div'),
        allHealth = Number(),
        allPower = Number();
        allHealth = kingdomHealth();
        allPower = kingdomPower();
        

        infoAfter.classList.add('info-kingdom--after');
        infoAfter.innerHTML = allPower + "<span>&nbsp;- Kingdom's Power After Attack,</span><br>" + allHealth + "<span>&nbsp;- Kingdom's Health After Attack;</span>";
        battleContainer.appendChild(infoAfter);
}








