
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for(let numero of numeros){

    if(numero === 5 || numero === 2){
        continue;
    }
    
    if(numero === 5){
        console.log('Pulei o número 5');
        continue;
    }

    if( numero === 7){
        console.log('7 encontrado, saindo...');
        break;
    }
    console.log(numero);
}