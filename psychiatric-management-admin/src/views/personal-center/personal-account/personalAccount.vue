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
            <Select v-model="formValidate.dept" disabled>
              <Option value="1">公安</Option>
              <Option value="2">民政</Option>
              <Option value="3">网络</Option>
            </Select>
          </FormItem>
          <FormItem label="联系电话" prop="telephone" class="form-block">
            <Input v-model="formValidate.telephone" placeholder="输入联系电话" disabled />
          </FormItem>
          <FormItem label="账户名称" prop="deptname" class="form-block">
            <Input v-model="formValidate.deptname" placeholder="输入账户名称" disabled />
          </FormItem>
          <FormItem label="登录密码" prop="pwd" class="form-block">
            <Input v-model="formValidate.pwd" placeholder="输入登录密码" disabled />
          </FormItem>
          <FormItem class="form-block" style="display: flex;align-items: flex-end;">
            <Button @click="handleP('formValidate')">修改密码</Button>
            <Button @click="handleI('formValidate')" style="margin-left: 8px" >信息维护</Button>
          </FormItem>
        </div>
      </Form>
    </div>
    <Modal
        title="修改密码"
        v-model="modalP"
        :mask-closable="false"
        :closable="false"
        draggable
        scrollable
        width="600"
        @on-ok="okP"
        @on-cancel="cancelP">
        <div>
          <Form
            ref="formValidate"
            label-position="left"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="120"
          >
          <div class="form">
            <FormItem label="原密码" prop="password" class="m-form-block">
              <Input v-model="formValidate.password" placeholder="输入原密码"  />
            </FormItem>
            <FormItem label="新密码" prop="password" class="m-form-block">
              <Input v-model="formValidate.password" placeholder="输入新密码"  />
            </FormItem>
            <FormItem label="再次输入新密码" prop="password" class="m-form-block">
              <Input v-model="formValidate.password" placeholder="再次输入新密码"  />
            </FormItem>
          </div>
        </Form>
        </div>
    </Modal>
    <Modal
        title="信息维护"
        v-model="modalI"
        :mask-closable="false"
        :closable="false"
        draggable
        scrollable
        width="600"
        @on-ok="okI"
        @on-cancel="cancelI">
        <div>
          <Form
            ref="formValidate"
            label-position="left"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="120"
          >
          <div class="form">
            <FormItem label="联系电话" prop="iphone" class="m-form-block">
              <Input v-model="formValidate.iphone" placeholder="输入联系电话"  />
            </FormItem>
            <FormItem label="账号名称" prop="accountname" class="m-form-block">
              <Input v-model="formValidate.accountname" placeholder="输入账号名称"  />
            </FormItem>
          </div>
        </Form>
        </div>
    </Modal>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import api from "@/api/person-center";
export default {
  components: {
    TopTitle,
  },
  data (){
    return {
      modalP: false,
      modalI: false,
      closed: false,
      formValidate: {
        dept: "1",
        telephone: "18661910020",
        deptname: "2222",
        pwd: "111111"
      },
      ruleValidate: {}
    }
  },
  mounted() {
    api.checkPerAccount().then(res => {
      debugger
      console.log(res.data);
      this.formValidate = res.data;
    })
  },
  methods: {
    handleP() {
      this.modalP = true
    },
    handleI() {
      this.modalI = true
    },
    okP () {
      this.$Message.info('Clicked ok');
    },
    cancelP () {
      this.$Message.info('Clicked cancel');
    },
    okI () {
      this.$Message.info('Clicked ok');
    },
    cancelI () {
      this.$Message.info('Clicked cancel');
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
.ivu-modal-body .form{
  display:flex;
  justify-content: center;
}
</style>
