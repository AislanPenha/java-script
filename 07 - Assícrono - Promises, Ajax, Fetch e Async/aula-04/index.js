
const request = obj => {
    return new Promise((resolve, reject) => {  // Método novo
        const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', ()=>{
        if(xhr.status >= 200 && xhr.status < 300){
            
            resolve(xhr.responseText);
        }else{
            
            reject(xhr.statusText);
        }
    });
    });
    

    // const xhr = new XMLHttpRequest();    // Método antigo
    // xhr.open(obj.method, obj.url, true);
    // xhr.send();

    // xhr.addEventListener('load', ()=>{
    //     if(xhr.status >= 200 && xhr.status < 300){
            
    //         obj.success(xhr.responseText);
    //     }else{
            
    //         obj.error(xhr.statusText);
    //     }
    // });
}

document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        carregaPagina(el);
    }
    
});

function carregaPagina(el){

    const href = el.getAttribute('href');

    request({
        method: 'GET',
        url: href,

        // success(responseText){             // Método antigo
        //     carregaResultado(responseText);
        // },
        // error(statusText){
        //     console.log(statusText);
        // }
    }).then(reponse => {              // Método novo
        carregaResultado(reponse);
    }).catch(error => console.log(error))


}
function carregaResultado(responseText){
   const result = document.querySelector('.resultado');

   result.innerHTML = responseText;
   
}