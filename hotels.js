function addhotels() {
    var img = document.getElementById("img");
    var nom = document.getElementById("nom").value;
    var etoil = document.getElementById("etoile").value;
    var adres = document.getElementById("adress").value;
    var prix = document.getElementById("prix").value;
    var listHotel = JSON.parse(localStorage.getItem('hotels'));



    if (listHotel == null) {
        listHotel = []
    }
    obj = {
        id: Math.floor(Math.random() * 1000) + 1,
        im: img.files[0].name,
        nom: nom,
        etoile: etoil,
        adr: adres,
        prx: prix
        // owner: loggedUser.idclient 



    }


    listHotel.push(obj);

    localStorage.setItem("hotels", JSON.stringify(listHotel));



    ajouter()

}
function ajouter() {


    var tab1 = document.getElementById("tab")
    tab1.innerHTML = '';
    var listHotel = JSON.parse(localStorage.getItem('hotels'));




    if (listHotel === null) {

        tab1.innerHTML += `
          <tr>
               <th> image</th>
               <th> nom</th>
               <th> etoile</th>
               <th> adress</th>
               <th> prix</th>
               <th> Action</th> 
  
          </tr>
          `
    }
    else {
        tab1 = `
      <tr>
      <th> image</th>
      <th> nom</th>
      <th> etoile</th>
      <th> adress</th>
      <th> prix</th>
      <th> Action</th> 

 </tr>
      `
        for (i = 0; i < listHotel.length; i++) {


            tab1 += `<tr>
          <td><img  src="./src/${listHotel[i].im}"/> </td>
          <td> ${listHotel[i].nom}</td>
          <td> ${listHotel[i].etoile}</td>
          <td> ${listHotel[i].adr}</td>
          <td> ${listHotel[i].prx}</td>
          <td><button Onclick="deletee(${listHotel[i].id})">Delete</boutton>
          <button Onclick="editTask(${listHotel[i].id})">Editer</button> 
          </td>
          </tr>
          `
        }
    }
    document.getElementById("tab").innerHTML = tab1;
}


function deletee(index) {
    var listHotel = JSON.parse(localStorage.getItem('hotels'));
    if (listHotel == null) {
        listHotel = []
    }
    for (i = 0; i < listHotel.length; i++) {
        if (listHotel[i].id == index) {
            listHotel.splice(i, 1)
        }
    }
    localStorage.setItem("hotels", JSON.stringify(listHotel));
    ajouter()
}
function editTask(index) {
    document.getElementById("edit").style.display = "block";
    var listHotel = JSON.parse(localStorage.getItem('hotels'));
    if (listHotel == null) {
        listHotel = []
    }
    for (i = 0; i < listHotel.length; i++) {
        if (listHotel[i].id == index) {
            let html = `<br>
    <br>
    <br>
    image <input type="file" id="img" value='${listHotel[i].im}' placeholder="image"> </br></br>
    nom<input type="text" id="nom" value='${listHotel[i].nom}' pl placeholder="nom"></br></br>
    etoile <input type="text" id="etoil" value='${listHotel[i].etoile}' placeholder="etoile"> </br></br>
    adress<input type="text" id="adress" value='${listHotel[i].adr}' pl placeholder="adress"></br></br>
    prix <input type="text" id="prix" value='${listHotel[i].prx}' placeholder="prix"> </br></br>
    <div> </div>
    <button type="button" id="boutton" onclick="editB(${listHotel[i].id})" style="margin-right:200px;"> save</button>`

            document.getElementById('edit').innerHTML = html
        }
    }
}
function editB(index) {
    var listHotel = JSON.parse(localStorage.getItem('hotels'));

    if (listHotel == null) {
        listHotel = []
    }
    for (i = 0; i < listHotel.length; i++) {
        if (listHotel[i].id == index) {
            listHotel[i].im = document.getElementById('img').value
            listHotel[i].nom = document.getElementById('nom').value
            listHotel[i].etoile = document.getElementById('etoil').value
            listHotel[i].adr = document.getElementById('adress').value
            listHotel[i].prx = document.getElementById('prix').value
        }
    }
    localStorage.setItem("hotels", JSON.stringify(listHotel));
    ajouter()

}
function vide() {
    var img = document.getElementById("img");
    var nom = document.getElementById("nom").value;
    var etoil = document.getElementById("etoile").value;
    var adres = document.getElementById("adress").value;
    var prix = document.getElementById("prix").value;
    if ((img == "") || (nom == "") || (etoil == "") || (adres == "") || (prix == "")) {
        alert("champ vide")
        return false
    }
    return true
}
function filterhotel() {
    document.getElementById("filterhotel").style.display = "block";
    var listHotel = JSON.parse(localStorage.getItem('hotels'));
    var adress = document.getElementById("name").value;

    if (listHotel === null) {
        listHotel = []
    }
    var chaine = `
    <tr>
    <th>image</th>
    <th>Nom</th> 
    <th>etoile</th>
    <th>adress</th>
    <th> prix</th> 
    <th> Action</th> 
    </tr>
    `
    for (i = 0; i < listHotel.length; i++) {
        if (adress == listHotel[i].adr) {
            console.log(adress == listHotel[i].adr);
            console.log(adress, listHotel[i].adr);


            chaine += `<tr>
              <td><img src="./src/${listHotel[i].im}"/></td>
              <td> ${listHotel[i].nom}</td>
              <td> ${listHotel[i].etoile}</td>
              <td> ${listHotel[i].adr}</td>
              <td> ${listHotel[i].prx}</td>

              <td><button Onclick="Reserver(${listHotel[i].id})">Réserver</boutton>

              </td>
         </tr>
         `
        }


        //  else {
        //      alert("hotel indisponible");
        //  }
    }
    console.log(chaine);

    document.getElementById("filterhotel").innerHTML = chaine;

}

