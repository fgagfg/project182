<template lang="pug">
    div.detail
        div.detailUp
            nut-row
                nut-col(:span="8")
                    div.imgWarp
                        div.img
                nut-col(:span="16")
                    div.dataWarp
                        //-影片名 
                        div.detailName {{name}}
                        //- 星级
                        nut-rate(:readOnly="true",v-model='star',:size='15')
                        //- 评分
                        div.detailRank {{rank}}
                        //- 描述
                        div.detailTag {{tag.join('、')}}
                        //- 演员
                        div.detailActor {{actor.join(',')}}
                        //- 时间
                        div.detailTime {{`上映时间: ${date}`}}
        div.detailMiddle {{text}}
        div.detailBottom(@click='clickHandle') 立即购票
</template>

<script>
export default {
    data(){
        return{
            list:[
                 {
                    id:1,
                    name:'芳华',
                    img:'red',
                    option:'2D',
                    screen:'IMAX',
                    score:'9.9分',
                    star:5,
                    split:['剧情','爱情','战争'],
                    actor:['黄轩','苗苗'],
                    date:'2020-04-10 15:16'
                },
                {
                    id:2,
                    name:'芳华1',
                    img:'red',
                    option:'2D',
                    screen:'IMAX',
                    score:'9.8分',
                    star:4,
                    split:['剧情','爱情','战争'],
                    actor:['黄轩','苗苗'],
                    date:'2020-04-11 15:16'
                },
                {
                    id:3,
                    name:'芳华2',
                    img:'red',
                    option:'2D',
                    screen:'IMAX',
                    score:'9.7分',
                    star:3,
                    split:['剧情','爱情','战争'],
                    actor:['黄轩','苗苗'],
                    date:'2020-04-12 15:16'
                }
            ],
            text:'',
            name:'',
            star:0,
            rank:0,
            tag:[],
            actor:[],
            date:'',
            id:null,
        }
    },
    mounted(){
        // console.log(this.$route.query) //明文传参参数获取
        // 非明文传参参数获取
        console.log(this.$route.params)
        // 获取电影详情的id
        const id = this.$route.params.id
        this.id = id
        for(const item of this.list){
            if(item.id == id){
                this.name = item.name
                this.star = item.star
                this.rank = item.score
                this.tag = item.split
                this.actor = item.actor
                this.date = item.date
                break
            }
        }
        this.text ='用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子,通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由该文档通篇都常使用 router 实例。留意一下 this.$router 和 router 使用起来完全一样。我们使用 this.$router 的原因是我们并不想在每个独立需要封装路由的组件中都导入路由'
    },
    methods:{
        clickHandle(){
            this.$router.push({
                name:'Theater',
                params:{
                    name:this.name,
                    rank:this.rank
                }
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.detail{
    height: 100%;
    display: flex;
    flex-direction: column;
    // 上
    .detailUp{
        background: gainsboro;
       
        .imgWarp,.dataWarp{
            width: 100%;
            height:150px;
            box-sizing: border-box;
            padding: 3px;
            
        }
         // 左
        .img{
                height: 100%;
                width: 100%;
                background: rgb(119, 8, 8);
            }
        // 右
        .dataWarp{
            text-align: left;
            color: #fff;
            .detailRank,.detailTag,.detailActor,.detailTime{
                font-size: 12px;
            }
            .detailRank{
                margin-top: 20px;
            }
        }
    }
    // 中
    .detailMiddle{
        flex: 1;
        background:whitesmoke;
        color: #524c4c;
        text-align: left;
        padding: 5px;
    }
    // 下
    .detailBottom{
        height: 44px;
        line-height: 44px;
        background: cornflowerblue;
        color: #fff;
    }
}
</style>