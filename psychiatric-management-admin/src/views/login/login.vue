<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:35:47
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-01 10:49:53
 * @Description: 登陆注册界面
 * @Email: UvDream@163.com
 -->
<template>
  <div class="login">
    <div class="logo">
      <img src="../../assets/fonts/login/logo.png" />
      <div>
        <div>徐州经开区重度精神病患者</div>
        <div>帮扶管控系统</div>
        <div>HELP MANAGEMENT AND CONTROL SYSTEM</div>
      </div>
    </div>
    <div class="login-block">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <div>
          <h1>用户登录</h1>
          <h2>LOGIN</h2>
        </div>
        <div>
          <FormItem prop="user" class="form-block">
            <Input prefix="ios-person-outline" placeholder="账户" type="text" v-model="formInline.user" style="width: 380px;" />
          </FormItem>
        </div>
        <div>
          <FormItem prop="password">
            <Input prefix="ios-lock-outline" placeholder="密码" type="text" v-model="formInline.password" style="width: 380px;" />
          </FormItem>
        </div>
        <div>
          <FormItem>
            <Checkbox v-model="single">记住密码</Checkbox>
          </FormItem>
        </div>
        <div>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" style="width: 300px;" >登录</Button>
          </FormItem>
        </div>
      </Form>
      <img src="../../assets/fonts/login/bg-right.png">
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login/index";
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      single: true,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入账户",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不够",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.formInline.user = "GA";
      this.formInline.password = "111111";
      let data = {
        "name": this.formInline.user,
        "pwd": this.formInline.password
      }
      login(data).then(res=>{
        Cookies.set('token',res.data.token)
        this.$router.push({ path: '/dashboard' })
      })
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>


<style scoped lang="less">
body{
  position:relative;
  height:100%;
  width:100%;
  background: url('../../assets/fonts/login/bg.png') no-repeat;
  background-size: cover;
  overflow: hidden;  
}
.login {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  .logo{
    height: 76px;
    width: 800px;
    left: 120px;
    top: 120px;
    position: absolute;
    display: flex;
    align-items: self-start;
    & > img{
      margin-right: 30px;
    }
    & > div{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 605px;
      flex-flow: wrap;
      & > div:nth-child(1) {
        font-size: 40px;
        color: #333;
        letter-spacing: .33px;
      }
      & > div:nth-child(2) {
        font-size: 40px;
        color: #53a7a9;
        letter-spacing: .33px;
        line-height: 56px;
      }
      & > div:nth-child(3) {
        font-size: 14px;
        color: #999999;
        letter-spacing: 0;
      }
    }  
  }
  &-block {
    position: absolute;
    top: 290px;
    width: 990px;
    height: 460px;
    box-shadow: 0 0 20px 0 rgba(14,37,38,0.15);
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    & > form{
      width: 630px;
      height: 460px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding-left:80px;
      & > div{
        & >h1{
          font-size: 28px;
          color: #333333;
          letter-spacing: 3.03px;
          font-weight:normal;
        }
        & >h2 {
          font-size: 16px;
          color: #BBBBBB;
          font-weight:normal;
        }
        margin-bottom:10px;
        .ivu-btn {
          border-radius: 20px;
          height: 40px;
        }
      }
      & > div:nth-child(1){
        margin-bottom:44px;
      }
      & > div:last-child{
        margin-left:36px;
      }
      .form-block{
        height:42px;
      }
    }
    & >img{
      background: url('../../assets/fonts/login/bg-right.png') no-repeat right;
      background-size: cover;
      position: absolute;
      right: -30px;
      top: -40px;
    }
  }
}
</style>
<style type="text/css">
.login .ivu-input-wrapper .ivu-input{
  height: 42px;
  border-radius: 20px;
  color: #999;
  font-size: 16px;
  background: #DDE2E2;
  border: 1px solid #DDE2E2;
}
.login .ivu-input-wrapper .ivu-input-prefix, 
.login .ivu-input-wrapper .ivu-input-suffix{
  height: 42px;
  top:4px;
}
</style>