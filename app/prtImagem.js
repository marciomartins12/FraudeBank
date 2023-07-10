const localVideo = document.querySelector("[data-video-botao]");
const video = document.querySelector("[data-video]");
const campo = document.querySelector("[data-camera]");

localVideo.addEventListener("click", async function(){
    const videoImagem = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    localVideo.style.display='none'
    campo.style.display='block'

    video.srcObject = videoImagem;
})