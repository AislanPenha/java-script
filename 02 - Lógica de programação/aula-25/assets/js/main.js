function relogio() {
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');

    let timer, seconds = 0;

    function adicionarSegundos(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function mostrarHoras() {
        timer = setInterval(function (e) {
            seconds++;
            relogio.innerText = adicionarSegundos(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            mostrarHoras();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerText = '00:00:00';
            seconds = 0;
        }
    });


    // iniciar.addEventListener('click', function (e){
    //     clearInterval(timer);
    //     relogio.classList.remove('pausado');
    //     mostrarHoras();
    // });

    // pausar.addEventListener('click', function (e){
    //     clearInterval(timer);
    //     relogio.classList.add('pausado');
    // });

    // zerar.addEventListener('click', function (e){
    //     clearInterval(timer);
    //     relogio.classList.remove('pausado');
    //     relogio.innerText = '00:00:00';
    //     seconds = 0;
    // });
}

relogio();