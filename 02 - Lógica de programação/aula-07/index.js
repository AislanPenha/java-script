/*OBJETO DATA*/

let data = new Date(); //função construtora, se coloca o new. Começa sempre com letras maiúscula

const gmtGreen = 3 * 60 * 60 * 1000;
const dataUnix = new Date(0 + gmtGreen); //ERA UNIX: 1970
console.log(data.toString());
console.log(dataUnix.toString());


data = new Date(2023, 3, 11, 9, 55, 23, 990); //ano, mês, dia, horas, minutos, segundos, milissegundos
//data = new Date(2023, 3) // pode até 2 parâmetros, pois 1 parâmetro é milissegundo
console.log(data.toString());

data = new Date('2023-04-10 13:25:43.599');
console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth()); //Mês começa com zero
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Minutos:', data.getMinutes());
console.log('Segundos:', data.getSeconds());
console.log('Milissegundos:', data.getMilliseconds());
console.log('Dia da semana:', data.getDay()); //0 - domingo e 6 - sabado
console.log(data.toString());

console.log(Date.now()); //milissegundo desde o dia UNIX até agora

const horaAtual = new Date();

console.log(formata(horaAtual));

function formata(hora){
    const horas = zeroEsquerda(hora.getHours());
    const minutos = zeroEsquerda(hora.getMinutes());
    const segundos = zeroEsquerda(hora.getSeconds());

    return `${horas}:${minutos}:${segundos}`;

}
function zeroEsquerda(num){
    return (num >= 10 ) ? num : `0${num}`
}