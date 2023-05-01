//Operador ternário -> (condição) ? verdadeiro : falso

const pontuacaoUsuario = 900;
let nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

if(pontuacaoUsuario >= 1000){
    nivelUsuario = 'Usuário VIP';
} else{
    nivelUsuario = 'Usuário normal';
}

console.log(nivelUsuario);