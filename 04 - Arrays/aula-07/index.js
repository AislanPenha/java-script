// Retorne a soma do dobro de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter((valor) => valor % 2 === 0);
console.log(pares);

const dobraPares = numeros.filter((valor) => valor % 2 === 0
).map((valor) => valor*2);
console.log(dobraPares);

const somaPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acum, val) => acum += val);
console.log(somaPares);