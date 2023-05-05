class ValidaCPF{
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', 
        {
            value: cpf.replace(/\D/g, ''),
            enumerable: true,
            writable: false,
            configurable: false
        })
      
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        
        const d1 = ValidaCPF.getDigito(cpfParcial);
        const d2 = ValidaCPF.getDigito(cpfParcial + d1);
        const cpf = cpfParcial + d1 + d2;
        return cpf === this.cpfLimpo;
    }
    eSequencia(){
        const sequencia = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
    static getDigito(cpfParcial){
        let regressivo = cpfParcial.length + 1;
        const cpfArray = Array.from(cpfParcial);

        let digito = cpfArray.reduce( ( acu, val ) => {
            acu = acu + (val * regressivo);
            regressivo--;
            return acu;
        }, 0);
        digito = 11 - (digito % 11);
        
        return ( digito > 9 ) ? '0' : digito.toString();
    }
}

