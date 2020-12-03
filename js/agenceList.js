afficherAgences();

function afficherAgences() {
    fetch('https://9ca616811381.ngrok.io/agences')
    .then(response => response.json())
    .then(data => {
        let tableInfo = "";
        data.forEach(element => {
            tableInfo+=`
            <tr>
                <td class="grey">${element.id}</td>
                <td class="white">${element.nom}</td>
                <td class="grey">${element.ville}</td>
                <td class="white">${element.nomDirecteur}</td>
                <td class="grey">${element.adresse}</td>
                <td class="white">${element.telephone}</td>
                <td class="grey">${element.mail}</td>
                <td class="white"><button onclick='navigation(${element.id})'>Voir</button></td>
            </tr>
        `
        })
        document.querySelector('#listTable').innerHTML = tableInfo;
    });
}

function navigation(parcVehiculeId){
    window.location.href = '/ajouteragence.html?id='+parcVehiculeId;
}