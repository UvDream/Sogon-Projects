<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 14:08:06
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:18:39
 * @Description: 本地病患
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'本地病患'" v-model="closed" />
    <transition name="slide">
      <Form
        ref="formValidate"
        label-position="top"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="200"
        v-if="!closed"
      >
        <div class="form">
          <FormItem label="是否接受治疗" prop="isTreatment" class="form-block">
            <Select v-model="formValidate.isTreatment" placeholder="选择档案状态" :disabled="auth">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
          <FormItem label="是否愿意接受治疗" prop="bIswilltreat" class="form-block">
            <Select v-model="formValidate.bIswilltreat" placeholder="选择档案状态" :disabled="auth">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
          <FormItem label="情况说明" prop="isTreatmentDescription" class="form-blockd">
            <Input v-model="formValidate.isTreatmentDescription" placeholder="请输入情况说明" :disabled="auth"/>
          </FormItem>
        </div>

        <div class="form">
          <FormItem label="第一次走访说明" prop="firstVisit" class="form-more">
            <Input
              :disabled="auth"
              v-model="formValidate.firstVisit"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="输入第一次走访说明"
            />
          </FormItem>
          <FormItem label="第二次走访说明" prop="secondVisit" class="form-more">
            <Input
              :disabled="auth"
              v-model="formValidate.secondVisit"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="输入第二次走访说明"
            />
          </FormItem>
          <FormItem label="第三次走访说明" prop="thirdVisit" class="form-more">
            <Input
              :disabled="auth"
              v-model="formValidate.thirdVisit"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="输入第三次走访说明"
            />
          </FormItem>
        </div>
        <div class="form">
          <FormItem label="本埠证明材料" prop="uploadFiles" class="form-block">
            <Upload v-model="formValidate.uploadFiles" />
          </FormItem>
        </div>
      </Form>
    </transition>
  </div>
</template>

<script>
import TopTitle from "../../../../../components/top-title/top-title";
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
        isTreatment: "",
        bIswilltreat:"",
        isTreatmentDescription: "",
        firstVisit: "",
        secondVisit: "",
        thirdVisit: "",
        uploadFiles: [],
        archivesId:"",
      },
      ruleValidate: {
        isTreatment: [{ required: true, message: "请选择是否接受治疗" }],
        bIswilltreat: [{ required: true, message: "请选择是否接受治疗" }],
        // uploadFiles: [{ required: true, message: "上传本埠证明材料" }]
      }
    };
  },
  computed:{
    listenData(){
      return this.$store.state.step.dealData.formData;;
    }
  },
  watch:{
    listenData: function(newVal,oldVal){
      this.formValidate = newVal
    }
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        // alert('dsf')
        this.handleSubmit('formValidate');
      }
    });
  },
  mounted() {
    var self = this;
    setTimeout(() => {   
      self.formValidate = self.$store.state.step.dealData.formData;
      self.formValidate.isTreatment = self.$store.state.step.dealData.formData.isTreatment.toString();
      self.formValidate.bIswilltreat = self.$store.state.step.dealData.formData.bIswilltreat.toString();      
    },300);
  },  
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          alert('Success')
          this.$store.state.step.dealData.formData = this.formValidate;
          this.$store.state.step.dealStatus = true;
        } else {
          this.$Message.error("Fail!");
          // alert('fail')
          this.$store.state.step.dealStatus = false;
        }
      });
    }
  }
};
</script>

<style></style>
