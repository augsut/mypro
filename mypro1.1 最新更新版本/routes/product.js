const express=require('express');
var router =express.Router();
const pool= require('../pool.js');



router.get("/",(req,res)=>{  
    (async function(){ 
        var obj = {};
        var sql =  `SELECT * FROM booku_products` 
        await  new  Promise(function(open){ 
            pool.query(sql,(err,result)=>{
                if (err) throw err;          
                obj.product=result;
                open();
            })
         })
        var sql =  `SELECT * FROM index_crousel`; 
        await new Promise(function(open){     
            pool.query(sql,(err,result)=>{
                if (err) throw err;
               obj.crousel= result;
               open();              
            })
       
        })
        res.send(obj)
    })();
})
//pro_list商品列表
router.get('/prolist',(req,res)=>{
        let sql = `SELECT * FROM pro_list`;
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result)
        })
})
//根据id查找商品详情
router.get('/details',(req,res)=>{
    let did = req.query.did;
    let sql = `SELECT * FROM pro_list WHERE did=?`
    pool.query(sql,did,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//分页查询
router.get("/getmore",(req,res)=>{
    let pno= req.query.pno;
    let pageSize= req.query.pageSize;
    let pro=0;
    let obj= {pno:pno,pageSize:pageSize,}
    var sql = `SELECT COUNT(did) AS c FROM pro_list WHERE isPro=1`;
    pool.query(sql,(err,result)=>{
        var pageCount = Math.ceil(result[0].c/pageSize);
        obj.pageCount=pageCount;
        pro += 50;
            if (pro == 100) {
                res.send(obj)
            }
    })
    var  offset = parseInt((pno-1)*pageSize);

    var  sql1 = `SELECT * FROM pro_list WHERE isPro=1 LIMIT ${offset},${pageSize}`;
            pool.query(sql1,(err,result)=> {
                if (err) throw err;
                obj.data = result;
                pro+=50;
                if(pro==100){
                    res.send(obj)
                }
    })
})



//商品列表
router.get('/list',(req,res)=>{
    var obj = {};
    (async function(){
        await new Promise(function(open){
            let pno= req.query.pno;
            let pageSize= req.query.pageSize;
            let pro=0;
             obj= {pno,pageSize}
            var sql2 = `SELECT COUNT(did) AS c FROM pro_list WHERE list=1`;
            pool.query(sql2,(err,result)=>{
                let pageCount = Math.ceil(result[0].c/pageSize);

                obj.pageCount=pageCount;
                open();
            })
        })
      await new Promise(function(open){
          let pno= req.query.pno;
          let pageSize= req.query.pageSize;
          let offset = parseInt((pno-1)*pageSize);
          let sql = `SELECT * FROM pro_list WHERE list=1 LIMIT ${offset},${pageSize}`
          pool.query(sql,(err,result)=>{
              if(err) throw err;
              obj.new=result;
              open();
          })
      })
        let sql1 = ` SELECT * FROM pro_list WHERE list=1 AND subtitle= 'hot'`
      await new Promise(function(open){
          pool.query(sql1,(err,result)=>{
              if(err) throw  err;
              obj.hot = result;
              open();
          })
      })
        res.send(obj)
    })()
})
module.exports=router;