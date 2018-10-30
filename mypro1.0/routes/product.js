const express=require('express');
var router =express.Router();
const pool= require('../pool.js');



router.get("/",(req,res)=>{

    
    var sql =  `SELECT * FROM booku_products` 
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result);
    })

})

module.exports=router;