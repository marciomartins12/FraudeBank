export function validaCPF(campo){
   
    const cpf = campo.value.replace(/\.|-/g, "");
    verificaNumerosRepetidos(cpf)
    verifficaPrimeiroDigito(cpf)
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
    const valor = numerosRepetidos.includes(cpf)
    console.log(valor)
}
function verifficaPrimeiroDigito(cpf){

    const valor = cpf;
    let somador = 0;
    let multiplicador = 10
    for(let contador = 0; contador < 9 ; contador++){
        somador += valor[contador] * multiplicador;
        multiplicador--;
    }
    let resultado = (somador*10)%11;
    console.log(resultado)
}