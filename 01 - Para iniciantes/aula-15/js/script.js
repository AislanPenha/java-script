//const nome = 'aislan'; escopo global, pode dar conflitos

function meuEscopo(){
    //const form = document.getElementsByClassName('form'); // método antigo
    const form = document.querySelector('.form');  //método moderno

    // form.onsubmit = function(evento){  //método antigo
    //     evento.preventDefault();
    //     console.log('oi');
    // };

    function recebeEventoForm(evento){
        const form = document.querySelector('.form');
        
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
    }
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();

