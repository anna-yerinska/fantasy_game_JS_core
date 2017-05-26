'use strict';

function newBattle() {
    var battle = new Battle();

    battle.fight();
    btnAttack();
    var btnKingdomAttack = document.querySelector('.btn-attack--kingdom'),
        btnEnemyAttack = document.querySelector('.btn-attack--enemy');

    btnKingdomAttack.addEventListener('click', kingdomAttack);
    btnEnemyAttack.addEventListener('click', enemyAttack);
}







