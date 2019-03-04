/*  HAMBURGER
=========================================== */

$(document).ready(function () {

  $('.hamburger').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});
  



/*  FOOTER 
========================================= */

/*  Email Simple Validation    */

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}  



/*  PROJECTS 
========================================== */

/*  Efecto "Fade In" en Sección de "Projects"  */


$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.card').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1800);
                  
          }
          
      }); 
  
  });
  
});


