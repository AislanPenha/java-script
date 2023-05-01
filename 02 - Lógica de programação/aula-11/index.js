let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [1, 2, 3];  //[a, b, c] Atribuição via desestruturação (Array)       ---> [1, 2, 3] um array
                        //como já foram criadas, estamos reatribuindos valores à elas
                    

const array =  [4, 5, 6];                 
let [d, e, f] = array;

console.log(a, b, c);
console.log(d, e, f);

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);
console.log('----------------------------------------------------------');

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [um, dois, , quatro, , seis, ...rest] = numeros;    /// (...) rest operation or spread operation

console.log(um, dois, quatro, seis);
console.log(rest);

   //              0          1          2   
 //             0  1  2    0  1  2    0  1  2
const numbs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [lista1, ,[,oito]] = numbs;

console.log(numbs[1][2], lista1, oito);




