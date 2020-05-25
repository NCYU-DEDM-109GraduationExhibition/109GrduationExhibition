
    $(function(){
        $(".nav-link").css("color","white")
        $(".Team").hover(function(){
            $(".Team").css("color","black")
        },function(){
            $(".Team").css("color","white")
        })
        $(".Works").hover(function(){
            $(".Works").css("color","black")
        },function(){
            $(".Works").css("color","white")
        })
        $(".Home").hover(function(){
            $(".Home").css("color","black")
        },function(){
            $(".Home").css("color","white")
        })
        var AllWidth = document.body.clientWidth;
    
        if(AllWidth>=481){
            $("html").addClass("noscroll");
            $("html").addClass("fixWindow"); 
            for (var i=0;i<=7;i++){
                $(".barCube1").append($("<div class='graybar1'></div>"))
            }
            for(var d=0;d<5*5;d++){
                $(".dotCube1").append($("<div class='graydot1'></div>"))
            }
            for(var d=0;d<5*5;d++){
                $(".dotCube2").append($("<div class='graydot2'></div>"))
            }
            for(var d=0;d<5*5;d++){
                $(".dotCube3").append($("<div class='graydot3'></div>"))
            }
        
            for(var d=0;d<5*5;d++){
                $(".dotCube4").append($("<div class='graydot4'></div>"))
            }
            for (var i=0;i<=7;i++){
                $(".barCube2").append($("<div class='graybar2'></div>"))
            }
            //section#section_banner
            for(var d=0;d<5*5;d++){
                $(".dotCube5").append($("<div class='graydot5'></div>"))
            }
            
            for(var d=0;d<5*5;d++){
                $(".dotCube7").append($("<div class='graydot7'></div>"))
            }

            for(var d=0;d<5*5;d++){
                $(".dotCube9").append($("<div class='graydot9'></div>"))
            }
    
            for(var d=0;d<5*5;d++){
                $(".dotCube10").append($("<div class='graydot10'></div>"))
            }
            for(var d=0;d<5*5;d++){
                $(".dotCube11").append($("<div class='graydot11'></div>"))
            }
    
            for(var d=0;d<5*5;d++){
                $(".dotCube12").append($("<div class='graydot12'></div>"))
            }
    
            
            for(var d=0;d<5*5;d++){
                $(".dotCube13").append($("<div class='graydot13'></div>"))
            }
    
            for(var d=0;d<5*5;d++){
                $(".dotCube14").append($("<div class='graydot14'></div>"))
            }
    
            for(var d=0;d<5*5;d++){
                $(".dotCube15").append($("<div class='graydot15'></div>"))
            }
    
            for (var i=0;i<=7;i++){
                $(".barCube3").append($("<div class='graybar3'></div>"))
            }
    
            for (var i=0;i<=7;i++){
                $(".barCube4").append($("<div class='graybar4'></div>"))
            }
            
            for (var i=0;i<=7;i++){
                $(".barCube5").append($("<div class='graybar5'></div>"))
            }
    
            for (var i=0;i<=7;i++){
                $(".barCube6").append($("<div class='graybar6'></div>"))
            }

            for(var d=0;d<5*5;d++){

                $(".dotCube6").append($("<div class='graydot6'></div>"))
            }

            for(var d=0;d<5*5;d++){
                $(".dotCube8").append($("<div class='graydot8'></div>"))
            }
        }
        //ready手機
        if(AllWidth<=481){
            $("html").removeClass("noscroll");
            $("html").removeClass("fixWindow"); 
            for (var i=0;i<=7;i++){
                $(".barCube3").append($("<div class='graybar3'></div>"))
            }
            for(var d=0;d<5*5;d++){
                $(".dotCube5").append($("<div class='graydot5'></div>"))
            }
            for(var d=0;d<4*4;d++){
                $(".dotCube6").append($("<div class='graydot6'></div>"))
            }
            for(var d=0;d<5*5;d++){
                $(".dotCube7").append($("<div class='graydot7'></div>"))
            }
            for(var d=0;d<4*4;d++){
                $(".dotCube8").append($("<div class='graydot8'></div>"))
            }
            for(var d=0;d<5*5;d++){
                $(".dotCube10").append($("<div class='graydot10'></div>"))
            }
            for (var i=0;i<=7;i++){
                $(".barCube4").append($("<div class='graybar4'></div>"))
            }
            for (var i=0;i<=7;i++){
                $(".barCube5").append($("<div class='graybar5'></div>"))
            }
        }
        //讓bannar caontainer隨著圖片大小變動ooooooooooooooooooooooooo
        if(AllWidth>=481){
            var bannerContainer = document.getElementById('redBG');
            bannerContainerHeight = bannerContainer.clientHeight;
            let adjust = -1.0;
            $("#container-fluid1").css("height",bannerContainerHeight+adjust+"px");   
        }
        // ------------------------------RWD-------------------------
        var MyWidth = document.body.clientWidth; 
        if( MyWidth<=481){
            // $("#section_banner").remove();
            $(".navbar").addClass("fixed-top");
            $(".navbar").css("opacity","1");
            $(".explore").css("top","88%");
            // $(".barCube3").remove();
            // $(".blueDot").remove();
            // $(".blueDotSV").remove();
            // $(".designText").remove();
            // $(".blueEye").remove();
            // $(".redBar").remove();
            // $(".redBarSV").remove();
            // $(".redEye").remove();
            // $(".redEyeSV").remove();
            $(".zeroTemp").remove();
            $(".zeroTemp2").remove();
            $(".redBG").remove();
            // $(".designText2").remove();
            $(".whiteBar").remove();
            $(".whiteBarSV").remove();
            $(".blueBG").remove();
            $(".whiteBar2").remove();
            $(".whiteBar2SV").remove();
            $(".dotCube1").remove();
            $(".dotCube2").remove();
            $(".dotCube3").remove();
            $(".dotCube4").remove();
            $(".blueEye").remove();
            $(".blueEyeSV").remove();
            $(".Camera").remove();
            $("#designBG").attr("src","./images/TitleCell.png");
            $("#dedmBG").attr("src","./images/dedmTextCell.png");
            $("#section_click").prepend("<img class='CameraCell' id='Camera' src='./images/CameraCell.png' alt=''/>")
            $("#section_click").prepend("<div class='barCube7' id='barCube7'>")
            for (var i=0;i<=7;i++){
                $(".barCube7").append($("<div class='graybar7'></div>"))
            }
            $("#section_click").prepend("<div class='dotCube20' id='barCube20'>")
            for (var i=0;i<5*5;i++){
                $(".dotCube20").append($("<div class='graydot20'></div>"))
            }

            $("#section_click").prepend("<div class='dotCube21' id='barCube21'>")
            for (var i=0;i<5*5;i++){
                $(".dotCube21").append($("<div class='graydot21'></div>"))
            }

            $("#section_click").prepend("<div class='dotCube22' id='barCube22'>")
            for (var i=0;i<5*5;i++){
                $(".dotCube22").append($("<div class='graydot22'></div>"))
            }

            $("#section_click").prepend("<div class='dotCube23' id='barCube23'>")
            for (var i=0;i<5*5;i++){
                $(".dotCube23").append($("<div class='graydot23'></div>"))
            }
            $("#Camera").attr("src","./images/CameraCell.png");
        }
        
// -------------------------------------測試用-------------------------
var AllWidth = document.body.clientWidth; 
    if(AllWidth>=481){
                // 讓bannar caontainer隨著圖片大小變動ooooooooooooooooooooooooo
                var bannerContainer = document.getElementById('redBG');
                bannerContainerHeight = bannerContainer.clientHeight;
                let adjust = -1.0;
                $("#container-fluid1").css("height",bannerContainerHeight+adjust+"px");
                // $("#section_slide").css("height",bannerContainerHeight+adjust+"px");
                // $("#section_click").css("height",bannerContainerHeight+adjust+"px");
            }
    if(AllWidth<=481){
            $(".navbar").addClass("fixed-top");
            // $(".barCube3").remove();
            // $(".blueDot").remove();
            // $(".blueDotSV").remove();
            // $(".designText").remove();
            // $(".blueEye").remove();
            // $(".redBar").remove();
            // $(".redBarSV").remove();
            // $(".redEye").remove();
            // $(".redEyeSV").remove();
            $(".zeroTemp").remove();
            $(".zeroTemp2").remove();
            $(".redBG").remove();
            // $(".designText2").remove();
            $(".whiteBar").remove();
            $(".whiteBarSV").remove();
            $(".blueBG").remove();
            $(".whiteBar2").remove();
            $(".whiteBar2SV").remove();
            $(".dotCube1").remove();
            $(".dotCube2").remove();
            $(".dotCube3").remove();
            $(".dotCube4").remove();
            $(".blueEye").remove();
            $(".blueEyeSV").remove();
            $(".Camera").remove();
    }
    if(AllWidth>=481){

        // document.getElementById("redBG").addEventListener("transitionend", rmlock);
        // function rmlock(){
        //     $("html").removeClass("noscroll");
        //     $("html").removeClass("fixWindow"); 
        // }

        // var lock = setInterval(function(){
        //     $("html").removeClass("noscroll");
        //     $("html").removeClass("fixWindow"); 
        // },5500)

            // --------------------網頁動畫--------------------//
            var CubeFadeIn = setInterval(function(){
                $(".barCube1>.graybar1").css("animation-name","fadeIn");
                $(".dotCube1>.graydot1").css("animation-name","fadeIn");
                $(".dotCube4>.graydot4").css("animation-name","fadeIn");
                $(".barCube2>.graybar2").css("animation-name","fadeIn");   
                clearInterval(CubeFadeIn);
            },500)
            var TextFadeIn = setInterval(function(){
                $(".designText").css("animation-name","textFade");
                $(".zeroTemp").css("animation-name","textFade");
                clearInterval(TextFadeIn);
            },1000)
            var CubeFadeIn2 = setInterval(function(){
                $(".graydot2").css("animation-name","fadeIn2");
                $(".graydot3").css("animation-name","fadeIn2");
            },1500)
            
            var BlueEyeMove = setInterval(function(){
                // margin-left: 13% margin-top: 37.5% //blueEye
                // margin-left: 13.8% margin-top: 38% //blueEyeSV
                let changeY = 37.5 + "%";
                let SVchangeY = 38 + "%";
                $(".blueEye").animate({
                    marginTop: changeY
            },1000,"easeOutQuart");
            
                $(".blueEyeSV").animate({
                    marginTop: SVchangeY
                },1000,"easeOutQuart")
                clearInterval(BlueEyeMove);
            },2000)
            
            var RedEyeMove = setInterval(function(){
               // margin-left: 63% margin-top: -1% //.redEye
                // margin-left: 64% margin-top: -0.1% //.redEyeSV
                let changeY = -1 + "%";
                let SVchangeY = -0.1 + "%";
                $(".redEye").animate({
                    marginTop: changeY
                },1000,"easeOutQuart");
            
                $(".redEyeSV").animate({
                    marginTop: SVchangeY
                },1000,"easeOutQuart")
                clearInterval(RedEyeMove);
            },2000)
            
            var blueDotMove = setInterval(function(){
                let changeX = 42+"%";//+6
                let changeY = 9+"%";//-29
                let SVchangeX = 42+"%";
                let SVchangeY = 9.3+ "%";
                $(".blueDot").animate({
                    marginTop: changeY , 
                    marginLeft: changeX,
                },1000,"easeOutQuart");
            
                $(".blueDotSV").animate({
                    marginTop: SVchangeY,
                    marginLeft: SVchangeX
                },1000,"easeOutQuart")
                clearInterval(blueDotMove);
            },2650)
            
            var whiteBarMove = setInterval(function(){
                let changeX = 40.2+"%";//+6
                let changeY = 12.8+"%";//-29
                let SVchangeX = 40.6+"%";
                let SVchangeY = 13.2+ "%";
                $(".whiteBar").animate({
                    marginTop: changeY , 
                    marginLeft: changeX,
                },1000,"easeOutQuart");
            
                $(".whiteBarSV").animate({
                    marginTop: SVchangeY,
                    marginLeft: SVchangeX
                },1000,"easeOutQuart")
                clearInterval(whiteBarMove);
            },2500)
            
            var whiteBar2Move = setInterval(function(){
                let changeX = 55+"%";//+6
                let changeY = 40+"%";//-29
                let SVchangeX = 55.5+"%";
                let SVchangeY = 40.5+ "%";
                $(".whiteBar2").animate({
                    marginTop: changeY , 
                    marginLeft: changeX,
                },1000,"easeOutQuart");
            
                $(".whiteBar2SV").animate({
                    marginTop: SVchangeY,
                    marginLeft: SVchangeX
                },1000,"easeOutQuart")
                clearInterval(whiteBar2Move);
            },2500)
            
            var RedBarMove = setInterval(function(){
                let changeX = 53.5+"%";//+6
                let changeY = 19+"%";//-29
                let SVchangeX = 54+"%";
                let SVchangeY = 19.5+ "%";
                $(".redBar").animate({
                    marginTop: changeY , 
                    marginLeft: changeX,
                },1000,"easeOutQuart");
            
                $(".redBarSV").animate({
                    marginTop: SVchangeY,
                    marginLeft: SVchangeX
                },1000,"easeOutQuart")
                clearInterval(RedBarMove);
            },2500)
            
            var toLeft = setInterval(function(){
                let change = 100+"vw";
                $(".redBG").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                // "easeInOutCubic"
        
                $(".barCube1").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".blueDot").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".blueDotSV").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".whiteBar").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".whiteBarSV").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".dotCube1").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".dotCube2").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".blueEye").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".blueEyeSV").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                $(".designText").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
        
                clearInterval(toLeft);
            },5000)
            
            
            var toRight = setInterval(function(){
                let change = -100+"vw";
                $(".blueBG").animate({
                    left: "-="+change
                },2000,"easeOutQuart",function(){
                    $("html").removeClass("noscroll");
                    $("html").removeClass("fixWindow"); 
                })
                // "easeInOutCubic"
                $(".redBarSV").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".redEye").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".redEyeSV").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".dotCube3").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".zeroTemp").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".dotCube4").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".barCube2").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".whiteBar2").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".whiteBar2SV").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                $(".redBar").animate({
                    left: "-="+change
                },2000,"easeOutQuart")
                clearInterval(toRight);
            },5000)
            // var clearLcok = setInterval(function(){
            //     if ($(document).height() > $(window).height()) {
            //         $("html").removeClass("noscroll");
            //     }else{
            //         $("html").removeClass("fixWindow");
            //     }
            // },5500)
            $(".nav-link").css("color","white");
            var NavBar = setInterval(function(){
                $(".navbar").css("opacity","1");
            },5500)
            $('.flexslider').flexslider({
                animation: "slide",
                animationLoop: false,
                itemWidth: 800,
                itemMargin: 5,
                touch: true
            });
    }
