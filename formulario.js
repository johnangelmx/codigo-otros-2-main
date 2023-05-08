/**
 * Escucha del click del formulario de html, se verifica el subtim, y evento ,
 * se destructura los datos de cada input y se verifica que cada uno de ellos contenga valor, despues si tiene dicho valor 
 * se imprementa una funcion
 * @date 5/7/2023 - 7:35:27 PM
 *
 * @type {*}
 */
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = formulario.elements[0],
    edad = formulario.elements[1],
    nacionalidad = formulario.elements[2];

  nacionalidad = nacionalidad.options[nacionalidad.selectedIndex].value;

  if (nombre.value.length === 0) {
    nombre.classList.add("error");
  }
  if (edad.value < 18 || edad.value > 120) {
    edad.classList.add("error");
  }
  nombre = nombre.value;
  edad = edad.value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
});

/**
 * Funcion de agregar invitado, se crean los elementos en los mismos
 * @date 5/7/2023 - 7:35:27 PM
 *
 * @param {String} nombre 
 * @param {Number} edad
 * @param {String} nacionalidad
 */
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  let lista = document.getElementById("lista-de-invitados");

  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span");
    let inputNombre = document.createElement("input");
    let espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  let corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}
