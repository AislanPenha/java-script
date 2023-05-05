function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.parametro = 'Olha aí';

Pessoa.prototype.nomeFull = function(){        // Se tiver o mesmo nome de algum método construtor o do construtor terá prioridade
    return this.nome + ' ' + this.sobrenome;
}

// Instanciação
const p1 = new Pessoa('Aislan', 'Penha');
console.dir(p1);