// -------------------------------------測試用-------------------------
    }
    )


// window.onload=function(){
//     var AllWidth = document.body.clientWidth; 
//     if(AllWidth>=481){
//                 // 讓bannar caontainer隨著圖片大小變動ooooooooooooooooooooooooo
//                 var bannerContainer = document.getElementById('redBG');
//                 bannerContainerHeight = bannerContainer.clientHeight;
//                 let adjust = -1.0;
//                 $("#container-fluid1").css("height",bannerContainerHeight+adjust+"px");
//                 // $("#section_slide").css("height",bannerContainerHeight+adjust+"px");
//                 // $("#section_click").css("height",bannerContainerHeight+adjust+"px");
//             }
//     if(AllWidth<=481){
//             $(".navbar").addClass("fixed-top");
//             // $(".barCube3").remove();
//             // $(".blueDot").remove();
//             // $(".blueDotSV").remove();
//             // $(".designText").remove();
//             // $(".blueEye").remove();
//             // $(".redBar").remove();
//             // $(".redBarSV").remove();
//             // $(".redEye").remove();
//             // $(".redEyeSV").remove();
//             $(".zeroTemp").remove();
//             $(".zeroTemp2").remove();
//             $(".redBG").remove();
//             // $(".designText2").remove();
//             $(".whiteBar").remove();
//             $(".whiteBarSV").remove();
//             $(".blueBG").remove();
//             $(".whiteBar2").remove();
//             $(".whiteBar2SV").remove();
//             $(".dotCube1").remove();
//             $(".dotCube2").remove();
//             $(".dotCube3").remove();
//             $(".dotCube4").remove();
//             $(".blueEye").remove();
//             $(".blueEyeSV").remove();
//             $(".Camera").remove();
//     }
//     if(AllWidth>=481){
//         $("html").addClass("noscroll");
//         $("html").addClass("fixWindow"); 
//         // document.getElementById("redBG").addEventListener("transitionend", rmlock);
//         // function rmlock(){
//         //     $("html").removeClass("noscroll");
//         //     $("html").removeClass("fixWindow"); 
//         // }

