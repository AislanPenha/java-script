
// let i = 0;

// while( i <= 10) {
//     console.log(i);
//     i++;
// }

let min = 0
let max = 10;

let rand = 5;

while (rand !== 5){
   rand = randdon(min, max);                 //Checa a operação de faz
    console.log(rand);
}
console.log('######################');
do{
    rand = randdon(min, max);                //Faz operação depois checa
    console.log(rand);
}while(rand !== 5);


function randdon(min, max){
    let rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}