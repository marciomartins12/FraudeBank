export function validaCPF(campo){
   
    const cpf = campo.value.replace(/\.|-/g, "");
    
    if(verificaNumerosRepetidos(cpf) | verificaPrimeiroDigito(cpf) | verificaSegundoDigito(cpf)){
        campo.setCustomValidity("Esse CPF não é válido")
    }
    
    
    
}
function verificaNumerosRepetidos(cpf){
    const numerosRepetidos=[
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '444444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '00000000000'
    ]
    return numerosRepetidos.includes(cpf);
   
}
function verificaPrimeiroDigito(cpf){

    let valor = cpf;
    let acc = 0;
    let multiplicador = 10;
    for(let cont = 0; cont < 9 ; cont++){
        acc += valor[cont] * multiplicador;
        multiplicador--;
    }
    let resultado = (acc*10)%11;
    if(resultado ===10 | resultado===11){
        resultado = 0;
    }
    return resultado != cpf[9];
}

function verificaSegundoDigito(cpf){

    let valor = cpf;
    let acc = 0;
    let multiplicador = 11;
    for(let cont = 0; cont < 10 ; cont++){
        acc += valor[cont] * multiplicador;
        multiplicador--;
        
    }
    let resultado2 = (acc*10) %11
    if(resultado2 ===10 | resultado2===11){
        resultado2 = 0;
    }
    return resultado2 != cpf[10];
}