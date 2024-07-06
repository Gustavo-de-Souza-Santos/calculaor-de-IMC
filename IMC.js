
const calcular = document.getElementById('calcular');

function imc() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (peso !== "" && altura !== "") {

        const valorImc = (peso / (altura * altura)).toFixed(2);

        resultado.textContent = valorImc
    } else {
        resultado.textContent = ("preencha os imputs")
    }

}

calcular.addEventListener('click', imc);
