
const tarefas = document.querySelector('.lista');
const inputTarefa = document.querySelector('.inputTarefa');
const btnTarefa = document.querySelector('.btnTarefa');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if(e.key === 'Enter' ){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    const bt = document.createElement('button');
    bt.innerText = 'Apagar';
    //bt.classList.add('apagar');
    bt.setAttribute('class', 'apagar');
    li.appendChild(bt);
}

function criaTarefa(mensagem) {
    const textoNode = document.createTextNode(mensagem + ' ');

    const li = criaLi();
    li.appendChild(textoNode);
    criaBotaoApagar(li);
    tarefas.appendChild(li);

    limpaInput();
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){
    
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
  
});
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');

    const listaDeTarefas = [];

    for( let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;

        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();  // Função que remove os espaços
        listaDeTarefas.push(tarefaTexto);
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();