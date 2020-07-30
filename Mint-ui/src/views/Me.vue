<template>
  <div class="Me">
    <!-- <mt-header title="个人中心"></mt-header> -->
    <div id="background"></div>
    <div id="login">
      <img src="../assets/me/my-head.png" alt />
      <div v-if="!$store.state.islogin">
        <img src="../assets/me/show-login.png" alt />
        <span>您还未登录</span>
      </div>
      <div v-else>
        <span>欢迎您!</span>
      </div>
      <a href="javascript:;" v-if="!$store.state.islogin" @click="login">登录</a>
      <a href="javascript:;" v-else @click="logout">注销</a>
    </div>
    <div id="order">
      <mt-cell title="全部订单" is-link to="/payStatus" value="查看所有订单"></mt-cell>
    </div>
    <ul>
      <li>
        <router-link to="/payStatus">
          <img src="../assets/me/fukuan.png" alt />
          <p>待付款</p>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../assets/me/fahuo.png" alt />
          <p>待发货</p>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../assets/me/shouhuo.png" alt />
          <p>已发货</p>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../assets/me/yishouhuo.png" alt />
          <p>已收货</p>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../assets/me/pingjia.png" alt />
          <p>待评价</p>
        </router-link>
      </li>
    </ul>
    <div id="check">
      <mt-cell title="管理收货地址" is-link to="/address">
        <img slot="icon" src="../assets/me/address.png" />
      </mt-cell>
      <mt-cell title="用户协议" is-link>
        <img slot="icon" src="../assets/me/user.png" />
      </mt-cell>
      <mt-cell title="常见问题" is-link>
        <img slot="icon" src="../assets/me/que.png" />
      </mt-cell>
      <mt-cell title="联系客服" is-link>
        <img slot="icon" src="../assets/me/kefu.png" />
      </mt-cell>
      <mt-cell title="关于我们" is-link>
        <img slot="icon" src="../assets/me/about-us.png" />
      </mt-cell>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.commit('no_login');
    }
  },
  mounted(){
    window.sessionStorage.setItem("visited","me")
  }
};
</script>

<style scoped>
.Me {
  background-color: #e8e8e8;
  margin-bottom: 60px;
}
.Me #background {
  width: 100%;
  height: 150px;
  background-color: #f8d795;
}
.Me #login {
  width: 320px;
  height: 200px;
  text-align: center;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid #e8e8e8;
  border-radius: 10px;
}
.Me #login > img {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
}
.Me #login > div {
  text-align: center;
  font-size: 25px;
  margin-top: 70px;
}
.Me #login > a {
  text-decoration: none;
  display: inline-block;
  margin-top: 30px;
  padding: 10px 40px;
  background-color: #fff;
  border: 3px solid #dd5808;
  border-radius: 20px;
  color: #dd5808;
  font-size: 20px;
}
.Me #order {
  padding-top: 160px;
  padding-bottom: 10px;
  background-color: #fff;
}
.Me ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding-bottom: 10px;
}
.Me ul a {
  text-decoration: none;
  color: #333;
}
.Me ul > li {
  text-align: center;
}
.Me ul p{
   margin-top: 6px;
}
.Me #check {
  margin-top: 10px;
}
</style>