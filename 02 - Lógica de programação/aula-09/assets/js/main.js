// data.toLocaleDateString, usando a formatação timeStyle da error
const options = {
    //timeZone: 'America/Sao_Paulo',
    //timeStyle: 'short',
    dateStyle: 'full',
    timeStyle: 'short',
    UTC
};
//  const data2 = new Date().toLocaleDateString('pt-BR', options);
const data = new Intl.DateTimeFormat('pt-BR', options);

// const texto = document.querySelector('h1');

// texto.innerHTML = data.format();

console.log(data.format());