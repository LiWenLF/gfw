<template>
<div class="fullscreen">
  <div class="login-box">
    <div style="text-align: center">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="" class="logo">
    </div>
    <div style="font-size:25px; text-align:center;">Sign in to VueDemo</div>
    <el-form ref="form" :model="sizeForm" class="login-form">
        <span style="font-size:14px;font-weight:500;">Username or email address</span>
        <el-form-item prop="account" style="margin-top:10px">
        <el-input type="text" v-model="username" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <span style="font-size:14px; font-weight:500;">Password</span>
        <el-form-item prop="checkPass" style="margin-top:10px">
        <el-input type="password" v-model="password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">remember password</el-checkbox>
        <el-form-item style="width:100%; margin-top:10px">
        <el-button type="primary" style="width:100%;" @click="handleLogin" :loading="logining">sign in</el-button>
        </el-form-item>
    </el-form>
    <div style="margin-top: 50px"></div>
    <p class="text-tips">
      <i class="fa fa-meetup" style="color: #29ABE2"></i>&nbsp;
      <span class="footer-text">{{appName}} &nbsp;
          <el-tag size="mini">{{version}}</el-tag>
          ©make by 
          <a href="https://www.github.com/mengdu" target="_blank">{{author}}</a>
     </span>
    </p>
  </div>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      author: 'liwen',
      version: '1.0',
      appName: 'vue-element-demo',
      username: 'admin',
      password: '123456',
      checked: true
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin () {
      if (!this.username || !this.password) {
        return;
      }
      this.login({
        username: this.username,
        password: this.password
      }).then(res => {
        // this.$message.success('登录成功')
        this.$router.push({name: 'Home'})
        // this.isLoging = false
        console.log("sucess")
      })
    }
  }
}
</script>
<style type="text/css">
  .login-form{
      background-color: #fff;
      border: 1px solid #d8dee2;
      padding: 30px 20px 20px 20px;
      margin-top: 20px;
  }
  .m-list-group{
    border-radius: 3px;
    padding: 0;
    margin: 0 0 20px;
  }
  .m-list-group .m-list-group-item{
    position: relative;
    display: block;
    padding: 6px 10px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #e7ecee;
  }
  .m-list-group .m-list-group-item:first-child{
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .m-list-group .m-list-group-item:last-child{
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .fullscreen{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #F4F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-box{
    position: relative;
    width: 330px;
    margin: 0 auto;
    padding: 0px 15px;
  }
  .login-box .logo{
    max-width: 17%;
    margin-bottom: 30px;
  }
  .login-box .text-tips{
    text-align: center;
    color: #909DB7;
  }
  .login-box .m-input{
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  .login-box .m-btn{
    font-size: 18px;
    width: 100%;
    color: #fff;
    background-color: #36c1fa;
    display: inline-block;
    padding: 10px 12px;
    margin-bottom: 5px;
    line-height: 1.42857143;
    text-align: center;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    border: 1px solid #36c1fa;
    box-sizing: border-box;
    text-decoration: none;
  }
  .login-box .m-btn.m-btn-text{
    background: #fff;
    color: #36C1FA;
  }
  .login-box .m-btn:hover{
    background-color: #2DB7F5;
  }
  .login-box .m-btn.m-btn-text:hover{
    background-color: #F4F5F5;
  }
  .login-box .m-btn:active{
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    .login-box{
      width: auto;
    }
  }
</style>
