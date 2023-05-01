

// try{
//     console.log(naoExiste);
// }catch(err){
//     console.log('variável não existe!');
//     //console.log(err);  //erro completo
// }

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('X e Y precisam ser números')
    }

    return x+y;
}

try{
    soma('y',2);
}catch(err){
    //console.log(err);
    console.log('algo mais amigável');
}