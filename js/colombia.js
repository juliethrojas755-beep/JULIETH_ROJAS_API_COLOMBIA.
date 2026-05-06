// =====================================
// CONSUMO DE API (COLOMBIA)
// =====================================

fetch("https://api-colombia.com/api/v1/Country/Colombia")

    .then(res => res.json())

    .then(data => {

        const contenedor = document.getElementById("contenedor");

        document.getElementById("cargando").style.display = "none";

        // Creamos UNA sola tarjeta tipo dashboard
        const card = document.createElement("div");

        // agregamos animación tipo Apple
        card.className = "card reveal";

        // ===============================
        // innerHTML
        // Sirve para insertar contenido dinámico
        // ===============================
        card.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.flags?.png}" alt="Bandera">

            <p><strong>Capital:</strong> ${data.capital}</p>
            <p><strong>Población:</strong> ${data.population}</p>
            <p><strong>Superficie:</strong> ${data.area}</p>
            <p><strong>Moneda:</strong> ${data.currency}</p>
            <p><strong>Idiomas:</strong> ${data.languages}</p>
            <p><strong>Región:</strong> ${data.region}</p>
        `;

        contenedor.appendChild(card);
    })

    .catch(error => {
        document.getElementById("cargando").innerText = "Error al cargar datos";
        console.log(error);
    });