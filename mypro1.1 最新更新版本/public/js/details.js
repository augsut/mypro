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
//    获取商品详情信息




})
var vm = new Vue({
    el:"#details",
    data:{
        det:"",
    },
    methods:{
        getDetails(){
            let did =parseInt(location.href.split('=')[1])
            axios.get("http://127.0.0.1:3000/product/details",
                {
                    params:{
                        did:did
                    },
                    type:"get"
                }).then((res)=>{
                console.log(res.data[0])
                this.det=res.data[0]
            })
        }
    },
    created(){
        this.getDetails();
        console.log(this.det)
    },
    mounted(){


    }
})