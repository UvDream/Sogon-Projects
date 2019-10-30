<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-29 11:21:22
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-29 11:30:58
 * @Description: 退回弹窗
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案退回" width="600" @on-cancel="modal=false">
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <div class="form">
        <FormItem label="退回至部门" prop="department" class="form-block">
          <Input v-model="formValidate.department" placeholder="输入办结原因说明" />
        </FormItem>
        <FormItem label="退回至姓名" prop="name" class="form-block">
          <Input v-model="formValidate.name" placeholder="输入办结原因说明" />
        </FormItem>
      </div>
      <FormItem style="margin-left:30px" label="退回原因说明" prop="reason" class="form-blocks">
        <Input
          v-model="formValidate.reason"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="输入办结原因说明"
        />
      </FormItem>
      <FormItem style="margin-left:30px" label="上传证明文件" prop="uploadFiles" class="form-block">
        <Upload />
      </FormItem>
    </Form>
    <div slot="footer" style="text-align:center">
      <Button type="primary" size="large">
        <Icon type="ios-log-out" style="margin-right:10px" />退回
      </Button>
    </div>
  </Modal>
</template>

<script>
import Upload from "@/components/upload/upload";

export default {
  components: {
    Upload
  },
  data() {
    return {
      modal: false,
      formValidate: {
        department: "",
        name: "",
        reason: "",
        uploadFiles: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "请输入退回至姓名" }],
        department: [{ required: true, message: "请输入退回至部门" }],
        reason: [{ required: true, message: "请输入办结原因" }],
        uploadFiles: [{ required: true, message: "请上传证明材料" }]
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.form-add {
  border: none;
  line-height: 50px;
}
</style>
