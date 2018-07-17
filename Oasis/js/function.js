/* ----------------------------------------------------------------------------------------
* Author        : Awaiken
* Template Name : App Launch - App Landing Page HTML5 Template
* File          : Custom JS
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */
(function ($) {
    "use strict";
	
	var $window = $(window); 
    
	var aChildren = $(".cvitae-main-nav.scroll li").children();
	var aArray = [];
	for (var i = 0; i < aChildren.length; i++) {
		var aChild = aChildren[i];
		var ahref = $(aChild).attr('href');
		aArray.push(ahref);
	}
	/* Preloader Effect */
	$window.load(function() {
	    /*$(".preloader").fadeOut(600);*/
        
		
        /*aca*/
        $(".cvitae-main-nav").waypoint({
			element: this,
			handler: function(direction) {
				if( direction == 'down' ){
					$(".cvitae-menu-wrapper").addClass("sticky");
					$(".cvitae-main-nav").css({
						width: $(".cvitae-site-container").width()
					});
				} else {
					$(".cvitae-menu-wrapper").removeClass("sticky");
					$(".cvitae-main-nav").css({
						width: "100%"
					});
				}
			},
			offset: '-150'
		});
    });
	$('.preloader-overlay').fadeOut("slow", function() {
			$(this).remove();
		});
	/* Top Menu */
	$('#navigation ul li a').on('click', function(){
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		$('body,html').stop().animate({
			scrollTop: h - 70
		}, 800);
		$(".navbar-collapse").collapse("hide");

		return false;
	});
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 100) {
            /*$(".cvitae-menu-wrapper").addClass("sticky");*/
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
            /*$(".cvitae-menu-wrapper").removeClass("sticky");*/
		}
	});
    
	$('.mobile-site-menu').on('click', function() {
		$('.cvitae-mobile-navigation').toggleClass('active');
	});

	$('.cvitae-mobile-nav a').on('click', function() {
		$('.cvitae-mobile-navigation').removeClass('active');
	});
    
    
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:''});
	
	/* Accordion panel */	
	function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);
	
	/*OwlCarousels Testimonial Start*/
	$('#testimonial-slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 10,
		responsiveClass: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,
	});
	
})(jQuery);