$(document).ready(function () {
    $(".plusfilters").toggle();
    $(".mobileMap").hide();
    $("#showlist").addClass("naranja");

    $("#showhidde").click(function () {
        $(".plusfilters").toggle();
    });

    $("#showmap").click(function () {
        $(".mobileMap").show();
        $(".location").hide();
        $("#showmap").addClass("naranja");
        $("#showlist").removeClass("naranja");
    });

    $("#showlist").click(function () {
        $(".mobileMap").hide();
        $(".location").show();
        $("#showlist").addClass("naranja");
        $("#showmap").removeClass("naranja");
    });

});
