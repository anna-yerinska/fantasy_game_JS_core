'use strict';

function Kingdom() {
    this.power = kingdomPower(this);

    this.health = kingdomHealth(this); 

    this.attack = function() {
       kingdomGo();             
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
        deleteWarrior();
        infoKingdomAfterAttack (this);    
    };

    this.isAlive = function () {
        if (this.health === 0) {
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











