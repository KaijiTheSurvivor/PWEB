function jogar(escolhaUsuario) {

    let numeroAleatorio = Math.random();
    let escolhaComputador;

    if (numeroAleatorio < 0.33) {
        escolhaComputador = "pedra";
    }
    else if (numeroAleatorio < 0.66){
        escolhaComputador = "papel";
    }
    else{
        escolhaComputador = "tesoura"
    }

    let resultadoFinal = "";

    if (escolhaUsuario === escolhaComputador) {
        resultadoFinal = "Empate!"
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        resultadoFinal = "Ganhou! " + escolhaUsuario + " Vence " + escolhaComputador + ".";
    } else {
        resultadoFinal = "Perdeu!"  + escolhaComputador + " Vence " + escolhaUsuario + ".";
    }

    document.getElementById("resultado").innerHTML = "<p>" + resultadoFinal + "</p>";

}