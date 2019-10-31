<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-23 17:37:33
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:13:04
 * @Description: 外地病患
 * @Email: UvDream@163.com
 -->
<template>
  <div class="foreign">
    <TopTitle :title="'档案基本信息'" v-model="closed" />
    <transition name="slide">
      <div class="foreign-form" v-if="!closed">
        <Form label-position="top" :model="formValidate" :rules="ruleValidate" :label-width="200">
          <div class="form">
            <FormItem label="档案编号" prop="number" class="form-block">
              <Input v-model="formValidate.code" placeholder="输入档案号" />
            </FormItem>
            <FormItem label="档案名称" prop="name" class="form-block">
              <Input v-model="formValidate.name" placeholder="输入档案名称" />
            </FormItem>
            <FormItem label="创建人" prop="founder" class="form-block">
              <Input v-model="formValidate.checkin_dept" placeholder="输入创建人" />
            </FormItem>
            <FormItem label="创建日期" prop="createDate" class="form-block">
              <DatePicker type="date" placeholder="选择日期" v-model="formValidate.createDate"></DatePicker>
            </FormItem>
            <!-- <FormItem label="转发人" prop="forwarder" class="form-block">
              <Input v-model="formValidate.forwarder" placeholder="输入转发人" />
            </FormItem>
            <FormItem label="转发日期" prop="forwardDate" class="form-block">
              <DatePicker type="date" placeholder="选择转发日期" v-model="formValidate.forwardDate"></DatePicker>
            </FormItem> -->
          </div>
          <!-- <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
          </FormItem>-->
        </Form>
      </div>
    </transition>
  </div>
</template>
<script>
import TopTitle from "@/components/top-title/top-title";
import vm from "../../event";
import { saveList } from "@/api/new-file/find";
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      closed: false,
      formValidate: {
        code: "",
        name: "",
        checkin_dept: "",
        createDate: "",
        forwarder: "",
        forwardDate: ""
      },
      ruleValidate: {},
      
    };
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        this.$store.state.step.findData.basicInformation = this.formValidate;
      }
    });
  },
  mounted() {
    this.formValidate=this.$store.state.step.findData.basicInformation;
    saveList(this.formList).then(res=>{
      console.log(res)
    })
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
.foreign {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
  // min-height: 200px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
}
</style>
