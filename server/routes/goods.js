var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//链接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/db_demo');

mongoose.connection.on("connected",function(){
    console.log("MongoDB connected success.");
});

mongoose.connection.on("error",function(){
    console.log("MongoDB connected fail.")
});

router.get("/",function(req,res,next){
    let page = req.param("page");
    let pageSize = parseInt(req.param("pageSize"));
    let sort = 1*req.param("sort");
    let skip = 1*(page-1)*pageSize;
    let params = {};
    let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
    console.log(req.url);
    console.log(page,pageSize);
    // goodsModel.sort({'salePrice':sort});
    goodsModel.exec(function (err,doc) {
        if(err){
            res.json({
              status:'1',
              msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            });
        }
    })

})
module.exports = router;