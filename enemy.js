'use strict';

function Enemy() {
    this.power = randomValue(50, 100);
    this.health = randomValue(200, 500);

    this.attack = function() {
        console.log('Enemy attack!');                
    }

    this.defend = function(kingdom) {
        this.health -= kingdom.power;

        if (this.health >= 0) {
            console.log(this.health + " - Enemy's health after attack"); 
        }
    }

    this.isAlive = function() {
        if (this.health < 0) {
            console.log('Enemy fail!');
        } 
    return;
    }

    console.log(this.power + " - Enemy's Start Power, " + 
                this.health + " - Enemy's Start health");

    return this;
}





