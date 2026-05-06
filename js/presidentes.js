// Se consume otra API

fetch("https://api-colombia.com/api/v1/President")

    .then(res => res.json())

    .then(data => {

        const contenedor = document.getElementById("contenedor");

        document.getElementById("cargando").style.display = "none";

        // sort sirve para ordenar datos
        // aquí ordenamos por año (periodo inicial)
        data.sort((a, b) => a.startPeriodDate.localeCompare(b.startPeriodDate));

        data.slice(0, 15).forEach(pres => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${pres.name}</h3>
                <p><strong>Periodo:</strong> ${pres.startPeriodDate} - ${pres.endPeriodDate}</p>
                <p><strong>Partido:</strong> ${pres.politicalParty}</p>
                <img src="${pres.image}" width="100">
            `;

            contenedor.appendChild(card);
        });
    })

    .catch(error => {
        document.getElementById("cargando").innerText = "Error al cargar datos";
        console.log(error);
    });