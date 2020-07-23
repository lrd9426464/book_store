import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
   //存储应用程序中共享的数据
   state: {
      islogin:localStorage.getItem("login_state")?localStorage.getItem("login_state"):false,
      whichOne:1,
      visited:"main"
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
      }  
   },
   actions: {

   },
   modules: {
   }
})
