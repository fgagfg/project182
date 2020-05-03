<template lang="pug">
    div.register
        nut-textinput(
            v-model="account"
            placeholder="请输入用户名"
            :has-border='false'
        )
        nut-textinput(
            v-model="password"
            placeholder="请输入密码"
            type="password"
            :has-border='false'
        )
        nut-textinput(
            v-model="cfm"
            placeholder="请确认密码"
            type="password"
            :has-border='false'
        )
        nut-checkbox(v-model='ckeck') 同意协议

        nut-button(block @click='clickHandle') 立即注册
</template>
<script>
export default {
    data(){
        return{
            account:'',
            password:'',
            cfm:'', //确认密码
            ckeck:false,//勾选同意协议
        }
    },
    methods:{
        clickHandle(){
            // 用户名由英文字母和数字组成的4-16位字符，以字母开头
            const regAccount = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/
            if(!regAccount.test(this.account)){ //若验证不通过
                alert(`用户名不正确`)
                return false //中断后续代码执行
            }
            // 密码由英文字母和数字组成的4-10位字符
            const regPassword = /^[a-zA-Z0-9]{4,10}$/
            if(!regPassword.test(this.password)){ //若验证不通过
                alert(`密码不能含有非法字符，长度在4-10之间`)
                return false //中断后续代码执行
            }
            // 两次密码输入是否相同
            if(this.password !== this.cfm){
                alert(`两次密码输入不一致`)
                return false //中断后续代码执行
            }
            // 验证协议是否勾选
            if(!this.ckeck){
                alert(`请先同意协议`)
                return false //中断后续代码执行
            }
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss" scoped>
.register{
    height: 100%;
    background: rgb(196, 193, 193);
    text-align: left;
    .nut-textinput{
        margin:10px 0;
    }
}
</style>