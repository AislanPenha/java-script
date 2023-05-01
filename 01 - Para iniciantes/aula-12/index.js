
function saudacao(nome){
    console.log(`Bom dia ${nome}`);
}
function saudacaoRetona(nome){
    const msg = `Bom dia ${nome}`;
    return msg;
    console.log('Não executa nada mais abaixo do returno no escopo')
}
function raiz(numero){
    return numero ** 0.5;
}

function soma(x = 0, y = 0){  //Se não passar valores, vai utilizar esses como padrão
    return x + y;
}
// console.log(saudacao());
// saudacao('Valdirene');

// console.log(saudacaoRetona('Aislan'));
// console.log(raiz(100));
// console.log(soma(100,'df'));
// console.log(soma(100));

const raizQuadrada = function (numero){  //FUNÇÃO ANÔNIMA: Função dentro de uma variável
    return numero ** 0.5;
};
console.log(raizQuadrada(100));

const raizQuadradaModerna = (numero) =>{  //ARROW FUNCTION: Função dentro de uma variável, mais moderna
    return numero ** 0.5;                 //Arrow Function reduzida:  const raizQuadradaModerna = n => n ** 0.5;
};
console.log(raizQuadradaModerna(100));