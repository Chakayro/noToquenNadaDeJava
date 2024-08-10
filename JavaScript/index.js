fetch('https://aulamindhub.github.io/amazing-api/events.json')
  .then(response => response.json()).then(data => dataAmazing(data))
  .catch(error => console.log(error));

  import {borrar, pintarTarjeta, buscarTexto, filtrarTarjetas, mostrarFiltrados} from "./modules/funciones.js";

  let tarjeta = document.getElementsByClassName("card");
  let copia = tarjeta[0];
let Checkbox = document.getElementsByClassName("checkers");
let copiaCheckbox = Checkbox[0];
let index = 0;
let noHay = document.getElementById("noHay");
noHay.style.display = "none";

    borrar(0, tarjeta);
    borrar(0, Checkbox);

  function dataAmazing(data) {
    pintarTarjeta(data, copia, copiaCheckbox , index);
  }

  buscarTexto(tarjeta, noHay); 
  filtrarTarjetas(tarjeta, noHay);
  mostrarFiltrados(tarjeta, noHay);
















  
  // mensajeAmigable(tarjeta);

//   Checkbox[0].parentNode.removeChild(Checkbox[0]);
  // function datosEspecies(data) {
  //   let existingCategories = [];
  //   data.events.forEach((event) => {
  //     let nuevasTarjetas = document.getElementById("tarjetas").appendChild(copia.cloneNode(true));
  //     nuevasTarjetas.querySelector("h5").innerHTML = event.name;
  //     nuevasTarjetas.querySelector("img").src = event.image;
  //     nuevasTarjetas.getElementsByClassName("card-text")[0].innerHTML = event.description;
  //     // nuevasTarjetas.getElementsByClassName("card-text")[1].innerText = "Price $" + event.price;
  //     nuevasTarjetas.getElementsByClassName("card-text")[1].innerText = event._id;
  //     let nuevaClase = event.category.replace(/ /g, "");
  //     nuevasTarjetas.setAttribute("class", "card " + nuevaClase + " CY TY");
  //     nuevasTarjetas.setAttribute("id", event._id);
  //     nuevasTarjetas.querySelector("a").setAttribute("href", "./pages/details.html?id=" + event._id);

  //     if (!existingCategories.includes(event.category)) {
  //       let nuevosCheckers = document.getElementById("checkboxCategoria").appendChild(copiaCheckbox.cloneNode(true));
  //       nuevosCheckers.querySelector("label").innerHTML = event.category;
  //       let nuevaClase = event.category.replace(/ /g, "");
  //       nuevosCheckers.querySelector("input").setAttribute("id", nuevaClase);
  //       nuevosCheckers.querySelector("label").setAttribute("for", nuevaClase);
  //       existingCategories.push(event.category);
  //     }
  //   });
  // }










// let buscarTexto = document.getElementById("buscador").addEventListener("keyup", (e) => {
//   let texto = e.target.value.toLowerCase();
//   Array.from(tarjeta).forEach((tarjeta, index) => {
//     let nombre = tarjeta.querySelector("h5").innerText.toLowerCase();
//     let descripcion = tarjeta.querySelector("p").innerText.toLowerCase();
    
//     if (nombre.includes(texto) || descripcion.includes(texto)) {
//       tarjeta.setAttribute("class", tarjeta.className.replace(" TN", " TY"));
//     } else {
//       tarjeta.setAttribute("class", tarjeta.className.replace(" TY", " TN"));
//     }
//   });
//   mostrarFiltrados();
// });

// let CheckboxCategoria = document.getElementById("checkboxCategoria").addEventListener("click", (e) => {
//   let checkbox = e.target;
//   let nombreCheckbox = checkbox.parentElement.innerText.replace(/ /g, "");
//   if (checkbox.type === "checkbox") {
//     contador++;
//   Array.from(tarjeta).forEach((tarjeta) => {
//     if (contador === 1) {
//       tarjeta.setAttribute("class", tarjeta.className.replace(" CY", " CN"));
//     }
//     if (checkbox.checked) {
//       if (tarjeta.classList.contains(nombreCheckbox)) {
//         tarjeta.setAttribute("class", tarjeta.className.replace(" CN", " CY"));
//       }
//     }else {
//       if (tarjeta.classList.contains(nombreCheckbox)) {
//         tarjeta.setAttribute("class", tarjeta.className.replace(" CY", " CN"));
//       }
//       if (contador ===  2 ) {
//         tarjeta.setAttribute("class", tarjeta.className.replace(" CN", " CY"));
//       }
//   }
 
// });
// if (checkbox.checked === false) {
//     contador -= 2;
// }
// mostrarFiltrados();
//   }
// });




// function mostrarFiltrados() {
//   Array.from(tarjeta).forEach((tarjeta) => {
//     if (tarjeta.classList.contains("CY") && tarjeta.classList.contains("TY")) {
//       tarjeta.style.display = "block";
//     }else {
//       tarjeta.style.display = "none";
//     }
//   });

//   if (mensajeAmigable() === tarjeta.length) {
//     noHay.style.display = "block";
//    }else{
//     noHay.style.display = "none";
//    }
// }


 




// function mensajeAmigable(){
//   let contadors = 0;
//   for (let i = 0; i < tarjeta.length; i++) {
//     for (let j = 0; j < tarjeta.length; j++) {
//       if (tarjeta[i].style.display === "none" && tarjeta[i].id === tarjeta[j].id) {
//         contadors++;
//       }else if (tarjeta[i].style.display === "block" && tarjeta[i].id === tarjeta[j].id){
//         contadors--;
//       }
//     }
//   }
//   return contadors; 
// }
   

