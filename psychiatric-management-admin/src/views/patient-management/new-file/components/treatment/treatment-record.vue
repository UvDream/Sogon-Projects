<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 16:40:34
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:20:38
 * @Description: 病患治疗记录
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'病患治疗记录'" v-model="closed" />
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
              message: '请输入病患主治医生',
              trigger: 'blur'
            }"
            >
              <Input v-model="item.patientDoctor" placeholder="输入病患主治医生" :disabled="auth"/>
            </FormItem>
            <FormItem
              label="医生联系电话"
              :prop="'more.' + index + '.doctorTel'"
              class="form-block"
              :rules="{
              required: true,
              message: '请输入医生联系电话',
              trigger: 'blur'
            }"
            >
              <Input v-model="item.doctorTel" placeholder="输入医生联系电话" :disabled="auth"/>
            </FormItem>
            <FormItem
              label="病患就诊时间"
              :prop="'more.' + index + '.treatTime'"
              class="form-block"
              :rules="{
              required: true,
              message: '请选择病患就诊时间',
              trigger: 'blur'
            }"
            >
              <DatePicker type="datetime" placeholder="请选择病患就诊时间" v-model="item.treatTime" format="yyyy-MM-dd HH:mm" :disabled="auth"></DatePicker>
            </FormItem>
          </div>
          <div class="form">
            <FormItem
              label="病患诊断记录情况"
              :prop="'more.' + index + '.treatRemark'"
              class="form-blocks"
              :rules="{
              required: true,
              message: '请选择病患诊断记录情况',
              trigger: 'blur'
            }"
            >
              <Input type="textarea" v-model="item.treatRemark" placeholder="输入病患诊断记录情况" :disabled="auth"/>
            </FormItem>
            <FormItem
              label="病患治疗证明材料"
              :prop="'more.' + index + '.tFiles'"
              class="form-block"
              :rules="{
              required: true,
              message: '请上传病患治疗证明材料',
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
            doctorTel: "",
            treatTime: "",
            treatRemark: "",
            tFiles: []
          }
        ]
      }
    };
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        this.formValidate.more.forEach(element=>{
          element.type = 0;
        })
        this.$store.state.step.treatData.formPatientTreat = this.formValidate.more;
      }
    });
  },
  mounted(){
    var self = this;
    setTimeout(() => {   
      self.formValidate.more = self.$store.state.step.treatData.formPatientTreat;
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
        doctorTel: "",
        treatTime: "",
        treatRemark: "",
        tFiles: []
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
