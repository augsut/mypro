$(function () {
    $("#uname").focus(()=>{

        if($("#uname").val()==""){
            $(".info").html("请输入昵称6~8位")
            $(".info").css("font-size","12px")
            $(".info").css("color","red")
          console.log($(".info"))
        }
    })
    $("#uname").blur(()=>{
        let uname=$("#uname").val()
        $.ajax({
            url:"http://127.0.0.1:3000/register/register?uname="+uname,
            type:"get",
            success:function(res){
                console.log(res)
                if (res.code==200){
                    $(".info").html(res.msg)
                    $(".info").css("font-size","12px")
                    $(".info").css("color","green")
                }else{
                    $(".info").html(res.msg)
                    $(".info").css("font-size","12px")
                    $(".info").css("color","red")
                }
            }
        })
    })
    $(".register_login").click((e)=>{
        e.preventDefault();
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        console.log(uname,upwd)
        $.ajax({
            url:"http://127.0.0.1:3000/register/regnew",
            type:"post",
            data:`uname=${uname}&upwd=${upwd}`,
            success:function(res){
                console.log(res)
            }
        })
    })
})