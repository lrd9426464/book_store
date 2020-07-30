<template>
  <div class="method">
    <mt-header id="header" title="订单支付">
      <mt-button @click.native="back" icon="back" slot="left"></mt-button>
    </mt-header>
    <div id="choose">
       <div>
          <p>订单号：46464456464654</p>
          <p>订单金额</p>
          <h3>¥100.00</h3>
       </div>
        <div id="payMethod">
          <mt-cell class="cell" title="微信支付" label="微信安全支付">
             <img slot="icon" src="../assets/payMethod/wx.png">
             <input type="radio" name="pay" checked>
          </mt-cell>
          <mt-cell class="cell" title="支付宝支付" label="支付宝安全支付">
             <img slot="icon" src="../assets/payMethod/zhifubao.png">
             <input type="radio" name="pay">
          </mt-cell>
          <mt-cell class="cell" title="银联支付" label="银联卡安全支付">
             <img slot="icon" src="../assets/payMethod/yl.png">
             <input type="radio" name="pay">
          </mt-cell>
          <div>
            <router-link to @click.native="pay_money">立即支付</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   methods:{
      back(){
         window.history.back();
      },
      pay_money(){
         // let inputs=document.querySelectorAll("input")
         // inputs.forEach(item=>{
         //    if(item.checked==true){
         //       console.log("result");
         //    }
         // })
         this.$store.state.pay_commodity.forEach(element => {
            let id="";
            element.date=new Date().toLocaleString();
            for (let index = 0; index < 15; index++) {
               id += Math.floor(Math.random()*10);
            }
            element.orderId=id;
            this.$store.commit("success",element)
         });
         // this.$store.commit("success",this.$store.state.pay_commodity);
         this.$store.commit("clear_pay");
         this.$router.push("/paySuccess")
      }
   }
}
</script>

<style scoped>
   .method a{
      text-decoration: none;
   }
   .method #header{
      box-shadow: 0 0 10px 1px  rgb(206, 195, 195);
   }
   .method #choose{
      box-shadow: 0 0 10px 1px  rgb(206, 195, 195);
      margin-top: 20px;
   }
   .method #choose::before{
      content:"";
      display: table;
   }
   .method #choose div:first-child{
      text-align: center;
   }
   .method #choose div:first-child p{
      color:#8F8F94;
      font-size: 14px;
      margin: 20px 0;
   }
   .method #choose div:first-child h3{
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 24px;
   }
   .method #payMethod{
      margin: 0 10px;
      border: 1px solid #F1F1F1;
      padding: 0 0 50px;
   }
   .method #payMethod div{
      margin-top: 50px;
      text-align: center;
   }
   .method #payMethod div a{
      text-decoration: none;
      color: white;
      font-size: 20px;
      padding: 15px 120px;
      box-sizing: border-box;
      background-color: red;
      border-radius: 10px;
   }
</style>