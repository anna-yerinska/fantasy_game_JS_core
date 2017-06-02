'use strict';

function Warrior (name, min, max) {
    this.power = randomValue(min, max);
    this.health = randomValue(150, 350);
    this.name = name;
    this.isAlive = function() {
        if (this.health <= 0) {                   
            var deadName = this.name;
            this.health = 0;
            deleteWarrior();
        } 
    };

    return this;
}

var warriorList = [];

function createArmy(orkAmount, elfAmount, hobbitAmount) {
    elfAmount = prompt('Сколько у вас в армии Королевства будет Эльфов?'), 
    orkAmount = prompt('Сколько у вас в армии Королевства будет Орков?'),
    hobbitAmount = prompt('Сколько у вас в армии Королевства будет Хоббитов?');

    createArmyElfs(elfAmount);
    createArmyOrks(orkAmount);
    createArmyHobbits(hobbitAmount);
    warriorInfo(elfAmount, orkAmount, hobbitAmount);
    return warriorList;
};


function createArmyOrks(orkAmount) {
    for (let i = 0; i < orkAmount; i++) {
        var ork = warriorList.push(new Warrior('Ork', 100, 300));
    }
    return warriorList;
};

function createArmyElfs(elfAmount) {
    for (let i = 0; i < elfAmount; i++) {
        var elf = warriorList.push(new Warrior('Elf', 160, 250));
    }
    return warriorList;
};

function createArmyHobbits(hobbitAmount) {
    for (let i = 0; i < hobbitAmount; i++) {
        var hobbit = warriorList.push(new Warrior('Hobbit', 150, 200));
    }
    return warriorList;
};

function deleteWarrior() {
    warriorList.forEach (function(warrior){
        if (warrior.health == 0) {
        var deleteWarrior = warriorList.indexOf(warrior);
        /*warriorList.splice(deleteWarrior, 1);*/
        delete warriorList[deleteWarrior];
        deadWarrior(warrior);
        }

    });    
}







