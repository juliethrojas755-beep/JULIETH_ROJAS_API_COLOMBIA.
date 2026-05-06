// ===============================
// FETCH
// ===============================
// fetch sirve para pedir datos a una API (internet)
// Se usa cuando necesitas traer información externa

fetch("https://api-colombia.com/api/v1/Department")

    // .then se usa para manejar la respuesta
    .then(res => res.json()) // convierte la respuesta a JSON

    .then(data => {

        // ===============================
        // DOM
        // ===============================
        // getElementById sirve para seleccionar elementos HTML
        const contenedor = document.getElementById("contenedor");

        // ocultar mensaje de carga
        document.getElementById("cargando").style.display = "none";

        // slice(0,15) muestra solo 15 elementos
        data.slice(0, 15).forEach(dep => {

            // createElement sirve para crear elementos HTML desde JS
            const card = document.createElement("div");

            // className asigna una clase CSS
            card.className = "card";

            // innerHTML sirve para insertar contenido HTML dinámicamente
            card.innerHTML = `
                <h3>${dep.name}</h3>
                <p><strong>Región:</strong> ${dep.region}</p>
                <p><strong>Población:</strong> ${dep.population}</p>
                <p><strong>Superficie:</strong> ${dep.area}</p>
                <p>${dep.description}</p>
            `;

            // appendChild sirve para agregar el elemento al DOM
            contenedor.appendChild(card);
        });
    })

    // ===============================
    // MANEJO DE ERRORES
    // ===============================
    // catch se usa cuando algo falla (internet, API, etc.)
    .catch(error => {
        document.getElementById("cargando").innerText = "Error al cargar datos";
        console.log(error);
    });