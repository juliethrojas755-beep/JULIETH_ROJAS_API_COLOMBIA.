// ===============================
// CONSUMO DE API - PRESIDENTES
// ===============================

fetch("https://api-colombia.com/api/v1/President")

    .then(res => res.json())

    .then(data => {

        const contenedor = document.getElementById("contenedor");

        document.getElementById("cargando").style.display = "none";

        // ordenar por fecha
        data.sort((a, b) => new Date(a.startPeriodDate) - new Date(b.startPeriodDate));

        data.slice(0, 15).forEach((pres, index) => {

            const card = document.createElement("div");
            card.className = "card reveal";

            // ===============================
            // IMAGEN BASE (AUTOMÁTICA)
            // ===============================
            let imagen = pres.image && pres.image.startsWith("http")
                ? pres.image.replace("http://", "https://")
                : "https://placehold.co/200x200";

            // ===============================
            // REEMPLAZOS MANUALES (LO QUE TE PIDIÓ EL PROFE)
            // ===============================

            if (pres.name === "Carlos") {
                imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Carlos_Holgu%C3%ADn_Mallarino_oleo.jpg/250px-Carlos_Holgu%C3%ADn_Mallarino_oleo.jpg";
            }

            if (pres.name === "Guillermo") {
                imagen = "https://upload.wikimedia.org/wikipedia/commons/3/36/Ggqc.jpg";
            }

            // ===============================
            // CONTENIDO
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

            // animación tipo Apple
            card.style.animationDelay = `${index * 0.1}s`;

            contenedor.appendChild(card);
        });
    })

    .catch(error => {
        document.getElementById("cargando").innerText = "Error al cargar datos";
        console.error("Error:", error);
    });