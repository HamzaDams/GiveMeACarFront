// API 

const URL = "https://127.0.0.1:5050/addAgence";

function postAgence(){
    var agence = {}
    agence["name_agence"] = document.getElementByID('name_agence').value;
    agence["city_input"] = document.getElementByID('city_input').value;
    agence["address_input"] = document.getElementByID('adress_input').value;
    agence["director_name_input"] = document.getElementByID('director_name_input').value;
    agence["mobile_input"] = document.getElementByID('mobile_input').value;
    agence["email_input"] = document.getElementByID('email_input').value;

    const options = {
        method : 'POST',
        body: JSON.stringify(agence),
        headers: {
            'Content-Type': 'application/json',
            'cache': false,
            'timeout': 600000
        }
    }

    fetch(URL, options)
        .then(response => {
            if(!response.ok)
                throw new Error(responde.statusText);
            return response.json();
        })
        .then(data => {
            displayFeedBack(JSON.stringify(data, null, 4));
            console.log("Succes : ", data);
            button.disable = false;
            resetForm()
        })
        .catch(res => {
            displayFeedback(err);
            console.log("Erreur : ", err);
            button.disabled = false;
        });
}