fetch('https://aulamindhub.github.io/amazing-api/events.json')
  .then(response => response.json()).then(data => dataAmazing(data))
  .catch(error => console.log(error));

let fila = document.getElementsByClassName("filas");
let copiaFila = fila[0];
let fila2 = document.getElementsByClassName("filas2");
let copiaFila2 = fila2[0];

fila[0].remove();
fila2[0].remove();


  function dataAmazing(data) {  
let mayor = 0;
let menor = 100;
data.events.forEach((event) => {
    if (event.date < data.currentDate) {
        let porcentaje = (event.assistance / event.capacity) * 100;
        if (porcentaje > mayor) {
            mayor = porcentaje;
            document.getElementById("higest").innerHTML = event.name + " " + porcentaje.toFixed(2) + "%";
        } else if (porcentaje < menor) {
            menor = porcentaje;
            document.getElementById("lowes").innerHTML = event.name + " " + porcentaje.toFixed(2) + "%";
        }
    }
});

    let higestCapacity = data.events.sort((a, b) => b.capacity - a.capacity);
    document.getElementById("large").innerHTML = higestCapacity[0].name;


    let categories = {};
    let categories2 = {};

    data.events.forEach((event) => {
        if (event.date > data.currentDate) {
            if (!categories[event.category]) {
                categories[event.category] = [];
            }
            categories[event.category].push(event);
        } else if (event.date < data.currentDate) {
            if (!categories2[event.category]) {
                categories2[event.category] = [];
            }
            categories2[event.category].push(event);
        }
    });

    for (const category in categories) {
        console.log(categories);
        let contador = 0;
        let fila = document.getElementById("filas").appendChild(copiaFila.cloneNode(true));
        let ganancia = 0;
let porcentaje = 0;
        fila.querySelector(".category").innerHTML = category;
        categories[category].forEach((event) => {
            contador++;
            ganancia += event.estimate * event.price;
            porcentaje += (event.estimate / event.capacity) * 100;

            if (categories[category].length === contador) {
                fila.querySelector(".revenues").innerHTML = "$" + ganancia;
                fila.querySelector(".assistence").innerHTML = (porcentaje / contador).toFixed(2) + "%";
            }
        });
    }

    for (const category in categories2) {
        let contador = 0;
        let fila2 = document.getElementById("filas2").appendChild(copiaFila2.cloneNode(true));
        let ganancia = 0;
        let porcentaje = 0;

        fila2.querySelector(".category2").innerHTML = category;
        categories2[category].forEach((event) => {
            contador++;
            ganancia += event.assistance * event.price;
            porcentaje += event.assistance / event.capacity;

            if (categories2[category].length === contador) {
                fila2.querySelector(".revenues2").innerHTML = "$" + ganancia;
                porcentaje = (porcentaje * 100 / contador).toFixed(2);
                fila2.querySelector(".assistence2").innerHTML = porcentaje + "%";
            }
        });
    }



}