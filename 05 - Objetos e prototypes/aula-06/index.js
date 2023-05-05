function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}
const p1 = new Produto('roupa', 90);
p1.aumento(10);
console.log(p1);

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco, cor);
    // this.cor = cor;
}
// Object.setPrototypeOf(Camiseta.prototype, Produto.prototype);  // Aqui não seta Produto como construtor
Camiseta.prototype = Object.create(Produto.prototype); // Seta o construtor o Produto
Camiseta.prototype.constructor = Camiseta; // Seta o construtor a Camiseta
Camiseta.prototype.aumento = function(percentual){   // Sobreescreve se já existe o método no pai
    this.preco += (this.preco * percentual /100);
}
Camiseta.prototype.desconto = function(percentual){  // Sobreescreve se já existe o método no pai
    this.preco -= (this.preco * percentual /100);
}

function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
const camiseta = new Camiseta('regata', 40, 'preta');
camiseta.aumento(50);
console.log(camiseta);

const caneca = new Caneca('caneca', 10, 'plástico', 3);
caneca.estoque = '33';
console.log(caneca, caneca.estoque);


