$(function(){
    $("body").fadeIn(300); 
   
/*------menu slide starts---*/ $(".nav>ul>li").on("mouseover",function(){$(this).children(".submenu").stop().slideDown();
    })
     $(".nav>ul>li").on("mouseleave",function(){
        $(this).children(".submenu").stop().slideUp();
    });
  
/*------slide starts---*/    
    
    var num=0;
    var end=2;
    
    function start(){
       $("#imgSlide").children().eq(0).siblings().css("margin-left","-3000px");
        setInterval(function(){slide();},5000);
        
    }
    
    function slide(){
            if(num==end) {
                num=0;
            } else {
                num++;
            }
        $("#imgSlide").children().eq(num-1).css("margin-left","-3000px");
        $("#imgSlide").children().eq(num).css("margin-left","0");
    }
    start();
    
})