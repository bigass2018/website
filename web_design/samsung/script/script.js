$(function(){
    
            $("body").fadeIn(300);
    
    /*--------------------------*/
    
    var header = $("header");
    var dot_header = $(".header");
    
    var dot_logo1=$(".logo1");
    var dot_logo2=$(".logo2");
    
    var dot_h1=$(".h1");
    var dot_h2=$(".h2");
    var dot_h3=$(".h3");
    
    var dot_mglass_k=$(".mglass_k");
    var dot_mglass=$(".mglass");
    
    /*-------------------*/    
    function onHeader(){
        header.css("background","white");
        dot_header.css("background","white").css("color","#363636");
        
        dot_logo1.css("display","none");
        dot_logo2.css("display","block");
        dot_h1.css("border-color","#070506");
        dot_h2.css("border-color","#070506");
        dot_h3.css("border-color","#070506");
        
        dot_mglass_k.css("display","block");
         dot_mglass.css("display","none");
    }    
        
    function outHeader(){
        
        header.css("background","transparent");
        dot_header.css("background","transparent").css("color","white");
        
        dot_logo1.css("display","block");
        dot_logo2.css("display","none");
         
        dot_h1.css("border-color","white");
        dot_h2.css("border-color","white");
        dot_h3.css("border-color","white");
         
         dot_mglass_k.css("display","none");
         dot_mglass.css("display","block");
    }
    
    /*-----------헤더 함수 저장----------*/
    header.on("mouseover focus",function(){
        onHeader();
    });
    
    
     header.on("mouseout blur",function(){
        outHeader();
    });
    
    /*-----------------header---------*/
    var dot_nav_li=$(".nav>li");
    
    var dot_sub=$(".sub");
    var dot_sub_wrapper=$(".sub_wrapper");
    var dot_nav_li_back=$(".nav_li_back");
    
    dot_nav_li.on("mouseover",function(){
       dot_header.css("border-bottom","1px solid #dadada");  dot_sub.css("display","none");
        $(this).children().eq(1).css("display","block");
        dot_sub_wrapper.css("display","block");
        dot_nav_li_back.css("display","block");
        onHeader();
    });
     
    dot_nav_li.on("mouseout",function(){
       dot_header.css("border-bottom","none"); 
        dot_sub.css("display","none");
        dot_sub_wrapper.css("display","none");
        dot_nav_li_back.css("display","none");
        outHeader();
    });
   
    
    
    $("#x_mark>a").on("click",function(){
       dot_header.css("border-bottom","none"); 
        dot_sub.css("display","none");
        dot_sub_wrapper.css("display","none");
        dot_nav_li_back.css("display","none");
        outHeader();
    });
   
    /*----------------서브메뉴---------------*/
    
    var dot_info3=$(".info3");
    var dot_info3_box=$(".info3_box");
    var dot_info3_box_back=$(".info3_box_back");
    
    dot_info3.on("click touchend",function(){
       dot_info3_box.css("display","block");
       dot_info3_box_back.css("display","block"); 
    });
    
    $(".cross").on("click touchend",function(){
        dot_info3_box.css("display","none");
        dot_info3_box_back.css("display","none"); 
    });
    
    dot_info3_box_back.on("click touchend",function(){
        dot_info3_box.css("display","none"); 
        $(this).css("display","none");
    });
    
    $(".nav>li").on("mouseover",function(){
        dot_info3_box.css("display","none"); 
        dot_info3_box_back.css("display","none"); 
    });
    
    $(".hamburger").on("click touchend",function(){
        dot_info3_box.css("display","none"); 
        dot_info3_box_back.css("display","none"); 
    });
    
    
    /*-------------------검색창-----------------*/
    
   
    
   
    
    /*-------------햄버거메뉴-------------------*/
    
    var dot_hamburger_a=$(".hamburger>a");
    var dot_h_menu=$(".h_menu");
    var id_modal=$("#modal");
    var dot_hs=$(".hs");
    var dot_h_x_mark=$(".h_x_mark");
    var dot_h_x_mark_k=$(".h_x_mark_k");
    var dot_h_x_mark_b=$(".h_x_mark_b");
    var dot_h_x_mark=$(".h_x_mark");
    
    dot_hamburger_a.on("click touchend",function(){
        dot_h_menu.fadeIn(100);
        id_modal.fadeIn(100);
        dot_hs.css("display","none");
        dot_h_x_mark.css("display","block");
        
        dot_h_x_mark.on("mouseover",function(){
            dot_h_x_mark_k.css("display","none");
            dot_h_x_mark_b.css("display","block");
        });
        
        dot_h_x_mark.on("mouseout",function(){
            dot_h_x_mark_k.css("display","block");
            dot_h_x_mark_b.css("display","none");
        });
        
    });
    
    $(".h_x_mark>a").on("click touchend",function(){
        dot_h_menu.fadeOut(100);
        id_modal.fadeOut(100);
         dot_hs.css("display","block");
        dot_h_x_mark.css("display","none");
        
    });
    
    id_modal.on("click",function(){
        dot_h_menu.fadeOut(100);
        id_modal.fadeOut(100);
         dot_hs.css("display","block");
        dot_h_x_mark.css("display","none");
    });
    
    var dot_hamburger_a=$(".hamburger>a");
    var dot_hamburger_icon_k=$(".hamburger_icon_k");
    var dot_hamburger_icon_b=$(".hamburger_icon_b");
        /*---------------------*/
            dot_hamburger_a.on("mouseover touchend",function(){
                 dot_hamburger_icon_k.css("display","none");
                dot_hamburger_icon_b.css("display","block");
            });
    
            dot_hamburger_a.on("mouseout",function(){
                 dot_hamburger_icon_k.css("display","block");
                dot_hamburger_icon_b.css("display","none");
            });
        /*-----------마우스 올림---------*/
    
    
    
    $(".h_menu>li>a").on("click",function(){
        $(this).css("display","none");
       $(this).parent().siblings().css("display","none");
        $(this).siblings().css("display","block");
        
        $(this).siblings().eq(0).children().eq(0).on("click",function(){
           $(this).parent().css("display","none");
         $(this).parent().siblings().css("display","block");
         $(".h_menu>li").css("display","block");
        });
    });
    
    
    
     /*------------------스크롤---------------------*/
    var id_scroll_btn=$("#scroll_btn");
    
     $(".back_to_top,#scroll_btn").on("click",function(){
       $("html, body").animate({scrollTop:0},1000);
        
    });
    
    
    
    
    var winWidth=window.innerWidth;
    
    
    if(winWidth>=769){
       $(window).scroll(function(){
        
       
        
        
        var scrollBottom =$("html").height()-$(this).height()-$(this).scrollTop();
        
       if(scrollBottom<500){id_scroll_btn.css("display","none");}
        else  if($(this).scrollTop()>5){
             id_scroll_btn.css("display","block");
        } else  if($(this).scrollTop()<5){
             id_scroll_btn.css("display","none");
        }
    
    }); 
       } else {
           $(window).scroll(function(){
        
        var scrollBottom =$("html").height()-$(this).height()-$(this).scrollTop();
        
       if(scrollBottom<910){id_scroll_btn.css("display","none");}
        else  if($(this).scrollTop()>5){
             id_scroll_btn.css("display","block");
        } else  if($(this).scrollTop()<5){
             id_scroll_btn.css("display","none");
        }
               
    
    });
           
          
       }
    
    /*---------------------------------------------------*/
    
    
   
    
});

