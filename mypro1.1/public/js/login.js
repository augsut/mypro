$(function () {
    let btn = $(".login_btn");
    btn.click((e) => {
        let uname = $("#uname").val();
        let upwd = $("#upwd").val();
        let rpwd = $("#rpwd").val();
        e.preventDefault();
        console.log(uname,upwd,rpwd)
        $.ajax({
            url:"http://127.0.0.1:3000/login/login",
            type:"POST",
            data:`uname=${uname}&upwd=${upwd}&rpwd=${rpwd}`,
            success:function(data){
                console.log(data.msg)
                let info =$(".login_info");
                console.log(info);
                info.html(data.msg);
                if(data.code==1){
                    info.html("登录成功!为您跳转中....");
                    localStorage.setItem("uname",uname);
                    localStorage.setItem("upwd",upwd);
                    info.css("color","green");
                    setTimeout(()=>{
                        location.href="booku.html"
                    },2000)

                }
       
            }
        })
    })
})