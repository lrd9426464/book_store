<template>
   <div class="footer">
      <mt-tabbar v-model="visited" fixed id="bottom">
         <mt-tab-item id="main" @click.native="main">
            <img src="../assets/footer/main-active.png" alt="" slot="icon" v-show="visited=='main'">
            <img src="../assets/footer/main.png" alt="" slot="icon" v-show="visited!='main'">
            首页
         </mt-tab-item>
         <mt-tab-item id="shopping" @click.native="shopping">
            <img src="../assets/footer/shopping-active.png" alt="" slot="icon" v-show="visited=='shopping'">
            <img src="../assets/footer/shopping.png" alt="" slot="icon" v-show="visited!='shopping'">
            购物车
         </mt-tab-item>
         <mt-tab-item id="me" @click.native="me">
            <img src="../assets/footer/me-active.png" alt="" slot="icon" v-show="visited=='me'">
            <img src="../assets/footer/me.png" alt="" slot="icon" v-show="visited!='me'">
            我的
         </mt-tab-item>
      </mt-tabbar>
   </div>
</template>
<script>
export default {
   data(){
      return {
         visited:window.sessionStorage.getItem("visited")
      }
   },
   methods:{
      me(){
         window.sessionStorage.setItem("visited","me");
         // this.$store.commit("update_visited");
         this.$router.push("/me");
      },
      shopping(){
         window.sessionStorage.setItem("visited","shopping");
         // this.$store.commit("update_visited");
         this.$router.push("/shopping");
      },
      main(){
         window.sessionStorage.setItem("visited","main");
         // this.$store.commit("update_visited");
         this.$router.push("/");
      }
   },
   mounted(){
	   console.log(this.visited)
   }
}
</script>
<style scoped>
   .footer #bottom{
      height: 60px !important;
   }
</style>