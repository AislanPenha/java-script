/*

>>Operadores aritméticos<<

+ Adição / Concatenação
- Subração
* Multiplicação
/ Divisão
** Pontecialização
% Resto da divisão

>>Operadores de incrimento de decrimento<<

++
--

>>Operadores de atribuição<<

+=  =>   x += y;  =>  x = x + y;
-=
*=
/=
**=

*/

let num1 , num2;

num1 = 10;
num2 = '101';

console.log(typeof num2, num2);

num2 = parseInt(num2); //parseFloat

num2 = parseFloat(num2);


console.log(typeof num2, num2);

console.log(num1 * num2); //NaN => Not a Number