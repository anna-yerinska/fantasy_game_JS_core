'use strict';

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

function EnemyGo() {
    var battleContainer = document.querySelector('.start-container'),
        enemyGo = document.createElement('div');

        enemyGo.classList.add('info-enemy--after');
        enemyGo.innerHTML =  "<span>Enemy attack!</span>";
        battleContainer.appendChild(enemyGo);
}
