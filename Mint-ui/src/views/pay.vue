<template>
  <div class="pay">
    <mt-header title="提交订单">
      <mt-button @click.native="back" icon="back" slot="left"></mt-button>
    </mt-header>
    <div id="content">
      <router-link to v-show="haveAddress">
        <div id="address" @click="selectAddress">
          <p>
            <span>{{address.username}}</span>
            <span>{{address.phone}}</span>
          </p>
          <p>{{address.address}}</p>
        </div>
      </router-link>
      <div id="noaddress" v-show="!haveAddress">
         <p>请先添加一个地址</p>
         <mt-button @click.native="toaddress" type="primary" size="small">添加地址</mt-button>
      </div>
      <div id="commodity">
         <div class="commodity_item" v-for="(elem,i) in this.$store.state.pay_commodity" :key="i">
            <div>
               <img src="../assets/home/book.jpg" />
            </div>
            <div>
               <p>{{elem.title}}</p>
               <p>总价格：¥{{elem.price*elem.count}}</p>
            </div>
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
    <mt-popup v-model="popupVisible" position="right">
      <div @click="changeAddress">
        <div class="address">
          <p>
            <span>张三</span>
            <span>13648975462</span>
          </p>
          <p>77888888888888888888888888888888888888888888888</p>
        </div>
      </div>
    </mt-popup>
    <mt-tabbar id="footer" fixed>
      <mt-tab-item>
        <p id="total">总计：<span>90</span></p>
      </mt-tab-item>
      <router-link @click.native="toPay" to="" id="sure">确认提交</router-link>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: false,
      haveAddress:true,
      address:[]
    };
  },
  methods: {
    back() {
      this.$messagebox.confirm('确定放弃支付?').then(action => {
         if (action == 'confirm') {     //确认的回调
            // console.log(1); 
            this.$store.state.pay_commodity.forEach(element => {
              let id="";
              element.date=new Date().toLocaleString();
              for (let index = 0; index < 15; index++) {
                id += Math.floor(Math.random()*10);
              }
              element.orderId=id;
              // console.log(element)
              this.$store.commit("err",element);
            });
            this.$store.commit("clear_pay");
            this.$router.push("/payStatus");
         }
      }).catch(err => {})
    },
    selectAddress(){
      this.popupVisible = false;
    },
    changeAddress() {
      this.popupVisible = false;
      console.log("1");
    },
    toaddress(){
       this.$router.push("/editAddress")
    },
    toPay(){
      if(this.address.length!=0){
        this.$router.push("/payMethod")
      }else{
        this.$toast({
          message:"请先添加一个地址",
          duration:800
        })
      }
    }
  },
  mounted(){
     if(this.$store.state.address_list.length!==0){
        this.address=this.$store.state.address_list[0];
     }else{
        this.haveAddress=false;
     }
  }
};
</script>

<style scoped>
.pay a {
  text-decoration: none;
}
.pay #content {
  box-shadow: 0 0 15px 1px rgb(206, 195, 195);
  margin-top: 20px;
}
.pay #address {
  padding: 25px 30px;
  word-break: break-all;
  white-space: pre-wrap;
  border-bottom: 2px dashed rgb(230, 16, 16);
}
.pay #address p {
  width: 100%;
}
.pay #address p:first-child {
  font-size: 20px;
  color: black;
}
.pay #address p:last-child {
  margin-top: 10px;
  color: #bbb;
}
.pay #address p:first-child span:last-child {
  position: absolute;
  left: 40%;
}
.pay #commodity {
  margin: 0 30px;
  padding: 20px 0 10px;
}
.pay #commodity>.commodity_item:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
.pay #commodity .commodity_item{
  display: flex;
}
.pay #commodity .commodity_item div:first-child {
  flex: 1;
  margin-right: 15px;
}
.pay #commodity .commodity_item>div>img {
  width: 100%;
  vertical-align: middle;
}
.pay #commodity .commodity_item div:last-child {
  flex: 4;
}
.pay #commodity .commodity_item div:last-child p {
  margin: 20px 0;
}
.pay #commodity>.commodity_item div:last-child p:last-child {
  color: #e65339;
}
.pay #footer p {
  color: black;
  font-size: 17px;
  font-weight: 900;
  line-height: 50px;
}
.pay #footer span {
  color: #e65339;
}
.pay #sure {
  line-height: 63px;
  padding: 0 35px;
  background-color: #fa436a;
  color: white;
}
.pay #preferential {
  margin: 10px 0 65px;
}
.pay #preferential .pri {
  color: #e65339;
}
.pay .address {
  padding: 20px;
  word-break: break-all;
  white-space: pre-wrap;
}
.pay .address:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
.pay .address p {
  font-size: 15px;
}
.pay .address p:first-child {
  color: black;
}
.pay .address p:last-child {
  margin-top: 10px;
  color: #bbb;
}
.pay .address p:first-child span:last-child {
  position: absolute;
  left: 30%;
}
.pay #noaddress{
   padding: 10px;
   text-align: center;
}
.pay #noaddress p{
   margin: 10px 0;
}
</style>
