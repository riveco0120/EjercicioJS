class persona{
    constructor(nombre,apellido, edad,telefono) {
    this.nombre = nombre;
    this.apellido = apellido,
    this.edad = edad
    this.telefono = telefono
    }

}

var persona4 ={
    nombre: "Maria",
    apellodo : "Suares",
    edad: 25,
    telefono: null
}

var persona7 = new persona("Jesus","Moreno",30,3002483068)

var persona1 = new persona()
persona1.nombre = "Julian"
persona1.apellido = "Lopez"
persona1.edad = 31
persona1.telefono = null

var persona2 = new persona()
persona2.nombre = "Susana"
persona2.apellido = "Ruiz"
persona2.edad = 25
persona2.telefono = 3112524596

var persona3 = new persona()
persona3.nombre = "Manuel"
persona3.apellido = "Uzumaki"
persona3.edad = 15
persona3.telefono = 30047585

let personas = []

personas.push(persona1)
personas.push(persona2)
personas.push(persona3)
personas.push(persona7)

var resultado = document.getElementById("resultado")

//alert(personas.length)

if(personas.length>0){
    resultado.innerHTML = "Lista de mercado " + "<br>"
    for(var i =0; i<personas.length; i++){
        resultado.innerHTML += (i+1) + ":" + " nombre: "+ personas[i].nombre + " apellido: "+ personas[i].apellido + " edad: " + personas[i].edad + " telefono: "+personas[i].telefono + "<br>"
    }

}
else{
    resultado.innerHTML += "Ufff la lista esta vacia o no tengo dinero"
}