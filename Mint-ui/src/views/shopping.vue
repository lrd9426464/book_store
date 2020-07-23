<template>
   <div class="shop">
      <!-- <div @click="click">123465</div> -->
      <!-- <mt-badge type="success">10</mt-badge> -->
      <div id="order_head">
         <span>目前有</span>
         <mt-badge class="badge" size="small" color="transparent">10</mt-badge>
         <span>本书</span>
      </div>
      <div id="content">
         <div id="order_content">
            <div id="order_msg">
               <div>
                  <input type="radio">
               </div>
               <div>
                  <img src="http://view.jqueryfuns.com/2020/6/17/389352992b566007a4a27e492e992458/images/book.jpg" alt="">
                  <div>
                     <p>计算机科学基础</p>
                     <mt-button size="small">-</mt-button><span>12</span><mt-button size="small">+</mt-button>
                  </div>
               </div>
            </div>
            <div id="order_price">
               <div>
                  <img src="../assets/shopping/del.png" alt="">
                  <span>删除</span>
               </div>
               <div>订单总价：<span>¥59</span></div>
            </div>
         </div>
      </div>
      
      <div id="pay">
         <input size="40" type="checkbox" id="p1"><label for="p1">全选</label>
         <span>合计：¥100</span>
         <a href="javascript:;">去结算(2)</a>
      </div>
      <my-footer></my-footer>
   </div>
</template>

<script>
export default {
   methods:{
      // click(){
      //    window.history.go(-1);
      // }
   }
}
</script>

<style scoped>
   .shop #pay{
      height: 46px;
      width: 100%;
      line-height: 46px;
      position: fixed;
      bottom: 60px;
   }
   .shop #pay span,
   .shop #pay input{
      margin-left: 45px;
   }
   .shop #pay a{
      text-decoration: none;
      color: white;
      background-color: red;
      padding: 10px 20px ;
      border-radius: 20px;
      box-sizing: border-box;
      margin-left: 40px;
   }
   .shop #order_head{
      background-color: #26a2ff;
      padding-left: 10px;
   }
   .shop #order_head span{
      line-height: 50px;
   }
   .shop #content{
      margin-bottom: 110px;
   }
   .shop #order_content{
      margin: 10px 5px;
      background-color: aqua;
   }
   .shop #order_msg{
      display: flex;
      height: 100px;
   }
   .shop #order_msg>div:first-child{
      flex: 1;
      text-align: center;
      line-height: 100px;
   }
   .shop #order_msg>div:last-child{
      display: flex;
      padding: 10px;
      flex: 4;
   }
   .shop #order_msg>div:last-child img{
      height: 80px;
      margin-right: 20px;
   }
   .shop #order_msg>div:last-child>div>p{
      margin-bottom: 30px;
   }
   .shop #order_msg>div:last-child>div>span{
      margin: 0 8px;
   }
   .shop #order_price{
      height: 30px;
      display: flex;
      line-height: 30px;
   }
   .shop #order_price div:first-child{
      flex: 2;
      margin-left: 30px;
   }
   .shop #order_price div:last-child{
      flex: 3;
      margin-left: 120px;
   }
   .shop #order_price div:last-child>span{
      color: red;
   }
</style>