<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-28 17:22:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-29 11:18:47
 * @Description: 转发弹窗
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案转发" width="600" @on-cancel="cancle">
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
            <Select v-model="item.deptId">
              <Option value="1">网络</Option>
              <Option value="2">公安</Option>
              <Option value="3">卫生</Option>
              <Option value="4">民政</Option>
            </Select>
          </FormItem>
          <FormItem
            label="转发人姓名"
            class="form-block"
            :prop="'forward.' + index + '.name'"
            :rules="{
              required: true,
              message: '请输入转发人姓名',
              trigger: 'blur'
            }"
          >
            <Input v-model="item.name" placeholder="输入病患就诊医院" />
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
    modalForward: {
      type: Boolean,
      default: false
    },
    indexId:{
      default: 0
    }
  },
  data() {
    return {
      modal: false,
      ruleForm: {
        forward: [
          { deptId: "1", name: "小明" },
          { deptId: "2", name: "小红" }
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
    modalForward:function(val){
      this.modal = val;
    },
    ruleForm:function(val){
      this.deptIds = this.ruleForm.forward.map((item,index)=>{
        return {deptId:item.deptId}
      })
    }
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
      this.$emit('closemodal');
    },
  }
};
</script>

<style scoped lang="less">
.form-add {
  border: none;
  line-height: 50px;
}
</style>