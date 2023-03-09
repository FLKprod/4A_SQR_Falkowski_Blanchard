document.getElementById("user-connected").innerText =localStorage.getItem("username")

function tweeter(){
    var corps = document.getElementById("corps").value;
    var profil = localStorage.getItem("username")
    var json = '{"profil":'+ profil + ',"corps":'+ corps + '}'

    fetch('http://localhost:5000/tweeter/'+profil+'/'+corps,
    {
        method: "POST", 
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then( response => response.json() )
    .then( data => console.log(data) )
}

function changeuser(){
  localStorage.setItem("username",document.getElementById("connect-user").value)
  alert("username modifié")
  document.getElementById("user-connected").innerText = localStorage.getItem("username") + " est actuellement connecté"
}