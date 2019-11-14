<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-28 17:22:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-29 11:18:47
 * @Description: 转发弹窗
 * @Email: UvDream@163.com
 -->
ao ye
<template>
  <Modal v-model="modal" title="档案转发" width="600" @on-cancel="cancle" >
    <Form ref="ruleForm" label-position="top" :model="ruleForm" :label-width="200">
      <div v-for="(item,index) in ruleForm.forward" :key="index">
        <div class="form">
          <FormItem
            label="转发人部门"
            class="form-block"
            :prop="'forward.' + index + '.department'"
            :rules="{
              required: true,
              message: '请输入病患就诊医院',
              trigger: 'blur'
            }"
          >
            <Select v-model="item.deptId" :disabled="true">
              <Option value="1">网格员</Option>
              <Option value="2">公安</Option>
              <Option value="3">卫生</Option>
              <Option value="4">民政</Option>
            </Select>
          </FormItem>
          <div style="display:flex;align-items:center" @click="deleteFunc(index)">
            <img src="../../../../../assets/fonts/delete.png" alt />
          </div>
        </div>
      </div>
      <div class="form-add">
        <div>
          <div @click="addFunc">
            <img src="../../../../../assets/fonts/add.png" alt />
            添加信息
          </div>
        </div>
      </div>
    </Form>
    <div slot="footer" style="text-align:center">
      <Button type="primary" size="large" @click="saveForward({archivesId:indexId,deptIds:deptIds})">
        <Icon type="ios-sync" style="margin-right:10px" />转发
      </Button>
    </div>
  </Modal>
</template>

<script>
import mixin from "@/mixin/newFile";
export default {
  mixins: [mixin],
  props:{
    value: {
      type: Boolean,
      default: false
    },
    indexId:{
      default: 69
    }
  },
  data() {
    return {
      modal: false,
      ruleForm: {
        forward: [
          { deptId: "1"}
        ]
      },
    };
  },
  computed:{
    deptIds:function() {
      let arr = this.ruleForm.forward.map((item,index)=>{
         return {deptId:item.deptId}
      });
      return arr
    }
  },
  watch:{
    value:function(val){
      this.modal = val;
    },
    modal:function(val){
      this.ruleForm.forward=this.$store.state.step.ruleForm.forward;
      console.log("ji内测")
      console.log(this.ruleForm)
      this.$emit("input",val)
    },
    ruleForm:function(val){
      this.ruleForm.forward=val.ruleForm.forward;
      this.deptIds = this.ruleForm.forward.map((item,index)=>{
        return {deptId:item.deptId}
      })
    }
  },
  mounted(){
    this.modal=this.modalForward;
  },
  methods: {
    // 删除操作
    deleteFunc(index) {
      this.ruleForm.forward.splice(index, 1);
    },
    // 添加操作
    addFunc() {
      let obj = { deptId: "", name: "" };
      this.ruleForm.forward.push(obj);
    },
    cancle() {
      this.modal=false;
    },
    btnFunc(){
      
      this.$store.state.step.stepStatus < 5
        ? (this.$store.state.step.stepStatus =
            this.$store.state.step.stepStatus + 1)
        : "";

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