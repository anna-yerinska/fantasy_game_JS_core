'use strict';

function Kingdom(power, attack, defend) {
    this.power = elf.power + ork.power + hobbit.power;
    this.health = elf.health + ork.health + hobbit.health;
    this.attack = function() {
        enemy.defend();             
    };
    this.defend = function(power) {
        this.health -= enemy.power;
    };

    return this;
}