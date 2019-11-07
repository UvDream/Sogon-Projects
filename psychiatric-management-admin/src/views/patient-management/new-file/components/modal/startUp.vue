<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-29 10:52:09
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-29 11:20:23
 * @Description: 办结弹窗
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案启动" width="530" @on-cancel="cancle">
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <FormItem label="启动原因说明" prop="remarks" class="form-blocks">
        <Input
          v-model="formValidate.remarks"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="输入启动原因说明"
        />
      </FormItem>
      <FormItem label="上传证明文件" prop="uploadFiles" class="form-block">
        <Upload v-model="formValidate.uploadFiles"/>
      </FormItem>
    </Form>
    <div slot="footer" style="text-align:center">
      <Button type="primary" size="large" @click="startUp()">
        <Icon type="ios-checkmark-circle-outline" style="margin-right:10px" />启动
      </Button>
    </div>
  </Modal>
</template>

<script>
import Upload from "@/components/upload/upload";
import mixin from "@/mixin/newFile";
export default {
  mixins: [mixin],
  components: {
    Upload
  },
  props:{
    modalStartUp: {
      type: Boolean,
      default: false
    },
    indexId:{
      default: 0
    }
  },
  data() {
    return {
      modal: this.modalStartUp,
      tFilesList:[],
      formValidate: {
        remarks: "",
        uploadFiles: []
      },
      ruleValidate: {
        remarks: [{ required: true, message: "请输入启动原因,不超过300个字符",max:300 }],
        uploadFiles: [{ required: true, message: "请上传证明材料" }]
      }
    };
  },
  watch:{
    modalStartUp:function(val){
      this.modal = val;
    }
  },
  methods: {
    cancle() {
      this.$emit('closemodal');
    }
  }
};
</script>

<style scoped lang="less">
.form-add {
  border: none;
  line-height: 50px;
}
</style>