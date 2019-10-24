<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 14:52:49
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 14:58:11
 * @Description: 病患等级
 * @Email: UvDream@163.com
 -->

<template>
  <div class="white-block">
    <TopTitle :title="'病患等级'" v-model="closed" />
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <div class="form">
        <FormItem label="病患危险等级" prop="patientName" class="form-block">
          <Input v-model="formValidate.patientName" placeholder="输入档案号" />
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";

export default {
  components: {
    TopTitle
  },
  data() {
    return {
      closed: false,
      formValidate: {}
    };
  }
};
</script>

<style>
</style>