//         // var lock = setInterval(function(){
//         //     $("html").removeClass("noscroll");
//         //     $("html").removeClass("fixWindow"); 
//         // },5500)

//             // --------------------網頁動畫--------------------//
//             var CubeFadeIn = setInterval(function(){
//                 $(".barCube1>.graybar1").css("animation-name","fadeIn");
//                 $(".dotCube1>.graydot1").css("animation-name","fadeIn");
//                 $(".dotCube4>.graydot4").css("animation-name","fadeIn");
//                 $(".barCube2>.graybar2").css("animation-name","fadeIn");   
//                 clearInterval(CubeFadeIn);
//             },500)
//             var TextFadeIn = setInterval(function(){
//                 $(".designText").css("animation-name","textFade");
//                 $(".zeroTemp").css("animation-name","textFade");
//                 clearInterval(TextFadeIn);
//             },1000)
//             var CubeFadeIn2 = setInterval(function(){
//                 $(".graydot2").css("animation-name","fadeIn2");
//                 $(".graydot3").css("animation-name","fadeIn2");
//             },1500)
            
//             var BlueEyeMove = setInterval(function(){
//                 // margin-left: 13% margin-top: 37.5% //blueEye
//                 // margin-left: 13.8% margin-top: 38% //blueEyeSV
//                 let changeY = 37.5 + "%";
//                 let SVchangeY = 38 + "%";
//                 $(".blueEye").animate({
//                     marginTop: changeY
//             },1000,"easeOutQuart");
            
