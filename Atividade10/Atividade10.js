function CalcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
    } 
    else if (imc >= 18.5 && imc < 25) {
        document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - Peso normal`;
    }
    else if (imc >= 25 && imc < 30) {
        document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
    }
    else if (imc >= 30 && imc < 40) {
        document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - Obesidade`;
    }
    else {
        document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - Obesidade Grave`;
    }}