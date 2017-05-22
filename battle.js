'use strict';

function Battle(kingdom, enemy) {
var kingdom = new Kingdom(),
    enemy = new Enemy();
    
    this.fight = function () {
       
        while (kingdom.health > 0 && enemy.health > 0) {
            enemy.attack();           
            kingdom.defend(enemy);
            kingdom.isAlive();
                        
            if (kingdom.health == 0 || enemy.health <= 0) {
            console.log('Game over!'); 
            break;
            }
            kingdom.attack();
            enemy.defend(kingdom);
            enemy.isAlive();

            if (kingdom.health == 0 || enemy.health <= 0) {
            console.log('Game over!'); 
            break;
            }
        }
    }

    return this;
}
