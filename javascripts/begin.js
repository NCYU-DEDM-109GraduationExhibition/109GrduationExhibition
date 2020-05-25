$("html").addClass("noscroll");
$("html").addClass("fixWindow");

$(function(){
    var AllWidth = document.body.clientWidth; 
    if(AllWidth>481){
        $("html").addClass("noscroll");
        $("html").addClass("fixWindow"); 
        }else if(AllWidth<=481){
            $("html").removeClass("noscroll");
            $("html").removeClass("fixWindow");
        }
})