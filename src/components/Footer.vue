<template lang="pug">
    div.footer
        nut-row
            nut-col(:span="8")
                div(@click='clickHandle("mov")',:class="flag==='mov'?'jumpButton active':'jumpButton'") 
                    span.iconfont &#xe642; 
                    span.words 电影
            nut-col(:span="8")
                div(@click='clickHandle("order")',:class="flag==='order'?'jumpButton active':'jumpButton'")
                    span.iconfont &#xe610;
                    span.words 订单
            nut-col(:span="8")
                div(@click='clickHandle("my")',:class="flag==='my'?'jumpButton active':'jumpButton'")
                    span.iconfont &#xe61d;
                    span.words 我的    
</template>
<script>
export default {
    name:'Footer',
    props:{
        flag:{
            default:'',
            type:String
        }
    },
    methods:{
        clickHandle(str){
            if(str === 'mov') this.$router.push('/')
            if(str === 'order') this.$router.push('/order')
            if(str === 'my') this.$router.push('/user')
        }
    },
    
    
}
</script>
<style lang="scss">
.footer{
    height: 44px;
    // line-height: 44px;
    background: #78a4f4;
    color: #ffffff;
    .jumpButton{
        display:flex;
        flex-direction: column;
        flex:1;
        height: 44px;
        .iconfont{
            font-size: 22px;
        }
        .words{
            font-size: 12px;
        }
        &.active{
            color : orange;
        }
    }
}
</style>
