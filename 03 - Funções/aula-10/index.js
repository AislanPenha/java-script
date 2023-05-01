
/*Função recursiva*/

function recursiva(max){
    console.log(max)

    if(max < 10){
        max++;
        recursiva(max);
    }
}
recursiva(0);
