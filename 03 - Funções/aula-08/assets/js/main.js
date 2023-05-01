// /* Função construtora*/
// function Calculadora(){
//     this.display = document.querySelector('.display');

//     this.capturaBotao = () => {
//         document.addEventListener('click', e => {
//             const el = e.target;
//             if(el.classList.contains('btn-num')) this.adicionaNumeros(el.innerText);
//             if(el.classList.contains('btn-clear')) this.limparCalculadora();
//             if(el.classList.contains('btn-del')) this.apagaNumero();
//             if(el.classList.contains('btn-eq')) this.executaCalculadora();
   
//         });
//     };

//     this.capturaEnter = () => {
//         document.addEventListener('keypress', e => {
            
//             if(e.key !== 'Enter') return;
//             this.executaCalculadora();
//         });
//     };

//     this.adicionaNumeros = valor =>  {
//         this.display.value += valor;
//         this.display.focus();
//     }
//     this.limparCalculadora = () => this.display.value = '';
//     this.iniciar = () => {
//         this.capturaBotao();
//         this.capturaEnter();
//     }
//     this.apagaNumero = () => this.display.value = this.display.value.slice(0, -1);

//     this.executaCalculadora = () => {
//         let conta = this.display.value;
//         try{
//             conta = eval(conta);

//             if(!conta){
//                 alert('Conta errada!');
//                 return;
//             }
//             this.display.value = conta;
//         }catch(e){
//             alert('erro');
//             return;
//         }
//     };

    
// }
// const calculadora = new Calculadora();
// calculadora.iniciar();


/* Função fábrica*/
function criarCalculadora(){
    const nomeNovo = 'aislannnnn';
    return {
        display: document.querySelector('.display'),

        iniciar(){
            this.capturaBotao();
        },

        adicionaNumeros(valor){
            this.display.value += valor;
        },

        limparCalculadora(){
            this.display.value = '';
        },

        apagaNumero(){
            this.display.value = this.display.value.slice(0, -1);
        },

        executaCalculadora(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta errada!');
                    return;
                }
                this.display.value = conta;
            }catch(e){
                alert('erro');
                return;
            }
        },
        capturaBotao(){
            document.addEventListener('click', function(e){
                const el = e.target;
                
                if(el.classList.contains('btn-num')){
                    this.adicionaNumeros(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.limparCalculadora();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaNumero();
                }
                if(el.classList.contains('btn-eq')){
                    this.executaCalculadora();
                }
            }.bind(this));
        },
    };
}

const calculadora = criarCalculadora();
calculadora.iniciar();











































// function criaCalculadora(){
//     return {
//         display: document.querySelector('.display'),

//         inicia: function(){
//             this.capturaBotao();
//             this.capturaEnter();
//         },

//         enviaNumeros(valor){
//             this.display.value += valor;
//         },

//         apagaNumeros(){
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         limpa(){
//             this.display.value = '';
//         },

//         realizaConta(){
//             let conta = this.display.value;
           
//             try{
//                 conta = eval(conta);
//                 if(!conta){
//                     alert('erro');
//                     return;
//                 }
//                 this.display.value = conta;

//             }catch(e){
//                 alert('erro');
//             }
//         },

//         capturaBotao() {
//             document.addEventListener('click', function (e){
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')){
//                     this.enviaNumeros(el.innerText);
//                 }

//                 if(el.classList.contains('btn-del')){
//                     this.apagaNumeros();
//                 }
//                 if(el.classList.contains('btn-clear')){
//                     this.limpa();
//                 }

//                 if(el.classList.contains('btn-eq')){
//                     this.realizaConta();
//                 }
//             }.bind(this));
//         },

//         capturaEnter() {
//             this.display.addEventListener('keypress', function (e){
             
//                 if(e.key === 'Enter'){
                   
//                     this.realizaConta();
//                 }

//             }.bind(this));
//         }

        
//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();




