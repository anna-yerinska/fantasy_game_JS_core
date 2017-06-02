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
    btnCreateArmy.addEventListener('click', btnMode);
    /*btnCreateArmy.addEventListener('click', btnBattleVisible);*/
};

function btnMode() {
    var btnModeManual = document.querySelector('.btnModeManual'),
        btnModeAuto = document.querySelector('.btnModeAuto');
        
    btnModeManual.style.display = "inline-block";
    btnModeAuto.style.display = "inline-block";
    btnModeManual.addEventListener('click',btnBattleVisibleManual);
    btnModeAuto.addEventListener('click',btnBattleVisibleAuto);
}

function kingdomImgBgNone() {
    var kingdomImg = document.querySelector('.kingdom-img'),
        btnCreateArmy = document.querySelector('.createArmy');

    kingdomImg.style.display = "none";
    btnCreateArmy.style.display = "none";
};

function btnBattleVisibleManual() {
    var btnModeManual = document.querySelector('.btnModeManual'),
        btnModeAuto = document.querySelector('.btnModeAuto'),
        btnBattle = document.querySelector('.battle');

    btnBattle.style.display = "block";
    btnBattle.addEventListener('click', newBattleManual);
    btnBattleNoVisibleManual();
    btnBattleNoVisibleAuto();
};

function btnBattleVisibleAuto() {
    var btnModeManual = document.querySelector('.btnModeManual'),
        btnModeAuto = document.querySelector('.btnModeAuto'),
        btnBattle = document.querySelector('.battle');

    btnBattle.style.display = "block";
    btnBattle.addEventListener('click', newBattleAuto);
    btnBattleNoVisibleManual();
    btnBattleNoVisibleAuto();
};

function btnBattleNoVisibleManual() {
    var btnModeManual = document.querySelector('.btnModeManual');
        
    btnModeManual.style.display = "none";
};

function btnBattleNoVisibleAuto() {
    var btnModeAuto = document.querySelector('.btnModeAuto');

    btnModeAuto.style.display = "none";
};

function btnBattleNoVisible() {
    var btnBattle = document.querySelector('.battle');

    btnBattle.style.display = "none";

};

function viewGameOver(battle) {
    var battleContainer = document.querySelector('.start-container'),
        gameOver = document.createElement('button');

    gameOver.classList.add('game-over');
    gameOver.innerHTML = "<span class = 'game-over--text'>Game over!</span>";
    battleContainer.appendChild(gameOver);
    return true;
};






    

 