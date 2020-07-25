<template>
  <div class="home">
    <mt-header title="首页" fixed>
      <div id="log_reg" slot="right">
        <div>
          <router-link to="/register">
            <span id="reg">注册</span>
          </router-link>
        </div>
      </div>
    </mt-header>
    <div id="content">
      <ul @click="active">
        <li v-for="(elem,i) of book_list" :key="i" :data-num="i">{{elem.object}}</li>
      </ul>
      <div id="list" infinite-scroll-distance="10" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" :infinite-scroll-immediate-check="true">
        <div id="list-header">
          <span>{{anotherName}}</span>
          <span>全部商品</span>
        </div>
        <div class="list-item" v-for="(elem,i) of book_msg" :key="i" @click="info(elem.vid,elem.title,elem.price)">
          <img v-lazy="elem.image" alt="">
          <div>
            <p>书名：{{elem.title}}</p>
            <p>作者：{{elem.author}}</p>
            <p>价格：{{elem.price}}</p>
          </div>
        </div>
        <div id="bottom" v-show="isshow">
          已经到底了..
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      book_list:[],
      book_msg:[],
      num:1,
      anotherName:"石油",
      page:1,
      busy:false,
      isshow:false
    }
  },
  methods:{
    active(e){
      let li=document.getElementsByClassName("hover");
      li[0].removeAttribute("class");
      e.target.setAttribute("class","hover");
      this.num=Number(e.target.getAttribute("data-num"))+1;
      this.anotherName=this.book_list[this.num-1].anothername;
      window.localStorage.setItem("whichOne",this.num);
      this.$store.commit("selected");
      this.select(this.$store.state.whichOne);
      // console.log(this.$store.state.whichOne)
      // console.log(this.book_list);
    },
    select(n){
      // this.book_msg=[];
      this.axios.get(`/article?cid=${n}&page=${this.page}`).then(result=>{
        let data=result.data.results;
        let num=result.data.num;
        this.num=num;
        // console.log(this.num)
        data.forEach(elem=>{
          if(elem.image!=null){
            elem.image=require(`../assets/${elem.image}`)
          }
          this.book_msg.push(elem);
        })
        let ul=document.querySelectorAll("#content>ul")[0];
        let li=ul.querySelectorAll("li");
        let j=n-1;
        li[j].setAttribute("class","hover")
        // console.log(li[j]);
      });
    },
    info(i,t,p){
      this.$router.push(`/details/${i}&${t}&${p}`)
    },
    loadMore(){
      this.page++;
      if(this.num<this.page){
        this.isshow=true;
        return ;
      }
      this.busy=true;
      this.$indicator.open({
        text:"加载中...",
        spineerType:"fading-circle"
      }),
      setTimeout(() => {
        this.select(this.$store.state.whichOne);
        this.busy=false,
        this.$indicator.close();
      }, 1000);
      // console.log("1");
    }
  },
  mounted(){
    this.axios.get("/home").then(result=>{
      this.book_list=result.data;
    });
    this.select(this.$store.state.whichOne);
  },
  watch:{
    num(){
      this.page=1;
      this.book_msg=[];
      this.select(this.$store.state.whichOne)
    }
  }
}
</script>

<style scoped>
  .home{
    margin-bottom: 60px;
  }
  .home #log_reg a {
    text-decoration: none;
    color: white;
  }
  .home #reg,
  .home #logout {
    margin-left: 10px;
  }
  #content{
    margin-top: 40px;
    display: flex;
  }
  #content>ul {
    width: 35%;
    list-style: none;
    font-size: 15px;
    overflow: scroll;
    position: fixed;
    left: 0;
    top: 40px;
    bottom: 60px;
  }
  #content > ul > li{
    background-color: #f3f4f6;
    padding: 15px 24px;
    border-bottom: 1px solid #e5e5e5;
    color: #333;
  }
  #content .hover{
    background-color: white;
  }
  #content #list{
    font-size: 15px;
    width:60%;
    position: fixed;
    right: 10px;
    top: 40px;
    bottom: 60px;
    overflow: scroll;
  }
  #content #list-header{
    line-height: 45px;
    color: #333;
    border-bottom: 1px solid #ccc;
  }
  #content #list-header>span:first-child{
    margin-left: 20px;
  }
  #content #list-header>span:last-child{
    position: absolute;
    right: 20px;
  }
  #content #list .list-item{
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 2px dotted #ccc;
    margin-top: 10px;
  }
  #content #list>.list-item>img{
    height: 90%;
    margin-right: 30px;
  }
  #content #list>.list-item>div>p{
    margin: 12px 0;
  }
  .home #bottom{
    color: #aaa;
    margin: 10px 0;
    text-align: center;
  }
</style>