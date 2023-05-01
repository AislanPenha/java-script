//Map => Pode modificar o array e retorna os valores no mesmo tamanho do array inicial
// altera o objeto inSical

// Retorne os números com valores dobrados
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobro = numeros.map(valor => valor*2);
//console.log(numerosDobro);



const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];
// 1 - Para cada elemento
// 1.1 - Retorne apenas uma string com o nome da pessoa
const pessoasNome = pessoas.map (obj => obj.nome);
//console.log(pessoasNome);

// 1.2 - Remova apenas a chave nome do objeto
const pessoasSemNome = pessoas.map (obj => {
   // delete obj.nome //deleta no objeto raiz :=
    return {idade: obj.idade};
    });
console.log(pessoasSemNome);

// 1.3 - Adicione uma chave em cada objeto
const pessoasComChave = pessoas.map( (obj, indice) => {
   
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
    //return ({...valor, id: 1000 * (indice + 1) })
});
console.log(pessoasComChave);
console.log(pessoas);