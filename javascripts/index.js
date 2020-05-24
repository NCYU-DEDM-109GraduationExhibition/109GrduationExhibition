$(document).ready(function () {
    var AllWidth = document.body.clientWidth; 
    if(AllWidth>481){
        $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 550,
        itemMargin: 5,
        touch: true
        });
    }else if(AllWidth<=481){
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 350,
            itemMargin: 5,
            touch: true
            });
    }

});

