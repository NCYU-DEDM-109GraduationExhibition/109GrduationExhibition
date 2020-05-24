$(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0)
        $(".explore,.navbar").addClass("at_top");
    else
        $(".explore,.navbar").removeClass("at_top");
});


$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 5000,
        itemMargin: 5
    });
});