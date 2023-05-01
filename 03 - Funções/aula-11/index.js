/*Funções geradoras*/

function* geradora1(){
    // Código qualquer ...
    yield 'Valor 1';
     // Código qualquer ...
     yield 'Valor 2';
      // Código qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
console.log(g1.next().done);

console.log('###############################');
const ge1 = geradora1();
for(let valor of ge1) {
    console.log(valor);
}

console.log('###############################');
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

console.log('4###############################');
const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

console.log('###############################');
function* geradora5(){
    yield function(){
        console.log('VIm do y1');
    };

    return function(){
        console.log('VIm do return');
    };

    yield function(){
        console.log('VIm do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
//func3(); //error: return acaba com a geração