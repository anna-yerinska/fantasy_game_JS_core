'use strict';

function Battle() {
var kingdom = new Kingdom(),
    enemy = new Enemy();
    
    this.fight = function () {
       
        /*while (!kingdom.isAlive() && !enemy.isAlive()) {*/
            var btnKingdomAttack = document.querySelector('.btn-attack--kingdom'),
        btnEnemyAttack = document.querySelector('.btn-attack--enemy');

    btnEnemyAttack.addEventListener('click', enemyAttack);
    btnKingdomAttack.addEventListener('click', kingdomAttack);   
            function enemyAttack() {
                enemy.attack();
                kingdom.defend(enemy);
                if (kingdom.isAlive()) {
                viewGameOver(); 
            /*break;*/
            }
            }
            
                               
            
                  
            function kingdomAttack() {
                kingdom.attack();
                enemy.defend(kingdom);
                if (enemy.isAlive()) {
                viewGameOver();  
            /*break;*/
            }
            }
            
                
            
            
             
        /*}*/
    }
return this;
}

