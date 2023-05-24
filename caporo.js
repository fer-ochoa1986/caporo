console.log ("el codigo se esta cargando");
window.addEventListener("DOMContentLoaded", (Event) => {
console.log("DOM completamente cargado y procesado");

const menubtn = document.getElementById("menu");
const nav = document.querySelector("header nav");
const body = document.querySelector("body");
menubtn.addEventListener("click",(Event) => {
    menubtn.classList.toggle("salir");
    nav.classList.toggle("visible");
    body.classList.toggle("no-scroll");
});
});
/*validar datos */
/*function validarFormulario() { }

var nombre = document.forms["formulario"]["nombre"].value;
var email = document.forms["formulario"]["email"].value;
var mensaje = document.forms["formulario"]["mensaje"].value;
if (nombre == "") {alert(" Ingrese su nombre.")};
return false;

/*if (email == "") {alert("Ingrese su correo electrónico.")};
return false;*/

/*if (mensaje == "") {alert("¿Que opinión tiene acerca de nuestro producto?")};
return false;

$(document).ready(function(){
    $('.menu-icon').click(function(){
      $('.menu-icon').toggleClass('active');
      $('.menu').slideToggle(300);
    });
  });
*/