
const pessoa1 = new Object();  //Objetor por construtor
pessoa1.nome = 'Aislan';
pessoa1.sobrenome = 'Penha';
pessoa1.idade = 36;
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando`);
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log('PESSOA 1');
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

const pessoa2 = {    //Objeto literal
    nome: 'Alex',
    sobrenome: 'Bruno'
};
console.log('PESSOA 2');
console.log(pessoa2['nome']);  //anotação de colchete
console.log(pessoa2.sobrenome); //anotação de ponto

delete pessoa2.sobrenome;
console.log(pessoa2);

// Padrões de Objetos
// Factory functions / Constructor functions / Class(syntac sugar) 
/* Em programação, é quando há o intuito de facilitar o entendimento, ou seja, sendo mais “doce” ou melhor diluído.*/

//Factory function
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            console.log(this.nome, this.sobrenome);
        }
    }
}
const pessoaFactory = criaPessoa('Mark', 'Zuckerberg');
//Object.freeze(pessoaFactory); //Impendindo alteração só na pessoaFactory
pessoaFactory.nome = 'Alisson';
pessoaFactory.nomeCompleto;
console.log(pessoaFactory); //=>{ nome: 'Mark', sobrenome: 'Zuckerberg', nomeCompleto: [Getter] }
// Constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function(){
        console.log(this.nome, this.sobrenome);
    }
    Object.freeze(this); //Nenhum Objeto dessa Pessoa pode ser alterado
}
const pessoaConstructor = new Pessoa('Orkut', 'Büyükkökten'); //new -> cria um Objeto{} e atrela ele ao this e retorna esse this
pessoaConstructor.nome = 'Aislan'; // Não altera por causa do Object.freeze()
pessoaConstructor.nomeCompleto();
console.log(pessoaConstructor); //=>   Pessoa {  ==> Pessoa é o construtor
                                //       nome: 'Orkut',
                                //       sobrenome: 'Büyükkökten',
                                //       nomeCompleto: [Function (anonymous)]