function addhotels() {
    var img = document.getElementById("img");
    var nom = document.getElementById("nom").value;
    var etoil = document.getElementById("etoile").value;
    var adres = document.getElementById("adress").value;
    var prix = document.getElementById("prix").value;
    var list = JSON.parse(localStorage.getItem('hotels'));


    if (list == null) {
        list = []
    }
    obj = {
        id: Math.floor(Math.random() * 1000) + 1,
        im: img.files[0].name,
        nom: nom,
        etoile: etoil,
        adr: adres,
        prx: prix
    }


    list.push(obj);

    localStorage.setItem("hotels", JSON.stringify(list));

    

    ajouter()

}
function ajouter() {


    var tab1 = document.getElementById("tab")
    tab1.innerHTML = '';
    var list = JSON.parse(localStorage.getItem('hotels'));

    

    if (list === null) {

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
        for (i = 0; i < list.length; i++) {


            tab1 += `<tr>
          <td><img src="./src/${list[i].im}"/> </td>
          <td> ${list[i].nom}</td>
          <td> ${list[i].etoile}</td>
          <td> ${list[i].adr}</td>
          <td> ${list[i].prx}</td>
          <td><button Onclick="deletee(${list[i].id})">Delete</boutton>
          <button Onclick="editTask(${list[i].id})">Editer</button> 
          </td>
          </tr>
          `
        }
    }
    document.getElementById("tab").innerHTML = tab1;
}


function deletee(index) {
    var list = JSON.parse(localStorage.getItem('hotels'));
    if (list == null) {
        list = []
    }
    for (i = 0; i < list.length; i++) {
        if (list[i].id == index) {
            list.splice(i, 1)
        }
    }
    localStorage.setItem("hotels", JSON.stringify(list));
    ajouter()
}
function editTask(index) {
    document.getElementById("edit").style.display = "block";
    var list = JSON.parse(localStorage.getItem('hotels'));
    if (list == null) {
        list = []
    }
    for (i = 0; i < list.length; i++) {
        if (list[i].id == index) {
            let html = `<br>
    <br>
    <br>
    image <input type="file" id="img" value='${list[i].im}' placeholder="image"> </br></br>
    nom<input type="text" id="nom" value='${list[i].nom}' pl placeholder="nom"></br></br>
    etoile <input type="text" id="etoil" value='${list[i].etoile}' placeholder="etoile"> </br></br>
    adress<input type="text" id="adress" value='${list[i].adr}' pl placeholder="adress"></br></br>
    prix <input type="text" id="prix" value='${list[i].prx}' placeholder="prix"> </br></br>
    <div> </div>
    <button type="button" id="boutton" onclick="editB(${list[i].id})" style="margin-right:200px;"> save</button>`

            document.getElementById('edit').innerHTML = html
        }
    }
}
function editB(index) {
    var list = JSON.parse(localStorage.getItem('hotels'));

    if (list == null) {
        list = []
    }
    for (i = 0; i < list.length; i++) {
        if (list[i].id == index) {
            list[i].im = document.getElementById('img').value
            list[i].nom = document.getElementById('nom').value
            list[i].etoile = document.getElementById('etoil').value
            list[i].adr = document.getElementById('adress').value
            list[i].prx = document.getElementById('prix').value
        }
    }
    localStorage.setItem("hotels", JSON.stringify(list));
    ajouter()

}
function vide() {
    var img = document.getElementById("img");
    var nom = document.getElementById("nom").value;
    var etoil = document.getElementById("etoile").value;
    var adres = document.getElementById("adress").value;
    var prix = document.getElementById("prix").value;
    if ((img=="") || (nom=="")||(etoil=="")||(adres=="")||(prix=="")){
        alert ("champ vide")
        return false
    }
    return true
}