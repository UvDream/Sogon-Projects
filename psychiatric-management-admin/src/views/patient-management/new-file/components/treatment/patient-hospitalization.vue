<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 16:40:34
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:21:07
 * @Description: 病患住院记录
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'病患住院记录'" v-model="closed" />
    <transition name="slide">
      <Form ref="formValidate" label-position="top" :model="formValidate" :label-width="200" v-if="!closed">
        <div class="form-delete" v-for="(item, index) in formValidate.more" :key="index">
          <div class="form">
            <FormItem
              label="病患就诊医院"
              class="form-block"
              :prop="'more.' + index + '.patientHospital'"
              :rules="{
              required: true,
              message: '请输入病患就诊医院',
              trigger: 'blur'
            }"
            >
              <Input v-model="item.patientHospital" placeholder="输入病患就诊医院" :disabled="auth"/>
            </FormItem>
            <FormItem
              label="病患主治医生"
              :prop="'more.' + index + '.patientDoctor'"
              class="form-block"
              :rules="{
              required: true,
              message: '请输入病患住院医生',
              trigger: 'blur'
            }"
            >
              <Input v-model="item.patientDoctor" placeholder="输入病患住院医生" :disabled="auth"/>
            </FormItem>
            <FormItem
              label="病患住院时间"
              :prop="'more.' + index + '.checkinTime'"
              class="form-block"
              :rules="{
              required: true,
              message: '请选择病患住院时间',
              trigger: 'blur'
            }"
            >
              <DatePicker type="datetime" placeholder="请选择病患住院时间" v-model="item.checkinTime" format="yyyy-MM-dd HH:mm" :disabled="auth"></DatePicker>
            </FormItem>
            <FormItem
              label="病患出院时间"
              :prop="'more.' + index + '.checkoutTime'"
              class="form-block"
              :rules="{
              required: true,
              message: '请选择病患出院时间',
              trigger: 'blur'
            }"
            >
              <DatePicker type="datetime" placeholder="请选择病患出院时间" v-model="item.checkoutTime" format="yyyy-MM-dd HH:mm" :disabled="auth"></DatePicker>
            </FormItem>
          </div>
          <div class="form">
            <FormItem
              label="病患住院记录"
              :prop="'more.' + index + '.treatRemark'"
              class="form-blocks"
              :rules="{
              required: true,
              message: '请选择病患住院记录',
              trigger: 'blur'
            }"
            >
              <Input type="textarea" v-model="item.treatRemark" placeholder="输入病患住院记录" :disabled="auth"/>
            </FormItem>
            <FormItem
              label="病患住院证明材料"
              :prop="'more.' + index + '.tFiles'"
              class="form-block"
              :rules="{
              required: true,
              message: '请上传病患住院证明材料',
              trigger: 'blur'
            }"
            >
              <Upload v-model="item.tFiles"/>
            </FormItem>
          </div>

          <Button class="delete-btn" @click="handleRemove(index)">
            <img src="../../../../../assets/fonts/delete.png" alt />
            删除该条记录
          </Button>
        </div>

        <!-- <FormItem class="form-add"> -->
        <!-- <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button> -->
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
import vm from "../../event";
export default {
  components: {
    TopTitle,
    Upload
  },
  data() {
    return {
      auth: false,
      closed: false,
      formValidate: {
        more: [
          {
            patientHospital: "",
            patientDoctor: "",
            checkinTime: "",
            checkoutTime: "",
            treatRemark: "",
            tFiles: ""
          }
        ]
      }
    };
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        this.formValidate.more.forEach(element=>{
          element.type = 1;
        })
        this.$store.state.step.treatData.formPatientZhuyuan = this.formValidate.more;
      }
    });
  },
  mounted(){
    var self = this;
    setTimeout(() => {   
      self.formValidate.more = self.$store.state.step.treatData.formPatientZhuyuan;
    },300);
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
        patientHospital: "",
        patientDoctor: "",
        checkinTime: "",
        checkoutTime: "",
        treatRemark: "",
        tFiles: ""
      };
      this.formValidate.more.push(obj);
    },
    // 删除
    handleRemove(index) {
      this.formValidate.more.splice(index, 1);
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
