//Filter => Não modifica o array e retorna true ou false

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const maioresDez = numeros.filter(function(valor, indice, array){
    if(valor > 10){
        return true
    }else{
        return false;
    }
})
const maioresDez2 = numeros.filter(valor => valor > 50);
console.log(maioresDez2);

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]
//Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasMaisDeCincoLetras = pessoas.filter(obj => (obj.nome.length >=7 ));
console.log(pessoasMaisDeCincoLetras);

//Retorne as pessoas com mais de 50 anos
const pessoasMaisCinquenta = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisCinquenta);

//Retorne as pessoas, cujo nome termina com 'a'
const pessoasTerminaA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(pessoasTerminaA);