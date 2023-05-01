/*
Operadores lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Pelo menos uma expressão precisa ser verdadeiras para retornar true
! -> NOT -> NÃO -> Nega
*/
const expressaoAND = true && true && true && false;
const expressaoOR = true || false || false || false;
console.log(expressaoAND, !!expressaoOR);