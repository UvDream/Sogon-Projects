<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 13:42:19
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 14:04:52
 * @Description: 外地病患
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'外地病患'" v-model="closed" />
    <Form ref="formValidate" label-position="top" :model="formValidate" :label-width="200">
      <div class="form">
        <FormItem :label="label[id][0]" prop="name" class="form-block">
          <Input v-model="formValidate.policeName" :placeholder="'输入'+label[id][0]" />
        </FormItem>
        <FormItem :label="label[id][1]" prop="principal" class="form-block">
          <Input v-model="formValidate.policePrincipal" placeholder="输入负责人" />
        </FormItem>
        <FormItem :label="label[id][2]" prop="phone" class="form-block">
          <Input v-model="formValidate.policePhone" placeholder="输入联系电话" />
        </FormItem>
        <FormItem :label="label[id][3]" prop="contactTime" class="form-block">
          <DatePicker
            type="datetime"
            placeholder="请选择时间"
            v-model="formValidate.policeContactTime"
            style="width: 200px"
          ></DatePicker>
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
import TopTitle from "../../../../../components/top-title/top-title";

export default {
  components: {
    TopTitle
  },
  data() {
    return {
      closed: false,
      id: "1",
      label: {
        "1": [
          "原籍公安机关名称",
          "原籍公安负责人",
          "原籍公安联系电话",
          "原籍公安联系时间"
        ],
        "2": [
          "原籍就诊医院",
          "原籍医院负责人",
          "原籍医院联系电话",
          "原籍医院联系电话"
        ],
        "3": [
          "本地就诊医院",
          "本地医院负责人",
          "本地医院联系电话",
          "本地医院联系时间"
        ]
      },
      formValidate: {}
    };
  }
};
</script>

<style>
</style>