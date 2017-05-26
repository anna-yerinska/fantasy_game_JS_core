'use strict';

function Enemy() {
    this.power = randomValue(150, 200);
    this.health = randomValue(200, 400);

    this.attack = function() {
        console.log('Enemy attack!');                
    };

    this.defend = function(kingdom) {
        this.health -= kingdomPower(this);

/*
        if (this.health >= 0) {
            console.log(this.health + " - Enemy's health after attack"); 
        }*/
    };

    this.isAlive = function() {
        if (this.health < 0) {
            viewEnemyFail();
            return true;
        } 
    
    };

    startInfoEnemy(this);

    return this;
}

function startInfoEnemy (enemy) {
    var battleContainer = document.querySelector('.start-container'),
        info = document.createElement('div'),
        attack = document.createElement('button');

        attack.classList.add('btn-attack--enemy');
        info.classList.add('info-enemy');
        info.innerHTML = enemy.power + "<span>&nbsp;- Enemy's Start Power,</span><br>" + enemy.health + "<span>&nbsp;- Enemy's Start health;</span>";
        attack.innerHTML = "Enemy attacks!";
        battleContainer.appendChild(info);  
        info.appendChild(attack);  
}

function infoEnemyAfterAttack (enemy) {
    var battleContainer = document.querySelector('.start-container'),
        infoAfter = document.createElement('div');

        infoAfter.classList.add('info-enemy--after');
        infoAfter.innerHTML =  enemy.power + "<span>&nbsp;- Enemy's Power After Attack;</span><br>" + enemy.health + "<span>&nbsp;- Enemy's Health After Attack;</span>";
        battleContainer.appendChild(infoAfter);
}

function viewEnemyFail() {
    var battleContainer = document.querySelector('.start-container'),
        enemyFail = document.createElement('div');

        enemyFail.classList.add('info-enemy--after');
        enemyFail.innerHTML =  "<span>Enemy Fail!</span>";
        battleContainer.appendChild(enemyFail);
}





