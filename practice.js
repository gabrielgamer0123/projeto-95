
const firebaseConfig = {
    apiKey: "AIzaSyAI03ivpsYzqvL9r4rOLuWWQMUbYA0lEj4",
    authDomain: "kuwiter-88395.firebaseapp.com",
    projectId: "kuwiter-88395",
    storageBucket: "kuwiter-88395.appspot.com",
    messagingSenderId: "979149306491",
    appId: "1:979149306491:web:bad04662a9a14f4dd940de"
  };
  const app = initializeApp(firebaseConfig);

  function addUser () 
  {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adicionado usuario"
    });
  }