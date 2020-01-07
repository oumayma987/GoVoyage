function hideElem() {
    document.getElementById("ADD").style.display = "none";

    document.getElementById("Display").style.display = "block";
    document.getElementById("editvol").style.display = "none";

    // document.getElementById("editForm") .style.display="";

}

function showElem() {
    document.getElementById("ADD").style.display = "block";

    document.getElementById("Display").style.display = "none";

    //document.getElementById("editForm") .style.display="none";

}
function addvol() {
    var Areportdepart = document.getElementById("Areportdepart").value;
    var Areportdarrive = document.getElementById("Areportdarrive").value;
    var datedepart = document.getElementById("datedepart").value;
    var datedarrive = document.getElementById("datedarrive").value;
    var destination = document.getElementById("destination").value;
    var prix = document.getElementById("prix").value;

    var list = JSON.parse(localStorage.getItem('vol'));
    // var loggedUser = JSON.parse(localStorage.getItem('connectedUser'));

    if (list == null) {
        list = []
    }
    obj = {
        id: Math.floor(Math.random() * 1000) + 1,
        Areportdepart: Areportdepart,
        Areportdarrive: Areportdarrive,
        datedepart: datedepart,
        datedarrive: datedarrive,
        destination: destination,
        prix: prix,
        // owner: loggedUser.iduser
    }

    list.push(obj);
    localStorage.setItem("vol", JSON.stringify(list));

}
function consultervol() {

    var tab1 = document.getElementById("tabvol")
    tab1.innerHTML = '';
    var list = JSON.parse(localStorage.getItem('vol'));
    if (list === null) {
        tab1.innerHTML += `
            <tr>
                 <th> Aréport de départ</th>
                 <th> Aréport d'arrivé</th>
                 <th> Date de départ</th> 
                 <th>Date d'arrivée</th> 
                 <th> destination</th> 
                 <th> prix</th> 

                 <th> Action</th> 
    
            </tr>
            `
    }
    else {
        tab1 = `
        <tr>
        <th> Aréport de départ</th>
        <th> Aréport d'arrivé</th>
        <th> Date de départ</th> 
        <th>Date d'arrivée</th> 
        <th> destination</th> 
        <th> prix</th>
        <th> Action</th> 

   </tr>
        `
        for (i = 0; i < list.length; i++) {

            tab1 += `<tr>
               <td> ${list[i].Areportdepart}</td>
               <td> ${list[i].Areportdarrive}</td>
               <td> ${list[i].datedepart}</td>
               <td> ${list[i].datedarrive}</td>
               <td> ${list[i].destination}</td>
               <td> ${list[i].prix}</td>
               <td><button Onclick="Delete(${list[i].id})">Delete</boutton>
                   <button Onclick="editer(${list[i].id})">editer</button> 
               </td>
          </tr>
          `
        }

    }
    document.getElementById("tabvol").innerHTML = tab1;


}
function editer(x) {
    document.getElementById("editvol").style.display = "block";

    let list = JSON.parse(localStorage.getItem('vol'));
    if (list == null) {
        list = []
    }
    for (i = 0; i < list.length; i++) {
        if (list[i].id == x) {
            let chaine = `</br>
      <label>Aréport de départ:</label><br>
      <input type="text" id="areportdepartEdit" value="${list[i].Areportdepart}">
    <br>
    <label>Aréport d'arrivé:</label><br>
    <input type="text" id="areportarrivrEdit" value="${list[i].Areportdarrive}">
  <br>
  <label>Date de départ:</label><br>
  <input type="text" id="datedepartEdit" value="${list[i].datedepart}">
  <br>
 <label>Date d'arrivée:</label><br>
  <input type="text" id="datearriveEdit" value="${list[i].datedarrive}">
  <br>
  <label>destination:</label><br>
  <input type="text" id="destinationEdit" value="${list[i].destination}">
  <br>
  <input type="text" id="prixEdit" value="${list[i].prix}">
  <br>
    
      <input type="button" onclick="Apply(${list[i].id})" value="Apply">
      <input type="button" onclick="Cancel()" value="Cancel">`
            document.getElementById("editvol").innerHTML = chaine


        }
    }
}
function Apply(x) {
    let list = JSON.parse(localStorage.getItem('vol'));
    if (list == null) {
        list = []
    }
    for (i = 0; i < list.length; i++) {
        if (list[i].id == x) {

            list[i].Areportdepart = document.getElementById("areportdepartEdit").value;
            list[i].Areportdarrive = document.getElementById("areportarrivrEdit").value;
            list[i].datedepart = document.getElementById("datedepartEdit").value;
            list[i].datedarrive = document.getElementById("datearriveEdit").value;
            list[i].destination = document.getElementById("destinationEdit").value;
            list[i].prix = document.getElementById("prixEdit").value;



        }
    }

    localStorage.setItem("vol", JSON.stringify(list));
    consultervol()
}
function Cancel() {
    //displaynone
}

function Delete(index) {
    let list = JSON.parse(localStorage.getItem('vol'));
    if (list == null) {
        list = []
    }
    for (i = 0; i < list.length; i++) {
        if (list[i].id == index) {


            list.splice(i, 1);
        }
    }
    localStorage.setItem("vol", JSON.stringify(list));
    consultervol()
}



function vaildvol() {
    var Areportdepart = document.getElementById("Areportdepart").value;
    var Areportdarrive = document.getElementById("Areportdarrive").value;
    var datedepart = document.getElementById("datedepart").value;
    var datedarrive = document.getElementById("datedarrive").value;
    var destination = document.getElementById("destination").value;
    var prix = document.getElementById("prix");




    if ((Areportdepart == "") || (Areportdarrive == "") || (datedepart == "") || (datedarrive == "") || (destination == "") || (prix == "")) {
        alert(" vol  invalide veuillez remplir tous les champs")
        return false
    }


    return true

}
function validervol() {
    if (vaildvol() && validdate()) {
        alert("Ajout effectueé avec succes")
        addvol()
    }
}
function validdate() {
    var datedarrive = document.getElementById("datedarrive").value;
    var datedepart = document.getElementById("datedepart").value;
    if (datedepart > datedarrive) {
        alert("date invalide")
        return false
    }
    return true;
}

function filter() {
    document.getElementById("filtervols").style.display = "block";
    var depart = document.getElementById("depart").value;
    var arrive = document.getElementById("arrive").value;
    var lieux = document.getElementById("lieux").value;
    var list = JSON.parse(localStorage.getItem('vol'));
    let loggedUser = JSON.parse(localStorage.getItem('connectedUser'));
    if (list === null) {
        list = []
    }
    var chaine = `
    <tr>
    <th> Date de départ</th> 
    <th>Date d'arrivée</th> 
    <th> destination</th>
    <th> prix </th>  
    <th> Action</th> 
</tr>
`
    for (i = 0; i < list.length; i++) {
        if ((lieux == list[i].destination) ) {

            chaine += `<tr>
              <td> ${list[i].datedepart}</td>
              <td> ${list[i].datedarrive}</td>
              <td> ${list[i].destination}</td>
              <td> ${list[i].prix}</td>

              <td>
              <button Onclick="">Réserver</boutton>
              <button Onclick="">Annuler</boutton>

              </td>
         </tr>
         `
        }

        // else {
        //     alert("vol indisponible")
        // }
    }

    document.getElementById("filtervols").innerHTML = chaine;

}



