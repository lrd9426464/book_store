import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
   //存储应用程序中共享的数据
   state: {
      islogin:localStorage.getItem("login_state")?localStorage.getItem("login_state"):false,
      whichOne:1,
      visited:localStorage.getItem("visited"),
      shoppingCar:JSON.parse(window.localStorage.getItem("commodityList"))==[]?[]:JSON.parse(window.localStorage.getItem("commodityList"))
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
      update_visited:(state)=>{
         state.visited=localStorage.getItem("visited");
      },
      add_commodity:(state)=>{
         state.shoppingCar.push(JSON.parse(window.localStorage.getItem("subject")));
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      },
      del_commodity:(state,n)=>{
         state.shoppingCar.splice(n,1);
         window.localStorage.setItem("commodityList",JSON.stringify(state.shoppingCar))
      }
   },
   actions: {

   },
   modules: {
   }
})
