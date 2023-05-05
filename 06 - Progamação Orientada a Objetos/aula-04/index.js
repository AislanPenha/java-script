class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // Métodos de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume += 2;
    }

    // Métodos estático
    //  * não tem dados referência da instância, pois não tem o new
    static trocaPilha(){
        console.log('Ok vou trocar.', this.tv, this.volume);
    }
    static soma(x, y){
        return x + y;
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);

ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(10,4));

