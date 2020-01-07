function EnregistreFormul() {
    var psedo = document.getElementById("psedo").value
    var nom = document.getElementById("nom").value
    var prenom = document.getElementById("prenom").value
    var dateNaissance = document.getElementById("date").value
    var mail = document.getElementById("mail").value

    var motdepasse = document.getElementById("pw").value
    var rpw = document.getElementById("rpw").value


    // creation d'objet et afficher son contenu 

    if (userExist() && verifPsedo() && verifNom() && verifPrenom() && birth()) {
        var listUser = JSON.parse(localStorage.getItem('client'))
        if (listUser == null) {
            listUser = []
        }

        let obj = {
            iduser : Math.floor(Math.random() * 1000) + 1,
            psedo: psedo,
            nom: nom,
            prenom: prenom,
            email: mail,
            dateNaissance: dateNaissance,
            motdepasse: motdepasse,

            role: 'user'
            


        }

        listUser.push(obj)

        let str = JSON.stringify(listUser)
        localStorage.setItem('client', str)
        window.location.href = 'login.html';
        console.log(obj);

    }
}

//verifier inscription


function userExist() {

    var listUser = JSON.parse(localStorage.getItem('client'))
    if (listUser == null) {
        listUser = []
    }
    var psedo = document.getElementById("psedo").value
    var mail = document.getElementById("mail").value

    for (let i = 0; i < listUser.length; i++) {
        if (psedo == (listUser[i].psedo) || mail == listUser[i].mail) {


            alert('vous aves deja inscrit !')

            return false
        }

    }

    return true;
}



function verifPsedo() {
    var psedo = document.getElementById("psedo").value;
    //console.log(psedo);
    if (psedo == " ") {
        alert("saisir psedo svp")
        return false
    }
    return true
}


function verifNom() {
    var nom = document.getElementById("nom").value;
    if (nom == "") {
        alert("saisir le nom svp ")
        return false
    }
    return true
}

function verifPrenom() {
    var pre = document.getElementById("prenom").value;
    if (pre == "") {
        alert("saisir le prénom svp ")
        return false
    }
    return true
}




function birth() {
    var dateNaissance = document.getElementById("date").value
    var d = new Date();
    var date1 = new Date(dateNaissance);
    let age = (d - date1) / (1000 * 60 * 60 * 24 * 365)
    if (age < 18) {
        alert("dsl date doit etre > 18 ans ")
        return false
    }
    return true
}


function veriflogin() {
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value
    // creation d'objet et afficher son contenu 
    var listUser = JSON.parse(localStorage.getItem('client'))
    if (listUser == null) {
        listUser = []
    }
    for (i = 0; i < listUser.length; i++) {
        // console.log(user);
        if ((listUser[i].psedo == user) && (listUser[i].motdepasse == pass)) {
            localStorage.setItem('connectedClient',JSON.stringify(listUser[i]))


            window.location.href = 'index.html';
            return true
        }




        if ((user == "admin") && (pass == "admin")) {
            window.location.href = '../../../../ajoutervol.html';
        }
        else {
            alert("mot de passe incorrect")
        }
    }
    // let str = JSON.stringify(list)
    // localStorage.setItem('client', str)
}