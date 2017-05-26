'use strict';

function Kingdom() {
    this.power = kingdomPower(this);

    this.health = kingdomHealth(this); 

    this.attack = function() {
        console.log('Kingdom attack!');             
    };

    this.getPower = function() {
        kingdomPower(this);

    };

    this.getHealth = function() {
        kingdomHealth(this);
        
    };

    this.defend = function(enemy) {
        warriorList.forEach (function(warrior) {
                        
            warrior.health -= enemy.power;
            warrior.isAlive();       
        });    
    };

    this.isAlive = function () {
        this.getHealth();
        if (this.health == 0) {
            viewKingdomFail();
            return true;
        }
        
    };

    startInfoKingdom(this);

    return this;
}

function kingdomPower(kingdom) {
    var allPower = Number();

    warriorList.forEach (function(warrior) {
        if (warrior.power > 0) {
            allPower += warrior.power;
        }
    });
    kingdom.power = allPower;
    return kingdom.power;
}

function kingdomHealth(kingdom) {
    var allHealth = Number();

    warriorList.forEach (function(warrior) {
        if (warrior.health > 0) {
            allHealth += warrior.health;
        }
    });
    kingdom.health = allHealth;
    return kingdom.health;
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
        allHealth = kingdomHealth(kingdom);
        allPower = kingdomPower(kingdom);
        

        infoAfter.classList.add('info-kingdom--after');
        infoAfter.innerHTML = allPower + "<span>&nbsp;- Kingdom's Power After Attack,</span><br>" + allHealth + "<span>&nbsp;- Kingdom's Health After Attack;</span>";
        battleContainer.appendChild(infoAfter);
}

function viewKingdomFail() {
    var battleContainer = document.querySelector('.start-container'),
        kingdomFail = document.createElement('div');

        kingdomFail.classList.add('info-kingdom--after');
        kingdomFail.innerHTML =  "<span>Kingdom Fail!</span>";
        battleContainer.appendChild(kingdomFail);
}







