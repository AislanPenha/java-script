fetch('pessoas.json')  //type fetch
 .then( response => response.json())
 .then (json => {
    carregaDadosNaTela(json);
 });


// Com Axios tem que inserir o <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
// axios('pessoas.json')  //type xhr
//     .then( resposta => carregaDadosNaTela(resposta.data));
 function carregaDadosNaTela(dados){
    const table = document.createElement('table');
    for (let pessoa of dados){
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.innerText = pessoa.nome;
        tr.appendChild(td1);

        td2.innerText = pessoa.empresa;
        tr.appendChild(td2);

        td3.innerText = pessoa.cpf;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const result = document.querySelector('.resultado');
    result.appendChild(table);
 }