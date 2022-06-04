function envio() {
  const nombreInput = document.getElementById("nombre");
  const montoInput = document.getElementById("monto");

  if (nombreInput.value != "" && montoInput.value != "") {
    sumaTotal(montoInput.value);
    addPeople(nombreInput.value, montoInput.value);

    nombreInput.value = "";
    montoInput.value = "";
  } else {
    alert("Completar el formulario por favor");
  }
}

let montoTotal = 0;

function sumaTotal(monto) {
  let totalTextContainer = document.getElementById("totalTextContainer");
  montoTotal = montoTotal + parseInt(monto);
  totalTextContainer.innerHTML = ` $ ${montoTotal} `;
}

let cantPeople = 0;

const addPeople = (nombre, monto) => {
  const resultados = document.getElementById("resultados");
  let persona = document.createElement("p");
  const texto = nombre + ": $" + monto;
  persona.innerHTML = texto;
  resultados.appendChild(persona);

  cantPeople++;

  const aPagarCU = document.getElementById("aPagar");
  const montoAPagarCU = parseInt(montoTotal) / cantPeople;
  aPagarCU.innerHTML = "$" + montoAPagarCU;
};
