/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  // Close the dropdown menu if the user clicks outside of it
  

  const dropDown = document.querySelector('#drop-down'),
      menu = document.querySelector('#menu');

      dropDown.addEventListener('click', (e) => {
menu.classList.toggle('active');

});

   