<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 13:42:19
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-31 10:39:32
 * @Description: 外地病患
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'外埠病患'" v-model="closed" />
    <transition name="slide">
      <Form
        ref="formValidate"
        label-position="top"
        :model="formValidate"
        :label-width="200"
        v-if="!closed"
      >
        <div class="form">
          <FormItem label="原籍公安机关名称" prop="name" class="form-block">
            <Input v-model="formValidate.policeName" placeholder="输入原籍公安机关名称" />
          </FormItem>
          <FormItem label="原籍公安负责人" prop="principal" class="form-block">
            <Input v-model="formValidate.policePrincipal" placeholder="输入原籍公安负责人" />
          </FormItem>
          <FormItem label="原籍公安联系电话" prop="phone" class="form-block">
            <Input v-model="formValidate.policePhone" placeholder="输入原籍公安联系电话" />
          </FormItem>
          <FormItem label="原籍公安联系时间" prop="contactTime" class="form-block">
            <DatePicker
              type="datetime"
              placeholder="请选择时间"
              v-model="formValidate.policeContactTime"
            ></DatePicker>
          </FormItem>
        </div>
        <div class="form">
          <FormItem label="外埠病患处理说明" prop="description" class="form-textarea">
            <Input
              v-model="formValidate.description"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="输入外埠病患处理说明"
            />
          </FormItem>
          <FormItem label="外埠证明材料" prop="uploadFiles" class="form-block">
            <Upload />
          </FormItem>
        </div>
      </Form>
    </transition>
  </div>
</template>

<script>
import TopTitle from "../../../../../components/top-title/top-title";
import Upload from "@/components/upload/upload";
export default {
  components: {
    TopTitle,
    Upload
  },
  data() {
    return {
      closed: false,
      formValidate: {}
    };
  }
};
</script>

<style></style>
