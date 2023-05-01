function meuEscopo(){
    const form = document.querySelector('.form');
    const pessoas = [];

    function cadastrar(nome, sobrenome, peso, altura){
        /* const pessoa = {
            nome, sobrenome, peso, altura
        };
        pessoas.push(pessoa); */

        pessoas.push({
            nome, sobrenome, peso, altura
        });
    }
    function recebeEvento(evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        cadastrar(nome, sobrenome, peso, altura);

        const resultado = document.querySelector('.resultado');

        resultado.innerHTML += `<p>${nome}
                                ${sobrenome}
                                ${peso}
                                ${altura}</p>`;
        
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEvento);
}

meuEscopo();
