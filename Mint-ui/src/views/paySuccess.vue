<template>
  <div class="success">
    <mt-header id="header" title="支付成功">
      <!-- <mt-button @click.native="back" icon="back" slot="left"></mt-button> -->
    </mt-header>
    <div id="paySuccess">
      <div>
        <div>
          <img src="../assets/paySuccess/success.png" alt="" width="90px" />
        </div>
        <p>支付成功</p>
      </div>
      <div>
         <router-link to @click.native="order">查看订单</router-link>
         <router-link to @click.native="backMain">返回首页</router-link>
      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    order(){
      this.$router.push("/payStatus");
    },
    backMain(){
      window.sessionStorage.setItem("visited","main");
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.success a {
  text-decoration: none;
}
.success #header {
   color: black;
   font-size: 17px;
   background-color: #F7F7F7 !important;
  box-shadow: 0 0 10px 1px rgb(206, 195, 195);
}
.success #paySuccess {
  box-shadow: 0 -5px 30px 0 rgb(206, 195, 195);
  margin-top: 20px;
  padding-bottom: 30px;
}
.success #paySuccess::before {
  content: "";
  display: table;
}
.success #paySuccess div:first-child {
  margin-top: 10px;
  text-align: center;
}
.success #paySuccess div:first-child p {
  font-size: 24px;
  margin-top: 10px;
}
.success #paySuccess div:last-child{
   margin: 0 10px;
}
.success #paySuccess div a{
  display: block;
  font-size: 20px;
  padding: 15px 120px;
  box-sizing: border-box;
  border-radius: 3px;
   text-align: center;
}
.success #paySuccess div a:first-child{
  color: white;
  background-color: red;
  margin-top: 100px;
}
.success #paySuccess div a:last-child{
  color: black;
  border: 1px solid #ddd;
  margin-top: 10px;
}

</style>
