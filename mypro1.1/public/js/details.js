$(function(){
    $(`<link rel="stylesheet" href="css/booku_details.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header");
            if(location.pathname!="/mypro1/mypro/public/booku.html"){
                $("nav>ul.nav>li.my_nav_color>.detail_nav").css("display","none");
                $("nav>ul.nav>li.my_nav_color").hover(function(){
                    $("nav>ul.nav>li.my_nav_color>.detail_nav").toggle()
                })
            }
        }
    })
})