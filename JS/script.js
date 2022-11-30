import { authe, validateUser } from "../utils/firebase.js";
import {    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const btnUser = document.getElementById('btn-user');
btnUser.addEventListener('click' ,(e)=> { e.preventDefault()
  console.log('user')
  window.location.href="login.html";
  });

let userActual;

onAuthStateChanged(authe, (user)=> {
 userActual = user
})

const btnBag = document.getElementById('btnbag');
btnBag.addEventListener('click' ,(e)=> { e.preventDefault()
  
if (userActual) {
    window.location.href = "bag.html"
} else {
    alert("no puede entrar")
}
});

 
