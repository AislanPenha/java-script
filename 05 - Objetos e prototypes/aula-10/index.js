
const pessoas = [
{
    id: 4,
    nome: 'Dumerval'},
{
    id: 3,
    nome: 'Catarina'},
{
    id: 2,
    nome: 'Bandeira'},
{
    id: 1,
    nome: 'Aislan'}];

// pessoas.map(p => {
//     console.log(p);
// });

const novasPessoas = new Map();

for (let pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, pessoa);
}
console.log(novasPessoas);

novasPessoas.delete(3);
console.log(novasPessoas.get(2));

for(let [identify, pessoa] of novasPessoas){
    console.log(identify, pessoa);
}
for(let pessoa of novasPessoas.keys()){
    console.log(pessoa);
}
for(let pessoa of novasPessoas.values()){
    console.log(pessoa);
}