const express=require('express');
let router =express.Router();
const pool= require('../pool.js');
router.get('/details',(req,res)=>{
    let id=req.query.id;
    let sql =  `SELECT * FROM booku_products WHERE pid=?`
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

module.exports=router;