function Conta (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        return false;
    }
    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` +
                `Saldo: R$ ${this.saldo.toFixed(2)}`);
}

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    Object.defineProperty(this, 'limite', {
        enumerable: true,
        value: limite
    })
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;
CC.prototype.sacar = function(valor){                         //Polimorfismo: mesmo método, funções diferentes
    if(this.saldo + this.limite< valor ) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        return false;
    }
    this.saldo -= valor;
    this.verSaldo();
}
const conta = new CC(11, 22, 10, 50);
conta.sacar(19);
// conta.depositar(9);
console.log(conta);
