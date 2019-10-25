<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:53:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 11:40:32
 * @Description: 表单
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <div class="form" style="margin-top:20px">
        <FormItem label="姓名" prop="name" class="form-block">
          <Input v-model="formValidate.name" placeholder="输入姓名" />
        </FormItem>
        <FormItem label="部门" prop="department" class="form-block">
          <Input v-model="formValidate.department" placeholder="输入部门" />
        </FormItem>
        <FormItem label="身份证号" prop="IdNumber" class="form-block">
          <Input v-model="formValidate.name" placeholder="输入身份证号" />
        </FormItem>
        <FormItem label="联系电话" prop="phone" class="form-block">
          <Input v-model="formValidate.phone" placeholder="输入联系电话" />
        </FormItem>
        <FormItem style="width:100px">
          <Button type="primary" style="margin-top:25px">保存</Button>
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
import { validatePhone } from "@/util/util";

export default {
  data() {
    return {
      formValidate: {
        name: "",
        department: "",
        IdNumber: "",
        phone: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        department: [
          { required: true, message: "请输入部门", trigger: "blur" }
        ],
        phone: [{ required: true, validator: validatePhone, trigger: "blur" }]
      }
    };
  }
};
</script>

<style></style>