//                 $(".blueEyeSV").animate({
//                     marginTop: SVchangeY
//                 },1000,"easeOutQuart")
//                 clearInterval(BlueEyeMove);
//             },2000)
            
//             var RedEyeMove = setInterval(function(){
//                // margin-left: 63% margin-top: -1% //.redEye
//                 // margin-left: 64% margin-top: -0.1% //.redEyeSV
//                 let changeY = -1 + "%";
//                 let SVchangeY = -0.1 + "%";
//                 $(".redEye").animate({
//                     marginTop: changeY
//                 },1000,"easeOutQuart");
            
//                 $(".redEyeSV").animate({
//                     marginTop: SVchangeY
//                 },1000,"easeOutQuart")
//                 clearInterval(RedEyeMove);
//             },2000)
            
//             var blueDotMove = setInterval(function(){
//                 let changeX = 42+"%";//+6
//                 let changeY = 9+"%";//-29
//                 let SVchangeX = 42+"%";
//                 let SVchangeY = 9.3+ "%";
//                 $(".blueDot").animate({
//                     marginTop: changeY , 
//                     marginLeft: changeX,
//                 },1000,"easeOutQuart");
            
//                 $(".blueDotSV").animate({
//                     marginTop: SVchangeY,
//                     marginLeft: SVchangeX
//                 },1000,"easeOutQuart")
//                 clearInterval(blueDotMove);
//             },2650)
            
