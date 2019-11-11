<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-31 09:31:52
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-31 10:38:41
 * @Description: 再次评定
 * @Email: UvDream@163.com
 -->

<template>
  <div class="white-block">
    <TopTitle :title="'病患危险性等级'" v-model="closed" />
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
          <FormItem label="病患危险性等级评定" prop="status" class="form-textarea">
            <Select v-model="formValidate.status" placeholder="选择病患危险性等级评定">
              <Option value="0">1级：有口头威胁，喊叫，但没有打砸行为的</Option>
              <Option value="1">2级：有打砸行为，局限在家里，针对财物，且能被劝说制止的</Option>
              <Option value="2">3级：有明显打砸行为，不分场合，针对财物，且不能接受劝说制止的</Option>
              <Option value="2">4级：有持续的打砸行为，不分场合，针对财物或人（包括自伤、自杀），不能接受劝说制止的</Option>
              <Option value="2">5级：有持械针对人的任何暴力行为，或者纵火、爆炸等行为，无论在家里还是公共场合的</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form">
          <FormItem label="等级评定医院" prop="hospital" class="form-block">
            <Input v-model="formValidate.hospital" placeholder="输入等级评定医院" />
          </FormItem>
          <FormItem label="等级评定医生" prop="doctor" class="form-block">
            <Input v-model="formValidate.doctor" placeholder="输入等级评定医生" />
          </FormItem>
          <FormItem label="等级评定医生联系电话" prop="phone" class="form-block">
            <Input v-model="formValidate.phone" placeholder="输入等级评定医生联系电话" />
          </FormItem>
          <FormItem label="等级评定日期" prop="date" class="form-block">
            <DatePicker type="date" placeholder="选择等级评定日期" v-model="formValidate.date"></DatePicker>
          </FormItem>
        </div>
        <div class="form">
          <FormItem label="外埠病患处理说明" prop="description" class="form-textarea">
            <Input
              v-model="formValidate.description"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="输入外埠病患处理说明"
            />
          </FormItem>
          <FormItem label="外埠证明材料" prop="uploadFiles" class="form-block">
            <Upload v-model="formValidate.uploadFiles"/>
          </FormItem>
        </div>
      </Form>
    </transition>

    <Btn />
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import Upload from "@/components/upload/upload";
import Btn from "./components/button";
import vm from "./event";
import { validatePhone } from "@/util/util";

export default {
  components: {
    TopTitle,
    Upload,
    Btn
  },
  data() {
    return {
      closed: false,
      formValidate: {     
        status:"",
        hospital:"",
        doctor:"",
        phone:"",
        date:"",
        description:"",
        uploadFiles:[]
      },
      ruleValidate: {
        status: [
          {
            required: true,
            message: "请选择病患危险性等级评定",
            trigger: "blur"
          }
        ],
        hospital: [
          { required: true, message: "请输入等级评定医院", trigger: "blur" }
        ],
        doctor: [
          { required: true, message: "请输入等级评定医生", trigger: "blur" }
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          }
        ],
        date: [
          { required: true, message: "请输入等级评定日期", trigger: "blur" }
        ]
      }
    };
  },
  mounted(){
    this.formValidate = this.$store.state.step.againTreatData.formPatientLevel;
    console.log(this.$store.state.step.againTreatData.formPatientLevel)
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        this.$store.state.step.againTreatData.formPatientLevel = this.formValidate;
      }
    });
  }  
};
</script>

<style>
</style>