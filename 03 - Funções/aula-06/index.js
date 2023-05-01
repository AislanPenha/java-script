// IIFE -> Immediately Invoked Function Expression
// Funções imediatas

(function(idade, peso, altura){
    const sobrenome = 'Penha';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Aislan'));
    }

    falaNome();
    console.log(`Idade ${idade}, Peso ${peso} e Altura ${altura}`)
})(35, 80, 1.65);