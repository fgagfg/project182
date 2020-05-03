<template lang="pug">
    div.booking
        //- 电影相关信息
        div.movInfo {{name}}
            div.startTime {{startTime}}
        //- 影厅座位分布
        div.roomSeats
            //- 屏幕
            span.screen {{room}}
            //- 座位
            div.seatsContainer
                div.seatsItem(v-for='item in seatsList',:key='item.id',@click='seatsClick(item)')
                    span(:class="`${item.status==1?'iconfont choosed':item.status==2?'iconfont sailed':'iconfont'}`") &#xe69a;
                    i {{item.col}}
        //- 座位状态显示
        div.seatsState 
            //- 可选
            span.seatsWords 可选
            span(class='iconfont choose')  &#xe69a;
            //- 已选
            span.seatsWords 已选
            span(class='iconfont choosed')  &#xe69a;
            //- 已售
            span.seatsWords 已售
            span(class='iconfont sailed')  &#xe69a;
        //-  选座情况
        div.seatsInfo 
            div.seatsTitle 已选座位
            div.ticketsBox
                div.seatsItem(v-for='item in ticketsList',:key='item.id',@click='ticketsClick(item)') 
                    div.seats  {{`${item.row}排 ${item.col}座`}}
                    div.price  ￥10
        //- 结算按钮
        div.payButton(@click='payOrder') {{`${total}确认选座`}}
</template>
<script>
export default {
    data(){
        return{
            name:'',// 电影名
            startTime:'今天10:30',// 电影开始时间
            room:'',//放映厅
            
            // total:10,//所选座位的总价
            // 座位数据
            seatsList:[
                //id 座位is, row 第几排  col 第几列 status 座位状态 0 可选 1 已选择 2 已售
                { id:1,row:1,col:1,status:0 },
                { id:2,row:1,col:2,status:0 },
                { id:3,row:1,col:3,status:0 },
                { id:4,row:1,col:4,status:0 },
                { id:5,row:1,col:5,status:0 },
                { id:6,row:1,col:6,status:0 },
                { id:7,row:1,col:7,status:0 },
                { id:8,row:1,col:8,status:0 },
                { id:9,row:1,col:9,status:0 },
                { id:10,row:1,col:10,status:0 },
                { id:11,row:2,col:1,status:0 },
                { id:12,row:2,col:2,status:0 },
                { id:13,row:2,col:3,status:0 },
                { id:14,row:2,col:4,status:0 },
                { id:15,row:2,col:5,status:0 },
                { id:16,row:2,col:6,status:0 },
                { id:17,row:2,col:7,status:0 },
                { id:18,row:2,col:8,status:0 },
                { id:19,row:2,col:9,status:0 },
                { id:20,row:2,col:10,status:0 },
                { id:21,row:3,col:1,status:0 },
                { id:22,row:3,col:2,status:0 },
                { id:23,row:3,col:3,status:0 },
                { id:24,row:3,col:4,status:0 },
                { id:25,row:3,col:5,status:0 },
                { id:26,row:3,col:6,status:0 },
                { id:27,row:3,col:7,status:0 },
                { id:28,row:3,col:8,status:0 },
                { id:29,row:3,col:9,status:0 },
                { id:30,row:3,col:10,status:0 },
                { id:31,row:4,col:1,status:0 },
                { id:32,row:4,col:2,status:0 },
                { id:33,row:4,col:3,status:0 },
                { id:34,row:4,col:4,status:0 },
                { id:35,row:4,col:5,status:0 },
            ],
            // 购票信息数组
            ticketsList:[]
        }
    },
    mounted(){
        const data = this.$route.params
        console.log(data)
        this.name = data.name
        this.room = data.room
    },
    computed:{
        total(){
            return this.ticketsList.length>0? `￥${this.ticketsList.length*10} ` :''
        }
    },
    methods:{
        seatsClick(item){
            console.log(item)
            if(item.status == 2) return false // 当status为2，说明该座位已售出，不允许购买
            if(item.status == 1) {
                //  当点击status为1的座位时 代表用户取消该座位的选择
                // 修改座位数组中的数据状态
                item.status = 0 
                // 修改购票信息中的数据状态
                for(let i = 0;i<this.ticketsList.length ;i++){
                    if(item.id == this.ticketsList[i].id){
                        this.ticketsList.splice(i,1)
                        break;
                    }
                }
                return false
            }
            if(item.status == 0){
                item.status = 1
                this.ticketsList.push(item)
            }
            
        },
        ticketsClick(item){
            // 将匹配到的购票信息数据删除
            for(let i = 0;i<this.ticketsList.length ;i++){
                if(item.id == this.ticketsList[i].id){
                    this.ticketsList.splice(i,1)
                    break;
                }
            }
            // 将座位状态从已选变为可选   status 1->0
            for(const obj of this.seatsList){
                if(obj.id == item.id) obj.status = 0
            }
        },
        payOrder(){
            if(this.ticketsList.length>0){
                alert('购买成功')
                
                // 1.将下单的座位的状态进行修改
                for(const item of this.seatsList){
                    if(item.status == 1) item.status = 2  
                }
                //  将订单信息存入localStorage
                let list = localStorage.getItem('list')
                if(list){ //如果有list将list转化为数组
                    list = JSON.parse(list)
                }else{ // 若没有list 则把list创建为一个数组
                    list = []
                }
                let seats = []
                for(const item of this.ticketsList){
                    //生成订单的座位信息
                    seats.push(`${item.row}排 ${item.col}座`)
                }
                list.push({
                    id:new Date().getTime(),
                    name:this.name,
                    count:this.ticketsList.length,
                    date:this.startTime,
                    seats:seats,
                    price:this.ticketsList.length*10,
                    status:1
                })
                localStorage.setItem('list',JSON.stringify(list))
                
                // 2. 将购票信息数组清空
                this.ticketsList = []
            } 
            else alert('请先选择座位')
        }
    }   
}
</script>
<style lang="scss" scoped>
$border:1px solid #000;
@mixin flx($direction:column){
    display:flex;
    flex:1;
    flex-direction: $direction;
}
.booking{
   @include flx;
    .movInfo{
        height: 50px;
        line-height: 25px;
        border-bottom:$border;
        text-align: left;
        padding-left:5px;
        color:darkslategrey;
        font-size:18px;
        font-weight: 600;
        .startTime{
            font-size: 14px;
            font-weight: 100;
            color:#777
        }
    }
    .roomSeats{
        @include flx;
        background: #f1f1f1;
        .screen{
            padding:3px 12px;
            background: darkturquoise;
        }
        .seatsContainer{
            @include flx(row);
            width:100%;
            justify-content: center;
            box-sizing: border-box;
            padding: 8px;
            flex-wrap:wrap;
            align-items:flex-start;
            .seatsItem{
                @include flx;
                flex:0;
                width:10%;
            }
            .iconfont{
                font-size: 34px;
            }
        }
    }
    .seatsState{
        height: 30px;
        line-height: 30px;
        .iconfont{
            font-size: 20px;
        }
    }
    .seatsInfo{
        height: 130px;
        @include flx;
        .seatsTitle{
            text-align: left;
            height: 30px;
        }
        .ticketsBox{
            @include flx(row);
            overflow-y: auto;
            flex-wrap:wrap;
            align-items:flex-start;
            .seatsItem{
                width:30%;
                height: 50px;
                background: chocolate;
            }
        }
    }
    .payButton{
        height: 40px;
        line-height: 40px;
        background: darkcyan;
        color:#fff;
    }
    .choosed{
        color:lime
    }
    .sailed{
        color:mediumvioletred;
    }
}
</style>
