<template lang='pug'>
  div#app
      nut-navbar(style="background-color:#78a4f4; color: #fff; height:60px; line-height: 60px;"
      :leftShow="showBack" :rightShow="false"  @on-click-back="backHandle" v-if='showTop'
      ) {{title}}
      keep-alive
          router-view(v-if='$route.meta.keepAlive')

      router-view(v-if='!$route.meta.keepAlive')  
</template>

<script>
export default {
  data(){
    return{
      showBack:false, //返回按钮显示隐藏控制
      showTop:true,// 顶部导航是否显示
      title:'小莱电影',
      route:[
        // 路由名字                    // 是否显示返回按钮
        { name:'Hmoe', title:'小莱电影',  flag:false, },
        { name:'Order', title:'订单',  flag:false, },
        { name:'User', title:'用户中心',  flag:false, },
        { name:'Detail', title:'详情页',  flag:true, },
        { name:'Theater', title:'影院',  flag:true, },
        { name:'Booking', title:'选座',  flag:true, },
        { name:'Login', title:'选座',  flag:false, },
        { name:'Register', title:'注册',  flag:true, },
      ]
    }
  },
  watch:{
    // 监听路由地址变化
    '$route'(newVal){
      for(const item of this.route){
        // 特殊
        if(newVal.name === 'Login' )
          this.showTop = false
        else
          this.showTop = true
        
        if(newVal.name == item.name){
          this.showBack = item.flag
          this.title = item.title
          break;
        }
      }
    }
  },
  methods:{
    backHandle(){
      this.$router.back()
    }
  }
}
</script>


<style lang="scss">
*{
  margin:0;
  padding: 0;
}
html,body{
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
