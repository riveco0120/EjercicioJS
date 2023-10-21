function calcular(){
    var numero1 = parseInt(document.getElementById("numero1").value); 
    var numero2 = parseInt(document.getElementById("numero2").value);
    var operador = document.getElementById("operador").value;
    var resultado = 0; 


    switch(operador){ 
        case "+": 
        resultado = numero1 + numero2; 
        break;
        case "-": 
        resultado = numero1 - numero2; 
        break;
        case "*": 
        resultado = numero1 * numero2; 
        break;
        case "/": 
        resultado = numero1 / numero2; 
        break;
        default:
        resultado = "Operacion invalidad"; 
    }

    document.getElementById("resultado").textContent = resultado;

}   

