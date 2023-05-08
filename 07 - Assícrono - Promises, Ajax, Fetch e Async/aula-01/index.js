function rand(){
    const numb = Math.random() * (3000-1000)+1000;
    return Math.round(numb);
}

// function esperaAi(mensagem, tempo, cal) {
//     setTimeout((e) =>{
//         console.log(mensagem);
//         if(cal) cal(); //solucão callback
//     }, tempo)
// }
// esperaAi('Frase 1', rand());
// esperaAi('Frase 2', rand());
// esperaAi('Frase 3', rand());
// esperaAi('Frase 4', rand());
// esperaAi('Frase 5', rand());

// esperaAi('Frase 1', rand(), esperaAi1);
// function esperaAi1(){
//     esperaAi('Frase 2', rand(), esperaAi2);
// }
// function esperaAi2(){
//     esperaAi('Frase 3', rand(), esperaAi3);
// }
// function esperaAi3(){
//     esperaAi('Frase 4', rand(), esperaAi4);
// }
// function esperaAi4(){
//     esperaAi('Frase 5', rand());
// }

// esperaAi('Frase 1', rand(), function (){
//     esperaAi('Frase 2', rand(), function (){
//         esperaAi('Frase 3', rand(), function (){
//             esperaAi('Frase 4', rand(), function (){
//                 esperaAi('Frase 5', rand());
//             });
//         });
//     });
// });

// function esperaAi(mensagem, tempo) {
//     return new Promise( (resolve, reject) => {
//         if(typeof mensagem !== 'string') reject(new TypeError('BAD VALUE!'));
//         setTimeout((e) =>{
//             resolve(mensagem);
//         }, tempo)
//     }); 
// }
// esperaAi('Frase 1', rand())
// .then((mensagem) => {
//     console.log(mensagem);
//     return esperaAi('Frase 2', rand());
// }).then((mensagem) => {
//     console.log(mensagem);
//     return esperaAi('Frase 3', rand());
// }).then((mensagem) => {
//     console.log(mensagem);
//     return esperaAi('4', rand());
// }).then((mensagem) => {
//     console.log(mensagem);
//     return esperaAi('Frase 5', rand());
// }).catch(err => {
//     console.log('ERROR: ', err);   //O catch encerra os then's
// });
// console.log('Isso aqui será primeiro, mesmo sendo o último');

// const resolvidaPromise = Promise.resolve('fulfilled');
// const rejeitadaPromise = Promise.reject('rejected');  //
// resolvidaPromise.then((e) => console.log(e));
// rejeitadaPromise.catch((e) => console.log(e));

const myPromise = new Promise((resolve, reject) => {
    const name = 'Aislan';
    
    if(name === 'Aislan') {
        resolve('Aislan');
    }else{
        reject('Not Aislan');
    }
});
// myPromise.then((name) => {
//     console.log('Resolvido', name);
// }).catch((err) => {
//     console.log('Error: ', err);
// })
myPromise.then((name => {
    return name.toUpperCase();
})).then((stringModificada => {
    console.log(stringModificada);
}))