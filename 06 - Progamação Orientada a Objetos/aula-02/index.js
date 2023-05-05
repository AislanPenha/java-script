const _velocidade = Symbol('velocidade'); // Com descritor => Symbol('velocidade') Sem descritor => Symbol()

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];
    }

    set velocidade(valor){
        console.log('SETTER');
        this[_velocidade] = valor;
    }
    acelerar(){
        if (this[_velocidade] >= 100 ) return false;
        this[_velocidade] += 1;
    }
    freiar(){
        if (this[_velocidade] <= 0 ) return false;
        this[_velocidade] -= 1;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0 ; i <= 200; i++){
    //console.log(c1);
    c1.acelerar();
}
for(let i = 0 ; i <= 200; i++){
    //console.log(c1);
    //c1.freiar();
}
//c1.velocidade = 50;
//console.log(c1.velocidade);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    /**
     * @param {string} valor
     */
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa();
p1.nomeCompleto = "Aislan Bandeira Penha";
console.log(p1);