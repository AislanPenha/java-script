const pessoa = {
    nome: 'Aislan',
    sobrenome: 'Penha',
    idade: 35,
    endereco: {
        rua: 'Princesa Graça',
        numero: 2012
    }
};

console.log(pessoa.endereco.rua);

const {sobrenome: alcunha = 'padrão', endereco: {rua: r}, endereco, ...rest} = pessoa;

console.log(alcunha, r, endereco);

console.log(rest);