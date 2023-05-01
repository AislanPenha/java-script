// Reduce -> reduzir o array
// Se não passar parametro...
// ...o acumulador será o primeiro apenas no primeiro laço o 1º elemento...
// .. e o valor o segundo, terceiro...
// Se passar valor...
// todas iteração terá o acumulador ou valor passado, ou o return
// Passando o valor o acumulador será este e seus returns
// A função reduce, pode fazer a função do map e filter, mas não é aconselhável
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//numeros.reduce((acumulador, valor, indice, array) => console.log(acumulador, valor));

//Some todos os números (Reduce)
const somar = numeros.reduce((acumulador, valor, indice, array) => acumulador += valor, 0);
console.log(somar);

//Retorne um array com os pares (Filter)
const pares = numeros.reduce((acumulador, valor, indice, array) => {
    if(valor % 2 === 0) acumulador.push(valor);

    console.log(acumulador);
    return acumulador;
    }, []);
console.log(pares);

//Retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce((acumulador, valor) => {

    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 132},
    { nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce((acu, val) =>{
    if(acu.idade > val.idade) return acu;
    
    return val;
})
console.log(maisVelha);