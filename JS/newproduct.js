import { newProduct } from "../utils/firebase.js";

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  })
  
const btnAddProduct = document.getElementById('btn-newprod');
btnAddProduct.addEventListener('click', (e)=> { e.preventDefault()
   formNewProduct();
    
});

function formNewProduct(){
    console.log('hola');
    
  const nameprod = document.getElementById('prod-name').value
  const description = document.getElementById('prod-descript').value
  const price = document.getElementById('prod-price').value
  const essence = document.getElementById('prod-essence').value
  const collect = document.getElementById('prod-collect').value
  const intensity = document.getElementById('prod-inten').value
  const type = document.getElementById('prod-type').value

  newProduct(nameprod,description,price,essence,collect,intensity,type)
  

}