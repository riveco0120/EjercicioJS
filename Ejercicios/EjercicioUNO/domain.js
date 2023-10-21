// Tipos de datos
var numero = 42;
var texto = "Hola, mundo!";
var esVerdadero = true;
var listaDeNumeros = [1, 2, 3, 4, 5];
var persona = { nombre: "Juan", edad: 30 };
var valorNulo = null;
var indefinido;

// Mostrar los tipos de datos en la página
var resultado = document.getElementById("resultado");
resultado.innerHTML = "Número: " + numero + "<br>";
resultado.innerHTML += "Texto: " + texto + "<br>";
resultado.innerHTML += "Es Verdadero: " + esVerdadero + "<br>";
resultado.innerHTML += "Arreglo: " + listaDeNumeros.join(", ") + "<br>";
resultado.innerHTML += "Objeto: Nombre: " + persona.nombre + ", Edad: " + persona.edad + "<br>";
resultado.innerHTML += "Valor Nulo: " + valorNulo + "<br>";
resultado.innerHTML += "Indefinido: " + indefinido + "<br>";
