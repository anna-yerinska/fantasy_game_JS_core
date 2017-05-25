'use strict';

function Battle() {
var kingdom = new Kingdom(),
    enemy = new Enemy();
    
    this.fight = function () {
       
        while (!kingdom.isAlive() && !enemy.isAlive()) {
            // enemy.attack(); 
            
                kingdom.defend(enemy);
                infoKingdomAfterAttack (kingdom);
                   
            
/*            kingdom.isAlive();*/
                        
            if (kingdom.isAlive() || enemy.isAlive()) {
            console.log('Game over!'); 
            break;
            }
/*            kingdom.attack();*/  
            
                enemy.defend(kingdom);
                infoEnemyAfterAttack(enemy);
            
            
/*            enemy.isAlive();*/

            if (kingdom.isAlive() || enemy.isAlive()) {
            console.log('Game over!'); 
            break;
            }
        }
    }

    return this;
}

/*function infoBattle() {
    infoKingdomAfterAttack ();
    infoEnemyAfterAttack();
}*/
