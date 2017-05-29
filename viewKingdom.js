'use strict';

function startInfoKingdom (kingdom) {
    var battleContainer = document.querySelector('.start-container'),
        info = document.createElement('div'),
        attack = document.createElement('button');

        attack.classList.add('btn-attack--kingdom');
        attack.innerHTML = "Kingdom attacks!";
        info.classList.add('info-kingdom');
        info.innerHTML = kingdom.power + "<span>&nbsp;- Kingdom's Start Power,</span><br>" + kingdom.health + "<span>&nbsp;- Kingdom's Start Health;</span>";
        battleContainer.appendChild(info);
        info.appendChild(attack); 
}

function infoKingdomAfterAttack(kingdom) {
    var battleContainer = document.querySelector('.start-container'),
        infoAfter = document.createElement('div'),
        allHealth = Number(),
        allPower = Number();
        allHealth = kingdomHealth(kingdom);
        allPower = kingdomPower(kingdom);
        

        infoAfter.classList.add('info-kingdom--after');
        infoAfter.innerHTML = allPower + "<span>&nbsp;- Kingdom's Power After Attack,</span><br>" + allHealth + "<span>&nbsp;- Kingdom's Health After Attack;</span>";
        battleContainer.appendChild(infoAfter);
}

function viewKingdomFail() {
    var battleContainer = document.querySelector('.start-container'),
        kingdomFail = document.createElement('div');

        kingdomFail.classList.add('info-kingdom--after');
        kingdomFail.innerHTML =  "<span>Kingdom Fail!</span>";
        battleContainer.appendChild(kingdomFail);
}

function kingdomGo() {
    var battleContainer = document.querySelector('.start-container'),
        kingdomGo = document.createElement('div');

        kingdomGo.classList.add('info-kingdom--after');
        kingdomGo.innerHTML =  "<span>Kingdom attack!</span>";
        battleContainer.appendChild(kingdomGo);
}