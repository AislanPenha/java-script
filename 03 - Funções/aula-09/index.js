// Constructor functions (Função construtora)
// Contrutora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    const id = 123; //Variável privada

    const metodoInterno = function(){  //Método privado

    };
    this.nome = nome;   //Variáveis públicas
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Aislan', 'Penha');
const p2 = new Pessoa('Valdirene', 'Araújo');

console.log(p1, p2);
p2.metodo();