'use strict';

function randomValue(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1),
        power;

    rand = Math.round(rand);
    power = rand;
    return rand;
}

