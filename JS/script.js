import { authe, logOut, validateUser } from "../utils/firebase.js";
import {    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

let userActual;

onAuthStateChanged(authe, (user) => {
 userActual = user
 const btnUser = document.getElementById('btn-user');
 if (userActual){
 btnUser.innerHTML="LOG OUT"
     btnUser.addEventListener('click' ,(e)=> { e.preventDefault()
       console.log('user')
       logOut()
       });
 } else {
     btnUser.innerHTML = "LOGIN/ SIGN UP"
     btnUser.addEventListener('click' ,(e)=> { e.preventDefault()
         window.location.href = "login.html"
         });
 }
})

const btnBag = document.getElementById('btnbag');
btnBag.addEventListener('click' ,(e)=> { e.preventDefault()
  
if (userActual) {
    window.location.href = "bag.html"
} else {
    alert("no puede entrar")
}
});

 
