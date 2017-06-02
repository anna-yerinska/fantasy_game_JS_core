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

    this.refresh = function() {
        this.getHealth();
        this.getPower();
        startInfoKingdom(this);
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

//----------------------------------AUTO MODE------------------------

function KingdomAuto() {
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

    this.refresh = function() {
        this.getHealth();
        this.getPower();
        startInfoKingdomAuto(this);
    };

    this.defend = function(enemy) {
        warriorList.forEach (function(warrior) {
                        
            warrior.health -= enemy.power;
            warrior.isAlive();       
        });
        deleteWarrior();
        infoKingdomAfterAttackAuto (this);    
    };

    this.isAlive = function () {
        if (this.health === 0) {
            viewKingdomFail();
            return true;
        }        
    };

    this.isHealth = function () {
        if (this.health === 0) {
            return true;
        }
    }
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



























