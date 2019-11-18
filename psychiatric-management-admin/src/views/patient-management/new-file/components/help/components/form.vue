<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:53:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 18:03:05
 * @Description: 表单
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <div class="form" style="margin-top:20px">
        <FormItem label="部门" prop="department" class="form-block">
          <Select
            :disabled="auth"
            v-model="formValidate.department"
            placeholder="请选择部门"
            @on-change="departmentChange"
          >
            <Option
              v-for="item in departmentList"
              :value="item.id"
              :key="item.id"
            >{{ item.deptName }}</Option>
          </Select>
        </FormItem>
        <FormItem label="姓名" prop="name" class="form-block">
          <Select v-model="formValidate.name" placeholder="请输入姓名" @on-change="nameChange" :disabled="auth">
            <Option v-for="item in nameList" :value="item.id" :key="item.value">{{ item.name }}</Option>
          </Select>
        </FormItem>

        <FormItem label="身份证号" prop="IdNumber" class="form-block">
          <Input v-model="formValidate.IdNumber" placeholder="输入身份证号" :disabled="auth"/>
        </FormItem>
        <FormItem label="联系电话" prop="phone" class="form-block">
          <Input v-model="formValidate.phone" placeholder="输入联系电话" :disabled="auth"/>
        </FormItem>
        <!-- <FormItem style="width:100px">
          <Button type="primary" style="margin-top:25px">保存</Button>
        </FormItem>-->
      </div>
    </Form>
  </div>
</template>

<script>
import { validatePhone } from "@/util/util";
import vm from "../../../event";
import { departmentFunc, nameFunc } from "@/api/four/index";

export default {
  props:{
code:{
  type:Number
}
  },

  data() {
    return {
      auth: false,
      departmentList: [],
      nameList: [],
      formValidate: {
        name: "",
        department: "",
        IdNumber: "",
        phone: "",
        userId: "",
        // type: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        department: [
          { required: true, message: "请输入部门", trigger: "blur" }
        ],
        IdNumber: [
          { required: false, message: "请输入患者身份证号", trigger: "blur" },
          {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: "证件号码格式有误！",
            trigger: "blur"
          }
        ],
        phone: [{ required: true, message: "请输入联系方式", trigger: "blur" }]
      }
    };
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        console.log(this.code)
        this.code==0?this.$store.state.form.cadre = this.formValidate:""
        this.code==1?this.$store.state.form.police = this.formValidate:""
        this.code==2?this.$store.state.form.doctor = this.formValidate:""
      }
    });
  }, 
  mounted() {
    departmentFunc().then(res => {
      this.departmentList = res.data;
    }).then(res=>{
      if(this.code==0) {
        this.formValidate.department = this.$store.state.form.cadre.department;
        let obj = {
          deptId: this.formValidate.department
        };
        nameFunc(obj).then(res => {
          this.nameList = res.data;
        }).then(res=>{
          var self = this;
          this.formValidate.name = this.$store.state.form.cadre.name;
        });
        this.formValidate.IdNumber = this.$store.state.form.cadre.IdNumber;
        this.formValidate.phone = this.$store.state.form.cadre.phone;
      }
      if(this.code==1) {
        this.formValidate.department = this.$store.state.form.police.department;
        let obj = {
          deptId: this.formValidate.department
        };
        nameFunc(obj).then(res => {
          this.nameList = res.data;
        }).then(res=>{
          var self = this;
          this.formValidate.name = this.$store.state.form.police.name;
        });
        this.formValidate.IdNumber = this.$store.state.form.police.IdNumber;
        this.formValidate.phone = this.$store.state.form.police.phone;
      }
      if(this.code==2) {
        this.formValidate.department = this.$store.state.form.doctor.department;
        let obj = {
          deptId: this.formValidate.department
        };
        nameFunc(obj).then(res => {
          this.nameList = res.data;
        }).then(res=>{
          var self = this;
          this.formValidate.name = this.$store.state.form.doctor.name;
        });
        this.formValidate.IdNumber = this.$store.state.form.doctor.IdNumber;
        this.formValidate.phone = this.$store.state.form.doctor.phone;
      }
      
    })
  },
  methods: {
    departmentChange() {
      let obj = {
        deptId: this.formValidate.department
      };
      nameFunc(obj).then(res => {
        this.nameList = res.data;
      });
    },
    nameChange() {
      this.nameList.forEach(element => {
        if (
          element.deptId == this.formValidate.department &&
          element.id == this.formValidate.name
        ) {
          this.formValidate.IdNumber = element.idCode;
          this.formValidate.phone = element.telephone;
          this.formValidate.userId = element.id;
        }
      });
    }
  }
};
</script>

<style></style>
