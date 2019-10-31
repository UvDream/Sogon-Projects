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
        :label-width="200"
      >
        <div class="form">
          <FormItem label="所属部门" prop="deptId" class="form-block">
            <Select v-model="formValidate.deptId" disabled>
              <Option value="2">公安</Option>
              <Option value="4">民政</Option>
              <Option value="1">网络</Option>
              <Option value="3">卫生</Option>
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
      >
      <div>
        <Form
          ref="formValidate2"
          label-position="left"
          :model="formValidate2"
          :rules="ruleValidate2"
          :label-width="150">
          <div class="form">
            <FormItem label="原密码" prop="oldPassWord" class="m-form-block">
              <Input v-model="formValidate2.oldPassWord" placeholder="输入原密码"  />
            </FormItem>
            <FormItem label="新密码" prop="newPassWord" class="m-form-block">
              <Input v-model="formValidate2.newPassWord" placeholder="输入新密码"  />
            </FormItem>
            <FormItem label="再次输入新密码" prop="newPassWord2" class="m-form-block">
              <Input v-model="formValidate2.newPassWord2" placeholder="再次输入新密码"  />
            </FormItem>
          </div>
        </Form>
      </div>
      <div slot="footer">
        <Button size="large" @click="cancelP()">取消</Button>
        <Button type="primary" size="large" @click="okP('formValidate2')">确认</Button>
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
     >
      <div>
        <Form
          ref="formValidate3"
          label-position="left"
          :model="formValidate3"
          :rules="ruleValidate3"
          :label-width="120">
          <div class="form">
            <FormItem label="联系电话" prop="telephone" class="m-form-block">
              <Input v-model="formValidate3.telephone" placeholder="输入联系电话"  />
            </FormItem>
            <FormItem label="账号名称" prop="name" class="m-form-block">
              <Input v-model="formValidate3.name" placeholder="输入账号名称"  />
            </FormItem>
          </div>
        </Form>
      </div>
      <div slot="footer">
        <Button size="large" @click="cancelI()">取消</Button>
        <Button type="primary" size="large" @click="okI('formValidate3')">确认</Button>
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
    // <!--二次验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.formValidate2.newPassWord) {
        callback(new Error("需与新的登录密码保持一致"));
      } else {
        callback();
      }
    }
    let validateOldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原密码"));
      } else if (value !== this.formValidate.pwd) {
        callback(new Error("需与旧登录密码保持一致"));
      } else {
        callback();
      }
    }
    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('手机号码不合法'))
      } else {
        callback()
      }
    }
    return {
      modalP: false,
      modalI: false,
      closed: false,
      formValidate: {
        deptId: "1",
        telephone: "18661910020",
        deptname: "2222",
        pwd: "111111"
      },
      formValidate2: {
        oldPassWord: "",
        newPassWord: "",
        newPassWord2: ""
      },
      ruleValidate2: {
        oldPassWord: [{ required: true, validator: validateOldPass, trigger: "blur" }],
        newPassWord: [{ required: true, message: "请输入新密码", trigger: "blur" }],
        newPassWord2: [{ required: true, validator: validatePass, trigger: 'blur' },],
      },
      formValidate3: {
        telephone: "",
        name: ""
      },
      ruleValidate3: {
        telephone: [{ required: true, validator: checkTel, trigger: "blur" }],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }]
      }
    }
  },
  mounted() {
    api.checkPerAccount().then(res => {
      console.log(res.data);
      this.formValidate = res.data;
    })
  },
  methods: {
    // 验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    handleP() {
      this.modalP = true
    },
    handleI() {
      this.modalI = true
    },
    okP (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          /*api.updatePassWord(this.formValidate2).then(res => {
            console.log(res.data);
            if(res.data=="{}"){
              this.formValidate.pwd = this.formValidate2.newPassWord;
              this.modalP = false;
            }else{
              this.$Message.error(res.data.msg);
            }
          });*/
        }
      });
    },
    cancelP () {
      this.modalP = false;
    },
    okI () {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          /*api.updateUserInfo(this.formValidate3).then(res => {
            console.log(res.data);
            if(res.data=="{}"){
              this.modalI = false;
            }
          });*/
        }
      });
    },
    cancelI () {
      this.modalI = false;
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
