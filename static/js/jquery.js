$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-100
        }, 500);
        return false;
      }
    }
  });
});

// Nav-Item 

$(document).ready(function() {
    $('.nav-item').click(function() {
        $('.sidebar').toggleClass('closed');
    });
});

// Toggle the blurred class

$(document).ready(function(){

function sidebar(){
  var trigger = $('#trigger, #close'),
  menu = $('.sidebar');

  trigger.on('click',function(){
   $(this).toggleClass('active');
   menu.toggleClass('closed');
  });
}

 function deploy(){
  sidebar();
 }

 deploy();

});




