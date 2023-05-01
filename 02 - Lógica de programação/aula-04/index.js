/*
Das 0 - 11 = Bom dia
Das 12 - 17 = Boa tarde
Das 18 - 23 = Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes.
// Pode ter vários else ifs na checagem.
// Só pode ter um else na checagem.
// Pode usar condições sem else if, utilizando apenas if e else.
// No bloco, executa a primeira verdadeira e sai do bloc0...
//...não importando o que tem abaixo.
const hora = 12;

if(hora >= 0 && hora <=11) {
    console.log('Bom dia!');
} else if(hora >= 12 && hora <=17) {
    console.log('Boa tarde!');
} else if(hora >= 18 && hora <=23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}

const tenhoGrana = null;

if(tenhoGrana) {
    console.log('Vou sair de casa');
}else {
    console.log('Não vou sair de casa');
}

const numero = 15;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
} else if (1 === 1) {     //Verdadeira
    console.log('LITERAL');
} else if (numero >= 8 && numero <= 9) {  //Verdadeira
    console.log('O número está entre 8 e 9.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número esta entre 9 e 11.');
}  else {
    console.log('O número não está entre 0 e 11.');
} 

console.log('..Aqui vai o resto do código.')