
const data = new Date('1987-04-30');

console.log(diaDaSemana(data.getDay()), data.toString());

function diaDaSemana(dia){
   let semana;
    // switch(dia){
    //     case 0: return 'Domingo';
    //     case 1: return 'Segunda';
    //     case 2: return 'Terça';
    //     case 3: return 'Quarta';
    //     case 4: return 'Quinta';
    //     case 5: return 'Sexta';
    //     case 6: return 'Sábado'
    //     dafault: return '';
    // }
    switch(dia){
        case 0: 
            semana = 'Domingo'; 
            break;
        case 1: 
            semana = 'Segunda'; 
            break;
        case 2: 
            semana = 'Terça'; 
            break;
        case 3: 
            semana = 'Quarta'; 
            break;
        case 4: 
            semana = 'Quinta'; 
            break;
        case 5: 
            semana = 'Sexta'; 
            break;
        case 6: 
            semana = 'Sábado'; 
            break;
        dafault: 
            semana = ''; 
            break;
        }

    return semana;

  

}