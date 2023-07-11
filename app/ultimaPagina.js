const spanNome = document.querySelector("[data-nome]");
const spanemail = document.querySelector("[data-email]");
const localSto = localStorage.getItem("fomulario");
const convertido = JSON.parse(localSto);

spanNome.innerHTML=`${convertido.nome}`
spanemail.innerHTML=`${convertido.email}`