// Declaração de função (Function hoisting)
// Mesmo chamando depois da função --> ela é elevada ao topo 

function falaOi(){
    console.log('Oie');
}

falaOi();

// First-class objects (Objetos de primeira classse)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    },
    gritar() {
        console.log('Estou gritando...');
    }
};
obj.falar();
obj.gritar();