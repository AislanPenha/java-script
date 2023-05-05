class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado.`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
        this.bateria = 10;
    }
    ligar(){
        if(this.bateria <= 30){
            console.log('Bateria baixa, não pode ligar!');
            return;
        }
        this.ligado = true;
    }
}

const d1 = new DispositivoEletronico('Genérico');
d1.ligar();
d1.ligar();
console.log(d1);
console.log('###########################################');
const s1 = new Smartphone('Samsung', 'Azul', 'A22');
s1.ligar();
s1.ligar();
console.log(s1);
console.log('###########################################');
const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1);