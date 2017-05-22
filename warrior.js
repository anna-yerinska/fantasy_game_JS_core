'use strict';

function Warrior (name, min, max) {
    this.power = randomValue(min, max);
    this.health = randomValue(min, max);
    this.name = name;
    this.isAlive = function() {
        if (this.health < 0) {                   
            var deadName = this.name;

            console.log(deadName + ' is dead');
            this.health = 0;
            deleteWarrior();
        } 
    };
    return this;
}

var warriorList = [];

function createArmy(orkAmount, elfAmount, hobbitAmount) {
    orkAmount = prompt('Сколько у вас в армии Королевства будет Орков?'), 
    elfAmount = prompt('Сколько у вас в армии Королевства будет Эльфов?'), 
    hobbitAmount = prompt('Сколько у вас в армии Королевства будет Хоббитов?');

   createArmyOrks(orkAmount);
    createArmyElfs(elfAmount);
    createArmyHobbits(hobbitAmount);
    viewElf(elfAmount);
    viewOrk(orkAmount);
    viewHobbit(hobbitAmount);
    return warriorList;
};


function createArmyOrks(orkAmount) {
    for (let i = 0; i < orkAmount; i++) {
        var ork = warriorList.push(new Warrior('Ork', 50, 200));
    }
    return warriorList;
};

function createArmyElfs(elfAmount) {
    for (let i = 0; i < elfAmount; i++) {
        var elf = warriorList.push(new Warrior('Elf', 50, 150));
    }
    return warriorList;
};

function createArmyHobbits(hobbitAmount) {
    for (let i = 0; i < hobbitAmount; i++) {
        var hobbit = warriorList.push(new Warrior('Hobbit', 50, 100));
    }
    return warriorList;
};

function deleteWarrior() {
    warriorList.forEach (function(warrior){
        if (warrior.health == 0) {
        var deleteWarrior = warriorList.indexOf(warrior);
        warriorList.splice(deleteWarrior, 1);
        }
    });
    
}





