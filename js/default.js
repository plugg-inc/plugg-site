/**
 * Created by Sean Yu on 6 Feb 2016.
 */
//fadeIn animation of website
$(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    linkElement: 'header a',
    inDuration: 1000,
    outDuration: 500
});
//Carousel Activate
$("#banner-carousel").owlCarousel({
    singleItem : true,
    autoPlay : 7000,
    scrollPerPage :true,
    slideSpeed : 600,
    navigation : true,
    stopOnHover : true
});


//Carousel Background
$(".owl-item").each( function(index, element) {
    if(index == 0) {
        $(element).css({
            "background": "url(./images/shoppr-banner.jpg) no-repeat fixed center center",
            "background-size" : "cover",
            "box-shadow": "rgba(0,0,0,.4) 3px 5px 5px"
        });
    } else if(index == 1) {
        $(element).css({
            "background": "url(./images/muvr-banner.jpg) no-repeat center",
            "background-size" : "cover",
            "box-shadow": "rgba(0,0,0,.4) 3px 5px 5px"
        });
    }
});

//Resizing and adjusting of navBar when scrolled Down
$(".navbar").sticky({
    getWidthFrom: '.animsition',
    responsiveWidth: true
});
$(".navbar").on('sticky-start', function(){
    $("#navbar-logo").css("width", 85).attr('src', 'images/logo-white.png');
    $(".navbar-default .navbar-nav>li>a").css('font-size','12px');
    $(".navbar-default .navbar-nav>li>div>button").css('font-size','12px');
});
$(".navbar").on('sticky-end', function(){
    $("#navbar-logo").css("width", 147);
    $("#navbar-logo").attr('src', 'images/logo.png');
    $(".navbar-default .navbar-nav>li>a").css('font-size','14px');
    $(".navbar-default .navbar-nav>li>div>button").css('font-size','14px');
});

//fade-in-right
$(".how-it-works-container").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-right',
    inDuration: 1500,
    outDuration: 800
});

//On-click feature for how-it-works-section
$("#how-it-works-muvr-list").find('li').css('display', 'none');
var delayTimeFadeIn = 450; //ms
$("#how-it-works-muvr").on('click', function(){
    $("#how-it-works-muvr").css({
        "background" : "#516880",
        "color": "white"
    });
    $("#how-it-works-shoppr").css({
        "background" : "transparent",
        "color": "#516880"
    });
    $("#how-it-works-shoppr-list").find("li").fadeOut();
    $("#how-it-works-muvr-list").delay(250).show();
    $("#how-it-works-muvr-list").find('li').delay(delayTimeFadeIn).fadeIn();

});
$("#how-it-works-shoppr").on('click', function(){
    $("#how-it-works-shoppr").css({
        "background" : "#516880",
        "color": "white"
    });
    $("#how-it-works-muvr").css({
        "background" : "transparent",
        "color": "#516880"
    });
    $("#how-it-works-muvr-list").find('li').hide();
    $("#how-it-works-muvr-list").hide();
    $("#how-it-works-shoppr-list").find("li").delay(delayTimeFadeIn).fadeIn();

});
$(document).ready(function() {
    $(".top-link a").on("click", function(e) {
        e.preventDefault();
        var targetPage = $(this).attr("href");
        $(window).scrollTo(targetPage, 100);

    });
    $(".indexheader a").on("click", function(e) {
        e.preventDefault();
        var targetPage = $(this).attr("href");
        $(window).scrollTo(targetPage, 300);

    });

});

