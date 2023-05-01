const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

// let nome = 'Aislan';


// if (verdadeira){
//     let nome = 'Alisson';   //Criando uma nova variável 'nome'
//     console.log(nome);
//     //let nome = 'Alisson'; //Da erro se for abaixo do log
//     if(verdadeira){
//         //let nome = 'José';
//         nome = 'MARCOS';
//         console.log(nome);
//     }
//     console.log(nome);
// }
// console.log(nome);


var nome2 = 'Aislan'; //Criando variável

if (verdadeira){
    var nome2 = 'Alisson';   //Criando uma nova variável 'nome'
    console.log(nome2);
    //let nome = 'Alisson'; Da erro
    if(verdadeira){
        var nome2 = 'José';  ///redeclarando
        //nome2 = 'MARCOS';
        console.log(nome2);
    }
    console.log(nome2);
}
console.log(nome2); 



var sobrenome = 'Penha';    //<--- CLOSURES -->VIZINHOS

function falaOi(){
    var nomeOi = 'Aislan';

    console.log(`OI! ${nomeOi} ${sobrenome} SEXO ${sexo}`);
}

const sexo = 'masculino';  //<--- CLOSURES -->VIZINHOS

falaOi();
//nomeOi => FORA do escopo de função (ERRO)


function falaEscopo(){
    
    if(verdadeira){
        var nomeEscopo = 'Aislan no escopo';
        let nomeSemEscopo = 'Val sem escopo';
    }

    console.log(nomeEscopo);
    //console.log(nomeSemEscopo); ERRO Fora do escopo let
}
falaEscopo();

/* Hoisting (elevação) --> VAR e FUNCTION*/
//função anônima não faz hoisting
// const funcao = function(e){}; porque começa com const

console.log(num); // Retorna undefined
var num;   //eleva essa declaração ao top do código
num = 6;

///////////////////////////////////////////
num = 6;
console.log(num); // retorna 6
var num;
