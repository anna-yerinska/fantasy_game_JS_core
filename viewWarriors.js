'use strict';

function warriorInfo (elfAmount, orkAmount, hobbitAmount) {
    warriorList.forEach (function(warrior){
        if(warrior.name == 'Elf') {
            var warriorContainer = document.querySelector('.warrior-container'),
                newElf = document.createElement('div');

            newElf.classList.add('elfs');
            newElf.innerHTML = '<h6>' + warrior.name + "</h6><span>Power:" + warrior.power + "<br>Health:" + warrior.health + '</span><img src = "https://s-media-cache-ak0.pinimg.com/736x/7c/32/83/7c3283a9a3ecde7aa7684e90ae421a48.jpg">';
            warriorContainer.appendChild(newElf);
        };

        if(warrior.name == 'Ork') {
            var warriorContainer = document.querySelector('.warrior-container'),
                newOrk = document.createElement('div');

            newOrk.classList.add('orks');
            newOrk.innerHTML = "<h6>" + warrior.name + "</h6><span>Power:" + warrior.power + "<br>Health:" + warrior.health + '</span><img src = "https://images7.alphacoders.com/327/thumb-1920-327040.jpg">';
            warriorContainer.appendChild(newOrk);
        };
        
        if(warrior.name == 'Hobbit') {
            var warriorContainer = document.querySelector('.warrior-container'),
                newHobbit = document.createElement('div');

            newHobbit.classList.add('hobbits');
            newHobbit.innerHTML = "<h6>" + warrior.name + "</h6><span>Power:" + warrior.power + "<br>Health:" + warrior.health + '</span><img src = "Hobbit-3-Design-WEPFeb-2015-022.jpg">';
            warriorContainer.appendChild(newHobbit);
        };
    });
};

function deadWarrior(warrior) {
    if (warrior.name == 'Elf') {
        var deadElf = document.querySelector('.elfs'),
            deadElfImg = document.createElement('div');

            deadElfImg.classList.add('deadElf');
            deadElf.appendChild(deadElfImg);
    }
    if (warrior.name == 'Ork') {
        var deadOrk = document.querySelector('.orks'),
            deadOrkImg = document.createElement('div');

            deadOrkImg.classList.add('deadOrk');
            deadOrk.appendChild(deadOrkImg);
    }
    if (warrior.name == 'Hobbit') {
        var deadHobbit = document.querySelector('.hobbits'),
            deadHobbitImg = document.createElement('div');

            deadHobbitImg.classList.add('deadHobbit');
            deadHobbit.appendChild(deadHobbitImg);
    }
}
