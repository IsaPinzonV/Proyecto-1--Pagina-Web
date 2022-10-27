const products = [
  {
    image: (src = "./assets/CITRUS.png"),
    name: "Citrus",
    descrip: "Perfume for all genders",
    price: "450 USD",
    essence: "Citrus essence",
    collect: "Amande et moelleux",
    intensity: "Medium intensity",
  },
  {
    image: (src = "./assets/MOCHA.png"),
    name: "Mocha",
    descrip: "Perfume with delicate notes",
    price: "230 USD",
    essence: "Bitter vanilla essence",
    collect: "Agrumes doux",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/REBREN.png"),
    name: "Rebren",
    descrip: "Masculine note perfume",
    price: "330 USD",
    essence: "Fresh and musky essence",
    collect: "Collection florale",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/CLASSIC.png"),
    name: "Classic",
    descrip: "Perfume with delicate notes",
    price: "150 USD",
    essence: "Smoked vanilla essence",
    collect: "Séduction aromatique",
    intensity: "Medium intensity",
  },
  {
    image: (src = "./assets/PEACH.png"),
    name: "Peach",
    descrip: "Feminine notes perfume",
    price: "260 USD",
    essence: "Bloom essence",
    collect: "Amande et moelleux",
    intensity: "Low intensity",
  },
  {
    image: (src = "./assets/COPER.png"),
    name: "Coper",
    descrip: "Masculine note perfume ",
    price: "180 USD",
    essence: "Bitter vanilla essence",
    collect: "Séduction aromatique",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/LUX.png"),
    name: "Lux",
    descrip: "Perfume for all genders ",
    price: "200 USD",
    essence: "Citrus essence",
    collect: "Agrumes doux",
    intensity: "Medium intensity",
  },
  {
    image: (src = "./assets/SAVIL.png"),
    name: "Savil",
    descrip: "Perfume for all genders",
    price: "220 USD",
    essence: "Fresh and musky essence",
    collect: "Collection florale",
    intensity: "Medium intensity",
  },
  {
    image: (src = "./assets/BAILEYS.png"),
    name: "Baileys",
    descrip: "Feminine notes perfume",
    price: "80 USD",
    essence: "Woody and fresh essence",
    collect: "Séduction aromatique",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/MARIS.png"),
    name: "Maris",
    descrip: "Perfume with delicate notes",
    price: "55 USD ",
    essence: "Bloom essence",
    collect: "Collection florale",
    intensity: "Low intensity",
  },
  {
    image: (src = "./assets/SULFE.png"),
    name: "Sulfe",
    descrip: "Perfume for all genders",
    price: "150 USD",
    essence: "Woody and fresh essence",
    collect: "Amande et moelleux",
    intensity: "Medium intensity",
  },
  {
    image: (src = "./assets/GOLDIE.png"),
    name: "Goldie",
    descrip: "Perfume for all genders",
    price: "270 USD",
    essence: "Woody and fresh essenc",
    collect: "Collection florale",
    intensity: "Low intensity",
  },
  {
    image: (src = "./assets/COTTON.png"),
    name: "Cotton",
    descrip: "Perfume for all genders",
    price: "160 USD",
    essence: "Bitter vanilla essence",
    collect: "Amande et moelleux",
    intensity: "Low intensity",
  },
  {
    image: (src = "./assets/MEDOW.png"),
    name: "Medow",
    descrip: "Complimentary gift packs",
    price: "4560 USD",
    essence: "Smoked vanilla essence",
    collect: "Amande et moelleux",
    intensity: "Low intensity",
  },
  {
    image: (src = "./assets/REBREN BUNDEL.png"),
    name: "Rebren Bundel",
    descrip: "Gift packs dry odors",
    price: "1230 USD",
    essence: "Citrus essence",
    collect: "Collection florale",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/PEACH BUNDEL.png"),
    name: "Peach Bundel",
    descrip: "Sweet smelling gift packs",
    price: "2200 USD",
    essence: "Bloom essence",
    collect: "Amande et moelleux",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/GILDIE BUNDEL.png"),
    name: "Goldie Bundel",
    descrip: "Complimentary gift packs",
    price: "1605 USD",
    essence: "Fresh and musky essence",
    collect: "Séduction aromatique",
    intensity: "Medium intensity",
  },
  {
    image: (src = "./assets/PINK BUNDEL.png"),
    name: "Pink Bundel",
    descrip: "Sweet smelling gift packs",
    price: "1850 USD",
    essence: "Smoked vanilla essence",
    collect: "Séduction aromatique",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/DREAM BUNDEL.png"),
    name: "Dream Bundel",
    descrip: "Complimentary gift packs",
    price: "2400 USD",
    essence: "Bloom essence",
    collect: "Collection florale",
    intensity: "Medium intensity",
  },
  {
    image: (src = "./assets/OLIVER BUNDEL.png"),
    name: "Oliver Bundel",
    descrip: "Gift packs dry odors",
    price: "3000 USD",
    essence: "Woody and fresh essence",
    collect: "Agrumes doux",
    intensity: "High intensity",
  },
  {
    image: (src = "./assets/CONSTANS BUNDEL.png"),
    name: "Constans Bundel",
    descrip: "Complimentary gift packs",
    price: "2560 USD",
    essence: "Bitter vanilla essence",
    collect: "Amande et moelleux",
    intensity: "Medium intensity",
  },
];

const filter_collection = document.getElementById("filter_collection"); 
const filter_essence = document.getElementById("filter_essence"); 
const filter_intensity = document.getElementById("filter_intensity"); 
filter_collection.addEventListener("change",(e)=> {filtrar()})

function filtrar() {
  const collection = filter_collection.value || "";
  const essences = filter_essence.value || "";
  const intensity = filter_intensity.value || "";
  productos.innerHTML = "";

  
  if (collection === "COLLECTION" || collection === "") {
    products_filter;
  } else {
    products_filter = products.filter(
      (producto) => producto.collect === collection
    );
  }

  if (essences === "ESSENCE" || essences === "") {
    products_filter;
  } else {
    products_filter = products.filter(
      (producto) => producto.essence === essences
    );
  }

  if (intensity === "ESSENCE" || intensity === "") {
    products_filter;
  } else {
    products_filter = products.filter(
      (producto) => producto.intensity === intensity
    );
  }
  pintar();
}

const productos = document.getElementById("productos");
let products_filter = products;
pintar();


function pintar() {
  products_filter.forEach((product) => {
    productos.innerHTML += `<section class="card_list">
    <figure class= "card_figure"><img class= "card_img" src="${product.image}"></figure>
    <article class="card_article">
        <h2>${product.name}</h2>
        <p>${product.descrip}</p>
        <h3>${product.essence}</h3>
        <h5 class="card_price"> ${product.price}</h5>
    </article>
</section>`;
  });
}
