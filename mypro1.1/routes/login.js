const express=require('express');
let router =express.Router();

const pool= require('../pool.js');

router.post('/login',(req,res)=>{
    let upwd= req.body.upwd;
    let uname = req.body.uname;
    let rpwd = req.body.rpwd;
    if(!uname){
        res.send({code:401,msg:"用户名不能为空"});
        return;
    }
    if(!upwd){
        res.send({code:402,msg:"密码不能为空"});
        return;
    }
    if(!rpwd){
        res.send({code:403,msg:"验证码不能为空"});
        return;
    }
    let  sql= `SELECT * FROM user WHERE uname=? AND upwd=?`
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length != 0 ){
            res.send({code:1,msg:"登录成功"})
        }else{
            res.send({code:0,msg:"用户名或密码错误,请重新输入"})
        }
    })
});
module.exports=router;
