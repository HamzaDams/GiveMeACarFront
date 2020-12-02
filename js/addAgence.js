const url= window.location.search; //Recupere en string l'url
const urlParams = new URLSearchParams(url); //Renvoi les parametre envoyer a l'url

afficherUneAgence();

function ajouterParc(form){
    const agence = {
        id:form.ParcVehiculeId.value,
        nom:form.ParcVehiculeNom.value,
        ville:form.ParcVehiculeVille.value,
        adresse:form.ParcVehiculeAdresse.value,
        nomDirecteur:form.ParcVehiculeDirecteur.value,
        telephone:form.ParcVehiculeTelephone.value,
        mail:form.ParcVehiculeMail.value
    };

    //On fetch 
    fetch("https://cc6a4fe876f2.ngrok.io/agence", {
        method:"POST",
        headers: {"Accept": "application/json, text/plain ,*/*",
        "Content-type":"application/json"},
        body: JSON.stringify({ville:agence.ville, adresse:agence.adresse, nomDirecteur:agence.nomDirecteur,
            telephone:agence.telephone,mail:agence.mail
        })
    })
    //then
    .then(result => result.json())
    .then(data => {
        console.log(data);
        document.querySelector("#ParcVehiculeId").value = data.id;
        document.querySelector('#ParcVehiculeVille').value = data.ville;
        document.querySelector('#ParcVehiculeAdresse').value = data.adresse;
        document.querySelector('#ParcVehiculeDirecteur').value = data.nomDirecteur;
        document.querySelector('#ParcVehiculeTelephone').value = data.telephone;
        document.querySelector('#ParcVehiculeMail').value = data.mail;

    })
}

function alert(message) {
    document.querySelector('#alertMessage').innerHTML = `
    <p>Agence: ${message} ajouter avec succées </p>
    `;

    setTimeout(function(){
        document.querySelector('#alertMessage').innerHTML="";
    }, 3000);
}


/**
 * Affiche l'agence avec l'id envoyer en param a l'url
 */
function afficherUneAgence(){
    if(urlParams.get('id') != null){
        fetch('https://cc6a4fe876f2.ngrok.io/agence?id='+urlParams.get('id'))
        .then(response => response.json())
        .then(data => {
            document.querySelector('#ParcVehiculeId').value = data.id;
            document.querySelector('#ParcVehiculeVille').value = data.ville;
        })
    }

}