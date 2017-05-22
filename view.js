'use strict';

window.addEventListener('load', Start);

function Start() {
    var btnStartGame = document.querySelector('.start-game'),
        btnCreateArmy = document.querySelector('.createArmy'),
        btnBattle = document.querySelector('.battle'),
        enemyImg = document.querySelector('.enemy'),
        kingdomImg = document.querySelector('.kingdom'),
        ork = document.querySelector('.orks'),
        elf = document.querySelector('.elfs'),
        hobbit = document.querySelector('.hobbits');

    btnStartGame.style.display = "block";

    function btnStartGameNone() {
        btnStartGame.style.display = "none";
        enemyImg.style.display = "inline-block";
        kingdomImg.style.display = "inline-block";
    }

    function kingdomImgBgNone() {
        kingdomImg.style.backgroundImage = "none";
        btnCreateArmy.style.display = "none";
    }

    function btnBattleVisible() {
        btnBattle.style.display = "block";
        btnBattle.style.marginBottom = "-70px";
        btnBattle.style.marginLeft = "580px";
    }



    btnStartGame.addEventListener('click', btnStartGameNone);
    btnCreateArmy.addEventListener('click', createArmy);
    btnCreateArmy.addEventListener('click', kingdomImgBgNone);
    btnCreateArmy.addEventListener('click', btnBattleVisible);
    btnBattle.addEventListener('click', newBattle);
 
} 



