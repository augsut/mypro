
$(function () {
    //页面动态加载
    $.ajax({
        url:"http://127.0.0.1:3000/product",
        type:"GET",
        success:function(res){
            // 头部登录,退出切换
            let $x= localStorage.getItem("uname");
            if($x!=null){
                let $y = $("#header_register");
                let $in= $("#header_login")
                //登录后显示内容
                $in.html("欢迎回来!"+$x);
                $y.html("退出")
                $in.href="";
                //如果点击退出按钮时,删除localStorage缓存
                $y.click((e)=>{
                    localStorage.removeItem("uname");
                    console.log($x)
                    location.href="booku.html";
                })
            }else{
                let $y = $("#header_register");
                $y.click((e)=>{
                    e.preventDefault();
                    location.href="register.html"
                })

            }
            // $(".header_register").html("退出登录");
            // console.log(res);
            let parent = document.querySelector(".timeout_buy");
            // console.log(parent)
            let floor= res.product;
            let fl0=floor.slice(0,6)
            // console.log(fl0)
            //遍历res,分楼层
            var floors={
                floor1:[],
                floor2:[],
                floor3:[],
                floor4:[]           
            }
            for(let f = 0 ;f<res.product.length;f++){
                if(res.product[f].pro_floor=="0"){
                   floors.floor1.push(res.product[f]);                              
                }
                if(res.product[f].pro_floor=="1"){
                    floors.floor2.push(res.product[f]); 
                }
                if(res.product[f].pro_floor=="2"){
                    floors.floor3.push(res.product[f]);  
                }
                if(res.product[f].pro_floor=="3"){
                    floors.floor4.push(res.product[f]);  
                }
            }
            console.log(floors)
            //1f
            let html="";
            for(let i = 0; i <fl0.length;i++){
                html +=`<div class="my_floor1 details_look">
            <a href="#">
                <img src=${fl0[i].pic_url} alt="" class="img-fluid mt-2">
            </a>
            <p class="text-center mb-2">
                <a href="#" class="text-muted my_font">
                ${fl0[i].pro_name}
                </a>
            </p>
            <h4 class="text-danger text-center">
                &yen;${fl0[i].saleprice}
                <span class="text-muted my_font">
                    |${fl0[i].price}
                </span>
            </h4>
        </div>`;
                parent.innerHTML=html;
            }
            //3f
            let parent_1= $("#author1");
            console.log(parent_1)
            let fl1= floor.slice(7,11);
            // console.log(fl1)
            console.log(res);
            let author = {};
            author.name=res.product.slice(26,29);
            author.avantar= res.product.slice()
            // console.log(author)
            let html1=`
    <div class="inner my_floor3 container d-flex p-0" >
            <div class="d1">
                <span>
                    <img src="img/20180828124036390.jpg" alt="" class="avantar">
                </span>
                <h5 class="text-center">${author.name[0].author_name}</h5>
                <p class="small">
                   ${author.name[0].author_intr}
                </p>
            </div>
            <div class="slice ml-4">
            </div>
            <div class=" middle ml-2">
                <div class="d-flex">
                    <div class="mt-5 w-50">
                        <a href="http://127.0.0.1:3000/booku_details.html?id=5" style="display: inline-block;height:50px;">
                            <img src=${fl1[0].pic_url} alt="" class="">
                        </a>
                    </div>
                    <div class="mt-5 h-25 pt-3">
                        <h5>${fl1[0].pro_name}</h5>
                        <div class="d-flex">
                            <h5 class="text-danger"> &yen;28.44</h5>
                            <span class="ml-2 line" style="text-decoration: line-through">&yen;39.50</span>
                        </div>
                        <p class="small">
                            ${fl1[0].pro_subtitle}
                        </p>
                    </div>
                </div>
                <div>
                    <img src="img/qitazuoping.png" class="img-fluid w-75 ml-4 h-50 mt-2" alt="">
                </div>
                <div class="d-flex">
                    <ul class="list-unstyled middle_bottom d-flex justify-content-around">
                        <li class="ml-4">
                        <a href="">
                            <img src=${fl1[1].pic_url} alt="" class="ml-4 mt-2">
                        </a>
                        <a class="my_font ml-4">
                        ${fl1[1].pro_name}
                            </a>
                        <p class="text-danger small ml-4 mt-2">
                            &yen;${fl1[1].saleprice}|
                            <span class="text-muted small" style="text-decoration: line-through">
                                    &yen;${fl1[1].price}
                                </span>
                        </p>

                    </li>
                        <li class="ml-4">
                            <a href="">
                                <img src=${fl1[2].pic_url} alt="" class="ml-4 mt-2">
                            </a>
                            <a class="my_font ml-4">
                            ${fl1[2].pro_name}
                            </a>
                            <p class="text-danger small ml-4 mt-2">
                                &yen;${fl1[2].saleprice}|
                                <span class="text-muted small" style="text-decoration: line-through">
                                    &yen;${fl1[2].price}
                                </span>
                            </p>

                        </li>

                        <li class="ml-4">
                            <a href="">
                                <img src=${fl1[3].pic_url} alt="" class="ml-4 mt-2">
                            </a>
                            <a class="my_font ml-4 text-center">
                            ${fl1[3].pro_name}
                            </a>
                            <p class="text-danger small ml-4 mt-2">
                                &yen;${fl1[3].saleprice}|
                                <span class="text-muted small" style="text-decoration: line-through">
                                    &yen;${fl1[3].price}
                                </span>
                            </p>

                        </li>
                        <li class="ml-4">
                            <a href="">
                                <img src=${floor[15].pic_url} alt="" class="ml-4 mt-2">
                            </a>
                            <a class="my_font ml-4 text-center">
                            ${floor[15].pro_name}
                            </a>
                            <p class="text-danger small ml-4 mt-2">
                                &yen; ${floor[15].saleprice}|
                                <span class="text-muted small" style="text-decoration: line-through">
                                    &yen; ${floor[15].price}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
                <div>
                </div>

            <div class=" d-flex flex-wrap">
                <img src="img/20180828125018971.jpg" alt="" class="ml-2">
                <img src="img/20180828142227206.jpg" alt="" class="mt-2 ml-2">
                <img src="img/20180828150823856.jpg" alt="" class="mt-2 ml-2">
            </div>`;
            parent_1.html(html1)
            parent_1.css("zIndex","10");
            let html2=` <div class="inner my_floor3 container d-flex p-0" >
                    <!--left-->
                    <div class="d1">
                                <span>
                                    <img src=${author.name[2].author_avantar} alt="" class="avantar">
                                </span>
                        <h5 class="text-center">${author.name[2].author_name}</h5>
                        <p class="small">
                          ${author.name[2].author_intr}
                        </p>
                    </div>
                    <div class="slice ml-4">
                    </div>
                    <!--middle-->
                    <div class=" middle ml-2">
                        <div class="d-flex">
                            <div class="mt-5 w-50">
                                <a href="booku_details.html">
                                    <img src=${res.product[30].pic_url} alt="" class="">
                                </a>
                            </div>
                            <div class="mt-5 h-25 pt-3">
                                <h5>${res.product[30].pro_name}</h5>
                                <div class="d-flex">
                                    <h5 class="text-danger"> &yen;28.44</h5>
                                    <span class="ml-2 line" style="text-decoration: line-through">&yen;39.50</span>
                                </div>
                                <p class="small">
                                   ${res.product[30].pro_subtitle}
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="img/qitazuoping.png" class="img-fluid w-75 ml-4 h-50 mt-2" alt="">
                        </div>
                        <div class="d-flex">
                            <ul class="list-unstyled middle_bottom d-flex justify-content-around">
                                <li class="ml-4 d-flex flex-column">
                                    <a href="" class="text-center">
                                        <img src=${res.product[31].pic_url} alt="" class="ml-4 mt-2">
                                    </a>
                                    <a class="my_font ml-4">
                                       ${res.product[31].pro_name}
                                    </a>
                                    <p class="text-danger small ml-4 mt-2" style="width:100px">
                                        &yen;${res.product[31].saleprice}|
                                        <span class="text-muted small" style="text-decoration: line-through">
                                                    &yen;${res.product[31].price}
                                                </span>
                                    </p>

                                </li>
                                <li class="ml-4 d-flex flex-column">
                                    <a href="">
                                        <img src=${res.product[32].pic_url} alt="" class="ml-4 mt-2">
                                    </a>
                                    <a class="my_font ml-4">
                                         ${res.product[32].pro_name}
                                    </a>
                                    <p class="text-danger small ml-4 mt-2">
                                        &yen;${res.product[32].saleprice}|
                                        <span class="text-muted small" style="text-decoration: line-through">
                                                    &yen; ${res.product[32].price}
                                                </span>
                                    </p>
                                </li>
                                <li class="ml-4 d-flex flex-column" >
                                    <a href="">
                                        <img src="img/lonely.jpg"alt="" class="ml-4 mt-2">
                                    </a>
                                    <a class="my_font ml-4 text-center">
                                       ${res.product[33].pro_name}
                                    </a>
                                    <p class="text-danger small ml-4 mt-2">
                                        &yen;${res.product[33].saleprice}|
                                        <span class="text-muted small" style="text-decoration: line-through">
                                                    &yen;${res.product[3].price}
                                                </span>
                                    </p>

                                </li>
                                <li class="ml-4 d-flex flex-column">
                                    <a href="">
                                        <img src=${res.product[34].pic_url} alt="" class="ml-4 mt-2">
                                    </a>
                                    <a class="my_font ml-4 text-center">
                                       ${res.product[34].pro_name}
                                    </a>
                                    <p class="text-danger small ml-4 mt-2">
                                        &yen;${res.product[34].saleprice}|
                                        <span class="text-muted small" style="text-decoration: line-through">
                                                    &yen;${res.product[34].price}
                                                </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                    </div>
                    <!--right-->
                    <div class=" d-flex flex-wrap">
                        <img src=${res.product[36].pic_url} class="ml-2">
                        <img src=${res.product[37].pic_url} alt="" class="mt-2 ml-2">
                        <img src=${res.product[38].pic_url} alt="" class="mt-2 ml-2">
                    </div>
                </div>`
            let parent_2= $("#author2")
            parent_2.html(html2)
            console.log($("#hot"))
            //3f作品切换
            change_pro($("#hot"))
            //5f作品切换
            change_pro($("#hott"))
            function rn(min,max){
                let a = Math.floor(Math.random()*(max-min)+min);
                return  a
            }
            //4f书籍

            for(let i=1;i<=4;i++){
                var html4 = `<div class="pictrue_between" id="hot"+${i}>
            <ul class="d-flex list-unstyled justify-content-between mb-0" >
                <li>
                    <img src="img/bianjijingxuan.png" alt="jiazaicuowu">
                </li>
                <li class=" list-group-item">
                    <a href="">
                        <img src=${floors.floor3[0].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[0].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[0].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[0].price}
                        </span>
                    </h5>
                </li>
                <li class=" list-group-item">
                    <a href="">
                        <img src=${floors.floor3[1].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[1].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[1].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[1].price}
                        </span>
                    </h5>
                </li>
                <li class="list-group-item">
                    <a href="">
                        <img src=${floors.floor3[2].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[2].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[2].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[2].price}
                        </span>
                    </h5>
                </li>
                <li class=" list-group-item">
                    <a href="">
                        <img src=${floors.floor3[3].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[3].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[3].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[3].price}
                        </span>
                    </h5>
                </li>
                <li class="list-group-item">
                    <a href="">
                        <img src=${floors.floor3[4].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[4].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[4].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[4].price}
                        </span>
                    </h5>
                </li>
            </ul>
            <ul class="list-unstyled d-flex justify-content-around mt-0">
                <li class="list-group-item mt-0">
                    <a href="">
                        <img src=${floors.floor3[5].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[5].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[5].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[5].price}
                        </span>
                    </h5>
                </li>
                <li class="list-group-item">
                    <a href="">
                        <img src=${floors.floor3[6].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[6].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[6].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[6].price}
                        </span>
                    </h5>
                </li>
                <li class=" list-group-item">
                    <a href="">
                        <img src=${floors.floor3[7].pic_url} alt="" class="">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[7].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[7].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[7].price}
                        </span>
                    </h5>
                </li>
                <li class="list-group-item">
                    <a href="">
                        <img src="img/B348400.jpg" alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[8].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[8].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[8].price}
                        </span>
                    </h5>
                </li>
                <li class="list-group-item">
                    <a href="">
                        <img src=${floors.floor3[9].pic_url} alt="" class="img-fluid">
                    </a>
                    <p class="text-center mt-4">${floors.floor3[9].pro_name}</p>

                    <h5 class="text-center text-danger">&yen;${floors.floor3[9].saleprice}
                        <span class="small" style="text-decoration: line-through">
                            |&yen;${floors.floor3[9].price}
                        </span>
                    </h5>
                </li>
                <li>
                    <a href="#">
                        <img src="img/yuqiuy.png" class="" style="height:279px;width:197px">
                    </a>
                </li>
            </ul>
        </div>`
            }
            $("#floor4").html(html4)


            //滚动事件
            window.onscroll = function(){
              var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
              // 获得头部
                let pro_top= document.querySelector("#header_scroll");
                let lef_box = $(".left_menubox")
                let obj = {};  
                let aNav =$(".left_menubox>ul>li");
                //获取ul
                let liNa= $(".left_menubox>ul")
                //获取楼层内容
                let aDiv =$(".navagitor")
               for(var i =0;i<aDiv.length;i++){
                    //获取每个楼层的高度作为下标
                obj[$(aDiv[i]).offset().top] =i;          
                }
                     if( t >= 300 ) { //当距离顶部超过300px时 头部显示
                    pro_top.style.display="flex"

                }
                if(t>=700){
                    lef_box.show();
                    lef_box.css("zIndex","1002")
                }
                else { //如果距离顶部小于300px
                   pro_top.style.display="none";//使div向下隐藏
                   lef_box.fadeOut()
                }
                //页面顶部的距离与楼层距离顶部的距离相比较，设置lef_box样式
                for(var h in obj){
                    if(t>=h/1.1){
                        let index = obj[h];
                        liNa.children().children().removeClass("left_menubox_active")
                        aNav.eq(index).children().addClass("left_menubox_active")
                    }
                }               
            }
            }                   
    });
    //  3f作品切换
    $("#tabbar_author").click(function(e){
        if(e.target.nodeName == "A"){
            let $a = $(e.target);
            console.log($a.attr("href"))
            if($a.attr("href")!="#"){
                $a.click(function(){
                    location.href=$a.attr("href")
                })
            } e.preventDefault();
            $a.addClass("author_active")
                .siblings()
                .removeClass("author_active");
            let id = $a.attr("data-target");
            console.log(id);
                $(id).css("zIndex","10")
                    .siblings().css("zIndex","");          
        }
    })
    // 封装切换商品的函数，方便调用
    function change_pro(elem){
            $(elem).click((e)=>{
            if(e.target.nodeName == "A"){
            let $a = $(e.target);
                if($a.attr("href")!="#"){
                    $a.click(function(){
                        location.href=$a.attr("href")
                    })
                } e.preventDefault();
            $a.addClass("author_active")
                .siblings()
                .removeClass("author_active");
            let id = $a.attr("data-target");                 
                $(id).css("zIndex","10")             
                    .siblings().css("zIndex",""); 
            }    
        })
    }



    //1.1 倒计时功能
    let timer = setInterval(task,4000);
    function task(){
        let span=$(".timer");
        let end=new Date("2019/10/18 10:29:00");
        let now=new Date();
        let s=parseInt((end-now)/1000);

        if(s>0){
            let d=parseInt(s/3600/24);
            if(d<10) d="0"+d;
            //s/3600/24,再下取整
            let h=parseInt(s%(3600*24)/3600);
            if(h<10) h="0"+h;
            //s/(3600*24)的余数,再/3600,再下去整
            let m=parseInt(s%3600/60);
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
//   排行榜tabs功能




    $("#tab").click(function(e){
        e.preventDefault();
        if(e.target.nodeName == "A"){
            let $a = $(e.target);
            $a.parent()
                .addClass("active")
                .siblings()
                .removeClass("active");
            let id = $a.attr("data-target");
            console.log(id);
            $(id).css("zIndex","10")
                 .siblings().css("zIndex","");
            //导航栏下的ul列表下的lis
//457行css文件
            let $ul=$(id)
            //设置当前ul下的第一个li下的图片显示

            $ul.children(":first-child").children(".pictrue_hidden").addClass("mytabbar_active");
            $ul.children(":not(:first-child)").children(".pictrue_hidden").removeClass("mytabbar_active");

            $ul.click(function(e){
                e.preventDefault();
                $lis=$(e.target);
                var $img = $lis.children(".pictrue_hidden");
                var index=$lis.index();
                if($img.parent().prev().children(".pictrue_hidden").has("mytabbar_active")){
                    $img.parent().prev().children(".pictrue_hidden").removeClass("mytabbar_active")
                    console.log( $img.parent().prev().children(".pictrue_hidden"))
                }
                $img.addClass("mytabbar_active")
                    .parent().siblings().children(".pictrue_hidden").removeClass("mytabbar_active")


            })
        }

    })

})


//轮播图
$(function (){
    //绑定轮播图 小点 箭头的jquery对象
    //    轮播图
    let $banner_all = $(".crousle>.crousle_out")
    let $banner = $(".crousle>.crousle_out>span+ul.crousle_list");
    //    小点
    let $banner_circle = $(".crousle_out>ol");
    //    箭头
    let $left_arrow = $("#left");
    let $right_arrow = $("#right");
    console.log($left_arrow,$right_arrow)
    //设置最初的定时器
    let t = setInterval(cc,4000);
    //命名定时器的函数
    var $order = 0;
    function cc(){
        //      当前显示的轮播图
        let $banner_now = $(".mybanner_active");
        //      当前显示图片在轮播图下标
        let index = $banner_now.index();
        $order++;
        //      当前显示的图片对应的小点
        let $banner_circle_now = $(".myactive");
        //      移除当前显示图片 小点的active类
        $banner_now.removeClass("mybanner_active");
        $banner_circle_now.removeClass("myactive");
        //      以下标index找到即将显示的图片和小点
        //      之后分别添加active类
        if($order<4){
            $banner_now.parent().next().children().addClass("mybanner_active");
            $banner_circle_now.next().addClass("myactive");
            // console.log($order)

        }else {
            $order=0;
            // var v =  $banner.children(":first-child").children()
            $banner.children(":first-child").children().addClass("mybanner_active");
            $banner_circle.children(":first-child").addClass("myactive")
        }
    }
    //鼠标进出事件
    //    鼠标移入 清除定时器
    $banner_all.mouseenter(function(){
        clearInterval(t)
        $left_arrow.addClass("arrow_active");
        $right_arrow.addClass("arrow_active")
        // console.log(111)
    });
    //    鼠标移出 启动定时器
    $banner_all.mouseleave(function(){
        t = setInterval(cc,4000);
        $left_arrow.removeClass("arrow_active");
        $right_arrow.removeClass("arrow_active")
        // console.log(222)
    });
    //小点的点击事件，点击切换图片 及 位移小点

    $banner_circle.click(function(e){
        //      为当前点击的小点创建jquery对象
        let $circle_now = $(e.target);
        //      找到点击的小点的下标
        let index = $circle_now.index();
        // console.log("我是"+index)
        //      为点击小点添加active类
        $circle_now.addClass("myactive");
        //      对其余小点移除active类
        $circle_now.siblings().removeClass("myactive");
        //      以小点的下标找到对应的图片
        //          对找到的图片添加active类
        $banner.children(`li:eq(${index})`).children().addClass("mybanner_active");
        //          对其余图片移除active类
        $banner.children(`li:eq(${index})`).children().siblings().removeClass("mybanner_active")
    })
    //箭头绑定点击事件
    $left_arrow.click(function(){
        let $banner_now = $(".mybanner_active");
        let $banner_circle_now = $(".myactive");
        let index = $banner_circle_now.index();
        console.log(index)
        $banner_now.removeClass("mybanner_active");
        $banner_circle_now.removeClass("myactive");
        if(index>0){
            $banner_now.parent().prev().children().addClass("mybanner_active");
            $banner_circle_now.prev().addClass("myactive")
        }else{
            $banner.children(":last-child").children().addClass("mybanner_active");
            $banner_circle.children(":last-child").addClass("myactive")
        }
    });
    $right_arrow.click(function(){
        let $banner_now = $(".mybanner_active");
        let index = $banner_now.index();
        let $banner_circle_now = $(".myactive");
        var n = $($banner_circle_now).index();
        $banner_now.removeClass("mybanner_active");
        $banner_circle_now.removeClass("myactive");

        // console.log($banner.children(":first-child").children())
        if(n<3){
            $banner_now.parent().next().children().addClass("mybanner_active");
            $banner_circle_now.next().addClass("myactive")
            console.log(n)
        }else if(n=3){
            var n = 0;
            // $banner.children(":first-child").children().addClass("mybanner_active");
            $banner.children(":first-child").children().addClass("mybanner_active");
            $banner_circle.children(":first-child").addClass("myactive")
        }
    })
}());







