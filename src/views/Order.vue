<template lang="pug">
    div#order
        div.orderContent(v-if='hasOrder')
            div.orderCard(v-for='item in orderList' :key='item.id')
                div
                    nut-row
                        nut-col(:span="5") 
                            div.leftBox
                                div.img
                        nut-col(:span="19") 
                            div.rightBox
                                p.orderName {{item.name}}
                                p.orderDate {{item.date}}
                                p.orderPlace {{item.seats.join(',')}}

                div {{`总价：${item.price}元`}}
                    span {{'已完成'}}
        
        
        div.noOrder(v-if='!hasOrder') 没有订单
        
        Footer(flag='order')
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return{
            orderList:[
                {
                    id:1,
                    name:'芳华',
                    count:4,
                    date:'2020-04-10 09:02',
                    seats:[
                        '位置一','位置二','位置三','位置四'
                    ],
                    price:120,
                    status:1
                }
            ],
            hasOrder:false,
        }
    },
    components:{
        Footer,
    },
    mounted(){
        const list = localStorage.getItem('list')
        if(list&&list.length>0){
            this.orderList = JSON.parse(list)
            this.hasOrder = true
        }else{
            this.hasOrder = false
        }
    }
}
</script>
<style lang="scss" scoped>
#order{
    display: flex;
    flex-direction: column;
    flex: 1;
    .orderContent{
        flex: 1;
        .leftBox,.rightBox{
            width: 100%;
            height: 150px;
            box-sizing: border-box;
            padding: 3px;
            
        }
        .img{
            height: 100%;
            background: red;
        }
        .rightBox{
            background: chartreuse;
        }
       
    }
    .noOrder{
        flex:1;
    }
}
</style>