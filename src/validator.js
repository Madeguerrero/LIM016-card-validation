const validator = {
  isValid: function (numero) {
    //separando el string en carartares y pasandolos a un array en numeros
    // string permite realizar operaciones con cadenas, concatenar,buscar texto,extraer
    //split es uan funcion para dividir cadenas en partes,devuelve un array en trozos
    //map es un elemento que permite transformar los elementos de una lista y devolverlos en una nueva lista
    //return finaliza la ejecucion y especifica el valor
    var numArr1 = String(numero)
      .split("")
      .map((numero) => {
        return Number(numero);
      });

    var inverso = [];

    for (let i = 0; i < numArr1.length; i++) {
      const element = numArr1[i];
      inverso.unshift(element);
    }

    var numArr2 = [];

    for (let i = 0; i < inverso.length; i++) {
      const element = inverso[i];
      if (i % 2 == 1) {
        numArr2.push(element * 2);
      } else {
        numArr2.push(element);
      }
    }
    var numArr3 = [];
    // eslint-disable-next-line no-console
    console.log(numArr2);

    for (let i = 0; i < numArr2.length; i++) {
      const element = numArr2[i];
      if (element > 9) {
        numArr3.push(
          Array.from(String(element), Number)[0] +
            Array.from(String(element), Number)[1]
        );
      } else {
        numArr3.push(element);
      }
    }

    let hideNum = [];
    for (let i = 0; i < numero.length; i++) {
      if (i < numero.length - 4) {
        hideNum.push("*");
      } else {
        hideNum.push(numero[i]);
      }
    }

    var total = numArr3.reduce((a, b) => a + b, 0);
    // eslint-disable-next-line no-console
    console.log("total", total);

    if (numero == "") {
      alert("Ingresa todos los datos");
    } else if (total % 10 == 0) {
      document.getElementById("validacion").innerHTML = "";
      document
        .getElementById("numerotarjeta")
        .classList.remove("invalid_input");
      alert("Tu numero de tarjeta ha sido validada\n" + hideNum.join(""));
    } else {
      document.getElementById("validacion").innerHTML =
        "*Ingresa un numero de tarjeta válida";

      document.getElementById("numerotarjeta").classList.add("invalid_input");
    }
  },
};

export default validator;
