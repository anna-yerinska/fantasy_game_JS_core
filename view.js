'use strict';

window.addEventListener('load', Start);

function Start() {
    var btnStartGame = document.querySelector('.start-game'),
        startContainer = document.querySelector('.start-container'),
        btnCreateArmy = document.querySelector('.createArmy'),
        btnBattle = document.querySelector('.battle'),
        enemyDiv = document.querySelector('.enemy'),
        kingdomDiv = document.querySelector('.kingdom'),
        kingdomImg = document.querySelector('.kingdom-img'),
        ork = document.querySelector('.orks'),
        elf = document.querySelector('.elfs'),
        hobbit = document.querySelector('.hobbits');

    btnStartGame.style.display = "block";

    function btnStartGameNone() {
        btnStartGame.style.display = "none";
        enemyDiv.style.display = "inline-block";
        kingdomDiv.style.display = "inline-block";
        startContainer.style.display = "inline-block";
    }

    function kingdomImgBgNone() {
        kingdomImg.style.display = "none";
        btnCreateArmy.style.display = "none";
    }

    function btnBattleVisible() {
        btnBattle.style.display = "block";
    }

    function btnBattleNoVisible() {
        btnBattle.style.display = "none";
/*        battleInfo();*/
    }

    btnStartGame.addEventListener('click', btnStartGameNone);
    btnCreateArmy.addEventListener('click', createArmy);
    btnCreateArmy.addEventListener('click', kingdomImgBgNone);
    btnCreateArmy.addEventListener('click', btnBattleVisible);
    btnBattle.addEventListener('click', newBattle);
    btnBattle.addEventListener('click', btnBattleNoVisible);

} 

/*    function battleInfo() {
    var btnKingdomAttack = document.querySelector('.btn-attack--kingdom'),
        btnEnemyAttack = document.querySelector('.btn-attack--enemy');

        btnKingdomAttack.addEventListener('click', enemyDefend);
        btnEnemyAttack.addEventListener('click', kingdomDefend);
    }
*/

