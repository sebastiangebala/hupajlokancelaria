$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 400);
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

// Toggle 

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

// Scroll to Top

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

// Shrinking nav
var pagetop, menu, yPos;
function yScroll(){
	pagetop = document.getElementById('pagetop');
	menu = document.getElementById('menu');
	yPos = window.pageYOffset;
	if(yPos > 1){
		pagetop.style.height = "50px";
		pagetop.style.paddingTop = "0px";
		pagetop.style.marginTop = "0px";
		menu.style.height = "0px";
	} else {
		pagetop.style.height = "100px";
		pagetop.style.paddingTop = "50px";
		pagetop.style.marginTop = "0px";
		menu.style.height = "50px";
	}
}
window.addEventListener("scroll", yScroll);


