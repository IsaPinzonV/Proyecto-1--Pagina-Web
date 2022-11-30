import { addUser, logIn } from "../utils/firebase.js";

const btnSign = document.getElementById('btn-signup');
btnSign.addEventListener('click', (e)=> { e.preventDefault()
formSignUp();
});

const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click' ,(e)=> { e.preventDefault()
  formlogIn();
  });

function formSignUp(){
  const first = document.getElementById('first-name').value
  const last = document.getElementById('last-name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const passConfirm = document.getElementById('password-confirm').value

if (password === passConfirm) {
  addUser(first,last,email,password);
}else{
  alert('Las contraseñas no coinciden')
}
}

function formlogIn(){
  const email = document.getElementById('email-login').value
  const password = document.getElementById('password-login').value
logIn(email,password)
}

const btnSignOut = document.getElementById("Sign-out"); 
btnSignOut.addEventListener('click' ,(e)=> { e.preventDefault()
  btnLogOut();
  console.log('hola')
  });

  /*
  function btnLogOut(){
  if (account === "SIGN OUT") {
    logOut();
  } 
 }*/