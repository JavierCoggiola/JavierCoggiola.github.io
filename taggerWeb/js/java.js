
$(document).ready(function () {
    $('.carousel').carousel('next');
    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });


    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#miBarra',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#miBarra").offset().top > 50) {

            $("#miBarra").addClass("navbar-shrink");

            $("#miBarra").addClass("navbarColor2");
            $("#miBarra").removeClass("navbarColor1");

            //$("#milogo").removeClass("brandlogoSacar");
            //$("#milogo").addClass("brandlogoMostrar");
            //$("#milogo").addClass("brandlogoMovil");

        } else {
            $("#miBarra").removeClass("navbar-shrink");

            $("#miBarra").addClass("navbarColor1");
            $("#miBarra").removeClass("navbarColor2");

            //$("#milogo").addClass("brandlogoSacar");
            //$("#milogo").removeClass("brandlogoMostrar");
            //$("#milogo").addClass("brandlogoMovil");
        }


    };



    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    })
})

$("a[href^='#']").click(function(e) {
e.preventDefault();

var position = $($(this).attr("href")).offset().top;

$("body, html").animate({
scrollTop: position
} /* speed */ );
});
