

const paragrafos = document.querySelector('.container .paragrafos');

const backGround = getComputedStyle(document.body);

const colorBack = backGround.backgroundColor;

console.log(colorBack);

const ps = paragrafos.querySelectorAll('p');

for (let p of ps){
    p.style.backgroundColor = colorBack;
    p.style.color = '#FFFFFF';
}