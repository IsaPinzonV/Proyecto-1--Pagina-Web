import { authe, logOut} from "../utils/firebase.js";
import {    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

let userActual;

onAuthStateChanged(authe, (user) => {
 userActual = user
 const btnUser = document.getElementById('btn-user');
 if (userActual){
 btnUser.innerHTML="LOG OUT"
 btnCreateProd.innerHTML="CREATE NEW PRODUCT"
     btnUser.addEventListener('click' ,(e)=> { e.preventDefault()
       console.log('user')
       logOut()
       });
 } else {
     btnUser.innerHTML = "LOGIN/ SIGN UP"
     btnCreateProd.innerHTML = "SALE POINTS"
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

const btnCreateProd = document.getElementById('btn-admi');
btnCreateProd.addEventListener('click' ,(e)=> { e.preventDefault()
    window.location.href="newproduct.html"
});
