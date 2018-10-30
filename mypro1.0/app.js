//引入需要的模块
const express= require('express');
const app = express();
const bodyParser = require('body-parser')
//引入路由模块
const product = require('./routes/product.js')



app.listen(3000,()=>{
    console.log("success")
});
//托管静态文件
app.use(express.static(__dirname+"/public"));
//使用第三方中间件
app.use(bodyParser.urlencoded({extended:false}))

//挂载路由
app.use('/product',product);
