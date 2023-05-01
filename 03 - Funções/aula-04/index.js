//Escopo léxico: sabe onde foi criada e os vizinhos

function criaFuncao(sobrenome){
    const nome = 'Aislan';
    let cat = sobrenome;

     return function (){
        let ais;
         return nome, cat;
     };
}
const fundao = criaFuncao('Penha');

console.dir(fundao);


//console.log(nomeCompleto);

