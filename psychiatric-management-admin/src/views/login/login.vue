<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:35:47
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 08:52:06
 * @Description: 登陆注册界面
 * @Email: UvDream@163.com
 -->
<template>
  <div class="login">
    <div class="login-block">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <div>
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="账户">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </div>
        <div>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </div>

        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.login {
  &-block {
    width: 500px;
    height: 300px;
    outline: 1px solid red;
    text-align: center;
  }
}
</style>