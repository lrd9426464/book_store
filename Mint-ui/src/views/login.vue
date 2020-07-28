<template>
  <div class="log">
    <mt-header id="head" title="登录界面">
      <router-link to="/" slot="left">
        <mt-button id="back" icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- <img id="image_top" src="../assets/timg.jpg" alt=""> -->
    <div id="login">
      <mt-field
        id="uname"
        type="text"
        label="账号"
        placeholder="请输入账号"
        @input="uname"
        v-model="uname_msg"
        :state="uname_state"
        disableClear
      ></mt-field>
      <mt-field
        id="upwd"
        :type="upwd_type"
        label="密码"
        placeholder="请输入密码"
        @input="upwd"
        v-model="upwd_msg"
        :state="upwd_state"
        disableClear
      >
        <img
          src="../assets/眼睛.png"
          id="eye"
          :style="{display:dis}"
          @touchstart="show"
          @touchend="unshow"
        />
      </mt-field>
      <mt-button id="button" size="large" type="primary" @click="login">登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      upwd_type: "password",
      uname_state: "",
      upwd_state: "",
      uname_msg: "",
      upwd_msg: "",
      dis: "none"
    };
  },
  methods: {
    uname() {
      let reg = /^[a-zA-Z0-9]{4,8}$/;
      let bool = reg.test(this.uname_msg.trim());
      if (bool == true) {
        this.uname_state = "success";
      } else {
        this.uname_state = "error";
      }
    },
    upwd() {
      let reg = /^\w{6,12}$/;
      let bool = reg.test(this.upwd_msg);
      if (bool == true) {
        this.upwd_state = "success";
      } else {
        this.upwd_state = "error";
      }
      if (this.upwd_msg != "") {
        this.dis = "block";
      } else {
        this.dis = "none";
      }
    },
    show() {
      this.upwd_type = "text";
    },
    unshow() {
      this.upwd_type = "password";
    },
    login() {
      if (this.uname_state == "success" && this.upwd_state == "success") {
        sessionStorage.setItem("login_state", true);
        this.$store.commit("is_login");
        this.$router.push("/me")
      } else {
        this.$messagebox("请仔细检查您的信息是否填写正确");
        return;
      }
    }
  },
  mounted(){
  }
};
</script>
<style scoped>
/* #image_top{
   width: 100%;
} */
.log #back {
  height: 40px;
}
.log #login {
  margin-top: 10px;
}
.log #uname,
.log #upwd {
  margin-top: 5px;
}
.log #button {
  margin-top: 10px;
}
.log #upwd {
  position: relative;
}
.log #eye {
  position: absolute;
  right: 25px;
  top: -11px;
}
</style>