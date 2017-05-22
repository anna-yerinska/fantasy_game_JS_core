'use strict';

function viewElf(elfAmount) {
        for (let i = 0; i < elfAmount; i++) {
            var kingdom = document.querySelector('.kingdom'),
                newElf = document.createElement('div');

                newElf.classList.add('elfs');
                newElf.innerHTML = '<span>elf</span>';
                kingdom.appendChild(newElf);
        }
        
    }

    function viewOrk(orkAmount) {
        for (let i = 0; i < orkAmount; i++) {
            var kingdom = document.querySelector('.kingdom'),
                newOrk = document.createElement('div');
                newOrk.classList.add('orks');
                newOrk.innerHTML = '<span>ork</span>';
                kingdom.appendChild(newOrk);
        }
        
    }

    function viewHobbit(hobbitAmount) {
        for (let i = 0; i < hobbitAmount; i++) {
            var kingdom = document.querySelector('.kingdom'),
                newHobbit = document.createElement('div');
                newHobbit.classList.add('hobbits');
                newHobbit.innerHTML = '<span>hobbit</span>';
                kingdom.appendChild(newHobbit);
        }
    }