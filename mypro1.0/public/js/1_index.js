$(function(){
    var timer = setInterval(task,1000);
    function task(){
        var span=$(".timer");
        var end=new Date("2018/10/18 10:29:00");
        var now=new Date();
        var s=parseInt((end-now)/1000);

        if(s>0){
            var d=parseInt(s/3600/24);
            if(d<10) d="0"+d;
            //s/3600/24,再下取整
            var h=parseInt(s%(3600*24)/3600);
            if(h<10) h="0"+h;
            //s/(3600*24)的余数,再/3600,再下去整
            var m=parseInt(s%3600/60);
            if(m<10) m="0"+m;
            //s/3600的余数,再/60，再下取整
            s%=60;//s/60的余数
            if(s<10) s="0"+s;
            //距离下一个假期还有: ?天?小时?分?秒

            span.html(d+"天|"+h+"小时|"+m+"分|"+s+"秒");
            span.css("color","white")

        }else{
            clearInterval(timer);
            timer = null;
            span.innerHTML="抢购结束!!!"
        }
    }
//   排行榜tabs

    $("#tab").click(function(e){
        e.preventDefault();
        if(e.target.nodeName == "A"){
            var $a = $(e.target);
                $a.parent()
                .addClass("active")
                .siblings()
                .removeClass("active");
            // $a.parent().parent().css("zIndex","10")
            var id = $a.attr("data-target");
            console.log(id);
            $(id).css("zIndex","10")
                .siblings().css("zIndex","");
           var $b= $(id).children(".list-group-item");
           var $span= $b.children("span.pictrue_hidden");
           console.log($span)
          $b.hover(function(){
                $span.children().toggle()
                    .siblings("span.pictrue_hidden").removeClass("d-block")

          })


        }
    })

});





