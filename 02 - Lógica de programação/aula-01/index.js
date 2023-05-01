/*
Operadores de comparação
> maior que
>= maior ou igual a que
< menor que
<= menor ou igual a que
== igualdade (= atribuição)  (valor)***
=== igualdade estrito (valor e tipo)***
!= diferente (valor)***
!== diferente estrito (valor e tipo)***
*/

let com, a, b;
a = 10;  //number
b = '10';  //string
com = a == b;

console.log(com);
com = a === b;
console.log(com);