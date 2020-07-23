//加载express模块
const express=require("express");

//加载mysql模块
const mysql=require("mysql");

//加载cors模块
const cors=require("cors");

//加载body-parser模块
const bodyParser=require("body-parser");
const { LOADIPHLPAPI } = require("dns");

//创建服务器
const server=express();

//创建连接池
const pool=mysql.createPool({
   host:"127.0.0.1",
   port:3306,
   user:"root",
   password:"",
   database:"e_book",
   connectionLimit:15
})

//设置中间件
server.use(bodyParser.urlencoded({
   extended:false
}))

//设置监听
server.listen(3000,()=>{
   console.log("服务器启动...")
});

//解决跨域
server.use(cors({
   origin:['http://localhost:8080','http://127.0.0.1:8080']
}));

server.get("/home",(req,res)=>{
   let sql="select lid,object,anothername from book_list";
   pool.query(sql,(err,result)=>{
      if(err) throw err;
      res.send(result);
   })
})

server.get("/article",(req,res)=>{
   let cid=req.query.cid;
   let page=Number(req.query.page);
   let pagesize=6;
   let offset=(Number(page)-1)*pagesize;
   let sql="select vid,image,title,price,author from book_value where category_id=? limit ?,?";
   pool.query(sql,[cid,offset,pagesize],(err,result)=>{
      if(err) throw err;
      sql=`select COUNT(vid) as count from book_value where category_id=?`;
      pool.query(sql,[cid],(err,record)=>{
         if(err) throw err;
         let count=record[0].count
         let num=Math.ceil(count/pagesize);
         // console.log(num);
         res.send({results:result,num:num});
      })
   })
})

server.get("/detail",(req,res)=>{
   let did=req.query.did;
   let sql="select time,Printing,info from book_value where vid=?";
   pool.query(sql,[did],(err,result)=>{
      if(err) throw err;
      res.send(result);
   })
})