<template>
  <div class="reg">
    <mt-header id="head" title="注册界面" >
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
      <mt-field
        id="co_upwd"
        :type="co_upwd_type"
        label="密码"
        placeholder="重新输入密码"
        @input="co_upwd"
        v-model="co_upwd_msg"
        :state="co_upwd_state"
        disableClear
      >
        <img
          src="../assets/眼睛.png"
          id="co_eye"
          :style="{display:co_dis}"
          @touchstart="co_show"
          @touchend="co_unshow"
        />
      </mt-field>
      <mt-button id="button" size="large" type="primary" @click="register">注册</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      upwd_type: "password",
      co_upwd_type: "password",
      uname_state: "",
      upwd_state: "",
      co_upwd_state: "",
      uname_msg: "",
      co_upwd_msg: "",
      upwd_msg: "",
      dis: "none",
      co_dis: "none",
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
        if (this.co_upwd_msg==this.upwd_msg && this.co_upwd_msg!="") {
          this.co_upwd_state = "success";
        } else if(this.co_upwd_msg!==this.upwd_msg && this.co_upwd_msg!=""){
          this.co_upwd_state = "error";
        }
      } else {
        this.upwd_state = "error";
      }
      if (this.upwd_msg != "") {
        this.dis = "block";
      } else {
        this.dis = "none";
      }
    },
    co_upwd() {
      let reg = /^\w{6,12}$/;
      let bool = reg.test(this.co_upwd_msg);
      if (this.co_upwd_msg==this.upwd_msg && bool == true) {
        this.co_upwd_state = "success";
      } else{
        this.co_upwd_state = "error";
      }
      if (this.co_upwd_msg != "") {
        this.co_dis = "block";
      } else {
        this.co_dis = "none";
      }
    },
    show() {
      this.upwd_type = "text";
    },
    co_show() {
      this.co_upwd_type = "text";
    },
    unshow() {
      this.upwd_type = "password";
    },
    co_unshow() {
      this.co_upwd_type = "password";
    },
    register(){
      if(this.uname_state == "success" && this.upwd_state == "success" && this.co_upwd_state == "success"){
        this.$indicator.open({
          text:"加载中...",
          spineerType:"fading-circle",
        })
        setTimeout(() => {
          this.$indicator.close();
          this.$router.push("/login");
        }, 800);
      }else{
        this.$messagebox("请仔细检查您的信息是否填写正确");
        return ;
      }
    }
  }
};
</script>
<style scoped>
/* #image_top{
   width: 100%;
} */
.reg #back{
  height: 40px;
}
.reg #login{
  margin-top: 10px;
}
.reg #uname,
.reg #upwd {
  margin-top: 5px;
}
.reg #button {
  margin-top: 10px;
}
.reg #upwd {
  position: relative;
}
.reg #eye {
  position: absolute;
  right: 25px;
  top: -11px;
}
.reg #co_eye {
  position: absolute;
  right: 25px;
  top: -11px;
}
</style>