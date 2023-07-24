let time = 5000;
let step = 5;


function outNum (num, elem) {
    let l = document.querySelector('.' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;
    },t);
}
outNum(500, 'out-1');
// outNum(1000, 'out-2');
// outNum(1000, 'out-3');

