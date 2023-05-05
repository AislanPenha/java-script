function criarPessoa(nome, sobrenome){
    const falar = {
        falar(){
            console.log(`${this.nome} está falando.`);
        },
    };
    const comer = {
        comer(){
            console.log(`${this.nome} está comendo.`);
        },
    };
    const beber = {
        beber(){
            console.log(`${this.nome} está bebendo.`);
        },
    };
    /*const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando.`);
        },
        comer(){
            console.log(`${this.nome} está comendo.`);
        },
        beber(){
            console.log(`${this.nome} está bebendo.`);
        },
    };*/
   // const pessoaPrototype = Object.assign(falar, comer, beber); 
    const pessoaPrototype = {...falar, ...comer, ...beber};
    return Object.create(pessoaPrototype, {
        nome: {enumerable: true, value: nome},
        sobrenome: {enumerable: true, value: sobrenome}
    })
}
const p1 = criarPessoa('Aislan', 'Penha');
console.log(p1);
p1.comer();
p1.falar();
p1.beber();