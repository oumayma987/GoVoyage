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
        idhotel: Math.floor(Math.random() * 1000) + 1,
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
          <td><img src="./src/${listHotel[i].im}"/> </td>
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
    var datearrive = document.getElementById("arrive").value;
    var datedepart = document.getElementById("depart").value;




    if (listreservation == null) {
        listreservation = []
    }
    obj = {
        idreservation: Math.floor(Math.random() * 1000) + 1,
        owner: loggedUser.iduser,
        idhotel: idhotel,
        dd:datedepart,
        da:datearrive,
        nombreadult: nbadult,
        nombreenfant: nbenfant,
        nombreromms: nbromm,



    }


    listreservation.push(obj);

    localStorage.setItem("reservation", JSON.stringify(listreservation));


    

}

function ajouterreservation() {

   
    var tab1 = document.getElementById("tabreservation")
    tab1.innerHTML = '';
    var listreservation = JSON.parse(localStorage.getItem('reservation'));
    // var loggedUser = JSON.parse(localStorage.getItem('connectedClient'));
    var listHotel = JSON.parse(localStorage.getItem('hotels'));





    if (listreservation === null) {

        tab1.innerHTML += `
          <tr>
               <th> id_user</th>
               <th> id_hotel</th>
               <th> date depart</th>
               <th> date d'arrive</th>
               <th> nombre_adult</th>
               <th> nombre_enfant</th>
               <th> nombre_romms</th>
               <th> Action</th>
  
          </tr>
          `
    }
    else {
        tab1 = `
               <tr>
               <th> id_user</th>
               <th> id_hotel</th>
               <th> date depart</th>
               <th> date d'arrive</th>
               <th> nombre_adult</th>
               <th> nombre_enfant</th>
               <th> nombre_romms</th>
               <th> Action</th>
  
        
   
 </tr>
      `
        for (i = 0; i < listreservation.length; i++) {

            // for (let j = 0; j < listHotel.length; j++) {
            //     if (listHotel[j].idhotel == listreservation[i].iduser) {
            //         listreservation[i]['nomHotel'] = listHotel[j].nom
            //     }

            // }
            // for (let k = 0; k < listUser.length; k++) {
            //     if (listUser[k].iduser == listreservation[i].iduser) {
            //         listreservation[i]['nomClient'] = listUser[k].nom
            //     }

            // }


            tab1 += `<tr>
            <td> ${listreservation[i].owner}</td>
          <td> ${listreservation[i].idhotel}</td>
          <td> ${listreservation[i].dd}</td>
          <td> ${listreservation[i].da}</td>
          <td> ${listreservation[i].nombreadult}</td>
          <td> ${listreservation[i].nombreenfant}</td>
          <td> ${listreservation[i].nombreromms}</td>
          <td><button Onclick="deletee(${listreservation[i].idreservation})">cofirmer</boutton>
          <button Onclick="editTask(${listreservation[i].idreservation})">refuser</button> 
          </td>
          </tr>
          `
        }
    }
    document.getElementById("tabreservation").innerHTML = tab1;
}

function confirme() {
    
    
}




