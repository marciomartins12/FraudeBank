import {validaCPF} from "./valida-cpf.js";
import { idade } from "./valida-idade.js";

const camposFOrmulario = document.querySelectorAll("[required]");
let mensagemDeErro = ''

camposFOrmulario.forEach((campo)=>{
  campo.addEventListener("invalid", evento => evento.preventDefault())
  
  campo.addEventListener("blur",()=>{
    campo.setCustomValidity('')
    let local = campo.parentNode.querySelector('.mensagem-erro');
    
    if(campo.name =='aniversario'){
      idade(campo);
    }
    if(campo.name=="cpf" && campo.value.length >=11){
      validaCPF(campo)
    }

    local.innerHTML = '';

   tiposDeErros.forEach((erro)=>{
    if(campo.validity[erro]){
    mensagemDeErro = mensagens[campo.name][erro];
    local.innerHTML = mensagemDeErro;
   }})
  })})
  

  const tiposDeErros = [ 
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
  ]
  const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}