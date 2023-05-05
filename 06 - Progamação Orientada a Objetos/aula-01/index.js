class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    fala(){
        console.log(`${this.nome} está falando.`);
    }
}

function PessoaContructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
PessoaContructor.prototype.fala = function(){
    console.log(`${this.nome} está falando.`);
}

function criaPessoaFactory(nome, sobrenome){
    const pessoaPrototype = {
        fala(){
            console.log(`${this.nome} está falando.`);
        },
    }
    return Object.create(pessoaPrototype, {
        nome: {value: nome, enumerable:true},
        sobrenome: {value: sobrenome, enumerable:true}
    })
}
const p1 = new Pessoa('Aislan', 'Penha');
console.log(p1);
//p1.fala();
const p2 = new PessoaContructor('Aislan', 'Penha');
console.log(p2);
//p2.fala();

const p3 = criaPessoaFactory('Aislan', 'Penha');
console.log(p3);
p3.fala();