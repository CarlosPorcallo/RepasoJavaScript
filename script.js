// Intérprete para ejecutar nuestros snippets:
// https://codesandbox.io

// Snippet 1 (Hola Mundo)
alert("Hola Mundo");
console.log("Hola Mundo");

// Snippet 2 (Tipos de variable)

let variable1 = 1; // integer (tipo number)
let variable2 = 1.2; // float (tipo number)
let variable3 = "a"; // char (tipo string)
let variable4 = "cadena"; // string
let variable5 = true; // boolean (tipo object)
let variable6 = null; // null (tipo object)
let variable7; // undefined
let variable8 = {nombre: "Pedro"}; // object
let variable9 = [variable1, variable2, variable3, variable4, variable5, variable6, variable7, variable8]; // list (tipo object)

console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);
console.log(variable5);
console.log(variable6);
console.log(variable7);
console.log(variable8);
console.log(variable9);

console.log(typeof(variable1));
console.log(typeof(variable2));
console.log(typeof(variable3));
console.log(typeof(variable4));
console.log(typeof(variable5));
console.log(typeof(variable6));
console.log(typeof(variable7));
console.log(typeof(variable8));
console.log(typeof(variable9));
console.log(typeof(variable9));

// Snippet 3 (Cambio dinámico de tipo)

let variable1 = 1.2
console.log(variable1);
console.log(typeof(variable1))

variable1 = "ahora cambie de valor" 
console.log(variable1);
console.log(typeof(variable1))

// Snippet 4 (Parseo o Cambio Explícito del tipo)

let variable1 = 1;
let variable2 = "2";
console.log(variable1 + variable2);
console.log(variable1 + parseInt(variable2));
console.log(variable1.toString() + variable2);

// Snippet 5 (Concatenar Strings [forma clásica y ECMASCript 6])
let variable1 = "Hola";
let variable2 = "Mundo";
console.log(variable1 + " " + variable2); // forma clásica
console.log(`${variable1} ${variable2}`); // ES6

// Snippet 6 (Comillas simples, dobles y escapado de caracteres)
let variable1 = "'Texto entre comillas simples'";
let variable2 = '\"Texto con comillas dobles (escapadas)\"';
let variable3 = '\'Texto con comillas simples (escapadas)\'';
let variable4 = "\\Texto entre diagonales invertidas (escapadas)\\";

console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);

// Snippet 7 (const, let y var [ámbito de las variables])
// const
const variable1 = 1;
variable1 = 2;

// var
var variable1 = "afuera";

if (true) {
    var variable1 = "adentro";
    console.log(variable1);
}

console.log(variable1);
  
// let
let variable1 = "afuera";

if (true) {
    let variable1 = "adentro";
    console.log(variable1);
}

console.log(variable1);

// Snippet 8 (Operadores Lógicos)

// && AND (Multiplicación)
console.log(true && true); // 1 * 1 = 1;
console.log(true && false); // 1 * 0 = 0;

// || OR (Suma)
console.log(false || false); // 0 + 0 = 0;
console.log(true || false); // 1 + 0 = 1;

// ! NOT (Negación)
console.log(!false);
console.log(!true); 

// Snippet 9 (Operadores Relacionales)
let variable1 = 3;
let variable2 = 5;
console.log(variable1 > variable2); // false
console.log(variable1 < variable2); // true

variable1 = 5;
variable2 = 5;
console.log(variable1 >= variable2); // true
console.log(variable1 <= variable2); // true
console.log(variable1 == variable2); // true
console.log(variable1 != variable2); // false

// Snippet 10 (operadores Matemáticos)
let variable1 = 2; // asignación
let variable2 = 3; // asignación 

console.log(variable2 + variable1); // suma
console.log(variable2 - variable1); // resta
console.log(variable2 * variable1); // multiplicación
console.log(variable2 / variable1); // división
console.log(variable2 % variable1); // módulo

/* Snippet 11 (incremento y decremento)
equivalente a: 
variable1 = variable1 + 1 ó
variable1 += 1;
*/
console.log(++variable1);

console.log(variable1++);
console.log(variable1);

