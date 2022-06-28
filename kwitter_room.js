
var firebaseConfig = {
      apiKey: "AIzaSyCf0D7JIOF9lx7ss5z3G93aZmUBUHzziwg",
      authDomain: "kwitter-71780.firebaseapp.com",
      databaseURL: "https://kwitter-71780-default-rtdb.firebaseio.com",
      projectId: "kwitter-71780",
      storageBucket: "kwitter-71780.appspot.com",
      messagingSenderId: "591043504423",
      appId: "1:591043504423:web:daa9e847af6ddac1542102"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).uptate({
        purpose : "adding room name"
  });

        localStorage.setItem("room_name", room_name);

        window.location= "kwitter_page.html";
        }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_name +"</div><hr>"
      document.getElementById("output").innerHTML += row;

      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html"
}

