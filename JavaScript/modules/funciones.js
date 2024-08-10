let nuevasTarjetas = "";
let tarjetasIndex = "";
let tarjetasPast = "";
let tarjetasUpcoming = "";
let contadorIndex = 0;
let contadorPast = 0;
let contadorUpcoming = 0;
let contador = 0;

export function borrar(largo, tarjeta) {
    tarjeta[largo].remove();
}

export function pintarTarjeta(datos, copia, copiaCheckbox, fecha) {
    let existingCategories = [];
    datos.events.forEach((event) => {
        if (fecha === 1) {
            if (event.date < datos.currentDate) {
                tarjetasPast = document.getElementById("tarjetas").appendChild(copia.cloneNode(true));
                tarjetasPast.querySelector("h5").innerHTML = event.name;
                tarjetasPast.querySelector("img").src = event.image;
                tarjetasPast.getElementsByClassName("card-text")[0].innerHTML = event.description;
                tarjetasPast.getElementsByClassName("card-text")[1].innerText = "Price $" + event.price;
                let nuevaClase = event.category.replace(/ /g, "");
                tarjetasPast.setAttribute("class", "card " + nuevaClase + " CY TY");
                tarjetasPast.setAttribute("id", event._id);
                tarjetasPast.querySelector("a").setAttribute("href", "./details.html?id=" + event._id);
                contadorPast++;
                console.log(contadorPast + " contadorPast");
                if (!existingCategories.includes(event.category)) {
                    let nuevosCheckers = document.getElementById("checkboxCategoria").appendChild(copiaCheckbox.cloneNode(true));
                    nuevosCheckers.querySelector("label").innerHTML = event.category;
                    let nuevaClase = event.category.replace(/ /g, "");
                    nuevosCheckers.querySelector("input").setAttribute("id", nuevaClase);
                    nuevosCheckers.querySelector("label").setAttribute("for", nuevaClase);
                    existingCategories.push(event.category);
                }
            }
        } else if (fecha === 0) {
            tarjetasIndex = document.getElementById("tarjetas").appendChild(copia.cloneNode(true));
            tarjetasIndex.querySelector("h5").innerHTML = event.name;
            tarjetasIndex.querySelector("img").src = event.image;
            tarjetasIndex.getElementsByClassName("card-text")[0].innerHTML = event.description;
            tarjetasIndex.getElementsByClassName("card-text")[1].innerText = "Price $" + event.price;
            let nuevaClase = event.category.replace(/ /g, "");
            tarjetasIndex.setAttribute("class", "card " + nuevaClase + " CY TY");
            tarjetasIndex.setAttribute("id", event._id);
            tarjetasIndex.querySelector("a").setAttribute("href", "./pages/details.html?id=" + event._id);
            contadorIndex++;
            console.log(contadorIndex + " contadorIndex");
            if (!existingCategories.includes(event.category)) {
                let nuevosCheckers = document.getElementById("checkboxCategoria").appendChild(copiaCheckbox.cloneNode(true));
                nuevosCheckers.querySelector("label").innerHTML = event.category;
                let nuevaClase = event.category.replace(/ /g, "");
                nuevosCheckers.querySelector("input").setAttribute("id", nuevaClase);
                nuevosCheckers.querySelector("label").setAttribute("for", nuevaClase);
                existingCategories.push(event.category);
            }
        } else if (fecha === 2) {
            if (event.date > datos.currentDate) {
                tarjetasUpcoming = document.getElementById("tarjetas").appendChild(copia.cloneNode(true));
                tarjetasUpcoming.querySelector("h5").innerHTML = event.name;
                tarjetasUpcoming.querySelector("img").src = event.image;
                tarjetasUpcoming.getElementsByClassName("card-text")[0].innerHTML = event.description;
                tarjetasUpcoming.getElementsByClassName("card-text")[1].innerText = "Price $" + event.price;
                let nuevaClase = event.category.replace(/ /g, "");
                tarjetasUpcoming.setAttribute("class", "card " + nuevaClase + " CY TY");
                tarjetasUpcoming.setAttribute("id", event._id);
                tarjetasUpcoming.querySelector("a").setAttribute("href", "./details.html?id=" + event._id);
                contadorUpcoming++;
                console.log(contadorUpcoming + " contadorUpcoming");
                if (!existingCategories.includes(event.category)) {
                    let nuevosCheckers = document.getElementById("checkboxCategoria").appendChild(copiaCheckbox.cloneNode(true));
                    nuevosCheckers.querySelector("label").innerHTML = event.category;
                    let nuevaClase = event.category.replace(/ /g, "");
                    nuevosCheckers.querySelector("input").setAttribute("id", nuevaClase);
                    nuevosCheckers.querySelector("label").setAttribute("for", nuevaClase);
                    existingCategories.push(event.category);
                }
            }
        }
        
    });
    if (contadorIndex > 0) {
        contador = contadorIndex;
        nuevasTarjetas = tarjetasIndex;
    } else if (contadorPast > 0) {
        contador = contadorPast;
        nuevasTarjetas = tarjetasPast;
    } else if (contadorUpcoming > 0) {
        contador = contadorUpcoming;
        nuevasTarjetas = tarjetasUpcoming;
    }
    console.log(contador + " contador");
}





