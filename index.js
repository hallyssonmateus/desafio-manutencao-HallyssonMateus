const openModalButtom = document.querySelector("#botao-clicado");
const fecharModalButtom = document.querySelector("#button-fechar");
const modal = document.querySelector("#modalID");
//Botão Menu - Usando Jquery
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

//Banner - Slider
var radio = document.querySelector('.manual-btn')
var cont = 1;
document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++
    if (cont >3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true

}
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

//Evento mostrar e fechar o modal
openModalButtom.addEventListener("click", openModal);
fecharModalButtom.addEventListener("click", fecharModal);