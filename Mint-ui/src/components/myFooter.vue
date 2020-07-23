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
         visited:this.$store.state.visited
      }
   },
   methods:{
      me(){
         window.localStorage.setItem("visited","me");
         this.$store.commit("update_visited");
         this.$router.push("/me");
      },
      shopping(){
         window.localStorage.setItem("visited","shopping");
         this.$store.commit("update_visited");
         this.$router.push("/shopping");
      },
      main(){
         window.localStorage.setItem("visited","main");
         this.$store.commit("update_visited");
         this.$router.push("/");
      }
   }
}
</script>
<style scoped>
   .footer #bottom{
      height: 60px !important;
   }
</style>