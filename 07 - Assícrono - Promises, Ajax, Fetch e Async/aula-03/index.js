function rand(){
    const numb = Math.random() * (3000-1000)+1000;
    return Math.round(numb);
}
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

async function executa(){
    try{
        const fase1 = await esperaAi('Frase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Frase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi(3, rand());
        console.log(fase3);
        const fase4 = await esperaAi('Frase 4', rand());
        console.log(fase4);
    }catch(e){
        console.log(e);
    }
    
}

executa();

const pending = esperaAi('Pendente', 500);
console.log(pending);