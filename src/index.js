import validator from "./validator.js";

//obtener el id del boton y listener
document.getElementById("boton").addEventListener("click", checkNum);
var numero = document.querySelector("#numerotarjeta");

//declarando function
function checkNum() {
  validator.isValid(numero.value);
}
