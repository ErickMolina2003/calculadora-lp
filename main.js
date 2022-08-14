
var valorActual = '';
var numeros = [];
var resultado;
var valorPantalla = '';

function limpiar() {
    document.getElementById('principal').value = '';
    numeros = [];
    resultado = '';
    valorActual = '';
    valorPantalla = '';
}

function digitar_operacion(num) {
    valorPantalla += `${num}`;
    valorActual = valorActual + `${num}`;
    document.getElementById('principal').value = valorPantalla;
}

function operacion(op) {
    numeros.push(Number.parseFloat(valorActual));
    valorActual = '';

    if (numeros.length > 1) {
        if (operador == '+') {
            resultado = Number.parseFloat(numeros[0]) + Number.parseFloat(numeros[1]);
            numeros = [];
            numeros.push(resultado);
        }
        if (operador == '-') {
            resultado = Number.parseFloat(numeros[0]) - Number.parseFloat(numeros[1]);
            numeros = [];
            numeros.push(resultado);
        }
        if (operador == '*') {
            resultado = Number.parseFloat(numeros[0]) * Number.parseFloat(numeros[1]);
            numeros = [];
            numeros.push(resultado);
        }
        if (operador == '/') {
            resultado = Number.parseFloat(numeros[0]) / Number.parseFloat(numeros[1]);
            numeros = [];
            numeros.push(resultado);
        }
    }
    if(resultado) {
        valorPantalla = `${resultado}`;
    }
    valorPantalla += `${op}`
    document.getElementById('principal').value = valorPantalla;

    operador = op;
}

function igual() {

    if (operador == '+') {
        resultado = Number.parseFloat(numeros[0]) + Number.parseFloat(valorActual);
    }
    if (operador == '-') {
        resultado = Number.parseFloat(numeros[0]) - Number.parseFloat(valorActual);
    }
    if (operador == '*') {
        resultado = Number.parseFloat(numeros[0]) * Number.parseFloat(valorActual);
    }
    if (operador == '/') {
        resultado = Number.parseFloat(numeros[0]) / Number.parseFloat(valorActual);
    }
    if (!resultado) {
        document.getElementById('principal').value = "Syntax Error";

    } else {
        document.getElementById('principal').value = resultado;
    }
    numeros = [];
    resultado = '';
    valorActual = '';
    valorPantalla = '';
}
