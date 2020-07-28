<template>
  <div class="pay">
    <mt-header title="提交订单">
      <mt-button @click.native="back" icon="back" slot="left"></mt-button>
    </mt-header>
    <div id="content">
      <router-link to>
         <div id="address">
            <p>
               <span>张三</span>
               <span>13648975462</span>
            </p>
            <p>77888888888888888888888888888888888888888888888</p>
         </div>
      </router-link>
      <div id="commodity">
         <div>
            <img src="../assets/home/book.jpg"/>
         </div>
         <div>
            <p>蛎之梦牡蛎精华保湿面膜</p>
            <p>¥9.9</p>
         </div>
      </div>
    </div>
    <div id="preferential">
      <mt-cell title="积分">
         <span>1000</span>
      </mt-cell>
      <mt-cell title="积分抵扣">
         <span class="pri">¥-10</span>
      </mt-cell>
      <mt-cell title="运费">
         <span>免运费</span>
      </mt-cell>
      <mt-cell title="商品金额">
         <span class="pri">¥100</span>
      </mt-cell>
    </div>
    <mt-tabbar id="footer" fixed>
      <mt-tab-item>
        <p id="total">总计：<span>90</span></p>
      </mt-tab-item>
      <router-link to="/payMethod" id="sure">确认提交</router-link>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
   data(){
      return{

      }
   },
   methods:{
      back(){
         window.history.back();
         // this.$router.push("/shopping")
      }
   }
}
</script>

<style scoped>
   .pay a{
      text-decoration: none;
   }
   .pay #content{
      box-shadow: 0 0 15px 1px  rgb(206, 195, 195);
      margin-top: 20px;
   }
   .pay #address{
      padding:25px 30px;
      word-break: break-all;
      white-space:pre-wrap;
      border-bottom: 2px dashed rgb(230, 16, 16);
   }
   .pay #address p{
      width: 100%;
   }
   .pay #address p:first-child{
      font-size: 20px;
      color: black;
   }
   .pay #address p:last-child{
      margin-top: 10px;
      color:#bbb
   }
   .pay #address p:first-child span:last-child{
      position: absolute;
      left: 30%;
   }
   .pay #commodity{
      margin: 0 30px;
      padding: 20px 0 10px;
      display: flex;
   }
   .pay #commodity:not(:last-child){
      border-bottom: 1px solid #ccc;
   }
   .pay #commodity div:first-child{
      flex: 1;
      margin-right: 15px;
   }
   .pay #commodity div:first-child img{
      width: 100%;
      vertical-align: middle;
   }
   .pay #commodity div:last-child{
      flex: 4;
   }
   .pay #commodity div:last-child p{
      margin: 20px 0;
   }
   .pay #commodity div:last-child p:last-child{
      color: #E65339;
   }
   .pay #footer p{
      color: black;
      font-size: 17px;
      font-weight: 900;
      line-height: 50px;
   }
   .pay #footer span{
      color: #E65339;
   }
   .pay #sure{
      line-height: 63px;
      padding: 0 35px;
      background-color: #FA436A;
      color: white;
   }
   .pay #preferential{
      margin: 10px 0 65px;
   }
   .pay #preferential .pri{
      color: #E65339;
   }
</style>