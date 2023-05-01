function funcao(){
    console.log(arguments[0], arguments[9]);
}
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // Não funciona na arrow funcions

function soma(a, b, c){
    let total = 0;

    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);
}
soma(1, 2, 3, 4, 'f');

soma(100, 200);

function somar(a, b = 4, c = 3){

    return a + b + c;
}

console.log(somar(1));
console.log(somar(1, 2));
console.log(somar(2, 2, 2));
console.log('##########');
console.log(somar(2,'', 2)); // b = assume string vaiza
console.log(somar(2,null, 2)); // b = assume o valor de 0
console.log(somar(2,undefined, 2)); // b = não recebe argumento

function desestruturacaoObjeto({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
desestruturacaoObjeto({ nome: 'Aislan', sobrenome: 'Penha', idade: 35});

function desestruturacaoArray([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
const array = [1, 2, 3];
desestruturacaoArray(array);

function conta(operador, acumulador, ...numeros){    //... rest operation (precisa ser o último parametro)
    for(let numero of numeros) {
        if( operador === '+') acumulador += numero;
        if( operador === '-') acumulador -= numero;
        if( operador === '*') acumulador *= numero;
        if( operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('*', 1, 10, 20, 30, 40);

const restOperator = (...args) => {
    console.log(args);
}
restOperator(1,2,3,4);