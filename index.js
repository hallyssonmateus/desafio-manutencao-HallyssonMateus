const openModalButtom = document.querySelector("#botao-clicado");
const fecharModalButtom = document.querySelector("#button-fechar");
const modal = document.querySelector("#modalID");

//Função abrir modal
const openModal = () => {
    modal.classList.remove("hide");
}

const fecharModal = () => {
    modal.classList.add("hide");
}

// function clicked (){
//     alert('Botão clicado');
// }

//Evento apenas de mostrar o alert
// document.addEventListener('click', () => {
//     document.getElementById('botao-clicado').addEventListener('click', clicked)
// })

//Evento mostrar o modal
openModalButtom.addEventListener("click", openModal);
fecharModalButtom.addEventListener("click", fecharModal);