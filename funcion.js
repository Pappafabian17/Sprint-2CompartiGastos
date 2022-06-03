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

    nombreInput.value = "";
    montoInput.value = "";
  } else {
    alert("Completar el formulario");
  }
}
