//Numero magico 

var numeroMagico = 0; 
console.log(numeroMagico)
var resultado = document.getElementById("resultado")
var bandera = true

while(bandera){
    resultado.innerHTML = "Uff no has ganado"    
    numeroMagico = Math.floor(Math.random()*100) +1; 
    alert(numeroMagico)
    if(numeroMagico<=10){
        bandera =false
    }

}


resultado.innerHTML = "has ganado" + " " + numeroMagico    

