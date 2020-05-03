<template lang="pug">
    div#user
        div.userContent
            div.userMethods
                span.userTitle 我的订单
                span.selected-option >
            div.userMethods
                span.userTitle 优惠券
                span.selected-option >
            div.userMethods
                span.userTitle 会员卡
                span.selected-option >
            div.userMethods
                span.userTitle 想看的电影
                span.selected-option >
            div.userMethods
                span.userTitle 看过的电影
                span.selected-option >   
            nut-button(block,@click='clickHandle') 点击退出                 
        Footer(flag='my')
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return{
            sex: '请选择',
            isVisible: false,
            menuItems: [
                {
                    'name': '男',
                    'value': 0
                },
                {
                    'name': '女',
                    'value': 1
                }
            ]
        }
    },
    methods:{
        clickHandle(){
            this.$router.push('/login')
        }
    },
    components:{
        Footer,
    }
}
</script>
<style lang="scss" scoped>
#user{
    flex: 1;
    display: flex;
    flex-direction: column;
    .userContent{
        flex:1
    }
}
.userMethods{
    height: 44px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    .userTitle{
        flex: 1;
        text-align: left;
    }
    .selected-option{
        width: 20px;
    }
}
</style>