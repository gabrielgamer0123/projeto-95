const firebaseConfig = {
      apiKey: "AIzaSyAI03ivpsYzqvL9r4rOLuWWQMUbYA0lEj4",
      authDomain: "kuwiter-88395.firebaseapp.com",
      projectId: "kuwiter-88395",
      storageBucket: "kuwiter-88395.appspot.com",
      messagingSenderId: "979149306491",
      appId: "1:979149306491:web:bad04662a9a14f4dd940de"
    };
    const app = initializeApp(firebaseConfig);

    user_name =  localStorage.getItem("user_name");
    room_name =  localStorage.getItem("room_name");
    function send()
    {
      MSG = document.getElementById("MSG").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            messege :MSG,
            Like: 0
      });
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name']
message =  message_data ['message']
like = message_data['like']
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick_.png'></h4";
message_with_tag = "<h4> class+'message_h4' "+ message +"</h4";
like_button ="<button class='btn btn-warning' id="+firebase_message_Id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up' >Curtidas: "+like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicou no botão curtir - " + massage_id);
      button_id = message_id;
      Likes = document.getElementById(button_id).value;
      updates_likes = Number(likes) + 1;
      console.log(updated_LIkes);

      firebase.database(). ref(room_name).child(message_id).updates({
            like : update_likes
      })
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location.replace = ("index.html");
      }