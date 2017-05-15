'use strict';

function Enemy(power, attack) {
    this.power = randomValue(0, 100);
    this.health = randomValue(0, 300);
    this.attack = function() {
        kingdom.defend();                 
    };
    this.defend = function() {
        this.health -= kingdom.power;
    }

    return this;
}