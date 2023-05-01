// Foreach -> Só em array

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

a1.forEach((valor, indice, array) =>{
    console.log(indice, valor, array[indice]);
});

a1.forEach(valor =>{
    total += valor;
});
console.log(total);