var yourNavigation = $(".header");
    stickyDiv = "sticky";
    yourHeader = $('.header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

function objectFitPolyfill() {
	if ('objectFit' in document.documentElement.style === false) {
		document.addEventListener('DOMContentLoaded', function () {
			Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
				(image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));
	
				image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
			});
		});
	}
}
function equalHeight() {
	$('.js-item').matchHeight();
}

function slider() {
	var mySwiper = new Swiper('.js-slider', {
		// Optional parameters
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	});
}
function navBurger() {
    var $navBtn = $('.js-nav-toggle');
    var $nav = $('.js-nav');
    var $navLink = $('js-link');
    var navBtnOpen = 'nav-toggle-active';
    var navOpen = 'nav-open';

    $navBtn.on('click', function() {
        $(this).toggleClass(navBtnOpen);
        $nav.toggleClass(navOpen);
    });

    $navLink.on('click', function() {
        $navBtn.removeClass(navBtnOpen);
        $nav.removeClass(navOpen);
    });
}

objectFitPolyfill();
equalHeight();
slider();
navBurger();
