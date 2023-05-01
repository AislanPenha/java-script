/*
Avaliação de Curto Circuito (Short-Circuit)
&& -> achando uma FALSY já encerra as checagens
||
!

FALSY
false
0
'' "" ``
null
undefined
NaN
*/

console.log(23 && 'dfd' && " " && 'df' && 654); //retorna o último quando não encontrado um FALSY(654) 

function falar(){
    return 'oi';
}
let vaiExecutar = 'oi';

console.log(vaiExecutar && falar());

let corUsuario;
let corPadrao = 'preto';
corUsuario = corUsuario || corPadrao; //Fall Back
console.log(corUsuario);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

