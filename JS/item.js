let productId;

const url = window.location.search;
    const searchParas = new URLSearchParams(url);
    productId = searchParas.get("id").replace('"', "");

    const productDetail = products.find((object) => object.id == productId)    

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
        
    </article>
</section>;`

