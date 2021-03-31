function play() {
    document.querySelector('.menu').classList.add('hidden'); 
    document.querySelector('.game').classList.remove('hidden'); 
}
function arrow() {
    document.querySelector('.game').classList.add('hidden');
    document.querySelector('.menu').classList.remove('hidden');
    document.querySelector('.game__start').classList.remove('hidden');
    document.querySelector('.game__level').classList.add('hidden');
    document.querySelector('.game__over').classList.add('hidden');
}

function start() {
    document.querySelector('.game__start').classList.add('hidden');
    document.querySelector('.game__level').classList.remove('hidden');

    let input = document.querySelector('.game__level');

let alfa = 'abcdefghijklmnopqrstuvwxyz';   //abcdefghijklmnopqrstuvwxyz
let arr = [];

function clear() {
    if (arr.length >= 2) {                             // кол-во разрешённых выводимых элементов
        clearInterval(time);
        document.querySelector('.game__over').addEventListener('click', () => {
            document.querySelector('.game__over').classList.add('hidden');
            document.querySelector('.game__start').classList.remove('hidden');
        });
        document.querySelector('.game__over').classList.remove('hidden');
        document.querySelector('.game__level').classList.add('hidden');
        input.innerHTML = '';
    } else {
        function res() {
            for(i = 0; i < 1; i++) {
                var randomer = alfa.charAt(Math.floor(Math.random() * alfa.length));
            }
            arr.push(randomer);
            input.innerHTML = arr;
            }
            res();
    }
}

let time = setInterval(() => {
    clear();
    console.log(arr);
}, 1000);

document.addEventListener('keypress' , function del(e) {
    if (arr.includes(e.key) == true) {
        var fin = arr.indexOf(e.key); 
            // console.log(fin);
            arr.splice(fin,1);
    }
});
}

//  mechanic




