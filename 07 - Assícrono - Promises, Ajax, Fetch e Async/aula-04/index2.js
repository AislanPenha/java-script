// Com async await

const request = (obj) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        });
    });
    
}

document.addEventListener('click', (e) => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if(tag === 'a'){
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href
    }
    try{
        const html = await request(objConfig);
        carregaResposta(html);
    }catch(e){
        console.warn(e);
    }
    
}

function carregaResposta(responseText){
    const respost = document.querySelector('.resultado');

    respost.innerHTML = responseText;
}