//             var whiteBarMove = setInterval(function(){
//                 let changeX = 40.2+"%";//+6
//                 let changeY = 12.8+"%";//-29
//                 let SVchangeX = 40.6+"%";
//                 let SVchangeY = 13.2+ "%";
//                 $(".whiteBar").animate({
//                     marginTop: changeY , 
//                     marginLeft: changeX,
//                 },1000,"easeOutQuart");
            
//                 $(".whiteBarSV").animate({
//                     marginTop: SVchangeY,
//                     marginLeft: SVchangeX
//                 },1000,"easeOutQuart")
//                 clearInterval(whiteBarMove);
//             },2500)
            
//             var whiteBar2Move = setInterval(function(){
//                 let changeX = 55+"%";//+6
//                 let changeY = 40+"%";//-29
//                 let SVchangeX = 55.5+"%";
//                 let SVchangeY = 40.5+ "%";
//                 $(".whiteBar2").animate({
//                     marginTop: changeY , 
//                     marginLeft: changeX,
//                 },1000,"easeOutQuart");
            
//                 $(".whiteBar2SV").animate({
//                     marginTop: SVchangeY,
//                     marginLeft: SVchangeX
//                 },1000,"easeOutQuart")
//                 clearInterval(whiteBar2Move);
//             },2500)
            
