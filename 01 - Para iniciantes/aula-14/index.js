/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null, [bigint, symbol]

*/

let nome = 'Aislan';
nome[2] = 'z';

// console.log(nome[2], nome);
// nome = 'Valdirene';
// //Não mudei o 'Aislan' e sim troquei por 'Valdirene'
// console.log(nome);

// let a = 'A'
// let b = a;  //Faz uma cópia nos dados primitivos

// a = 'Outra parada'
// console.log(a, b);

/* 
Referência (mutáveis) - array, object, function

*/

let c = [1, 2, 3];
let d;
d = c; //Faz uma referência nos dados de referência

let e = [...c]; //copia apenas os dados(spread)

console.log(c, d, e);

d.push(4);
console.log(c, d, e);
e.push('aislan');
console.log(c, d, e);

const p1 = {
    nome: 'Aislan',
    sobrenome: 'Penha'
};

const p2 = p1;
const p3 = {...p2};
p2.nome = 'Alisson';

console.log(p1);
console.log(p3);