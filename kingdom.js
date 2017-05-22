'use strict';

function Kingdom() {
/*    this.army = createArmy (orkAmount, elfAmount, hobbitAmount);*/
    this.power = kingdomPower();

    this.health = kingdomHealth(); 

    this.attack = function() {
        console.log('Kingdom attack!');             
    }

    this.defend = function(enemy) {
        var allHealthAfterAttack = Number();

        warriorList.forEach (function(warrior) {
                        
            warrior.health -= enemy.power;
            warrior.isAlive();
            allHealthAfterAttack = warrior.health;          
        });
       
        this.health = kingdomHealthAfterAttack();;
    }

    this.isAlive = function () {
        if (this.health > 0) {
            console.log(this.health + "- Kingdom's Health After Attack");
        } else {
            console.log('Kingdom is dead');
        }

    }

    console.log(this.power + " - Kingdom's Start Power, " + 
                this.health + " - Kingdom's Start health");

    startInfoKingdom();

    return this;
}



function kingdomPower(warrior) {
    var allPower = Number();

        warriorList.forEach (function(warrior) {
        allPower += warrior.power;
        });

    return allPower;
}

function kingdomHealth(warrior) {
    var allHealth = Number();

        warriorList.forEach (function(warrior) {
            if (warrior.health > 0) {
                allHealth += warrior.health;
            }
        });

    return allHealth;
}

function kingdomHealthAfterAttack(warrior) {
    var allHealthAfterAttack = Number();

        warriorList.forEach (function(warrior) {
            if (warrior.health > 0) {
                allHealthAfterAttack += warrior.health;
            }
        });

    return allHealthAfterAttack;
}


function startInfoKingdom() {
    var kingdomInfo = document.querySelector('.kingdom'),
        info = document.createElement('div');
        info.classList.add('info');
        info.innerHTML = "<span>- Kingdom's Start Power, </span>" + this.power +this.health+"<span> - Kingdom's Start health</span>";
        kingdomInfo.appendChild(info);    
}






