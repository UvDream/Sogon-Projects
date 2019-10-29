<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-28 17:22:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-29 11:18:47
 * @Description: 转发弹窗
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案转发" width="600" @on-cancel="modal=false">
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
            <Input v-model="item.department" placeholder="输入病患就诊医院" />
          </FormItem>
          <FormItem
            label="转发人姓名"
            class="form-block"
            :prop="'forward.' + index + '.name'"
            :rules="{
              required: true,
              message: '请输入病患就诊医院',
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
      <Button type="primary" size="large">
        <Icon type="ios-sync" style="margin-right:10px" />转发
      </Button>
    </div>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      ruleForm: {
        forward: [{ department: "", name: "" }]
      }
    };
  },
  methods: {
    // 删除操作
    deleteFunc(index) {
      this.ruleForm.forward.splice(index, 1);
    },
    // 添加操作
    addFunc() {
      let obj = { department: "", name: "" };
      this.ruleForm.forward.push(obj);
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