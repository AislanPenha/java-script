

try {                //É executado quando não há erros
    a
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');

} catch (err) {        //É executado quando há eros
    console.log('Tratando o erro');
} finally {           //Sempre é executado
    console.log('Fechei o arquivo')
}


function retornaHora(data) {
    if (!(data instanceof Date)) {
        throw new TypeError('Essa data não é data');
    }
    if (data) {
        data = new Date();
    }

    return (data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }));
}


try {

    console.log(retornaHora(344));
} catch (err) {
    console.log(err);
} finally {
    console.log('Tenha um bom dia');
}
