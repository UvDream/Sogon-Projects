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
            <Input v-model="formValidate.name" placeholder="输入原籍公安机关名称" :disabled="auth"/>
          </FormItem>
          <FormItem label="原籍公安负责人" prop="principal" class="form-block">
            <Input v-model="formValidate.principal" placeholder="输入原籍公安负责人" :disabled="auth"/>
          </FormItem>
          <FormItem label="原籍公安联系电话" prop="phone" class="form-block">
            <Input v-model="formValidate.phone" placeholder="输入原籍公安联系电话" :disabled="auth"/>
          </FormItem>
          <FormItem label="原籍公安联系时间" prop="contactTime" class="form-block">
            <DatePicker
              :disabled="auth"
              type="datetime"
              format="yyyy-MM-dd HH:mm"
              placeholder="请选择时间"
              v-model="formValidate.contactTime"
            ></DatePicker>
          </FormItem>
        </div>
        <div class="form">
          <FormItem label="外埠病患处理说明" prop="description" class="form-textarea">
            <Input
              :disabled="auth"
              v-model="formValidate.description"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="输入外埠病患处理说明"
            />
          </FormItem>
          <FormItem label="外埠证明材料" prop="uploadFiles" class="form-block">
            <Upload v-model="formValidate.uploadFiles" />
          </FormItem>
        </div>
      </Form>
    </transition>
  </div>
</template>

<script>
import TopTitle from "../../../../../components/top-title/top-title";
import Upload from "@/components/upload/upload";
import vm from "../../event";
export default {
  components: {
    TopTitle,
    Upload
  },
  data() {
    return {
      auth: false,
      closed: false,
      formValidate: {
        name:"",
        principal:"",
        phone:"",
        contactTime:"",
        description:"",
        uploadFiles:[],
        archivesId:"",

      }
    };
  },
  mounted() {
    var self = this;
    setTimeout(() => {   
      self.formValidate = self.$store.state.step.dealData.formData;
    },300);
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        this.$store.state.step.dealData.formData = this.formValidate;
        this.$store.state.step.dealStatus = true;
      }
    });
  },  
};
</script>

<style></style>
