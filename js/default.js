/**
 * Created by Sean Yu on 6 Feb 2016.
 */

$(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    linkElement: 'header a',
    inDuration: 1000,
    outDuration: 500
});

/*$('.navbar').sticky({
    getWidthFrom: '.container',
    responsiveWidth: true
});*/

$("#banner-carousel").owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,

});
$(".owl-item").each( function(index, element) {
    if(index == 0) {
        $(element).css({
            "background": "url(./images/shoppr-banner.jpg) no-repeat fixed center center",
            "background-size" : "cover",
            "box-shadow": "rgba(0,0,0,.4) 3px 5px 5px"
        });
    } else {
        $(element).css({
            "background": "url(./images/muvr-banner.jpg) no-repeat center",
            "background-size" : "cover",
            "box-shadow": "rgba(0,0,0,.4) 3px 5px 5px"
        });
    }
});
/* var backgroundHeight = $(".owl-item").css("height");
 $(".tint").each(function(index, element) {
 $(element).css({
 "height" : backgroundHeight
 });

 }); */
$(".navbar").sticky({});
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