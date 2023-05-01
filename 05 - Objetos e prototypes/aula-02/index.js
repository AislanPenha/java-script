
function Produto(nome, preco, estoque){

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
         enumerable: true,  // mostra a chave
    //   //  value: estoque,    // inseri o valor na chave
    //     value: function(){
    //         return estoque;
    //     },
    //    // writable: false,   // se pode alterar
    //     configurable: false, // se pode configurar (apagar ou reconfigurar)
         get: function(){
            return estoquePrivado;
         },
         set: function(valor){
            if(typeof valor !== 'number') {
                throw new TypeError('Número inválido!');
            } 
             estoquePrivado = valor;
         }
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,  
            configurable: false,
            value: nome
            
        },
        preco: {
            enumerable: true,  
            value: preco,  
            writable: false,  
            configurable: false 
        },
                
    });
}

const p1 = new Produto('Escova', 2, 3);

console.log(p1, p1.estoque);
p1.estoque = 6;
console.log(p1, p1.estoque);
console.log(Object.keys(p1)); //chaves enumeráveis

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}
const p2 = criaProduto('Camiseta');
console.log(p2, p2.nome);
p2.nome = 'Calção';
console.log(p2, p2.nome);