fetch('https://aulamindhub.github.io/amazing-api/events.json')
  .then(response => response.json()).then(data => dataAmazing(data))
  .catch(error => console.log(error));

  import {borrar, pintarTarjeta, buscarTexto, filtrarTarjetas, mostrarFiltrados} from "./modules/funciones.js";

  let tarjeta = document.getElementsByClassName("card");
  let copia = tarjeta[0];
let Checkbox = document.getElementsByClassName("checkers");
let copiaCheckbox = Checkbox[0];
let upComing = 2;
let noHay = document.getElementById("noHay");
noHay.style.display = "none";

    borrar(0, tarjeta);
    borrar(0, Checkbox);

  function dataAmazing(data) {
    pintarTarjeta(data, copia, copiaCheckbox , upComing);
  }

  buscarTexto(tarjeta, noHay); 
  filtrarTarjetas(tarjeta, noHay);
  mostrarFiltrados(tarjeta, noHay); // const data = {
