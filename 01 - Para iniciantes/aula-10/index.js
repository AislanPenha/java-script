let alunos = ['José', 'Maria', 1, 0, 1.4, null, true];

//console.log(alunos);

alunos[2] = 'João';

//console.log(alunos);
//console.log(alunos.length);

//alunos[9] = 'Rebeca';
//console.log(alunos[8]);

alunos.push('Marcos'); //adiciona no fim da Array
alunos.unshift('Raquel'); //adiciona no início da Array

const removida = alunos.pop();//remove no fim da Array

const removido = alunos.pop();//remove no fim da Array

//BUG: Só ver o primeiro removido



const removidaInicio = alunos.shift();//remove no início da Array
const removidoInicio = alunos.shift();//remove no início da Array
//console.log(removidaInicio);

//delete alunos[3];


// console.log(alunos.slice(0, 2));
// console.log(alunos.slice(0, -3));

console.log(typeof alunos);
alunos = 34;
console.log(alunos instanceof Array);