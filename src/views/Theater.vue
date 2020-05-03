<template lang="pug">
    div.theater
        h1.theaterTitle {{name}}
            span {{rank}}
        div.theaterCards
            div.cardsItem(v-for='item in list',:key='item.id')
                nut-row
                    nut-col(:span='6') 
                        div.thtTime {{item.time}}
                    nut-col(:span='6') 
                        div.thtRoom {{item.room}}
                    nut-col(:span='6') 
                        div.thtPrice {{item.price}}
                    nut-col(:span='6')    
                        div.thtButton
                            span(@click="clickHandle") 立即购买

</template>
<script>
export default {
    data(){
        return{
            // 影院信息
            list:[
                {
                    id:1,
                    time:'15:30',
                    room:'国语3D三号厅',
                    price:'33.5'
                },
                {
                    id:2,
                    time:'16:30',
                    room:'国语3D四号厅',
                    price:'33.6'
                }
            ],
            // 页面显示信息
            name:'',
            rank:''
        }
    },
    mounted(){
        console.log(this.$route.params)
        this.name = this.$route.params.name
        this.rank = this.$route.params.rank
    },
    methods:{
        clickHandle(){
            this.$router.push('/booking')
        }
    }
}
</script>
<style lang='scss' scoped>
$clr:rgb(12, 44, 224);
$gld:rgb(253, 249, 0);
.theater{
    height: 100%;
    background: lightgrey;
    .theaterTitle{
        height: 44px;
        line-height: 44px;
        color:$clr;
        font-size: 22px;
        margin-bottom: 10px;
        background: whitesmoke;
        span{
            color: $gld;
            font-size: 16px;
        }
    }
    .thtTime,.thtRoom,.thtPrice,.thtButton{
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .thtButton{
        span{
            padding:3px 8px;
            color: $clr;
            border:1px solid $clr;
            &:hover{
                color:$gld;
                border-color: $gld;
                background: cornsilk;
            }
        }
    }
}
</style>