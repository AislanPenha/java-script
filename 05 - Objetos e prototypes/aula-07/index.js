
function ValidaCPF (cpfEnviado) {
    if (typeof cpfEnviado === 'undefined') return false;

    Object.defineProperty(this, 'cpfLimpo', {
        
        get: function(){
            return cpfEnviado.replace(/\D/g, '');
        }
    });

    
}

ValidaCPF.prototype.valida = function (){
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.eSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digitoUm = this.getDigito(cpfParcial);
    const digitoDois = this.getDigito(cpfParcial + digitoUm);
    
    const cpf = cpfParcial + digitoUm + digitoDois;
    return cpf === this.cpfLimpo;
}
ValidaCPF.prototype.getDigito = function (cpfParcial){
    cpfParcial = Array.from(cpfParcial);
    let count = cpfParcial.length + 1;

    let digito = cpfParcial.reduce( (ac, val) => {
            ac += (Number(val) * count);
            count--;
            return ac;
        },0);
    digito = 11 - (digito % 11);
    return (digito > 9 ? '0': digito.toString());
}
ValidaCPF.prototype.eSequencia = function (){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    console.log(sequencia);
    return sequencia === this.cpfLimpo;
}
const cpf = new ValidaCPF('00000000000');
console.log(cpf.valida());
//10 9  8  7  6 5  4  3 2
// 0 1  2  7  4 0  3  5 3 
// 0 9 16 49 24 0 12 15 6