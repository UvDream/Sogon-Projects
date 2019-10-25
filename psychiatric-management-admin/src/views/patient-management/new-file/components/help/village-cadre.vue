<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 08:57:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 10:45:46
 * @Description: 村居干部帮扶
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopMessage
      :title="'村居干部帮扶'"
      :message="'职责说明:经常到精神病人家庭进行走访，了解有关情况，上报有关信息，遇到异常动向及时与镇办、卫生计生部门和派出所民警联系处理。'"
    />
    <div class="search">
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
    <cTable />
  </div>
</template>

<script>
import TopMessage from "./top-title";
import cTable from "./table";
export default {
  components: {
    TopMessage,
    cTable
  },
  data() {
    return {
      closed: false,
      formValidate: {
        name: "",
        department: "",
        IdNumber: "",
        phone: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "请输入姓名" }],
        department: [{ required: true, message: "请输入部门" }],
        phone: [{ required: true, message: "请输入部门" }]
      }
    };
  },
  methods: {}
};
</script>
