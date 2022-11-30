import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
//import { validateUser } from "../JS/script";

const firebaseConfig = {
    apiKey: "AIzaSyCR5CHozb4GLZHoM0q-v5_xIqaDiHAusKs",
    authDomain: "opal-3e79a.firebaseapp.com",
    projectId: "opal-3e79a",
    storageBucket: "opal-3e79a.appspot.com",
    messagingSenderId: "846698845799",
    appId: "1:846698845799:web:76764559ee1f01d43be6c2",
    measurementId: "G-K50FZ6LTNZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

 const auth = getAuth(app);

 export const authe = auth;

 export async function addUser(first,last,email,password){
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first,
          last,
          email,
          password,
          admin: false
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(error.message);
        // ..
      });
 }


 export async function newProduct(nameprod,description,price,essence,collect,intensity,type){
    try {
        const docRef = await addDoc(collection(db, "new products"), {
            nameprod,
            description,
            price,
            essence,
            collect,
            intensity,
            type
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
 }

 export function addProducts(products){
products.forEach(async (product)=>{
    try {
        const docRef = await addDoc(collection(db, "new products"), product);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    
})
}

 export function logIn(email,password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href="index.html"
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(error.message);
  });
 }

 
export function logOut(){
    signOut(auth).then(() => {
        console.log('cerro sesion');
      }).catch((error) => {
        console.log('no cerro sesion');
      });
}

 export function validateUser(userSigned){
    if(userSigned){

    }else{

    }
    }

 onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      validateUser(true);
    } else {
        validateUser(false);
    }
  });