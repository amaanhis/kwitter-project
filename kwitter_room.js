
var firebaseConfig = {
      apiKey: "AIzaSyDOZcg61dzq-y7J7fsO5u91Jy8qoozVJxY",
      authDomain: "kwitter-f21ed.firebaseapp.com",
      databaseURL: "https://kwitter-f21ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-f21ed",
      storageBucket: "kwitter-f21ed.appspot.com",
      messagingSenderId: "113574623792",
      appId: "1:113574623792:web:7fe8b55b2010b676dfcbf5"
    };
    
    
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location="index.html";
}
