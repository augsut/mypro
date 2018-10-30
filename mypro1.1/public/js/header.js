$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    // $(`<link rel="stylesheet" href="css/booku_details.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header");
            if(location.pathname != "/booku.html"){
                $("nav>ul.nav>li.my_nav_color>.detail_nav").css("display","none");
                $("nav>ul.nav>li.my_nav_color").hover(function(){
                    $("nav>ul.nav>li.my_nav_color>.detail_nav").toggle()
                })
            }else{
                $("nav>ul.nav>li.my_nav_color>.detail_nav").css("display","block");
            }
            $(".my_dropdown").hover(function(){
                $(".my_dropdown>ul.my_dropdown-menu").toggle();
            });

        //注册页面的头部部分隐藏
            var a = location.pathname;
            if(location.pathname == "/register.html" ||location.pathname=="/shoppingcar.html"){
                $(".container>.row.mt-5.header_scroll").css("display","none");
                $(".container>nav").css("display","none");
                $(".crousle_outer").hide()

            }else{
                console.log(2222,a)
                console.log($(".container>.row.mt-5.header_scroll"))
                console.log(a)
            }


        }
    })
})