/* 
equivalente a: 
variable1 = variable1 - 1 ó
variable1 -= 1;
*/
console.log(--variable1);

console.log(variable1--);
console.log(variable1);

// Snippet 12 (If Else)

let variable1 = 3;
let variable2 = 5;

if (variable1 > variable2) {
    console.log("Condición 1");
} else {
    console.log("Condición 2");
}

// Snippet 13 (Switch)
let variable1 = "perro";

if (variable1 == "gato") {
    console.log("Tu animal es un gato");
} else if (variable1 == "pez") {
    console.log("Tu animal es un pez");
} else if (variable1 == "gorila") {
    console.log("Tu animal es un gorila");
} else if (variable1 == "perro") {
    console.log("Tu animal es un perro");
} else {
    console.log("No conozco a tu animal.")
}

switch(variable1) {
    case 'gato':
        console.log("Tu animal es un gato");
        break;
    case 'pez':
        console.log("Tu animal es un pez");
        break;
    case 'gorila':
        console.log("Tu animal es un gorila");
        break;
    case 'perro':
        console.log("Tu animal es un perro");
        break;
    default:
        console.log("No conozco a tu animal");
        break;
}

// Snippet 14 (For)

let lista = [
    {animal: "perro", nombre: "scooby"},
    {animal: "gato", nombre: "garfield"},
    {animal: "pez", nombre: "nemo"}
]

let longitud = lista.length;

for (let indice = 0; indice < longitud; indice++) {
	console.log("Animal: " + lista[indice]["animal"] + ", Nombre: " +  lista[indice]["nombre"] );
}

// Snippet 15 (While)

let lista = [
    {animal: "perro", nombre: "scooby"},
    {animal: "gato", nombre: "garfield"},
    {animal: "pez", nombre: "nemo"}
]

let longitud = lista.length;
let indice = 0;

while (indice < longitud) {
    console.log("Animal: " + lista[indice]["animal"] + ", Nombre: " +  lista[indice]["nombre"] );
    indice++;
}

// Snippet 16 (for ... on [ES6])
let lista = [
    {animal: "perro", nombre: "scooby"},
    {animal: "gato", nombre: "garfield"},
    {animal: "pez", nombre: "nemo"}
]

for (let elemento of lista) {
    console.log(`Animal: ${elemento.animal}, Nombre: ${elemento.nombre}`);
}

// Snippet 16 (forEach [ES5])
let lista = [
    {animal: "perro", nombre: "scooby"},
    {animal: "gato", nombre: "garfield"},
    {animal: "pez", nombre: "nemo"}
]

lista.forEach(function (elemento) {
    console.log(`Animal: ${elemento.animal}, Nombre: ${elemento.nombre}`);
});

// Snippet 17 (function [ejemplo de un procedimiento])
function imprimeTexto(texto) {
    console.log(`Estoy imprimiendo el texto '${texto}'`); // subrutina
}

imprimeTexto("Hola");
imprimeTexto("Mundo");

// Snippet 18 (function [retornando un resultado])
function sumaElementos(elementos) {
    let total = 0;
    for (let elemento of elementos) {
        total += elemento;
    }

    return total;
}

let numeros = [1,2,3,4,5];
let suma = sumaElementos(numeros);
console.log(suma);

// Snippet 19 (function [función que invoca una rutina])
const rutinaSuma = function(total, numero) {
    return total += numero;
}

function sumaElementos(elementos) {
    let total = 0;
    for (let elemento of elementos) {
        total = rutinaSuma(total, elemento);
    }

    return total;
}

let numeros = [1,2,3,4,5];
let suma = sumaElementos(numeros);
console.log(suma);

// Snippet 20 (forEach usando callback [ES5])
let lista = [
    {animal: "perro", nombre: "scooby"},
    {animal: "gato", nombre: "garfield"},
    {animal: "pez", nombre: "nemo"}
]

const callback = function (elemento) {
    console.log(`Animal: ${elemento.animal}, Nombre: ${elemento.nombre}`);
}; 

lista.forEach(callback);

// Snippet 21  (forEach usando callback, array destructuring y arrow functions [ES6])

