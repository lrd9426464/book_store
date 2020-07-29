import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
   //存储应用程序中共享的数据
   state: {
      islogin:sessionStorage.getItem("login_state")?sessionStorage.getItem("login_state"):false,
      whichOne:1,
      // visited:window.sessionStorage.getItem("visited")==null?"main":window.sessionStorage.getItem("visited"),
      shoppingCar:JSON.parse(window.localStorage.getItem("commodityList"))==null?[]:JSON.parse(window.localStorage.getItem("commodityList")),
      address_list:JSON.parse(window.localStorage.getItem("address"))==null?[]:JSON.parse(window.localStorage.getItem("address")),
      pay_commodity:JSON.parse(window.localStorage.getItem("pay"))==null?[]:JSON.parse(window.localStorage.getItem("pay")),
      success_commodity:JSON.parse(window.localStorage.getItem("pay_success"))==null?[]:JSON.parse(window.localStorage.getItem("pay_success")),
      err_commodity:JSON.parse(window.localStorage.getItem("pay_err"))==null?[]:JSON.parse(window.localStorage.getItem("pay_err")),
   },
   //用来操作state中的数据
   mutations: {
      is_login:(state)=>{
         state.islogin=true;
      },
      no_login:(state)=>{
         state.islogin=false;
         localStorage.clear();
      },
      selected:(state)=>{
         state.whichOne=localStorage.getItem("whichOne");
      },
      // update_visited:(state)=>{
      //    state.visited=sessionStorage.getItem("visited");
      // },
      add_commodity:(state)=>{
         state.shoppingCar.push(JSON.parse(window.localStorage.getItem("subject")));
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      del_commodity:(state,n)=>{
         state.shoppingCar.splice(n,1);
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      pay_shopping:(state,noclear)=>{
         state.shoppingCar=noclear;
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      pay(state,commodity){
         state.pay_commodity=commodity;
         window.localStorage.setItem("pay",JSON.stringify(state.pay_commodity))
      },
      clear_pay(state){
         state.pay_commodity=[];
         window.localStorage.setItem("pay",JSON.stringify(state.pay_commodity))
      },
      add_count:(state,n)=>{
         state.shoppingCar[n].count++;
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      minus_count:(state,m)=>{
         state.shoppingCar[m].count--;
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      checked:(state,i)=>{
         state.shoppingCar[i].selected=1;
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      nochecked:(state,r)=>{
         state.shoppingCar[r].selected=0;
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      add_address:(state)=>{
         state.address_list.push(JSON.parse(window.localStorage.getItem("add_address")));
         window.localStorage.setItem("address",JSON.stringify(state.address_list))
      },
      update_address:(state,update)=>{
         state.address_list[update.num]=update;
         console.log(state.address_list);
         window.localStorage.setItem("address",JSON.stringify(state.address_list))
      },
      del_address:(state,n)=>{
         state.address_list.splice(n,1);
         window.localStorage.setItem("address",JSON.stringify(state.address_list))
      },
      success:(state,success)=>{
         state.success_commodity.push(success);
         window.localStorage.setItem("pay_success",JSON.stringify(state.success_commodity))
      },
      err:(state,err)=>{
         state.err_commodity.push(err);
         window.localStorage.setItem("pay_err",JSON.stringify(state.err_commodity))
      },
      del_err:(state,m)=>{
         state.err_commodity.splice(m);
         window.localStorage.setItem("pay_err",JSON.stringify(state.err_commodity))
      }
   },
   actions: {

   },
   modules: {
   }
})
