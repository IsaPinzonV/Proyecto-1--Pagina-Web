const products = [
  {
    id:1,
    image: (src = "./assets/CITRUS.png"),
    name: "Citrus",
    descrip: "Perfume for all genders",
    price: "450 USD",
    essence: "Citrus essence",
    collect: "Amande et moelleux",
    intensity: "Medium intensity",
    type: "Single"
  },
  {
    id:2,
    image: (src = "./assets/MOCHA.png"),
    name: "Mocha",
    descrip: "Perfume with delicate notes",
    price: "230 USD",
    essence: "Bitter vanilla essence",
    collect: "Agrumes doux",
    intensity: "High intensity",
    type: "Single"
  },
  {
    id:3,
    image: (src = "./assets/REBREN.png"),
    name: "Rebren",
    descrip: "Masculine note perfume",
    price: "330 USD",
    essence: "Fresh and musky essence",
    collect: "Collection florale",
    intensity: "High intensity",
    type: "Single"
  },
  {
    id:4,
    image: (src = "./assets/CLASSIC.png"),
    name: "Classic",
    descrip: "Perfume with delicate notes",
    price: "150 USD",
    essence: "Smoked vanilla essence",
    collect: "Séduction aromatique",
    intensity: "Medium intensity",
    type: "Single"
  },
  {
    id:5,
    image: (src = "./assets/PEACH.png"),
    name: "Peach",
    descrip: "Feminine notes perfume",
    price: "260 USD",
    essence: "Bloom essence",
    collect: "Amande et moelleux",
    intensity: "Low intensity",
    type: "Single"
  },
  {
    id:6,
    image: (src = "./assets/COPER.png"),
    name: "Coper",
    descrip: "Masculine note perfume ",
    price: "180 USD",
    essence: "Bitter vanilla essence",
    collect: "Séduction aromatique",
    intensity: "High intensity",
    type: "Single"
  },
  {
    id:7,
    image: (src = "./assets/LUX.png"),
    name: "Lux",
    descrip: "Perfume for all genders ",
    price: "200 USD",
    essence: "Citrus essence",
    collect: "Agrumes doux",
    intensity: "Medium intensity",
    type: "Single"
  },
  {
    id:8,
    image: (src = "./assets/SAVIL.png"),
    name: "Savil",
    descrip: "Perfume for all genders",
    price: "220 USD",
    essence: "Fresh and musky essence",
    collect: "Collection florale",
    intensity: "Medium intensity",
    type: "Single"
  },
  {
    id:9,
    image: (src = "./assets/BAILEYS.png"),
    name: "Baileys",
    descrip: "Feminine notes perfume",
    price: "80 USD",
    essence: "Woody and fresh essence",
    collect: "Séduction aromatique",
    intensity: "High intensity",
    type: "Single"
  },
  {
    id:10,
    image: (src = "./assets/MARIS.png"),
    name: "Maris",
    descrip: "Perfume with delicate notes",
    price: "55 USD ",
    essence: "Bloom essence",
    collect: "Collection florale",
    intensity: "Low intensity",
    type: "Single"
  },
  {
    id:11,
    image: (src = "./assets/SULFE.png"),
    name: "Sulfe",
    descrip: "Perfume for all genders",
    price: "150 USD",
    essence: "Woody and fresh essence",
    collect: "Amande et moelleux",
    intensity: "Medium intensity",
    type: "Single"
  },
  {
    id:12,
    image: (src = "./assets/GOLDIE.png"),
    name: "Goldie",
    descrip: "Perfume for all genders",
    price: "270 USD",
    essence: "Woody and fresh essenc",
    collect: "Collection florale",
    intensity: "Low intensity",
    type: "Single"
  },
  {
    id:13,
    image: (src = "./assets/COTTON.png"),
    name: "Cotton",
    descrip: "Perfume for all genders",
    price: "160 USD",
    essence: "Bitter vanilla essence",
    collect: "Amande et moelleux",
    intensity: "Low intensity",
    type: "Single"
  },
  {
    id:14,
    image: (src = "./assets/MEDOW.png"),
    name: "Medow",
    descrip: "Complimentary gift packs",
    price: "4560 USD",
    essence: "Smoked vanilla essence",
    collect: "Amande et moelleux",
    intensity: "Low intensity",
    type: "Single"
  },
  {
    id:15,
    image: (src = "./assets/REBREN BUNDEL.png"),
    name: "Rebren Bundel",
    descrip: "Gift packs dry odors",
    price: "1230 USD",
    essence: "Citrus essence",
    collect: "Collection florale",
    intensity: "High intensity",
    type: "Bundel"
  },
  {
    id:16,
    image: (src = "./assets/PEACH BUNDEL.png"),
    name: "Peach Bundel",
    descrip: "Sweet smelling gift packs",
    price: "2200 USD",
    essence: "Bloom essence",
    collect: "Amande et moelleux",
    intensity: "High intensity",
    type: "Bundel"
  },
  {
    id:17,
    image: (src = "./assets/GILDIE BUNDEL.png"),
    name: "Goldie Bundel",
    descrip: "Complimentary gift packs",
    price: "1605 USD",
    essence: "Fresh and musky essence",
    collect: "Séduction aromatique",
    intensity: "Medium intensity",
    type: "Bundel"
  },
  {
    id:18,
    image: (src = "./assets/PINK BUNDEL.png"),
    name: "Pink Bundel",
    descrip: "Sweet smelling gift packs",
    price: "1850 USD",
    essence: "Smoked vanilla essence",
    collect: "Séduction aromatique",
    intensity: "High intensity",
    type: "Bundel"
  },
  {
    id:19,
    image: (src = "./assets/DREAM BUNDEL.png"),
    name: "Dream Bundel",
    descrip: "Complimentary gift packs",
    price: "2400 USD",
    essence: "Bloom essence",
    collect: "Collection florale",
    intensity: "Medium intensity",
    type: "Bundel"
  },
  {
    id:20,
    image: (src = "./assets/OLIVER BUNDEL.png"),
    name: "Oliver Bundel",
    descrip: "Gift packs dry odors",
    price: "3000 USD",
    essence: "Woody and fresh essence",
    collect: "Agrumes doux",
    intensity: "High intensity",
    type: "Bundel"
  },
  {
    id:21,
    image: (src = "./assets/CONSTANS BUNDEL.png"),
    name: "Constans Bundel",
    descrip: "Complimentary gift packs",
    price: "2560 USD",
    essence: "Bitter vanilla essence",
    collect: "Amande et moelleux",
    intensity: "Medium intensity",
    type: "Bundel"
  },
];

