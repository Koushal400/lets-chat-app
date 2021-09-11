

const firebaseConfig = {
      apiKey: "AIzaSyBm-9mvgdOCNjLTXyn5vmk2i73RqBnJvbA",
      authDomain: "class-test-7ef2e.firebaseapp.com",
      projectId: "class-test-7ef2e",
      storageBucket: "class-test-7ef2e.appspot.com",
      messagingSenderId: "177881155043",
      appId: "1:177881155043:web:e6d04c7449f69ddc380cd6"
    };
    
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   

     
      });});}
getData();
