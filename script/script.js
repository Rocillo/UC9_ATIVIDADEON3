function verificar() {
    var nome = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;


    if (nome == '') {
        window.alert("Por favor preencher o campo de usuário corretamente.");
    } else if (senha == '') {
        window.alert("Por favor preencher o campo da senha corretamente.");
    } else {
        window.alert("Parabéns! Seu login foi realizado com sucesso!");
    }
}

$(document).ready(function () {
    $("banner").css({
        "width": "100%",
        "height": "168px",
        "background": "black"
    });
});