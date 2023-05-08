document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        carregaPagina(el);
    }
});

// function carregaPagina(el){              // Método antigo
//     const href = el.getAttribute('href');
//     fetch(href)
//        .then( response =>  {
//             if(response.status !== 200){
//                throw new Error('ERRO 400')
//             }else{
//                 return response.text();
//             }
                
//        })
//        .then( html => { carregaResultado(html)})
// }


async function carregaPagina(el){              // Método antigo
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 400');

        const html = await response.text();

        carregaResultado(html);
    }catch(e){
        console.warn(e);
    }
}
function carregaResultado(responseText){
   const result = document.querySelector('.resultado');

   result.innerHTML = responseText;
   
}