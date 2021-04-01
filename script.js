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
    document.querySelector('.game__score').classList.remove('hidden');  
    clearInterval(time); 
    clearInterval(timer);  
    rec.splice(0);                                                       // остановка программы(переделать)
}
let time;
let rec = [];
let result;
function start() {  //strat game
    document.querySelector('.game__start').classList.add('hidden');
    document.querySelector('.game__level').classList.remove('hidden');
    document.querySelector('.level-up').classList.add('hidden');
    document.querySelector('.game__score').classList.add('hidden');
    startCheck();
    milliseconds = 0;
    checkPole.innerHTML = '00:00:00';
    let gamePole = document.querySelector('.game__level');
    document.querySelector('.game__record').innerHTML = 0;
    result = 0;  

let alfa = 'abcdefghijklmnopqrstuvwxyz';   //abcdefghijklmnopqrstuvwxyz
let arr = [];

function clear() {
    let numberOfEnd = 5;
    if (arr.length >= numberOfEnd) {                             // кол-во разрешённых выводимых элементов
            clearInterval(time);
            clearInterval(timer);
        document.querySelector('.game__over').addEventListener('click', () => {
            document.querySelector('.game__over').classList.add('hidden');
            document.querySelector('.game__start').classList.remove('hidden');
            document.querySelector('.level-up').classList.remove('hidden');
            document.querySelector('.game__score').classList.remove('hidden');
            rec.splice(0); 
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

time = setInterval(() => {
    clear();
    console.log(arr);
    document.querySelector('.game__record').innerHTML = 0 + result;
}, speedT);

document.addEventListener('keypress' , function del(e) {
    if (arr.includes(e.key) == true) {
        var fin = arr.indexOf(e.key); 
            rec.push(e.key.length);
            arr.splice(fin,1);
            result = rec.reduce(function(prev, item) {
                return prev + item;
            }, 0);
            console.log(result);
    }
});
}

// switch level

let scorePole = document.querySelector('.score');
let score = [];
var speedT = 1000;
function minusN() {
    console.log(speedT);
    let sumN = score.reduce(function(prev, item) {
        return prev + item;
    }, 0);

    if(sumN <= 0) {
        for(i = 0; i < 1; i++) {
            let addN = score.push(0);
            speedT = speedT;
        }
        scorePole.innerHTML = 0;
    }else {
        for(i = 0; i < 1; i++) {
            let addN = score.push(-1);
            speedT = speedT + 100;
        }
        scorePole.innerHTML = sumN;
    }
}


function plusN() {
    console.log(speedT);
    let sumN = score.reduce(function(prev, item) {
        return prev + item;
    }, 0);

    if(sumN >= 9) {
        for(i = 0; i < 1; i++) {
            let addN = score.push(0);
            speedT = speedT;
        }
        scorePole.innerHTML = 9;
    }else {
        for(i = 0; i < 1; i++) {
            let addN = score.push(1);
            speedT = speedT - 100;
        }
        scorePole.innerHTML = sumN;
    }
}


// timer

let milliseconds = 0;
let timer;
let checkPole = document.querySelector('.game__time');

function startCheck() {
    timer = setInterval(() => {
        milliseconds += 10;
        let dataTime = new Date(milliseconds);
        checkPole.innerHTML = 
            ('0' + dataTime.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dataTime.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dataTime.getUTCMilliseconds()).slice(-3,-1);
    }, 10)
}
// record

// let arr = [1, 2, 3, 4];

// arr.splice(0);
// console.log(arr);





