<template>
   <div class="detail">
      <!-- <div id="button">
         <router-link to="/" slot="left">
            <mt-button icon="back" id="icon">返回</mt-button>
         </router-link>
      </div> -->
      <div id="head">
         <img src="../assets/detail/bookdemo.jpg" alt="">
         <table>
            <tr>
               <td>图书名称</td>
               <td>{{title}}</td>
            </tr>
            <tr>
               <td>价格</td>
               <td>{{price}}</td>
            </tr>
         </table>
      </div>
      <mt-navbar v-model="selected" id="navbar">
         <mt-tab-item id="1">详细信息</mt-tab-item>
         <mt-tab-item id="2">用户评论</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" id="content">
         <mt-tab-container-item id="1" >
            <div id="basis">
               <p>基本信息</p>
               <table>
                  <tr>
                     <td>出版时间</td>
                     <td>{{msg.time}}</td>
                  </tr>
                  <tr>
                     <td>版印次<i></i></td>
                     <td>{{msg.Printing}}</td>
                  </tr>
               </table>
            </div>
            <div id="directory">
               <p>目录信息</p>
               <table>
                  <tr>
                     <td>第一章 计算机基础知识</td>
                  </tr>
                  <tr>
                     <td>第二章 计算机软件基础知识</td>
                  </tr>
                  <tr>
                     <td>第三章 计算机硬件基础知识</td>
                  </tr>
               </table>
            </div>
            <div id="book">
               <p>图书简介</p>
               <p>
                  {{msg.info}}
               </p>
            </div>
         </mt-tab-container-item>
         <mt-tab-container-item id="2">
            <div>
               无
            </div>
         </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="active" fixed id="footer">
         <mt-tab-item id="main" @click.native="main">
            <img src="../assets/footer/main.png" alt="" slot="icon">
            主页
         </mt-tab-item>
         <mt-tab-item id="shopping" @click.native="toshopping">
            <img src="../assets/footer/shopping.png" alt="" slot="icon">
            购物车
         </mt-tab-item>
         <router-link to="" @click.native="shopping">加入购物车</router-link>
         <router-link to @click.native="goPay">立即购买</router-link>
      </mt-tabbar>
   </div>
</template>

<script>
export default {
   props:["did","title","price"],
   data(){
      return{
         selected:"1",
         active:"",
         msg:""
      }
   },
   methods:{
      main(){
         this.$router.push("/");
         window.sessionStorage.setItem("visited","main");
         // this.$store.commit("update_visited");
      },
      toshopping(){
         window.sessionStorage.setItem("visited","shopping");
         // this.$store.commit("update_visited");
         this.$router.push(`/shopping`);
      },
      shopping(){
         if(this.$store.state.islogin==true){
            let shoppingItem={};
            shoppingItem.title=this.title;
            shoppingItem.price=this.price;
            shoppingItem.did=this.did;
            shoppingItem.count=1;
            shoppingItem.total=this.price;
            shoppingItem.selected=0;
            if(JSON.parse(window.localStorage.getItem("commodityList"))==null || JSON.parse(window.localStorage.getItem("commodityList")).length==0){
               window.localStorage.setItem("subject",JSON.stringify(shoppingItem));
               this.$store.commit("add_commodity");
            }else{
               let sub=JSON.parse(window.localStorage.getItem("commodityList"));
               let result=sub.every((elem,i,arr)=>{
                  // console.log(elem.did)
                  return elem.did!==this.did
               })
               // console.log(result)
               if(result==false){
                  this.$toast('您的购物车里已有该商品');
                  return ;
               }else{
                  window.localStorage.setItem("subject",JSON.stringify(shoppingItem));
                  this.$store.commit("add_commodity");
               }
            }
         }else{
            this.$toast({
               message:"请先登录",
               duration:800
            })
         }
      },
      goPay(){
         if(this.$store.state.islogin==true){
            let shoppingItem={};
            let arr=[];
            shoppingItem.title=this.title;
            shoppingItem.price=this.price;
            shoppingItem.did=this.did;
            shoppingItem.count=1;
            shoppingItem.total=this.price;
            shoppingItem.selected=0;
            arr.push(shoppingItem);
            this.$store.commit("pay",arr);
            this.$router.push(`/pay`);
         }else{
            this.$toast({
               message:"请先登录",
               duration:800
            })
         }
      }
   },
   mounted(){
      // console.log(this.image)
      this.axios.get(`/detail?did=${this.did}`).then(result=>{
         let data=result.data[0];
         this.msg=data;
         // console.log(data)
      })
   }
}
</script>

<style scoped>
   .detail{
      background-color: #e8e8e8;
   }
   .detail #button{
      position: fixed;
   }
   .detail #icon{
      background-color: rgba(0, 0, 0, .1);
   }
   .detail>#head{
      background-color: white;
      margin-bottom: 10px;
   }
   .detail>#head>a{
      color: red;
   }
   .detail #head img{
      width: 100%;
   }
   .detail #head table tr td:first-child{
      text-align: right;
   }
   .detail #content{
      background-color: white;
      margin-bottom: 60px;
   }
   .detail #content p:first-child{
      margin: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
   }
   .detail #basis p:first-child,
   .detail #directory p:first-child,
   .detail #book p:first-child{
      text-align: center;
   }
   .detail #book p:last-child{
      padding: 0 10px;
      text-indent: 2rem;
   }
   .detail table{
      padding-left: 30px;
   }
   .detail table tr td{
      padding: 10px 0 10px 25px;
   }
   .detail #footer>a{
      text-decoration: none;
      line-height: 55px;
   }
   .detail #footer>a:nth-child(3),
   .detail #footer>a:last-child{
      color: white;
      padding: 0 15px;
   }
   .detail #footer>a:nth-child(3){
      background-color: #28B0E1;
   }
   .detail #footer>a:last-child{
      background-color: #DD5808;
   }
</style>