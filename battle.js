'use strict';

function Battle() {

var kingdom = new Kingdom(),
    enemy = new Enemy();

    this.refresh = function () {
        kingdom.refresh(kingdom);
        enemy.refresh(this, enemy);
    };

    this.fight = function () {         
           
        var btnKingdomAttack = document.querySelector('.btn-attack--kingdom'),
            btnEnemyAttack = document.querySelector('.btn-attack--enemy');

        btnEnemyAttack.addEventListener('click', enemyAttack);
        btnKingdomAttack.addEventListener('click', kingdomAttack); 
    
        function enemyAttack() {
    
            enemy.attack();
            kingdom.defend(enemy);
            if (kingdom.isAlive()) {
                viewGameOver(); 
            } /*else {
                kingdomAttack();
            }*/
        };
        function kingdomAttack() {
            kingdom.attack();
            enemy.defend(kingdom);
            if (enemy.isAlive()) {
                viewGameOver();  
            } /*else {
                enemyAttack();
            }*/
        };
    };

return this;
}


//----------------------------------AUTO MODE------------------------
function BattleAuto() {

var kingdomAuto = new KingdomAuto(),
    enemyAuto = new EnemyAuto();

    this.refresh = function () {
        kingdomAuto.refresh(kingdomAuto);
        enemyAuto.refresh(this, enemyAuto);
    };

    this.fight = function () {
    while(!enemyAuto.isHealth() && !kingdomAuto.isHealth()) {
        var trigger = 0;
        if(trigger === 0 && !enemyAuto.isHealth()) {
            enemyAutoAttack();
        trigger = 1;    
        } else {
            break;
        }
            
        if (trigger === 1 && !kingdomAuto.isHealth()) {
            kingdomAutoAttack();
        trigger = 0;    
        } else {
            break;
        }
    }        
        

        function enemyAutoAttack() {
            enemyAuto.attack();
            kingdomAuto.defend(enemyAuto);
            if (kingdomAuto.isAlive()) {
                viewGameOver();
            }
        };
        function kingdomAutoAttack() {
            kingdomAuto.attack();
            enemyAuto.defend(kingdomAuto);
            if (enemyAuto.isAlive()) {
                viewGameOver();  
            }  
        };
    };

return this;
}