<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 14:52:49
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 16:50:35
 * @Description: 病患等级
 * @Email: UvDream@163.com
 -->

<template>
  <div class="white-block">
    <TopTitle :title="'病患危险性等级'" v-model="closed" />
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <div class="form">
        <FormItem label="患者危险性" prop="risk" class="form-textarea">
          <Select v-model="formValidate.risk" placeholder="选择危险性">
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">未知</Option>
          </Select>
        </FormItem>
      </div>
      <div class="form">
        <FormItem label="等级评定医院" prop="name" class="form-block">
          <Input v-model="formValidate.policeName" placeholder="输入原籍公安机关名称" />
        </FormItem>
        <FormItem label="等级评定医生" prop="name" class="form-block">
          <Input v-model="formValidate.policeName" placeholder="输入原籍公安机关名称" />
        </FormItem>
        <FormItem label="评定医生联系方式" prop="name" class="form-block">
          <Input v-model="formValidate.policeName" placeholder="输入原籍公安机关名称" />
        </FormItem>
        <FormItem label="评定时间" prop="name" class="form-block">
          <DatePicker type="datetime" placeholder="请选择时间" v-model="formValidate.policeContactTime"></DatePicker>
        </FormItem>
      </div>
      <div class="form">
        <FormItem label="患者危险性等级说明" prop="employer" class="form-blocks">
          <Input
            v-model="formValidate.anecdote"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="输入所属村居"
          />
        </FormItem>
        <FormItem label="上传证明文件" prop="uploadFiles" class="form-block">
          <Upload />
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import Upload from "@/components/upload/upload";

export default {
  components: {
    TopTitle,
    Upload
  },
  data() {
    return {
      closed: false,
      formValidate: {},
      ruleValidate: {}
    };
  }
};
</script>

<style>
</style>