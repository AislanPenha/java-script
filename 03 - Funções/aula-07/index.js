// Factory Functions (Funções fábrica) => Funções que retornam objeto

function criaPessoa(nome, sobrenome, a, p){
    //Variável privada abaixo
    let id;
    return {
        //Variáveis públicas abaixo
        nome,

        sobrenome,

        //Getter => função se comporta como atributo
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter 
        set nomeCompleto(valor){
            valor = valor.split(' ');

            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

           console.log(this.nome, this.sobrenome);
        },

        fala: function(assunto = 'calada') {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,

        //Getter => função se comporta como atributo
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Aislan', 'Penha', 1.65, 80);

console.log(p1.fala('falando sobre JS'));

p1.imc = 100; //Nâo atribui valores (setters), pois é uma função como atributo
console.log(p1.imc);
p1.nome = 'Novo';
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Valdirene dos Santos Araújo';
console.log(p1.nomeCompleto);
console.log(p1.altura);



