/**
 * API Connexion
 */

function loginByEmail(form) {

    const user = {
        email: form.email.value,
        password: form.password.value
    }

    fetch("http://localhost:8080/user/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, password: user.password })
    }).then(function(response) {
        console.log(response.status);
        if (response.status == 302) {
            setTimeout(() => document.location.href = "/index.html", 3000);
        } else {
            alert("NON TROUVER");
        }
        response.json().then(function(data) {
            console.log(data)

            document.cookie = "email=" + data.email;
            document.cookie = "prenom=" + data.prenom;
            document.cookie = "nom=" + data.nom;
            document.cookie = "role=" + data.roles[0].roleName;


            sessionStorage.setItem('email', getCookie("email"));
            sessionStorage.setItem('prenom', getCookie("prenom"));
            sessionStorage.setItem('nom', getCookie("nom"));
            sessionStorage.setItem('role', getCookie("role"));

        })
    })

}




function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}