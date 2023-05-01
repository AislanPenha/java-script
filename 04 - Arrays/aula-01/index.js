
// 

const nomes = new Array('Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'); /*===> const nomes = ['Eduardo', 'Maria', 'Joana']; */

delete nomes[2];
console.log(nomes)

// Valor por referência

const novo = nomes;
const novoSpread = [...nomes]
const removido = novo.pop();
console.log('Removido: ', removido);
console.log(nomes, novo, novoSpread);

const sliceNomes = nomes.slice(0,-1);

console.log(sliceNomes);

const stringNome = 'Aislan Bandeira Penha';
const arrayNome = stringNome.split(' ');
console.log(arrayNome);

const stringNovo = arrayNome.join('#');
console.log(stringNovo);


