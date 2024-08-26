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

// Seleciona todos os botões com a classe 'btn_somos'
var buttons = document.querySelectorAll('.btn_somos');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Seleciona o cartão pai do botão clicado
        var card = this.closest('.card');
        
        // Alterna a classe 'ativar' no cartão clicado
        card.classList.toggle('ativar');
        
        // Atualiza o texto do botão baseado no estado do cartão
        if (card.classList.contains('ativar')) {
            this.textContent = 'Leia Menos';
        } else {
            this.textContent = 'Leia mais';
        }
    });
});




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