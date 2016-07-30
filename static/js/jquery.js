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
var pagetop, menu, right, kirp, pagetitle, yPos;
function yScroll(){
	pagetop = document.getElementById('pagetop');
	menu = document.getElementById('menu');
	right = document.getElementById('right');
	kirp = document.getElementById('kirp');
	pagetitle = document.getElementById('pagetitle');
	yPos = window.pageYOffset;
	if(yPos > 1){
		pagetop.style.height = "50px";
		pagetop.style.paddingTop = "0px";
		pagetop.style.marginTop = "0px";
		menu.style.height = "0px";
		right.style.marginTop = "10px";
		kirp.style.height = "49px";
		kirp.style.width = "50px";
		pagetitle.style.fontSize = "10px";
		pagetitle.style.marginLeft = "-50px";
		pagetitle.style.marginTop = "-5px";
	} else {
		pagetop.style.height = "100px";
		pagetop.style.paddingTop = "0px";
		pagetop.style.marginTop = "0px";
		menu.style.height = "50px";
		right.style.marginTop = "60px";
		kirp.style.height = "99px";
		kirp.style.width = "100px";
		pagetitle.style.fontSize = "23px";
		pagetitle.style.marginLeft = "0px";
		pagetitle.style.marginTop = "15px";
	}
}
window.addEventListener("scroll", yScroll);

// Border-bottom for nav
$(document).ready(function() {
	$('.nav-selection').mouseenter(function() {
		$(this).addClass("show-border");
	});
});
$(document).ready(function() {
	$('.nav-selection').mouseleave(function() {
		$(this).removeClass("show-border");
	});
});

//Partnerzy greyscalle
$(document).ready(function() {
	$('.partnerzy').mouseenter(function() {
		$(this).removeClass("orlen");
	});
});
$(document).ready(function() {
	$('.partnerzy').mouseleave(function() {
		$(this).addClass("orlen");
	});
});
//Blurr 
$(document).ready(function(){
	$(window).scroll(function(){
		yPos = window.pageYOffset;
		if(yPos > 1){
			$('.wizytowka').addClass("blurwizyt");
		} else {
			$('.wizytowka').removeClass("blurwizyt");
		}
	});
});
