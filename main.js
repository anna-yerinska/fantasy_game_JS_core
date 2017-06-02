'use strict';

function newBattleManual() {
    var battle = new Battle();

    battle.refresh();
}

function newBattleAuto () {
    var battleAuto = new BattleAuto();

    battleAuto.refresh();

/*    refresh = setInterval(function () {
        enemyAuto.refresh();
    }, 6000);

    setTimeout(clearInterval(refresh), 20500);*/
}
    
