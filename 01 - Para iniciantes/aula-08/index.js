let num1 = 2200.45646545487;
let num2 = 3.4;
let num3 = 3;
let temp;
let num4 = 0.7;
let num5 = 0.1;
num4 += num5;
num4 += num5; /* para resolver poderia multiplicar por 100 todos os numeros depois divide por 100*/
num4 += num5;
num4 = num4.toFixed(2);
console.log(num4, Number.isInteger(num4));

num4 = parseFloat(num4);  //==> num4 = Number(num4);
console.log(num4, Number.isInteger(num4));

/*

temp = num3 * 'oi';
console.log(num1.toString() + num2);
console.log(num1.toString(2));  //representação binária do num1
console.log(num1.toFixed(2));  //arredondar 2 casas decimais

console.log(Number.isInteger(num3));

console.log(temp);
console.log(Number.isNaN(temp));

console.log(typeof num1); */

console.log(!!(100/0)); //Infinity verdadeiro