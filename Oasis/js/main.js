jQuery(document).ready(function() {

	'use strict';

	/************************************
	 * Preloader
	 ************************************/

	jQuery(window).on('load', function() {
		jQuery('.preloader-overlay').fadeOut("slow", function() {
			jQuery(this).remove();
		});
	});


	/************************************
	 * Slider
	 ************************************/

	jQuery(window).on('load', function() {

		jQuery(".typed-text").typed({
			backDelay: 3000,
			backSpeed: 70,
			contentType: 'text',
			loop: true,
			loopCount: true,
			startDelay: 3000,
			strings: ["I AM PAUL JOHNSON", "I WORK AS A DEVELOPER", "and . . . ", "I LOVE SUSHI  :) "],
			typeSpeed: 100
		});

		jQuery('.slider').addClass('active');

	});

	function init() {
		jQuery('.fullSlider').css("height", jQuery(window).height());
	}
	init();

	jQuery(window).resize(function() {
		init();
	});


	/************************************
	 * Navigation
	 ************************************/

	jQuery('.home .cvitae-main-nav.scroll a').on('click', function(event) {
		var link = this;
		jQuery.smoothScroll({
			easing: 'easeInOutCubic',
			offset: -100,
			scrollTarget: link.hash,
			speed: 800,
		});
		if (!jQuery(this).hasClass('external')) {
			return false;
		}
	});

	jQuery('.home .left-nav a').on('click', function(event) {
		var link = this;
		jQuery.smoothScroll({
			easing: 'easeInOutCubic',
			offset: -80,
			scrollTarget: link.hash,
			speed: 800,
		});
		if (!jQuery(this).hasClass('external')) {
			return false;
		}
	});

	var aChildren = jQuery(".home .cvitae-main-nav.scroll li").children();
	var aArray = [];
	for (var i = 0; i < aChildren.length; i++) {
		var aChild = aChildren[i];
		var ahref = jQuery(aChild).attr('href');
		aArray.push(ahref);
	}

	jQuery(window).scroll(function() {
		var windowPos = jQuery(window).scrollTop();
		var windowHeight = jQuery(window).height();
		var docHeight = jQuery(document).height();

		for (var i = 0; i < aArray.length; i++) {
			var theID = aArray[i];
			if ( ! theID[0] == '#' ) {
				continue;
			}
			var divPos = jQuery(theID).offset().top - 100;
			var divHeight = jQuery(theID).height();
			if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
				jQuery("a[href='" + theID + "']").addClass("active");
			} else {
				jQuery("a[href='" + theID + "']").removeClass("active");
			}
		}

		if (windowPos + windowHeight == docHeight) {
			if (!jQuery("nav li:last-child a").hasClass("active")) {
				var navActiveCurrent = jQuery(".active").attr("href");
				jQuery("a[href='" + navActiveCurrent + "']").removeClass("active");
				jQuery("nav li:last-child a").addClass("active");
			}
		}
	});

	jQuery('.mouse-icon a').on('click', function(event) {
		var link = this;
		jQuery.smoothScroll({
			easing: 'easeInOutCubic',
			offset: -130,
			scrollTarget: link.hash,
			speed: 800
		});
		return false;
	});

	jQuery('.goto-top').on('click', function(event) {
		jQuery('html,body').animate({ scrollTop: 0 }, 800);
		return false;
	});

	jQuery('.goto-bio').on('click', function(event) {
		var link = this;
		jQuery.smoothScroll({
			easing: 'easeInOutCubic',
			offset: -100,
			scrollTarget: link.hash,
			speed: 800
		});
		return false;
	});

	jQuery('.mobile-site-menu').on('click', function() {
		jQuery('.cvitae-mobile-navigation').toggleClass('active');
	});

	jQuery('.cvitae-mobile-nav a').on('click', function() {
		jQuery('.cvitae-mobile-navigation').removeClass('active');
	});
	
	
	jQuery(window).on( 'load', function(){
		
		jQuery("#achievement").parallax( "50%", 0.6 );

		jQuery("#testimonial").parallax( "50%", 0.6 );

		jQuery("#clients").parallax( "50%", 0.6 );
		
		jQuery("nav.cvitae-main-nav").waypoint({
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


	/************************************
	 * CVitae Skills
	 ************************************/

	jQuery(".cvitae-skills").waypoint({
		handler: function(direction) {
			jQuery('.progress-bar').each(function() {
				var width = jQuery(this).data('progress');
				var to = jQuery(this).data('progress')
				jQuery(this).find('.bar').animate({
					width: width + "%"
				}, 5000, "swing");

				jQuery(this).find('.text').animate({
					left: width + "%"
				}, {
					duration: 5000,
					easing: 'swing',
					step: function(count) {
						jQuery(this).text(Math.ceil(count));
					}
				});
			});
		},
		offset: '50%'
	});



	/************************************
	 * CVitae Achievement
	 ************************************/

	jQuery('.achievement-container').owlCarousel({
		autoplay: true,
		loop: true,
		margin: 0,
		nav: true,
		navClass: ['owl-prev waves-effect waves-cvitae', 'owl-next waves-effect waves-cvitae'],
		navSpeed: 1000,
		responsive: {
			0: {
				items: 1
			}
		},
		smartSpeed: 1000
	});

	/************************************
	 * CVitae Portfolio
	 ************************************/

	jQuery(window).on('load', function() {
		jQuery('#cvitae-slider').catslider();
		jQuery(".cvitae-gallery .project").on('click', function(event) {
			event.preventDefault();
			var project = jQuery(this);
			jQuery("#project-title").text(project.data("project-title"));
			jQuery("#project-image").attr("src", project.data("project-image"));
			jQuery("#project-link").attr("href", project.data("project-link"));
			jQuery("#project-detail").text(project.data("project-detail"));
			jQuery(".cvitae-portfolio-popup").addClass("active");
		});
	});

	jQuery('.project-popup-close').on('click', function() {
		jQuery(".cvitae-portfolio-popup").removeClass("active");
	});

	jQuery(document).keyup(function(event) {
		if (event.which == '27') {
			jQuery(".cvitae-portfolio-popup").removeClass("active");
		}
	});

	jQuery('.cvitae-portfolio-popup').on('click', function(e) {
		if (e.target !== this)
			return;
		jQuery(this).removeClass("active");
	});

	/************************************
	 * CVitae Testimonial
	 ************************************/

	jQuery('.testimonial-container').owlCarousel({
		autoplay: true,
		loop: true,
		margin: 0,
		nav: true,
		navClass: ['owl-prev waves-effect waves-cvitae', 'owl-next waves-effect waves-cvitae'],
		navSpeed: 1000,
		responsive: {
			0: {
				items: 1
			}
		},
		smartSpeed: 1000
	});

	/************************************
	 * CVitae Clients
	 ************************************/

	jQuery('.clients-container').owlCarousel({
		autoplay: true,
		loop: true,
		margin: 0,
		nav: true,
		navClass: ['owl-prev waves-effect waves-cvitae', 'owl-next waves-effect waves-cvitae'],
		navSpeed: 1000,
		responsive: {
			1000: {
				items: 3
			},
			767: {
				items: 2
			},
			0: {
				items: 1
			}
		},
		smartSpeed: 1000,
	});

});
