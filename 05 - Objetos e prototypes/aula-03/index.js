const produtos = {nome: 'Caneca', valor: 1.8};

const copiaSprad = {...produtos, tipo: 'porcelana'};
copiaSprad.nome = 'Prato';
//produtos.valor = 3;
console.log(produtos);
console.log(copiaSprad);

const copiaObj = Object.assign({}, produtos, {cor: 'Azul'});
console.log(copiaObj);

const copiaRustica = {nome: produtos.nome, valor: produtos.valor};
console.log(copiaRustica);
Object.defineProperty(produtos, 'nome', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(produtos, 'nome'));
console.log(Object.values(copiaSprad));
console.log(Object.entries(copiaSprad));

for(let [chave, valor] of Object.entries(copiaSprad)){
    console.log(chave, valor);
}