const filter_collection = document.getElementById("filter_collection"); 
const filter_essence = document.getElementById("filter_essence"); 
const filter_intensity = document.getElementById("filter_intensity"); 
const filter_type = document.getElementById("filter_type"); 


filter_collection.addEventListener("change",(e)=> {filtrar()});
filter_essence.addEventListener("change",(e)=> {filtrar()});
filter_intensity.addEventListener("change",(e)=> {filtrar()});
filter_type.addEventListener("change",(e)=> {filtrar()});

console.log(products.length);
function filtrar() {
  let currentProductsFilter = [...products];
  const collection = filter_collection.value || "";
  const essences = filter_essence.value || "";
  const intensity = filter_intensity.value || "";
  const type = filter_type.value || "";
  productos.innerHTML = "";


  let filters = {};

  if (collection === "COLLECTION" || collection === "") {
    
  } else {
   
    filters['collection'] = collection
  }

  if (essences === "ESSENCE" || essences === "") {
    products_filter;
  } else {
    filters['essences'] = essences
  }

  if (intensity === "INTENSITY" || intensity === "") {
    products_filter;
  } else {
    
    filters['intensity'] = intensity
  }

  if (type === "TYPE" || type === "") {
    products_filter;
  } else {
    
    filters['type'] = type
  }

  const _pr = currentProductsFilter.filter(
    p => {
      //return p.collect === filters['collection']
      return (
        (filters['type']? p.type === filters['type'] : true)
       && (filters['intensity']? p.intensity === filters['intensity'] : true)
        && (filters['essences']? p.essence === filters['essences'] : true)
        && (filters['collection']? p.collect === filters['collection'] : true)
        )
    }
  )
  pintar(_pr);
}

const productos = document.getElementById("productos");
let products_filter = products;
pintar(products);

function pintar(products) {
  products.forEach((product) => {
   
    productos.innerHTML += `<a href= './item.html?id=${product.id}' class="card_list">
    <figure class= "card_figure"><img class= "card_img" src="${product.image}"></figure>
    <article class="card_article">
        <h2>${product.name}</h2>
        <p>${product.descrip}</p>
        <h3>${product.essence}</h3>
        <h5 class="card_price"> ${product.price}</h5>
    </article>
</a>`
  });
}
