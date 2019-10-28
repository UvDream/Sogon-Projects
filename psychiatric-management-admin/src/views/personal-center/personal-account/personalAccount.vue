<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:30:34
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 17:49:45
 * @Description: 个人账户
 * @Email: UvDream@163.com
 -->
<template>
  <div class="account">
    <TopTitle :title="'账户信息'" v-model="closed">
      <template v-slot:icon>
        <img src="../../../assets/fonts/center/account.png" :style="{verticalAlign:'middle'}" />
      </template>
    </TopTitle>
    <div class="account-form">
      <Form
        ref="formValidate"
        label-position="top"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="200"
      >
        <div class="form">
          <FormItem label="所属部门" prop="dept" class="form-block">
            <Select v-model="formValidate.dept">
              <Option value="1">公安</Option>
              <Option value="2">民政</Option>
              <Option value="3">网络</Option>
            </Select>
          </FormItem>
          <FormItem label="真实姓名" prop="name" class="form-block">
            <Input v-model="formValidate.name" placeholder="输入真实姓名" />
          </FormItem>
          <FormItem label="身份证号" prop="icd" class="form-block">
            <Input v-model="formValidate.icd" placeholder="输入身份证号" />
          </FormItem>
          <FormItem label="联系电话" prop="iphone" class="form-block">
            <Input v-model="formValidate.iphone" placeholder="输入联系电话" />
          </FormItem>
          <FormItem label="账户名称" prop="accountname" class="form-block">
            <Input v-model="formValidate.accountname" placeholder="输入账户名称" />
          </FormItem>
          <FormItem label="登录密码" prop="password" class="form-block">
            <Input v-model="formValidate.password" placeholder="输入登录密码" />
          </FormItem>
          <FormItem class="form-block" style="display: flex;align-items: flex-end;">
            <Button @click="handleSubmit('formValidate')">修改密码</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">信息维护</Button>
          </FormItem>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
export default {
  components: {
    TopTitle,
  },
  data (){
    return {
      closed: false,
      formValidate: {
        dept: "",
        name: "",
        icd: "",
        iphone: "",
        accountname: "",
        password: ""
      },
      ruleValidate: {}
    }
  },
  methods: {
    handleSubmit() {

    },
    handleReset() {

    }
  }
};
</script>

<style scoped lang="less">
.account {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
  min-height: 200px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
  button{
    height: 40px;
    color: #53A7A9;
    border-color: #53A7A9;
    background:  rgba(83,167,169,0.10);
  }
}
</style>
