const form = document.getElementById('form-numerico');


function validaNumero(resultado) {

}




form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    
    const numeroUm = document.getElementById('numero-um');
    const numeroDois = document.getElementById('numero-dois');
    const mensagemSucesso = `O valor de <b>${numeroUm.value}</b> é menor que <b>${numeroDois.value}</b>!`;
    const mensagemFalha = `O valor de <b>${numeroUm.value}</b> não é menor que <b>${numeroDois.value}</b>!`;

    let resultado = numeroDois.value > numeroUm.value

    if (resultado) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroDois.value = '';
        numeroUm.value = '';
    } else {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemFalha;
        containerMensagemSucesso.style.display = 'block';
    }
})