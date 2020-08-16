import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
// import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'
// Vue.component("my-header",myHeader);
Vue.component("my-footer",myFooter);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI);

axios.defaults.baseURL="http://127.0.0.1:3000/";
Vue.prototype.axios=axios;
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let arr=["/pay","/payMethod","/payStatus","/paySuccess","/shopping"]
  let result=arr.some(item=>{
    return item==to.path;
  })
  console.log(document.cookie.split(";")[0].split("=")[1])
  if (result==true && (window.sessionStorage.getItem("login_state")==false || window.sessionStorage.getItem("login_state")==null)) {
	  console.log("meidenglu")
    next({
      path:"/login"
    })
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
