<template>
  <div class="address">
    <mt-header id="head" title="我的收货地址">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div id="adress_list">
      <div id="address_item" v-for="(elem,i) in $store.state.address_list" :key="i">
        <div id="address_content">
          <p>
            <span>{{elem.username}}</span>
            <span>{{elem.phone}}</span>
          </p>
          <p>{{elem.address}}</p>
        </div>
        <div id="address_edit">
            <router-link @click.native="del" :data-num="i" to>删除</router-link>
            <span>|</span>
            <router-link @click.native="changeOne" :data-num="i" to>编辑</router-link>
        </div>
      </div>
    </div>

    <router-link @click.native="editOne" to>
      <mt-palette-button
        id="add_address"
        content="+"
        mainButtonStyle="color:#fff;background-color:#26a2ff;"
      >
        <div class="my-icon-button"></div>
      </mt-palette-button>
    </router-link>
  </div>
</template>

<script>
export default {
   methods:{
      changeOne(e){
         let i=e.target.dataset.num;
         this.$store.state.address_list[i].num=i;
        //  console.log(this.$store.state.address_list[i]);
         window.sessionStorage.setItem("change",JSON.stringify(this.$store.state.address_list[i]))
         this.$router.push("/editAddress");
      },
      editOne(){
         window.sessionStorage.clear();
         this.$router.push("/editAddress");
      },
      del(e){
         let num=e.target.dataset.num;
         this.$store.commit("del_address",num);
         this.sum=this.$store.state.shoppingCar.length;
         this.num=0;
      }
   }

}
</script>

<style scoped>
.address #add_address {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.address #adress_list a{
   text-decoration:none;
   color:#ccc;
}
.address #address_item{
   height: 80px;
   display: flex;
   background-color: #eee;
   width: 100%;
   border-bottom: 1px solid #ddd;
}
.address #address_content{
   flex: 4;
   padding-left: 20px;
   align-self: center;
   word-break: break-all;
   white-space:pre-wrap;
}
.address #address_content p:first-child span:last-child{
   position: absolute;
   left: 35%;
}
.address #address_content p{
   margin: 10px 0;
}
.address #address_edit{
   flex: 2;
   text-align: center;
   align-self: center;
}
.address #address_edit span{
   margin-right: 10px;
   color: #ccc;
}
</style>