//             var RedBarMove = setInterval(function(){
//                 let changeX = 53.5+"%";//+6
//                 let changeY = 19+"%";//-29
//                 let SVchangeX = 54+"%";
//                 let SVchangeY = 19.5+ "%";
//                 $(".redBar").animate({
//                     marginTop: changeY , 
//                     marginLeft: changeX,
//                 },1000,"easeOutQuart");
            
//                 $(".redBarSV").animate({
//                     marginTop: SVchangeY,
//                     marginLeft: SVchangeX
//                 },1000,"easeOutQuart")
//                 clearInterval(RedBarMove);
//             },2500)
            
//             var toLeft = setInterval(function(){
//                 let change = 100+"vw";
//                 $(".redBG").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 // "easeInOutCubic"
        
//                 $(".barCube1").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".blueDot").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".blueDotSV").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".whiteBar").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".whiteBarSV").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".dotCube1").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".dotCube2").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".blueEye").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".blueEyeSV").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 $(".designText").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
        
//                 clearInterval(toLeft);
//             },5000)
            
            
//             var toRight = setInterval(function(){
//                 let change = -100+"vw";
//                 $(".blueBG").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart",function(){
//                     $("html").removeClass("noscroll");
//                     $("html").removeClass("fixWindow"); 
//                 })
//                 // "easeInOutCubic"
//                 $(".redBarSV").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".redEye").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".redEyeSV").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".dotCube3").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".zeroTemp").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".dotCube4").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".barCube2").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".whiteBar2").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".whiteBar2SV").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 $(".redBar").animate({
//                     left: "-="+change
//                 },2000,"easeOutQuart")
//                 clearInterval(toRight);
//             },5000)
//             // var clearLcok = setInterval(function(){
//             //     if ($(document).height() > $(window).height()) {
//             //         $("html").removeClass("noscroll");
//             //     }else{
//             //         $("html").removeClass("fixWindow");
//             //     }
//             // },5500)
//             $(".nav-link").css("color","white");
//             var NavBar = setInterval(function(){
//                 $(".navbar").css("opacity","1");
//             },5500)
//             $('.flexslider').flexslider({
//                 animation: "slide",
//                 animationLoop: false,
//                 itemWidth: 800,
//                 itemMargin: 5,
//                 touch: true
//             });
//     }

// }


$(window).scroll(function (e) {
    // var AllWidth = document.body.clientWidth; 
    if ($(window).scrollTop() <= 0){
        $(".explore").addClass("at_top");
        $(".navbar").addClass("fixed-top");
        $(".navbar").css("opacity","1");
        $(".explore").css("top","88%");
        // if(AllWidth<=481){
        //     $(".designText2").css("margin-top","125%");
        // }
        
    }
    else if($(window).scrollTop() > 0){        
        $(".explore").removeClass("at_top");
        $(".navbar").addClass("fixed-top");
        $(".explore").css("top","88%");
        // if(AllWidth<=481){
        //     $(".designText2").css("margin-top","140.5%");
        // }
    }

});


$(window).resize(function(){
    var AllWidth = document.body.clientWidth; 
    if(AllWidth>=481){        // 讓bannar caontainer隨著圖片大小變動00000000000000000000000000000
        // window.location.reload(" index.htnl ")
        var bannerContainer = document.getElementById('redBG');
        bannerContainerHeight = bannerContainer.clientHeight;
        let adjust = -1.0;
        $("#container-fluid1").css("height",bannerContainerHeight+adjust+"px");
        ;}
        if(AllWidth<=481){
            $("html").removeClass("noscroll");
            $("html").removeClass("fixWindow"); 
            // $(".barCube3").remove();
            // $(".blueDot").remove();
            // $(".blueDotSV").remove();
            // $(".designText").remove();
            // $(".blueEye").remove();
            // $(".redBar").remove();
            // $(".redBarSV").remove();
            // $(".redEye").remove();
            // $(".redEyeSV").remove();
            $(".zeroTemp").remove();
            $(".zeroTemp2").remove();
            $(".redBG").remove();
            // $(".designText2").remove();
            $(".whiteBar").remove();
            $(".whiteBarSV").remove();
            $(".blueBG").remove();
            $(".whiteBar2").remove();
            $(".whiteBar2SV").remove();
            $(".dotCube1").remove();
            $(".dotCube2").remove();
            $(".dotCube3").remove();
            $(".dotCube4").remove();
            $(".blueEye").remove();
            $(".blueEyeSV").remove();
            $(".Camera").remove();
    }
    }
)