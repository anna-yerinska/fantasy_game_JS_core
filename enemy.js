'use strict';

function Enemy() {
    this.power = 0;/* = randomValue(150, 200);*/
    this.health = 0; /*= randomValue(200, 400);*/
    this.name = '';/* = name;*/

    this.attack = function() {
        EnemyGo(this);               
    };
 
    this.defend = function(kingdom) {
        this.health -= kingdom.power;
        infoEnemyAfterAttack(this);
    };

    this.refresh = function(battle, enemy, func) {
        var show = function(x) {
            x = JSON.parse(x);
            enemy.health = x.health;
            enemy.power = x.power;
            enemy.name = x.name;
            startInfoEnemy(battle, enemy);
        }

        get(function (data) {
            show(data);
        })
    };

    this.isAlive = function() {
        if (this.health < 0) {
            viewEnemyFail(this);
            return true;
        }    
    };

    return this;
}

var get = function (func) {
    var xhr = new XMLHttpRequest();
        xhr.open('get', '/get-enemy', true);
        xhr.send();
        xhr.addEventListener('readystatechange', function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                func(xhr.responseText);
                
            }
        })
}


//----------------------------------AUTO MODE------------------------

function EnemyAuto() {
    this.power = 0;/* = randomValue(150, 200);*/
    this.health = 0; /*= randomValue(200, 400);*/
    this.name = '';/* = name;*/

    this.attack = function() {
        EnemyGoAuto(this);               
    };
 
    this.defend = function(kingdomAuto) {
        this.health -= kingdomAuto.power;
        infoEnemyAfterAttackAuto(this);
    };

    this.refresh = function(battleAuto, enemyAuto, funcAuto) {
        var showAuto = function(x) {
            x = JSON.parse(x);
            enemyAuto.health = x.health;
            enemyAuto.power = x.power;
            enemyAuto.name = x.name;
            startInfoEnemyAuto(battleAuto, enemyAuto);
        }

        getAuto(function (dataAuto) {
            showAuto(dataAuto);
        })
    };

    this.isAlive = function() {
        if (this.health < 0) {
            viewEnemyFailAuto(this);
            return true;
        }    
    };

    this.isHealth = function() {
        if (this.health < 0) {
            return true;
        }
    }

    return this;
}

var getAuto = function (funcAuto) {
    var xhr = new XMLHttpRequest();
        xhr.open('get', '/get-enemy', true);
        xhr.send();
        xhr.addEventListener('readystatechange', function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                funcAuto(xhr.responseText);
                
            }
        })
}



