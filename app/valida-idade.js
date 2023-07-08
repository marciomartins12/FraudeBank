export function idade(dataIdade){
    if(!validandoIdade(dataIdade)){
        dataIdade.setCustomValidity("O usuário precisa ser maior de idade")
    }
}

function validandoIdade(data){
    const data18 = new Date(data.value);
    const dataAtual = new Date();
    const ResultadodataConvertida = new Date(data18.getUTCFullYear() + 18, data18.getUTCMonth(),data18.getUTCDate())
    return dataAtual >= ResultadodataConvertida
}
