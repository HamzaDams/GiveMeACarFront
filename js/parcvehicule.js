function ajouterParc(form){
    const parcVehicule = {
        id:form.ParcVehiculeId.value,
        ville:form.ParcVehiculeVille.value
    };

    //On fetch 
    fetch("http://localhost:8080/parcvehicule", {
        method:"POST",
        headers: {"Accept": "application/json, text/plain ,*/*",
        "Content-type":"application/json"},
        body: JSON.stringify({id:parcVehicule.id, ville:parcVehicule.ville})
    })
    //then
    .then(result => result.json())
    .then(data => {
        console.log(data);
        document.getElementById("ParcVehiculeId").value = data.id;
        document.querySelector('#ParcVehiculeVille').value = data.ville;

        alert(data.ville);
    })

    console.log(parcVehicule);
}

function alert(message) {
    document.querySelector('#alertMessage').innerHTML = `
    <p>ParcVehicule: ${message} ajouter avec succées </p>
    `;

    setTimeout(function(){
        document.querySelector('#alertMessage').innerHTML="";
    }, 3000);
}