// new Object => Toda funcão construtora tem Object.protype
// objA.__proto__ === Object.protype (true)
const objA = {
    chaveA: 'A'
    // __proto__: Object.protype
}
const objB = {
    chaveB: 'B',
    // __proto__ : objA
}
const objC = {
    chaveC: 'C',
    // __proto__ : objB
}
// Maneira correta de pegar o __proto__
// Object.getPrototypeOF(objeto)
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveB);

function Produtos(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produtos.prototype.aumento = function(valor){
    this.preco = this.preco + (this.preco * valor / 100);
}
Produtos.prototype.desconto = function(valor){
    this.preco = this.preco - (this.preco * valor / 100);
}
const p10 = new Produtos('Camisa', 100);
p10.aumento(10);
console.log(p10);
p10.desconto(100);
console.log(p10);

const p20 = {
   nome: 'Lanterna',
   preco:100
};
Object.setPrototypeOf(p20, Produtos.prototype);    //Só copia os prototypes, já que os Produtos é uma função construtora
p20.aumento(10);
console.log(p20);

const p30 = Object.create(Produtos.prototype,{
    nome: {
        writable: true,
        value: 'Computador',
        configurable: true,
        enumerable: true
    },
    preco: {
        writable: true,
        value: 1000,
        configurable: true,
        enumerable: true
    },
    cor: {
        writable: true,
        value: 'Azul',
        configurable: true,
        enumerable: true
    },
}); //Property Descriptor Map opcional
console.log(p30);