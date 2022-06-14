function Suma() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML = resultado;
}

function Resta() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = resultado;
}

function Multiplicacion() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = resultado;
}

// Language: javascript
// Path: JS\script.js
function Division() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML = resultado;
}

//run the function when the page is loaded
window.onload = function() {
    document.getElementById("btnSuma").onclick = Suma;
    document.getElementById("btnResta").onclick = Resta;
    document.getElementById("btnMultiplicacion").onclick = Multiplicacion;
    document.getElementById("btnDivision").onclick = Division;
}