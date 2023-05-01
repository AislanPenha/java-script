let num = 9.4999;
let inteiro = parseInt(num);
let numero;
let maior, menor, automatico;
let raiz;

console.log(inteiro, Number.isInteger(inteiro));

numero = Math.round(num); //arredonda pro mais próximo

//numero = Math.floor(num); //arredonda para baixo
//numero = Math.ceil(num); //arredonda para cima

//console.log(numero);

maior = Math.max(-10, 2, 4 ,1000, 40, 900);
console.log(maior);

menor = Math.min(-10, 2, 4 ,1000, 40, 900);
console.log(menor);

automatico = Math.random() * (11 - 6) + 6;  //fórmula geral entre x e y: * (x - y) + y EX: * (11 - 6) + 6 ==>  10, 9, 8, 7, 6
console.log(parseInt(automatico));

console.log(Math.pow(2, 10)); //potencialização 2^10 = 1024

raiz = 100;

console.log(100 ** 0.5);

console.log(Math.sqrt(raiz));