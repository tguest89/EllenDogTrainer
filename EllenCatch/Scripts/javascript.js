$(document).ready(function () {

    
    /* Carousel */
    $("#mainCarousel").carousel({ interval: 3500 });

    $(".item1").click(function () {
        $("#mainCarousel").carousel(0);
    });

    $(".item2").click(function () {
        $("#mainCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#mainCarousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#mainCarousel").carousel(3);
    });


    /* Left and Right carousel navigation*/
    $(".left").click(function () {
        $("mainCarousel").carousel("forrige");
    });

    $(".right").click(function () {
        $("mainCarousel").carousel("neste");
    });


    /* Sticky Navbar */
    $(function () {
        $(window).scroll(function () {

            var navbarHeight = $(".navbar-wrapper").height($(".navbar").height());

            $(".navbar").affix({
                offset: { top: $(".navbar").offset().top }
            });


            /*
            console.log(headerHeight);
            if ($(this).scrollTop() >= headerHeight) {
                $(".navbar-default").addClass("navbar-fixed-top");
                /*$("body").addClass("body-padding");*//*
        } else if ($(this).scrollTop() < headerHeight) {
            $(".navbar-default").removeClass("navbar-fixed-top");
            /*$("body").removeClass("body-padding");*/
            /*}*/
        });
    });


    /* Additional Section text */

    $("#moreAdferdskonsultasjon").click(function () {
        $("#additionalAdferdskonsultasjon").toggle(500);
    });


});