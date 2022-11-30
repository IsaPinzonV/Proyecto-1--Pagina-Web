import db from "../utils/firebase.js";
import {
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

let productId;

const url = window.location.search;
    const searchParas = new URLSearchParams(url);
    productId = searchParas.get("id").replace('"', "");
let allproducts = []
    const products = await getDocs(collection(db, "new products"));
    products.forEach(doc => {
        allproducts.push(doc.data())
    });

    const productDetail = allproducts.find((object) => object.id == productId)    

    let productosItem= document.getElementById("productos");
    
    productosItem.innerHTML += `<section class="card_list">
    <figure class= "card_figure"><img class= "card_img" src="${productDetail.image}"></figure>
    <article class="card_article">
        <h2 class="name_detail">${productDetail.name}</h2>
        <p class='descri_detail'>${productDetail.descrip}</p>
        <h5 class="price_detail"> ${productDetail.price}</h5>
        <p class="collect_detail">Collection: ${productDetail.collect}</p>
        <h3 class="essence_detail"> Essence: ${productDetail.essence}</h3>
        <p class="intensity_detail"> Intensity: ${productDetail.intensity}</p>
        <p class="type_detail"> Type: ${productDetail.type}</p>

        <button id="add-bag" class="button is-black button_añadir">ADD TO BAG</button>

    </article>
</section>;`