export function buscarTexto(tarjeta, noHay) {
    document.getElementById("buscador").addEventListener("keyup", (e) => {
        let texto = e.target.value.toLowerCase();
        Array.from(tarjeta).forEach((tarjeta, index) => {
            let nombre = tarjeta.querySelector("h5").innerText.toLowerCase();
            let descripcion = tarjeta.querySelector("p").innerText.toLowerCase();

            if (nombre.includes(texto) || descripcion.includes(texto)) { + " " 
                tarjeta.setAttribute("class", tarjeta.className.replace(" TN", " TY"));
            } else {
                tarjeta.setAttribute("class", tarjeta.className.replace(" TY", " TN"));
            }
        });
        mostrarFiltrados(tarjeta, noHay);
    });
}

export function filtrarTarjetas(tarjeta, noHay) {
    let contador2 = 0;
    let CheckboxCategoria = document.getElementById("checkboxCategoria").addEventListener("click", (e) => {
        let checkbox = e.target;
        let nombreCheckbox = checkbox.parentElement.innerText.replace(/ /g, "");
        if (checkbox.type === "checkbox") {
            contador2++;
            Array.from(tarjeta).forEach((tarjeta) => {
                if (contador2 === 1) {
                    tarjeta.setAttribute("class", tarjeta.className.replace(" CY", " CN"));
                }
                if (checkbox.checked) {
                    if (tarjeta.classList.contains(nombreCheckbox)) {
                        tarjeta.setAttribute("class", tarjeta.className.replace(" CN", " CY"));

                    }
                } else {
                    if (tarjeta.classList.contains(nombreCheckbox)) {
                        tarjeta.setAttribute("class", tarjeta.className.replace(" CY", " CN"));
                    }
                    if (contador2 === 2) {
                        tarjeta.setAttribute("class", tarjeta.className.replace(" CN", " CY"));
                    }
                    ;
                }
            });
            if (checkbox.checked === false) {
                contador2 -= 2;
            }
            mostrarFiltrados(tarjeta, noHay);
        }
    });
}

export function mostrarFiltrados(tarjeta, noHay) {
    Array.from(tarjeta).forEach((tarjeta) => {
        if (tarjeta.classList.contains("CY") && tarjeta.classList.contains("TY")) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });

    let contador3 = Array.from(tarjeta).reduce((contador, tarjeta) => {
        if (tarjeta.style.display === "none") {
            contador++;
        } else if (tarjeta.style.display === "block") {
            contador--;
        }
        return contador;
    }, 0);

    if (contador3 === contador && contador !== 0) {
        noHay.style.display = "block";
        console.log("no hay " + contador3);
    } else {
        noHay.style.display = "none";
        console.log("si hay " + contador3 + " " + contador);
    }
}
