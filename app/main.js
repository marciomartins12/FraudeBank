import {validaCPF} from "./cpf.js";

const camposFOrmulario = document.querySelectorAll("[required]");

camposFOrmulario.forEach((campo)=>campo.addEventListener("blur",()=>{
  console.log(campo.name)
    if(campo.name=="cpf"){
       validaCPF(campo)
    }

} ))
