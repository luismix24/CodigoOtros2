var formulario = document.querySelector(".formulario")//estaba mal el nombre se cambia a .formulario

formulario.onsubmit = function(e) {
e.preventDefault(); // Default para prevenir comportamientos del formulario
  
  var n = formulario.elements["name"];// estaba con números y se cambia al nombre de id de cada elemento
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }else{
    e.classList.remove("error") //  se cambia  y se implement else add por remote porque elimina el error si esta bien
  }
  if (edad < 18 || edad > 120) {
    n.classList.add("error")
  }else{
    e.classList.remove("error") //  se cambia  y se implement else add por remote porque elimina el error si esta bien
  }

if (nombre.length > 0 && edad >= 18  && edad <= 120 ) { // se arregla el if y se quita ()
  agregarInvitado(nombre, edad, nacionalidad)
  }
};// se agrega ;

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  var lista = document.createElement("div"); // Crear un div para la lista
  lista.classList.add("lista-invitados");
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}