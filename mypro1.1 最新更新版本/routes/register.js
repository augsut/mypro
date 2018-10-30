const express=require('express');
let router =express.Router();
const pool= require('../pool.js');
router.get('/register',(req,res)=>{
        let uname=req.query.uname;
        if(!uname){res.send(
            {code:0,msg:"用户名不能为空"})
            return;
        }else{
            let sql =  `SELECT * FROM user WHERE uname=?`;
               pool.query(sql,[uname],(err,result)=>{
                   let reg = /^\w{6,8}$/;
                   if(err) throw err;
                   if(result.length!=0){
                       res.send({code:0,msg:"用户名已存在"});
                       return;
                   }else{
                       if(reg.test(uname)){
                           res.send({code:200,msg:"用户名可用"});
                           return;
                       }else{
                           res.send({code:1,msg:"请检查用户名格式"})
                       }
                   }
               })
        }
});
router.post('/regnew',(req,res)=>{
    let uname = req.body.uname;
    let upwd = req.body.upwd;
    console.log(uname,upwd)
    let reg = /^\d{6,8}$/;
    if(!upwd){
        res.send({code:400,msg:"密码不能为空"});
        return;
    }else{
        if(reg.test(upwd)){
            let sql=`INSERT INTO user VALUES(null,?,?,null,null,null,null,null)`;
            console.log(sql)
            pool.query(sql,[uname,upwd],(err,result)=>{
                if(err) throw err;
                res.send({code:200,msg:"添加成功"})
            })
        }else{
            res.send({code:401,msg:"注册失败"})
        }
    }
})

module.exports=router;