//Tipos de datos 
var numero = 42; 
var texto ="Hola mundo"
var esVedadero = true; 
var listaNumero = [1,2,3,4,5]; 
const persona = {nombre: "julian", edad :30, telefono :3205741456}; 
var valorNulo = null 
var indefinido; 

//Mostrar resultados 

var resultado = document.getElementById("resultado")
//resultado.innerHTML = "Numero: " + numero + "<br>";
//resultado.innerHTML += "Texto: " + texto + "<br>";
//resultado.innerHTML += "Es Verdadero: " + esVedadero + "<br>";
//resultado.innerHTML += "Arreglo: " + listaNumero.join(", ") + "<br>";
resultado.innerHTML += "Objeto: Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", telefono : " + persona.telefono + "<br>";
//resultado.innerHTML += "Valor Nulo: " + valorNulo + "<br>";
//resultado.innerHTML += "Indefinido: " + indefinido + "<br>";