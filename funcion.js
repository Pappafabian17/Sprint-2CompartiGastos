let lista_nombre = [];
let lista_monto = [];

function envio() {
  const nombreInput = document.getElementById("nombre");
  const montoInput = document.getElementById("monto");

  if (nombreInput.value != "" && montoInput.value != "") {
    lista_nombre.push(nombreInput.value);
    lista_monto.push(montoInput.value);

    console.log(lista_nombre);
    console.log(lista_monto);

    addPeople(nombreInput.value, montoInput.value);

    nombreInput.value = "";
    montoInput.value = "";
  } else {
    alert("Completar el formulario por favor");
  }
}

const addPeople = (nombre, monto) => {
  //arrow function con parametros
  const resultados = document.getElementById("resultados"); // obtiene la referencia al elemento Html con el ID 'resultados' y lo guarda en una constante
  let persona = document.createElement("p"); // crea un nuevo elemento Html eb el documento
  const texto = nombre + ": $" + monto; // concatenamos los parametros
  persona.innerHTML = texto; // anade texto al elemento persona, innerHtml sirve para eso
  resultados.appendChild(persona); //incluye el elemento 'persona' dentro del elemento 'resultados'
};

let total = 0;
//hacer una funcion que agarre el elemento en el que tengo el total y hacerle un  innerHTML con el nuevo valor de la variable total. esta funcion va a recibir por parametro el ultimo monto ingresado para sumarselo a la variable total. esta funcion se va a ejecutar en addPeople.
