'use strict';

function Warrior (power, health) {
    this.power = randomValue(0, 50);
    this.health = randomValue(0, 50);

    return this;
}