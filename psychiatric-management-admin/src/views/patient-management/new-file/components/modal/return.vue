<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-29 11:21:22
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 09:22:39
 * @Description: 退回弹窗
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案退回" width="600" @on-cancel="cancle">
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <div class="form">
        <FormItem label="退回至部门" prop="curPositionid" class="form-block">
          <Select v-model="formValidate.curPositionid">
            <Option value="1">网络</Option>
            <Option value="2">公安</Option>
            <Option value="3">卫生</Option>
            <Option value="4">民政</Option>
          </Select>
        </FormItem>
        <FormItem label="退回至姓名" prop="name" class="form-block">
          <Input v-model="formValidate.name" placeholder="输入办结原因说明" />
        </FormItem>
      </div>
      <FormItem style="margin-left:30px" label="退回原因说明" prop="remarks" class="form-blocks">
        <Input
          v-model="formValidate.remarks"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="输入办结原因说明"
        />
      </FormItem>
      <FormItem style="margin-left:30px" label="上传证明文件" prop="uploadFiles" class="form-block">
        <Upload v-model="formValidate.uploadFiles" />
      </FormItem>
    </Form>
    <div slot="footer" style="text-align:center">
      <Button type="primary" size="large" @click="saveBack()">
        <Icon type="ios-log-out" style="margin-right:10px" />退回
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
  modalReturn: {
    type: Boolean,
    default: false
  },
  indexId:{
    default: 0
  }
},
  data() {
    return {
      modal: this.modalReturn,
      formValidate: {
        curPositionid: "2",
        name: "",
        remarks: "",
        uploadFiles: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "请输入退回至姓名" }],
        curPositionid: [{ required: true, message: "请输入退回至部门" }],
        remarks: [{ required: true, message: "请输入办结原因" }],
        uploadFiles: [{ required: true, message: "请上传证明材料" }]
      }
    };
  },
  watch:{
    modalReturn:function(val){
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
