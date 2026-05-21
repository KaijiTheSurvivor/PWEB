var form = document.getElementById("formularioPrincipal");
form.onsubmit = function(event) {
    event.preventDefault();
    if (document.formularioPrincipal.radio[0].checked == true) {
        alert("Volte sempre a essa pagina!");
    }
    else if (document.formularioPrincipal.radio[1].checked == true) {
        alert("Que bom que você voltou a visitar esta página!");
    }
    formularioPrincipal.reset();}