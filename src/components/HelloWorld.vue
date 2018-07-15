<template>
  <div>
   <ul>
         <li v-for="item in itemlis">{{ item.title }}</li>
     </ul>
  </div>
</template>

<script>
import css from '../assets/css/base.css'
import Vue from'vue'
import  VueResource  from 'vue-resource'

Vue.use(VueResource)
export default {
  name: 'HelloWorld',

   created:function(){
     this.$http.get('api/seller').then((res)=>{
         var arrJson=JSON.parse(res.bodyText)
         this.itemlis=arrJson.data.list  //注意使用箭头函数才可用this不然需要在函数外先定义变量把this赋值给变量
         console.log(this.itemlis)
     },function(err){
         console.log(err)
     })
   },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemlis:[],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
