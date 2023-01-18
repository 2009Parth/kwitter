// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJtujBNO53GBnsp8e5SRy_wijMUn-hgOI",
  authDomain: "kwitter-2a6e7.firebaseapp.com",
  databaseURL: "https://kwitter-2a6e7-default-rtdb.firebaseio.com",
  projectId: "kwitter-2a6e7",
  storageBucket: "kwitter-2a6e7.appspot.com",
  messagingSenderId: "76363285221",
  appId: "1:76363285221:web:d2cff9b2ef95d1cc72ca0c"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE





function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });
    });

}





getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}







user_name = localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!" ;

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}








function logout()
{
  localStorage.removeItem("UserName");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}