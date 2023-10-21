let listaMercado = ["Arroz", "Pezcado"]
var dinero = 500.000 

listaMercado.push("Manzana")
listaMercado.unshift("Lechuga")
listaMercado.shift()

var resultado = document.getElementById("resultado")

if(listaMercado.length>0 && dinero >0 ){
    resultado.innerHTML = "Lista de mercado " + "<br>"
    for(var i =0; i<listaMercado.length; i++){
        resultado.innerHTML += (i+1) + ":" + listaMercado[i] + "<br>"
    }

}
else{
    resultado.innerHTML += "Ufff la lista esta vacia o no tengo dinero"
}
