<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-23 17:37:33
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 10:15:58
 * @Description: 外地病患
 * @Email: UvDream@163.com
 -->
<template>
  <div class="foreign">
    <TopTitle :title="'档案基本信息'" v-model="closed" />
    <div class="foreign-form">
      <Form
        ref="formValidate"
        label-position="top"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
      >
        <div class="form">
          <FormItem label="档案编号" prop="number" class="form-block">
            <Input v-model="formValidate.number" placeholder="输入档案号" />
          </FormItem>
          <FormItem label="档案名称" prop="name" class="form-block">
            <Input v-model="formValidate.name" placeholder="输入档案名称" />
          </FormItem>
          <FormItem label="创建人" prop="founder" class="form-block">
            <Input v-model="formValidate.founder" placeholder="输入创建人" />
          </FormItem>
          <FormItem label="创建日期" prop="createDate" class="form-block">
            <DatePicker type="date" placeholder="选择日期" v-model="formValidate.createDate"></DatePicker>
          </FormItem>
          <FormItem label="档案状态" prop="status" class="form-block">
            <Select v-model="formValidate.status" placeholder="选择档案状态">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem label="转发人" prop="forwarder" class="form-block">
            <Input v-model="formValidate.forwarder" placeholder="输入转发人" />
          </FormItem>
          <FormItem label="转发日期" prop="forwardDate" class="form-block">
            <DatePicker type="date" placeholder="选择转发日期" v-model="formValidate.forwardDate"></DatePicker>
          </FormItem>
        </div>
        <!-- <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>-->
      </Form>
    </div>
  </div>
</template>
<script>
import TopTitle from "../../../../components/top-title/top-title";
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      closed: false,
      formValidate: {
        number: "",
        name: "",
        founder: "",
        createDate: "",
        status: "",
        forwarder: "",
        forwardDate: ""
      },
      ruleValidate: {}
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.foreign {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
  min-height: 200px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
}
</style>