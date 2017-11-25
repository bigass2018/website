$(function(){ 
  
    var now=0;
    var imgs=2;
    function start(){
       
        setInterval(function(){slide();},5000);
    }
    
    function slide(){
        now=now==imgs?0:now+=1;
        $(".img_slide img").eq(now-1).css("margin-left","-2000px");
        $(".img_slide img").eq(now).css("margin-left","0px");
        
    } 
   
    
    start();
    
     $("body").fadeIn(300);
});