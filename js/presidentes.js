// ===============================
// CONSUMO DE API - PRESIDENTES
// ===============================

fetch("https://api-colombia.com/api/v1/President")

    .then(res => res.json())

    .then(data => {

        const contenedor = document.getElementById("contenedor");

        // ocultar mensaje de carga
        document.getElementById("cargando").style.display = "none";

        // ===============================
        // ORDENAR POR FECHA (CORRECTO)
        // ===============================
        data.sort((a, b) => new Date(a.startPeriodDate) - new Date(b.startPeriodDate));

        // ===============================
        // RECORRER DATOS
        // ===============================
        data.slice(0, 15).forEach((pres, index) => {

            const card = document.createElement("div");

            // animación tipo Apple
            card.className = "card reveal";

            // ===============================
            // ARREGLAR IMÁGENES (CLAVE)
            // ===============================
            const imagen = pres.image && pres.image.startsWith("http")
                ? pres.image.replace("http://", "https://")
                : "https://placehold.co/200x200";

            // ===============================
            // CREAR CONTENIDO DINÁMICO
            // ===============================
            card.innerHTML = `
                <h3>${pres.name}</h3>

                <p><strong>Periodo:</strong> 
                ${pres.startPeriodDate} - ${pres.endPeriodDate}</p>

                <p><strong>Partido:</strong> 
                ${pres.politicalParty || "No disponible"}</p>

                <img 
                    src="${imagen}" 
                    width="120"
                    onerror="this.src='https://placehold.co/200x200'"
                >
            `;

            // animación escalonada (tipo Apple)
            card.style.animationDelay = `${index * 0.1}s`;

            contenedor.appendChild(card);
        });
    })

    // ===============================
    // MANEJO DE ERRORES
    // ===============================
    .catch(error => {
        document.getElementById("cargando").innerText = "Error al cargar datos";
        console.error("Error:", error);
    });