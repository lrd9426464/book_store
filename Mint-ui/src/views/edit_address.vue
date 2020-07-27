<template>
  <div class="edit">
    <mt-header title="编辑收货地址">
      <router-link to="/address" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field label="姓名" placeholder="收货人" v-model="username"></mt-field>
    <mt-field label="手机号" placeholder="手机号码" type="tel" v-model="phone" :attr="{maxlength:'11'}"></mt-field>
    <mt-field label="地址" placeholder="详细地址：如省，市，县，道路，门牌号，小区，楼栋等" type="textarea" v-model="address"></mt-field>
    <mt-cell title="地址标签" is-link @click.native="choose_popup">{{address_label}}</mt-cell>
    <mt-popup id="popup" position="bottom" v-model="popupVisible">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
    <div id="button">
      <mt-button @click.native="save_address"  type="danger" size="small">保存</mt-button>
    </div>
  </div>
</template>

<script>
export default {
   // props:["username1","phone1","address1","address_label1"],
  data() {
    return {
      username: "",
      phone: "",
      address: "",
      popupVisible: false,
      address_label: "",
      slots: [
        {
          className: "slot1",
          values: ["家", "公司", "学校"],
        },
      ],
    };
  },
  methods: {
    choose_popup() {
      this.popupVisible = true;
    },
    onValuesChange(picker, values) {
      this.address_label = values[0];
      // console.log(this.popupVisible);
    },
    save_address() {
      let add_address = {};
      let n=0;
      add_address.username = this.username;
      console.log(this.username)
      add_address.phone = this.phone;
      add_address.address = this.address;
      add_address.address_label = this.address_label;
      for(var key in add_address){
         if(add_address[key]==""){
            n++;
            this.$messagebox.alert("请仔细检查内容是否填写完整");
         }
      }
      if(n==0){
        if(window.sessionStorage.getItem("change")!==null){
          let m=JSON.parse(window.sessionStorage.getItem("change")).num;
          add_address.num=m;
          this.$store.commit("update_address",add_address);
        }else{
            window.localStorage.setItem("add_address",JSON.stringify(add_address));
            this.$store.commit("add_address");
        }
        this.$router.push("/address");
      }
    }
  },
  mounted(){
      //  console.log("1313213")
      if(window.sessionStorage.getItem("change")!==null){
        this.username=JSON.parse(window.sessionStorage.getItem("change")).username;
        this.phone=JSON.parse(window.sessionStorage.getItem("change")).phone;
        this.address=JSON.parse(window.sessionStorage.getItem("change")).address;
        this.address_label=JSON.parse(window.sessionStorage.getItem("change")).address_label;
      }
       
   }
};
</script>

<style scoped>
.edit #popup {
  width: 100%;
}
.edit #button{
   margin-top: 40px;
   text-align: center;
}
</style>