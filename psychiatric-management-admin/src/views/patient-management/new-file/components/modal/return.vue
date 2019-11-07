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
        <FormItem label="退回至部门" class="form-block">
          <Select v-model="deptName" disabled>
            <Option value="1">网格员</Option>
            <Option value="2">公安</Option>
            <Option value="3">卫生</Option>
            <Option value="4">民政</Option>
          </Select>
        </FormItem>
        <FormItem label="退回档案状态" class="form-block">
          <Select v-model="curPositionid" disabled>
            <Option value="0">发现中</Option>
            <!-- <Option value="1">已推送</Option> -->
            <Option value="1">初步处理中</Option>
            <!-- <Option value="3">已办结</Option> -->
            <Option value="2">评定治疗中</Option>
            <!-- <Option value="5">监护中</Option> -->
            <Option value="3">帮扶中</Option>
            <Option value="4">再次评定</Option>
            <Option value="5">脱离管控</Option>
          </Select>
        </FormItem>
      </div>
      <FormItem style="margin-left:30px" label="退回原因说明" prop="remarks" class="form-blocks">
        <Input
          v-model="formValidate.remarks"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="输入退回原因说明"
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
import { returnSaveList } from "@/api/return/index";

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
    },
    statusObj:{
      type: Object,
      default: function(){
        return {}
      }
    }
  },
  data() {
    return {
      modal: this.modalReturn,
      deptName: this.statusObj.deptName,
      curPositionid: this.statusObj.curPosit,
      formValidate: {
        remarks: "",
        uploadFiles: []
      },
      ruleValidate: {
        remarks: [{ required: true, message: "请输入退回原因,不超过300个字符",max:300 }],
        uploadFiles: [{ required: true, message: "请上传证明材料" }]
      }
    };
  },
  watch:{
    modalReturn:function(val){
      this.modal = val;
    }
  },
  mounted(){
    let obj = {"tArchivesId": "404"};
    returnSaveList(obj).then(res => {
      console.log(res)
      this.formValidate.curPositionid = "2";
      this.formValidate.name = res.data.curPosit;
      // this.formValidate.curPositionid = res.data.deptName;
      // this.formValidate.name = res.data.curPosit;
    });
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
