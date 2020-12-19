/**
 * API Inscription
 */
function addUser(form) {
    const user = {  prenom:form.prenom.value, 
                    nom:form.nom.value, 
                    // date:form.date_naissance.value, 
                    email:form.email.value, 
                    password:form.password.value, 
                    agree:form.accepter.value
    }
    fetch("http://localhost:8080/user/users", {
        method: 'POST',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prenom:user.prenom, nom:user.nom, email:user.email, password:user.password, agree:user.agree}) 
    })
    .then(function(response) {

        console.log(response.status + "Test"); // Will show you the status

        if (response.status == 409) {
            duplicateValue("Cette mail est déjà utiliser");
        }else{
            document.location.href="/index.html"; 
        }
        return response.json();
    })
    .then(data => {
        console.log(data.errorCode)


    })

    console.log(user);
    


    function duplicateValue(message) {
        const mailInput = document.querySelector("#email_input");
        mailInput.classList.add("errorInput");
        document.querySelector("#messageInformation").innerHTML=`
            <p>${message}</p>
        `
    }
}

