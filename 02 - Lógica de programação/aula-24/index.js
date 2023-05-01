


function mostrarHora(){
    const data = new Date();

    return data.toLocaleTimeString('pt-BR');
}
function imprimirHora(){
    console.log(mostrarHora());
}

//setInterval(imprimirHora, 1000);   //passa a referência da função sem executar()

const time = setInterval(function(){
    console.log(mostrarHora());
}, 1000);


setTimeout(function (){
    clearInterval(time);
},5000);

setTimeout(function (){
    console.log('Hello World!');
},10000);