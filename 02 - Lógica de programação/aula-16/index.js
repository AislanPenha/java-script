
/*
For clássico - Geralmente com iteráveis (array ou string)
For in - Retorna o índice ou chave (string, array ou objetos)
For of - Retorna o valor em si (iteráveis, arrays ou strings)

*/
const frutas = ['Maçã', 'Pera', 'Uva', 'Laranja', 'Melancia'];

for( let valor of frutas){
    console.log(valor);
}
console.log("###########################################");


frutas.forEach(function(valor, indice, arrayCompleto){
    console.log(indice, valor, arrayCompleto);
});