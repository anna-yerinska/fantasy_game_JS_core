'use strict';

document.addEventListener("DOMContentLoaded", start);

var ork = document.querySelector('.orks'),
    elf = document.querySelector('.elfs'),
    hobbit = document.querySelector('.hobbits');

function start() {
    var btnStartGame = document.querySelector('.start-game');

    btnStartGame.addEventListener('click', btnStartGameNone);
};

function btnStartGameNone() {
    var btnStartGame = document.querySelector('.start-game'),
        startContainer = document.querySelector('.start-container'),
        btnCreateArmy = document.querySelector('.createArmy'),
        enemyDiv = document.querySelector('.enemy'),
        kingdomDiv = document.querySelector('.kingdom');

    btnStartGame.style.display = "none";
    enemyDiv.style.display = "inline-block";
    kingdomDiv.style.display = "inline-block";
    startContainer.style.display = "inline-block";
    btnCreateArmy.addEventListener('click', createArmy);
    btnCreateArmy.addEventListener('click', kingdomImgBgNone);
    btnCreateArmy.addEventListener('click', btnBattleVisible);
};

function kingdomImgBgNone() {
    var kingdomImg = document.querySelector('.kingdom-img'),
        btnCreateArmy = document.querySelector('.createArmy');

    kingdomImg.style.display = "none";
    btnCreateArmy.style.display = "none";
};

function btnBattleVisible() {
    var btnBattle = document.querySelector('.battle');

    btnBattle.style.display = "block";
    btnBattle.addEventListener('click', newBattle);
    btnBattle.addEventListener('click', btnBattleNoVisible);
};

function btnBattleNoVisible() {
    var btnBattle = document.querySelector('.battle');

    btnBattle.style.display = "none";

};

function viewGameOver() {
    var battleContainer = document.querySelector('.start-container'),
        gameOver = document.createElement('button');

    gameOver.classList.add('game-over');
    gameOver.innerHTML = "<span class = 'game-over--text'>Game over!</span>";
    battleContainer.appendChild(gameOver);
};

/*function btnAttack(battle,kingdom,enemy) {
    var btnKingdomAttack = document.querySelector('.btn-attack--kingdom'),
        btnEnemyAttack = document.querySelector('.btn-attack--enemy');

    btnEnemyAttack.addEventListener('click', enemyAttack);
    btnKingdomAttack.addEventListener('click', kingdomAttack);    
}
*/



    

 