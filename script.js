function play() {   //button 'play'
    document.querySelector('.menu').classList.add('hidden'); 
    document.querySelector('.game').classList.remove('hidden'); 
}

function arrow() {  //step back
    document.querySelector('.game').classList.add('hidden');
    document.querySelector('.menu').classList.remove('hidden');
    document.querySelector('.game__start').classList.remove('hidden');
    document.querySelector('.game__level').classList.add('hidden');
    document.querySelector('.game__over').classList.add('hidden'); 
    document.querySelector('.level-up').classList.remove('hidden');
    document.querySelector('.game__score').classList.remove('hidden');                                                                  // остановка программы(переделать)
}

function speed() { //choose speed

}

function start() {  //strat game
    document.querySelector('.game__start').classList.add('hidden');
    document.querySelector('.game__level').classList.remove('hidden');
    document.querySelector('.level-up').classList.add('hidden');
    document.querySelector('.game__score').classList.add('hidden');

    let gamePole = document.querySelector('.game__level');

let alfa = 'abcdefghijklmnopqrstuvwxyz';   //abcdefghijklmnopqrstuvwxyz
let arr = [];

function clear() {
    let numberOfEnd = 5;
    if (arr.length >= numberOfEnd) {                             // кол-во разрешённых выводимых элементов
        clearInterval(time);
        document.querySelector('.game__over').addEventListener('click', () => {
            document.querySelector('.game__over').classList.add('hidden');
            document.querySelector('.game__start').classList.remove('hidden');
            document.querySelector('.level-up').classList.remove('hidden');
            document.querySelector('.game__score').classList.remove('hidden');
        });
        document.querySelector('.game__over').classList.remove('hidden');
        document.querySelector('.game__level').classList.add('hidden');
        gamePole.innerHTML = '';
    } else {
        function res() {
            for(i = 0; i < 1; i++) {
                var randomer = alfa.charAt(Math.floor(Math.random() * alfa.length));
            }
            arr.push(randomer);
            gamePole.innerHTML = arr.join(' ');
            }
            res();
    }
}

let time = setInterval(() => {
    clear();
    console.log(arr);
}, speedT);

document.addEventListener('keypress' , function del(e) {
    if (arr.includes(e.key) == true) {
        var fin = arr.indexOf(e.key); 
            // console.log(fin);
            arr.splice(fin,1);
    }
});
}

// switch level

let scorePole = document.querySelector('.score');
let score = [];
var speedT = 1000;
function minusN() {
    for(i = 0; i < 1; i++) {
        var addN = score.push(-1);
        speedT = speedT + 100;
        // console.log(speedT);
    }
    let sumN = score.reduce(function(prev, item) {
        return prev + item;
    }, 0);
    scorePole.innerHTML = sumN;
}

function plusN() {
    for(i = 0; i < 1; i++) {
        var addN = score.push(1);
        speedT = speedT - 100;
        // console.log(speedT);
    }
    let sumN = score.reduce(function(prev, item) {
        return prev + item;
    }, 0);
    scorePole.innerHTML = sumN;
}