function Reserver(idhotel) {
    var listreservation = JSON.parse(localStorage.getItem('reservation'));
    var nbadult = document.getElementById("nbadult").value;
    var nbenfant = document.getElementById("nbenfant").value;
    var nbromm = document.getElementById("room").value;
    var loggedUser = JSON.parse(localStorage.getItem('connectedClient'));
    var listHotel = JSON.parse(localStorage.getItem('hotels'));
    var datearrive = document.getElementById("depart").value;
    var datedepart = document.getElementById("arrive").value;
     

    if (listreservation == null) {
        listreservation = []
    }
    obj = {
        id: Math.floor(Math.random() * 1000) + 1,
        owner: loggedUser.iduser,
        idhotel: idhotel,
        dd: datedepart,
        da: datearrive,
        nombreadult: nbadult,
        nombreenfant: nbenfant,
        nombreromms: nbromm,
        status: 'waiting'


    }


    listreservation.push(obj);

    localStorage.setItem("reservation", JSON.stringify(listreservation));




}

function ajouterreservation() {


    var tab2 = document.getElementById("tabreservation")
    tab2.innerHTML = '';
    var listreservation = JSON.parse(localStorage.getItem('reservation'));
    // var loggedUser = JSON.parse(localStorage.getItem('connectedClient'));
    var listHotel = JSON.parse(localStorage.getItem('hotels'));
    var listUser = JSON.parse(localStorage.getItem('client'));





    if (listreservation === null) {

        tab2.innerHTML += `
          <tr>
               <th> nom user</th>
               <th> nom hotel</th>
               <th> date d'arrive</th>
               <th> date depart</th>
               <th> nombre_adult</th>
               <th> nombre_enfant</th>
               <th> nombre_romms</th>
               <th> Action</th>
  
          </tr>
          `
    }
    else {
        tab2 = `
               <tr>
               <th> nom user</th>
               <th>nom hotel</th>
               <th> date d'arrive</th>
               <th> date depart</th>
               <th> nombre_adult</th>
               <th> nombre_enfant</th>
               <th> nombre_romms</th>
               <th> Action</th>
  
        
   
 </tr>
      `
        for (i = 0; i < listreservation.length; i++) {

            for (let j = 0; j < listHotel.length; j++) {

                console.log(listHotel[j].id , listreservation[i].idhotel);

                if (listHotel[j].id == listreservation[i].idhotel) {

                    listreservation[i]['nomHotel'] = listHotel[j].nom
                }

            }
            console.log(listreservation[i]['nomHotel']);

            for (let k = 0; k < listUser.length; k++) {


                if (listUser[k].iduser == listreservation[i].owner) {
                    listreservation[i]['nomClient'] = listUser[k].nom
                }

            }


            tab2 += `<tr>
            <td> ${listreservation[i]['nomClient']}</td>
          <td> ${listreservation[i]['nomHotel']}</td>
          <td> ${listreservation[i].dd}</td>
          <td> ${listreservation[i].da}</td>
          <td> ${listreservation[i].nombreadult}</td>
          <td> ${listreservation[i].nombreenfant}</td>
          <td> ${listreservation[i].nombreromms}</td>
          <td><button Onclick="confirm(${listreservation[i].id})">confirmer</boutton>
          <button Onclick="refused(${listreservation[i].id})">refuser</button> 
          </td>
          </tr>
          `
        }
    }
    console.log(listreservation);

    document.getElementById("tabreservation").innerHTML = tab2;
}


function confirm(id) {

    // var listreservationconfirme = JSON.parse(localStorage.getItem('reservation confirme'));


    var listreservation = JSON.parse(localStorage.getItem('reservation'));






    if (listreservation == null) {
        listreservation = []
    }
    for (let i = 0; i < listreservation.length; i++) {
        if (listreservation[i].id == id) {
            listreservation[i].status = 'confirm'
        }

    }
    localStorage.setItem("reservation", JSON.stringify(listreservation));
}

function refused(id) {

    // var listreservationconfirme = JSON.parse(localStorage.getItem('reservation confirme'));


    var listreservation = JSON.parse(localStorage.getItem('reservation'));






    if (listreservation == null) {
        listreservation = []
    }
    for (let i = 0; i < listreservation.length; i++) {
        if (listreservation[i].id == id) {
            listreservation[i].status = 'refused'
        }

    }
    localStorage.setItem("reservation", JSON.stringify(listreservation));
}



