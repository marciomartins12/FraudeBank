import {validaCPF} from "./valida-cpf.js";
import { idade } from "./valida-idade.js";

const camposFOrmulario = document.querySelectorAll("[required]");

camposFOrmulario.forEach((campo)=>campo.addEventListener("blur",()=>{
  
    if(campo.name=="cpf" && campo.value.length >=11){
       validaCPF(campo)
    }
    if(campo.name =='aniversario')
          idade(campo);
} ))
