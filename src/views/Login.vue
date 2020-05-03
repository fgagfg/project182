<template lang="pug">
    div.login
        h1.loginMain 登录
       
        nut-textinput(
            v-model="account"
            placeholder="请输入用户名"
            :clearBtn="true"
            :disabled="false"
            :has-border='false'
        )
    
        nut-textinput(
            placeholder="请输入密码" 
            v-model="password" 
            type="password"
            :has-border='false'
        )
        nut-button(block @click='login') 登录
        span.registerBtn(@click='register') 还没账号？
</template>

<script>
export default {
    data(){
        return{
            account:'', //账号
            password:'' // 密码
        }
    },
    methods:{
        login(){
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
            // 用户名和密码都验证通过，允许登录
            localStorage.setItem('user','true')
            this.$router.push('/')
        },
        register(){
            this.$router.push('/register')
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    height: 100%;
    background: whitesmoke;
    text-align: left;
    .loginMain{
        text-align: center;
        width: 150px;
        height: 150px;
        background: wheat;
        color: aquamarine;
        margin: 80px auto 20px;
        
    }
    .nut-textinput{
        border-bottom: 1px solid #d1d1d1;
        margin-bottom: 10px;
    }
    .registerBtn{
        display: inline-block;
        margin: 15px 0 0 15px;
        color: grey;
    }
}
</style>