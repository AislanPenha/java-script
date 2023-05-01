// return => sem ele retorna undefined
// Retorna um valor
// Termina a função
function soma(a, b){
    return a + b;
}

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Aislan', 'Penha');
const p2 = {
    nome: 'Alisson', 
    sobrenome: 'Bruno'
};
console.log(p1, p2);

function falaFrase(comeco){

    function falaResto(resto){
        return (comeco + ' ' + resto);
    }
    return falaResto;
}
const fala = falaFrase('Hello');
const resto = fala('World');
console.log(resto);

// function criaMultiplicador(multiplicador){
//     function multiplicacao (numero){
//         return multiplicador * numero;
//     }
//     return multiplicacao;
// }
function criaMultiplicador(multiplicador){
    
    return function (numero){
        return multiplicador * numero;
    };
}
const triplica = criaMultiplicador(3);
console.log(triplica(50));