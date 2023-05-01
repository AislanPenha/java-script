const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(índice atual, delete, elem1, elem2, elem3)

//pop
const removidos =nomes.splice(4,1);
const removidos2 =nomes.splice(-2,2);

console.log(nomes, removidos, removidos2);
nomes.splice(1, Number.MAX_VALUE);
console.log(nomes, removidos, removidos2);

nomes.splice(nomes.length,0, 'Aislan', 'Alisson');
console.log(nomes);

nomes.splice(0, 1, 'Dumerval');

console.log(nomes);
nomes.splice(1, 0, 'Catarina');
nomes.splice(0, 1);
console.log(nomes);