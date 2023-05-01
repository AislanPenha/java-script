let numb = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numb;

texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numb)} </p>`;
texto.innerHTML += `<p>${numb} é inteiro: ${Number.isInteger(numb)} </p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numb)} </p>`;
texto.innerHTML += `<p>Arrendando para baixo: ${Math.floor(numb)} </p>`;
texto.innerHTML += `<p>Arrendando para cima: ${Math.ceil(numb)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numb.toFixed(2)} </p>`;
