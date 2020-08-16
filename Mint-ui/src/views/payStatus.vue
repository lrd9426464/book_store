<template>
   <div class="status">
      <mt-header>
         <mt-button @click.native="backHome" icon="back" slot="left"></mt-button>
      </mt-header>
      <mt-navbar v-model="visited">
         <mt-tab-item id="allPay">全部</mt-tab-item>
         <mt-tab-item id="isPay">已付款</mt-tab-item>
         <mt-tab-item id="noPay">未付款</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="visited">
         <mt-tab-container-item id="allPay">
            <div id="content" v-for="(item,i) of allPay" :key="i">
               <div class="content-item">
                  <div>
                     <span v-if="i+1<=$store.state.success_commodity.length">已付款</span>
                     <span v-else style="background-color:red">未付款</span>
                  </div>
                  <div>
                     <p>下单时间：{{item.date}}</p>
                     <p>订单编号：{{item.orderId}}</p>
                     <div id="order_msg">
                        <div>
                           <img src="../assets/home/book.jpg" alt="">
                        </div>
                        <div>
                           <p>{{item.title}}</p>
                           <button @click="pay" :data-num="i" v-show="i+1>$store.state.success_commodity.length">付款</button>
                        </div>
                     </div>
                     <div id="order_price">
                        <div>
                           <span>已支付</span>
                        </div>
                        <div>订单总价：<span id="price">¥{{item.price*item.count}}</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </mt-tab-container-item>
         <mt-tab-container-item id="isPay">
            <div id="content" v-for="(item,i) of this.$store.state.success_commodity" :key="i">
               <div class="content-item">
                  <div>
                     <span>已付款</span>
                  </div>
                  <div>
                     <p>下单时间：{{item.date}}</p>
                     <p>订单编号：{{item.orderId}}</p>
                     <div id="order_msg">
                        <div>
                           <img src="../assets/home/book.jpg" alt="">
                        </div>
                        <div>
                           <p>{{item.title}}</p>
                        </div>
                     </div>
                     <div id="order_price">
                        <div>
                           <span>已支付</span>
                        </div>
                        <div>订单总价：<span id="price">¥{{item.price*item.count}}</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </mt-tab-container-item>
         <mt-tab-container-item id="noPay">
            <div id="content" v-for="(item,i) of this.$store.state.err_commodity" :key="i">
               <div class="content-item">
                  <div>
                     <span style="background-color:red">未付款</span>
                  </div>
                  <div>
                     <p>下单时间：{{item.date}}</p>
                     <p>订单编号：{{item.orderId}}</p>
                     <div id="order_msg">
                        <div>
                           <img src="../assets/home/book.jpg" alt="">
                        </div>
                        <div>
                           <p>{{item.title}}</p>
                           <button @click="pay" :data-num="i">付款</button>
                        </div>
                     </div>
                     <div id="order_price">
                        <div>
                           <span>已支付</span>
                        </div>
                        <div>订单总价：<span id="price">¥{{item.price*item.count}}</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </mt-tab-container-item>
      </mt-tab-container>
   </div>
</template>

<script>
export default {
   data(){
      return {
         visited:"allPay",
         allPay:[],
         m:0,
         date:new Date().toLocaleString()
      }
   },
   methods:{
      backHome(){
		 window.sessionStorage.setItem("visited","me")
         this.$router.push("/me");
      },
      pay(e){
         let arr=[];
         if(e.target.dataset.num>=this.$store.state.success_commodity.length){
            this.m=e.target.dataset.num-this.$store.state.success_commodity.length;
         }else{
            this.m=e.target.dataset.num;
         }
         arr.push(this.$store.state.err_commodity[this.m]);
         this.addPay(arr).then(this.delPay);
         // console.log(this.$store.state.err_commodity[n])
      },
      addPay(arr){
         return new Promise(
            (door)=>{
               this.$store.commit("pay",arr);
               door();
            }
         )
      },
      delPay(){
         this.$store.commit("del_err",this.m);
         this.$router.push(`/pay`);
      }
   },
   mounted(){
      this.allPay=this.allPay.concat(this.$store.state.success_commodity,this.$store.state.err_commodity)
      console.log(this.allPay)
   }
}
</script>

<style scoped>
.status{
	padding-bottom: 10px;
}
.status #content{
   margin-top: 10px;
}
/* .status .content-item{
   background-color: #e5e5e5;
} */
.status .content-item>div:first-child>span{
   display: inline-block;
   background-color: #EF8735;
   color: white;
   padding: 10px 20px;
}
.status .content-item>div:last-child{
   width: 100%;
   border-top: 1px solid #ccc;
   padding: 5px 10px;
   margin-top: 5px;
}
.status .content-item>div:nth-child(2)>p{
   margin: 10px 0;
   padding-bottom: 5px;
   border-bottom: 1px solid #eee;
}
.status .content-item #order_msg{
   display: flex;
   margin-bottom: 12px;
}
.status .content-item #order_msg>div:first-child{
   flex: 1;
   margin-right: 20px;
}
.status .content-item #order_msg>div:last-child{
   margin-top: 20px;
   flex: 4;
}
.status .content-item #order_msg img{
   width: 100%;
}
.status #order_price{
   display: flex;
   padding-bottom: 3px;
   border-bottom: 1px solid #eee;
}
.status #order_price>div:last-child{
   margin-left: 190px;
}
.status #order_price #price{
   color: #FF568A;
}
#content button{
   margin: 50px 0 0 170px;
}
</style>