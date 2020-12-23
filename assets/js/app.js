/**
 * APP JS
 */

const connexionLink = document.querySelector("#connexionLink");
const inscriptionLink = document.querySelector("#inscriptionLink");
console.log(document.cookie);
if (getCookie('email')) {
    connexionLink.innerHTML = getCookie('email');
    inscriptionLink.innerHTML = ("");
}


function unauthorizedPage(role){
    if (getCookie('role') == "ADMIN"){
        alert("Vous n'avez pas accées a cette page");
        document.location.href="/index.html", 0;
        console.log("pas autorisé")
    }
    console.log("autorisé")

}

if(window.location.pathname == '/dashboard.html') {
    unauthorizedPage('ADMIN');
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

    