<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 19:23:28
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:31:49
 * @Description: 康复
 * @Email: UvDream@163.com
 -->

<template>
  <div class="white-block">
    <TopTitle :title="'病患康复记录'" v-model="closed" />
    <transition name="slide">
      <Form ref="ruleForm" label-position="top" :model="ruleForm" :label-width="200" v-if="!closed">
        <div class="form-delete" v-for="(item, index) in ruleForm.more" :key="index">
          <div class="form">
            <FormItem
              label="病患康复日期"
              :prop="'more.' + index + '.patientCuteDate'"
              class="form-block"
              :rules="{
              required: true,
              message: '请选择病患康复日期',
              trigger: 'blur'
            }"
            >
              <DatePicker type="datetime" placeholder="请选择病患康复日期" v-model="item.patientCuteDate"></DatePicker>
            </FormItem>
            <FormItem
              label="病患康复后状态"
              class="form-block"
              :prop="'more.' + index + '.patientCuteType'"
              :rules="{
              required: true,
              message: '请输入病患康复后状态',
              trigger: 'blur'
            }"
            >
              <Select v-model="item.patientCuteType" placeholder="选择档案状态">
                <Option value="0">在家</Option>
                <Option value="1">住院</Option>
                <Option value="2">就学</Option>
                <Option value="3">就业</Option>
                <Option value="4">不明</Option>
                <Option value="5">其它</Option>
              </Select>
            </FormItem>
            <FormItem
              label="病患工作单位"
              :prop="'more.' + index + '.patientCompany'"
              class="form-blocks"
              :rules="{
              required: true,
              message: '请输入病患工作单位',
              trigger: 'blur'
            }"
            >
              <Input v-model="item.patientCompany" placeholder="输入病患工作单位" />
            </FormItem>
          </div>
          <div class="form">
            <FormItem
              label="病患康复情况说明"
              :prop="'more.' + index + '.patientRemarks'"
              class="form-blocks"
              :rules="{
              required: true,
              message: '请输入病患康复情况说明',
              trigger: 'blur'
            }"
            >
              <Input type="textarea" v-model="item.patientRemarks" placeholder="输入病患康复情况说明" />
            </FormItem>
            <FormItem
              label="病患治疗证明材料"
              :prop="'more.' + index + '.uploadFiles'"
              class="form-block"
              :rules="{
              required: true,
              message: '请上传病患治疗证明材料',
              trigger: 'blur'
            }"
            >
              <Upload />
            </FormItem>
          </div>

          <Button class="delete-btn" @click="handleRemove(index)">
            <img src="../../../../../assets/fonts/delete.png" alt />
            删除该条记录
          </Button>
        </div>

        <!-- <FormItem class="form-add"> -->
        <!-- <Button type="primary" @click="handleSubmit('ruleForm')">Submit</Button> -->
        <div class="form-add">
          <div @click="handleAdd">
            <img src="../../../../../assets/fonts/add.png" alt />
            添加信息
          </div>
        </div>
        <!-- </FormItem> -->
      </Form>
    </transition>
  </div>
</template>
<script>
import TopTitle from "@/components/top-title/top-title";
import Upload from "@/components/upload/upload";
import vm from "./../../event";
export default {
  components: {
    TopTitle,
    Upload
  },
  data() {
    return {
      closed: false,
      ruleForm: {
        more: [
          {
            patientCuteDate: "",
            patientCuteType: "",
            patientCompany: "",
            patientRemarks: "",
            uploadFiles: []
          }
        ]
      }
    };
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        // this.formValidate.more.forEach(element=>{
        //   element.type = 1;
        // })
        this.$store.state.step.outControlData.formPatientRecorder = this.ruleForm.more;
      }
    });
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    // 添加
    handleAdd() {
      let obj = {
        patientCuteDate: "",
        patientCuteType: "",
        patientCompany: "",
        patientRemarks: "",
        uploadFiles: ""
      };
      this.ruleForm.more.push(obj);
    },
    // 删除
    handleRemove(index) {
      this.ruleForm.more.splice(index, 1);
    }
  }
};
</script>
<style lang="less" scoped>
.add-block {
  outline: 1px solid red;
  width: 100%;
  // min-height: 200px;
}
</style>
