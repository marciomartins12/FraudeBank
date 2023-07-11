const localVideo = document.querySelector("[data-video-botao]");
const video = document.querySelector("[data-video]");
const campo = document.querySelector("[data-camera]");
const botao = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const enviar = document.querySelector("[data-enviar]");
let urlImagem = ""

localVideo.addEventListener("click", async function(){
    const videoImagem = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    localVideo.style.display='none'
    campo.style.display='block'

    video.srcObject = videoImagem;
})
botao.addEventListener("click", (evento)=>{
evento.preventDefault();
canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
urlImagem = canvas.toDataURL("image/jpeg");
campo.style.display="none";
mensagem.style.display="block"
})

enviar.addEventListener("click", ()=>{
const getLocalStore = localStorage.getItem("fomulario");
const getConvertido = JSON.parse(getLocalStore);
getConvertido.imagem = urlImagem;

localStorage.setItem("fomulario", JSON.stringify(getConvertido))
window.location.href="../pages/abrir-conta-form-3.html"

})