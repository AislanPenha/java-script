
function criaPessoa(nome, sobrenome, idade){ //PARÂMETROS: nome, sobrenome, idade
    return {
        nome,      //nome: nome,
        sobrenome, //sobrenome: sobrenome,
        idade,      //idade: idade

        //FUNÇÕES dentro de objetos são chamadas MÉTODOS

        fala: function(){
            console.log(`${this.nome} ${this.sobrenome} com idade de: ${this.idade} `);
        },

        incrementaIdade(){
            this.idade++;
        }
    };
}


const pessoa1 = {
    nome: 'Alisson',
    sobrenome: 'Bandeira',
    idade: 37,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} com idade de: ${this.idade} `);
    }

};

pessoa1.fala();

const pessoaAislan = criaPessoa('Aislan', 'Penha', 35);  //ARGUMENTOS: 'Aislan', 'Penha', 35 (valor)

pessoaAislan.fala();

pessoaAislan.fala();
pessoaAislan.incrementaIdade();
pessoaAislan.fala();