(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
    
    var width = $(window).width();
    $(window).on('resize', function(){
        if($(this).width() != width){
            width = $(this).width();
            responsiveChanges();
        }
    });
    
    /*window.onresize = function(event) {
        event.preventDefault();
        responsiveChanges();
    }*/
    
    $(function () {
        responsiveChanges();
    })
    
})(jQuery); // End of use strict

$(function () {
        $('[data-toggle="tooltip"]').tooltip()
    
        $('#collapseOneBtn').click(function() {
            if (window.innerWidth < 992){
                hideAll();
                $('#collapseOne').collapse('toggle');
            }
          });
        
        $('#collapseTwoBtn').click(function() {
            if (window.innerWidth < 992) {
                hideAll();
                $('#collapseTwo').collapse('toggle');
            }
          });
        
        $('#collapseThreeBtn').click(function() {
            if (window.innerWidth < 992) {
                hideAll();
                $('#collapseThree').collapse('toggle');
            }
          });
    
        $('#collapseFourBtn').click(function() {
            if (window.innerWidth < 992) {
                hideAll();
                $('#collapseFour').collapse('toggle');
            }
          });
    
        $('#collapseFiveBtn').click(function() {
            if (window.innerWidth < 992) {
                hideAll();
                $('#collapseFive').collapse('toggle');
            }
          });
    })


function responsiveChanges() {
    
    if (window.innerWidth >= 992) {   
        showAll();
    }
    else {    
        hideAll();
    }
}

function hideAll() {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    $('#collapseFive').collapse('hide');
}

function showAll() {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('show');
    $('#collapseFour').collapse('show');
    $('#collapseFive').collapse('show');
}
