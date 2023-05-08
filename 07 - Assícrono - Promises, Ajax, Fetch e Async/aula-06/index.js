document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        carregaPagina(el);
    }
});


async function carregaPagina(el){
    try{         
        const href = el.getAttribute('href');   // moderno async await
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('ERRO 404 NOSSO');
        const html = await response.text();
        carregaResultado(html);
    }catch(e){
        console.warn(e);
    }
    // fetch(href)    // antigo
    //     .then( response => {
    //         if(response.status !== 200) throw new Error('ERRO 404 NOSSO');
    //         return response.text()
    //     })
    //     .then( html => carregaResultado(html))
    //     .catch( e => console.log(e));

}
function carregaResultado(responseText){
   const result = document.querySelector('.resultado');

   result.innerHTML = responseText;
   
}

// fetch('pagina1.html')
//   .then(response => {
//     if(response.status !== 200) throw new Error('ERRO 404 NOSSO');

//     return response.text()
//   })
//   .then( html => console.log(html))    
//   .catch( e => console.warn(e));   //console.error(e) => vermelho console.war(e) => amarelo