'use strict';

function Battle() {
var kingdom = new Kingdom(),
    enemy = new Enemy();
    
    this.fight = function () {
       
        while (!kingdom.isAlive() && !enemy.isAlive()) {
            function enemyAttack() {
                kingdom.defend(enemy);
                deleteWarrior();
                infoKingdomAfterAttack (kingdom);
            }                
                if (kingdom.isAlive()) {
                    viewGameOver(); 
                break;
                }
               
              
            function kingdomAttack() {
                enemy.defend(kingdom);
                infoEnemyAfterAttack(enemy);
            }
                if (enemy.isAlive()) {
                    viewGameOver();  
                break;
                } 
            

        }
    }

    return this;
}

