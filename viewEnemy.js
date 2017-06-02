'use strict';

function startInfoEnemy (battle, enemy) {
    var battleContainer = document.querySelector('.start-container'),
        info = document.createElement('div'),
        attack = document.createElement('button');
       
    attack.classList.add('btn-attack--enemy');
    info.classList.add('info-enemy');
    info.innerHTML = enemy.power + "<span>&nbsp;- Enemy's Start Power,</span><br>"
     + enemy.health + "<span>&nbsp;- Enemy's Start Health;</span><br><b>" 
     + enemy.name + "</b>";
    attack.innerHTML = "Enemy attacks!";
    battleContainer.appendChild(info);  
    info.appendChild(attack); 
    battle.fight();
}

function infoEnemyAfterAttack (enemy) {
    var battleContainer = document.querySelector('.start-container'),
        infoAfter = document.createElement('div');

    infoAfter.classList.add('info-enemy--after');
    infoAfter.innerHTML =  enemy.power + "<span>&nbsp;- Enemy's Power After Attack;</span><br>" + enemy.health + "<span>&nbsp;- Enemy's Health After Attack;</span>";
    battleContainer.appendChild(infoAfter);
}

function viewEnemyFail(enemy) {
    var battleContainer = document.querySelector('.start-container'),
        enemyFail = document.createElement('div');

    enemyFail.classList.add('info-enemy--after');
    enemyFail.innerHTML = enemy.name + "<span> Fail!</span>";
    battleContainer.appendChild(enemyFail);
}

function EnemyGo(enemy) {
    var battleContainer = document.querySelector('.start-container'),
        enemyGo = document.createElement('div');

    enemyGo.classList.add('info-enemy--after');
    enemyGo.innerHTML = enemy.name + "<span> attack!</span>";
    battleContainer.appendChild(enemyGo);
}


//----------------------------------AUTO MODE------------------------

function startInfoEnemyAuto (battleAuto, enemyAuto) {
    var battleContainer = document.querySelector('.start-container'),
        info = document.createElement('div')/*,
        attack = document.createElement('button')*/;
       
    /*attack.classList.add('btn-attack--enemy');*/
    info.classList.add('info-enemyAuto');
    info.innerHTML = enemyAuto.power + "<span>&nbsp;- Enemy's Start Power,</span><br>"
     + enemyAuto.health + "<span>&nbsp;- Enemy's Start Health;</span><br><b>" 
     + enemyAuto.name + "</b>";
    /*attack.innerHTML = "Enemy attacks!";*/
    battleContainer.appendChild(info);  
    /*info.appendChild(attack);*/ 
    battleAuto.fight();
}

function infoEnemyAfterAttackAuto (enemyAuto) {
    var battleContainer = document.querySelector('.start-container'),
        infoAfter = document.createElement('div');

    infoAfter.classList.add('info-enemy--after');
    infoAfter.innerHTML =  enemyAuto.power + "<span>&nbsp;- Enemy's Power After Attack;</span><br>" 
    + enemyAuto.health + "<span>&nbsp;- Enemy's Health After Attack;</span>";
    battleContainer.appendChild(infoAfter);
}

function viewEnemyFailAuto(enemyAuto) {
    var battleContainer = document.querySelector('.start-container'),
        enemyFail = document.createElement('div');

    enemyFail.classList.add('info-enemy--after');
    enemyFail.innerHTML =  enemyAuto.name + "<span> Fail!</span>";
    battleContainer.appendChild(enemyFail);
}

function EnemyGoAuto(enemyAuto) {
    var battleContainer = document.querySelector('.start-container'),
        enemyGo = document.createElement('div');

    enemyGo.classList.add('info-enemy--after');
    enemyGo.innerHTML = enemyAuto.name + "<span> attack!</span>";
    battleContainer.appendChild(enemyGo);
}










