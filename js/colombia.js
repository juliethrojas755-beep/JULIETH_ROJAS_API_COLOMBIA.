// =====================================
// CONSUMO DE API (COLOMBIA)
// =====================================

fetch("https://api-colombia.com/api/v1/Country/Colombia")

    .then(res => res.json())

    .then(data => {

        const contenedor = document.getElementById("contenedor");

        document.getElementById("cargando").style.display = "none";

         const card = document.createElement("div");

         card.className = "card reveal";

        // ===============================
        // ARREGLAR IMAGEN (CLAVE)
        // ===============================
        const bandera = "https://flagcdn.com/w320/co.png";

        // ===============================
        // CONTENIDO
        // ===============================
        card.innerHTML = `
            <h2>${data.name}</h2>

            <img 
                src="${bandera}" 
                alt="Bandera de Colombia"
                width="150"
                onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'"
            >

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
        console.error(error);
    });