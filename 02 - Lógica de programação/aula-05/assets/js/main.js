function meuEscopo(){
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const resultado = document.querySelector('#msg');
        resultado.innerHTML = '';

        const p = document.createElement('p');
       

        const inputAltura = form.querySelector('.altura');
        const inputPeso = form.querySelector('.peso');

        const altura = Number(inputAltura.value);
        const peso = Number(inputPeso.value);

       
        if(!peso) {
            setMensagem('Peso inválido!', false);
      
        } else if(!altura) {
            setMensagem('Altura inválida!', false);
       
        }else{
            setMensagem('IMC é!', true);
        }

        function setMensagem(msg, isValid){
           
            if(isValid) {

                p.classList.add('certo');
                p.innerHTML = msg;
            } else {
                p.classList.add('erro');
                p.innerHTML = msg;
            }
            
        } console.log(p);
        
        resultado.appendChild(p);
        
    });
    
}
meuEscopo();































// function meuEscopo(){

//     const form = document.querySelector('.form');

//     form.addEventListener('submit', function(event){
//         event.preventDefault();
        
//         const inputPeso = event.target.querySelector('.peso');
//         const inputAltura = event.target.querySelector('.altura');
        
//         const peso = Number(inputPeso.value);
//         const altura = Number(inputAltura.value);

//         if(!peso) {
//             setResultado('Peso inválido!', false);
//             return;
//         } 
//         if(!altura) {
//             setResultado('Altura inválida!', false);
//             return;
//         }
//         const imc = getImc(altura, peso);
//         const nivel = getNivelImc(imc);

//         setResultado(`Seu IMC é: ${imc.toFixed(2)}! ${nivel}`, true);
       
//     });
//     function getImc(altura, peso){
//         return peso / altura ** 2;
//     }
//     function getNivelImc(imc){
//         const msg = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        
//         if(imc > 40) return msg[5];
//         if(imc > 35) return msg[4];
//         if(imc > 30) return msg[3];
//         if(imc > 25) return msg[2];
//         if(imc > 18.5) return msg[1];
//         if(imc <= 18.5) return msg[0];
//     }
//     function criaP(){
//         return document.createElement('p');
//     }
//     function setResultado(msg, isValid){
//         const resultado = document.querySelector('#msg');
//         resultado.innerHTML = '';
        
//         const p = criaP();
//         p.innerHTML = msg;
//         if(isValid) p.classList.add('certo');
//         else p.classList.add('erro');

//         resultado.appendChild(p);
//     }


// }
// meuEscopo();