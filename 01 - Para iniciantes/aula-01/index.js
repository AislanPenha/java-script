function criarCalcuradora(){
    return {
        display: document.querySelector('.display'),
      
        inicia: function(){
           this.clicaBotoes();
        },
        mostrarDisplay: function(text){
            this.display.value += text;
        },
        zerarDisplay: function(){
            this.display.value = '';
        },
        apagarDisplay: function(){
            this.display.value = this.display.value.slice(0,-1);
        },
        realizaConta: function(){
            try{
                const res = eval(this.display.value);
              
                this.display.value = res;
            }catch(e){
                alert('error');
                this.zerarDisplay();
            }
        },
        clicaBotoes(){
            document.addEventListener('click', function(e){
                if(e.target.classList.contains('btn-num'))
                    this.mostrarDisplay(e.target.innerText);
                if(e.target.classList.contains('btn-clear'))
                    this.zerarDisplay();
                if(e.target.classList.contains('btn-del'))
                    this.apagarDisplay();
                if(e.target.classList.contains('btn-eq'))
                    this.realizaConta();
            }.bind(this));
        }
    };
}

const calculadora = criarCalcuradora();
calculadora.inicia();