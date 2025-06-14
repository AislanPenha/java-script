/*
Javascript é baseado em protótipos para passar propriedades e métodos 
de um objeto para outro.

Definição de protótipo
É o termo usado apra se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-la. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de prótotipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.parametro = 'Olha aí';
Pessoa.prototype = p1.__proto__
Pessoa.prototype.nomeFull = function(){        // Se tiver o mesmo nome de algum método construtor o do construtor terá prioridade
    return this.nome + ' ' + this.sobrenome;
}

// Instanciação
const p1 = new Pessoa('Aislan', 'Penha');
console.dir(p1);
