//Função ao clicar

function clicked (){
    alert('Botão clicado');
}

//Evento
document.addEventListener('click', () => {
    document.getElementById('botao-clicado').addEventListener('click', clicked)
})
