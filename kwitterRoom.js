
const firebaseConfig = {
  apiKey: "AIzaSyAI03ivpsYzqvL9r4rOLuWWQMUbYA0lEj4",
  authDomain: "kuwiter-88395.firebaseapp.com",
  projectId: "kuwiter-88395",
  storageBucket: "kuwiter-88395.appspot.com",
  messagingSenderId: "979149306491",
  appId: "1:979149306491:web:bad04662a9a14f4dd940de"
};
const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
   localStorage.removeItem("userName");
     localStorage.removeItem("roomName");
        window.location.replace = "https://learn.byjusfutureschool.com/join-class";
}