let lista = [
    {animal: "perro", nombre: "scooby"},
    {animal: "gato", nombre: "garfield"},
    {animal: "pez", nombre: "nemo"}
]

const callback = (elemento) => {
    const {animal, nombre} = elemento;
    console.log(`Animal: ${animal}, Nombre: ${nombre}`);
}

lista.forEach(callback);

// Snippet 22  (forEach usando callback, array destructuring (en el parámetro) y arrow functions [ES6] )

let lista = [
    {animal: "perro", nombre: "scooby"},
    {animal: "gato", nombre: "garfield"},
    {animal: "pez", nombre: "nemo"}
]

const callback = ({animal, nombre}) => console.log(`Animal: ${animal}, Nombre: ${nombre}`);

lista.forEach(callback);

// Snippet 23 (interactuando con el DOM [por id])

// código JS
function hola() {
	document.getElementById("resultado").innerHTML = "Oprimiste el botón";
}

/*
código HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Ejemplo Rápido JS</title>
  </head>
  
  <body>
    <h1>
      Manipulando el DOM
    </h1>
    
    <button onclick="hola();">
      Oprimeme
    </button>
    <br />
    <div id="resultado"></div>
  </body>
</html>

*/

// Snippet 24 (interactuando con el DOM [por clase])

// código JS
function hola() {
	let elementos = document.getElementsByClassName("resultado");
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].innerHTML = "Oprimiste el Botón";
    }
}

/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Ejemplo Rápido JS</title>
  </head>
  
  <body>
    <h1>
      Manipulando el DOM
    </h1>
    
    <button onclick="hola();">
      Oprimeme
    </button>
    <br />
    <div class="resultado"></div>
    <br />
    <div class="resultado"></div>
  </body>
</html>

*/

// Snippet 25 (interactuando con el DOM ES6 [por id])

// código JS
function hola() {
	document.querySelector("#resultado").innerHTML = "Oprimiste el botón";
}

/*
código HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Ejemplo Rápido JS</title>
  </head>
  
  <body>
    <h1>
      Manipulando el DOM
    </h1>
    
    <button onclick="hola();">
      Oprimeme
    </button>
    <br />
    <div id="resultado"></div>
  </body>
</html>

*/

// Snippet 26 (interactuando con el DOM ES6 [por clase])

// código JS
function hola() {
	const callback = elemento => elemento.innerHTML = "Oprimiste el botón";
	document.querySelectorAll(".resultado").forEach(callback);
}


// código HTML
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Ejemplo Rápido JS</title>
//   </head>
//   
//   <body>
//     <h1>
//       Manipulando el DOM
//     </h1>
//     
//     <button onclick="hola();">
//       Oprimeme
//     </button>
//     <br />
//     <div class="resultado"></div>
//     <br />
//     <div class="resultado"></div>
//   </body>
// </html>



// Snippet 27 (Exportando Código, Promesas y AJAX)

// archivo index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Ejercicio AJAX</title>
//     <meta charset="UTF-8" />
//   </head>
// 
//   <body>
//     <button id="button">Oprimeme</button>
//     <div id="app"></div>
//     <script src="./src/index.js" type="module"></script>
//   </body>
// </html>

// archivo index.js

import { getRequest } from "./ajax.js";
const btn = document.querySelector("#button");
btn.onclick = () => {
  let contenedor = document.querySelector("#app");
  getRequest("https://randomuser.me/api/?results=150&nat=us150").then(
    (usuarios) => {
      let html =
        "<p>Muy bien, listado de usuarios obtenido correctamente.</p><ul>";
      usuarios.forEach((usuario) => {
        html += `<li>name: ${usuario.name.first} ${usuario.name.last}, email: ${usuario.email}, gender: ${usuario.gender}, <img src="${usuario.picture.thumbnail}" alt="Profile Pic" /></li>`;
      });
      html += "</ul>";
      contenedor.innerHTML = html;
      console.log(usuarios);
    },
    (error) => (contenedor.innerHTML = `<p>${error}</p>`)
  );
};

// archivo ajax.js
export const getRequest = (url) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.onerror = (error) => reject(error);
    xhr.send();
  });