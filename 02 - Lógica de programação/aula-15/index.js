
//array de uma posição = vetor

//FOR IN => Ler os índices ou chaves do objeto

const frutas = ['Maçã', 'Pera', 'Uva', 'Laranja', 'Melancia'];

for(let indice in frutas){
    //console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Aislan',
    sobrenome: 'Penha',
    idade: 35,
    endereco: {
        rua: 'Princesa Graça',
        numero: 2012
    }
};
//console.log(pessoa.nome); ====> console.log(pessoa[nome]); 

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


const nome = 'Aislan Bandeira Penha-';

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

for(let i  in nome){
    console.log(nome[i]);
}