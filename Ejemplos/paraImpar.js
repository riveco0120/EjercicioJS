function calcular (){
var numero = parseFloat(document.getElementById("numero1").value)
var contador =0;
var resultado = document.getElementById("resultado")

while(contador<=numero){
if(contador%2 == 0){
    resultado.innerHTML += "El numero es par " + contador + "<br>";
}
else {
    resultado.innerHTML += "El numero es impar " + contador  + "<br>";
}
contador+=1;
}
}