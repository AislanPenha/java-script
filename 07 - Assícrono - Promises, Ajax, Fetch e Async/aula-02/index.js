function esperaAi(mensagem, tempo) {
    return new Promise( (resolve, reject) => {
        if(typeof mensagem !== 'string') {
            reject('BAD VALUE!'); //new TypeError('BAD VALUE!')
        }else{
            setTimeout(() =>{
                resolve('PROMISE: ' + mensagem.toUpperCase());
            }, tempo)
        }
    }); 
}

// const promises = [
//     'Primeira',
//     esperaAi("Mensagem 1", 2000),
//     esperaAi("Mensagem 2", 1000),
//     esperaAi("Mensagem 3", 5000),
//     esperaAi("Mensagem 4", 4000),
//     "Fim"
// ];

// Promise.all(promises)
// .then( (dados) => {
//     console.log(dados);
// })

const p1 = esperaAi("Mensagem 1", 2000);
const p2 = esperaAi("Mensagem 2", 1000);
const p3 = esperaAi('1vc', 5000);
const p4 = esperaAi("Mensagem 4", 4000);

const resolveAll = Promise.all([p1, p2,'oi', p3,1, p4, 'ultimo']);
resolveAll.then((dados) => {     // Se houver um erro cai no catch
    console.log('ALL: ', dados);
}).catch(err => {
    console.log('ERROR: ', err);
})

const resolveRace = Promise.race([p1, p2,'oi', 1,p3, p4, 'ultimo']);
resolveRace.then((dadoRapido) => {
    console.log('RACE: ', dadoRapido);
});

function baixaPagina(){
    const cache = false;

    if(cache){
        return Promise.resolve("Página em cache");  //Promise.reject()
    }else{
        return esperaAi("Fazendo download", 2000)
    }
}

baixaPagina().then((e => console.log(e))).catch((err => console.log(err)))