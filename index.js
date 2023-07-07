const toggle = document.getElementById('darkmode');

const body = document.querySelector('body');
const container = document.getElementById('container');

const image = document.getElementById('moon');
const moon = image.src;
const sun =  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIklEQVR4nO1ZzWoUQRAeNGIMCaIk4kG9G30FI+pFEFQkPkQSosaLeBFP8a5P4N8lD+BF3Or9cclWt5vdZPFnvXgTvYgGNVH0k+7pZJkJu9mZnZmdyHzQMPR0V9fXXV1dXe04GTJk6CtAMg8hpbPTASGhi7PTgYxIypC6FUG5fBBEg0kRgVJ7UFw+ELRfFyT4O4jrKFTH4iaCQnUMQi6B5Fc8V/sDK9xW8LPmXghZM0oRLwchA8FFEBcCkSBethNQ0ysTWvHtB+A3oMrhSAfwj0H8Oo4xYieTGIm2Sx/CAfihZYQ13Z5gN2MNJH/4BwWwC/nKBATft+HJRxB/cr/5AYQ6pdt4+rysHYKQP43MpEh4ZpHUqKcux6dBsrrhqdoW3SZfmfDKU6NRrG7PAPFtEP+15lGHUNdQWByHUkOm6G9d19oHuu0tJ00AybvWAayB1JTfdLaYnuBpEK/bPnecNAA5dcGdXV6DUGe67pdXZw0Z4j+gyvl4tdwGIBoAyXeuqaipwP3zPNNy5TTg9AsgObnpMjuYU9v+Cwu7IeSKJXMlHi27UYT4qfVCsz3IuGEn42G02gVSQjbd2Xx1PLSMF5UT1i2/jVCxxjAEf2h/BnDR017wqjubjeHQY5ZKI3ZVv4XVIzgRXxSrBzf1pdJIokSo+2i6OyU2PFZhcTy8DD4ZuWmF3uyCr4eWIeRNS+SR0y9AqKtWiRXtSkO634Y1rcl4tOz2Xi34vV2V6cD9Sc5aEs3Ib4JBAVKX7QZc12FH1/1ylXM2RNHhzUUnDYDgey0yPNPJzIw56ZXYDBrlvJMWwI1oXTJuaYDknPFI2pWaor/lXGtPmDB+PkxoE33AqNSQpy4nL7VO+44Xq6bfnHTaB0nvE/feLqsg/uy/1RkHoINJkk9MVGtOf141CQUhH5t/PoXtAfgl0auuN9uhyfQefrveTy4llnyIM2WTRN4ssbwT4iZjkgcmoRAiZRrwxQreCaujXN4XWvEtwvN8FEL+TjSJTVwH8S/Q4pHACncUXlTHEn1WIBrUYzppQeoeesIiI5I2/EcrwoFerDJkyODEgn+RRZ/AYOsvaQAAAABJRU5ErkJggg==';

let count = 0;

document.getElementById("decrease").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
    checkCount();
}
document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increase").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
    checkCount();
}

function checkCount() {
    if (count.toString().includes('69')) {
        document.getElementById("countLabel").innerHTML = count + ' Nice!';
        body.style.background='#ff4160';
        body.style.transition = '0.5s';
        container.style.background = '#ff6c85';
        body.style.transition = '0.5s';
        container.style.transition = '0.5s';
    }
    else{
        body.style.background = 'pink';
        body.style.transition = '0.5s';
        container.style.background = '#ff87ab';
    }

}

//DARKMODE
toggle.addEventListener('click',function(){
    if(this.classList.toggle('darkmode')){
      body.style.background = 'pink';
      body.style.transition = '0.5s';
      container.style.background = '#ff87ab';
      toggle.style.border = '3px solid #466DFF';
      image.src = moon;
    }
    else{
        body.style.background='#0353a4  ';
        body.style.transition = '0.5s';
        container.style.background = '#0466c8';
        body.style.transition = '0.5s';
        container.style.transition = '0.5s';
        toggle.style.border = '3px solid pink';
        image.src = sun;
    }
})