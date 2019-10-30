<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-29 10:52:09
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-29 11:20:23
 * @Description: 办结弹窗
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案办结" width="530" @on-cancel="modal=false">
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <FormItem label="办结原因说明" prop="reason" class="form-blocks">
        <Input
          v-model="formValidate.reason"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="输入办结原因说明"
        />
      </FormItem>
      <FormItem label="上传证明文件" prop="uploadFiles" class="form-block">
        <Upload />
      </FormItem>
    </Form>
    <div slot="footer" style="text-align:center">
      <Button type="primary" size="large">
        <Icon type="ios-checkmark-circle-outline" style="margin-right:10px" />办结
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
        reason: "",
        uploadFiles: ""
      },
      ruleValidate: {
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