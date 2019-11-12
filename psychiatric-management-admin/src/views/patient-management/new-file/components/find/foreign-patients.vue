<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-23 17:37:33
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-31 20:21:21
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
              <Input disabled v-model="formValidate.code" placeholder="输入档案号" />
            </FormItem>
            <FormItem label="档案状态" prop="status" class="form-block">
              <!-- <Input disabled v-model="formValidate.status" placeholder="输入档案状态" /> -->
              <Select disabled v-model="formValidate.status" placeholder="选择档案状态">
                <Option value="0">发现中</Option>
                <Option value="1">已推送</Option>
                <Option value="2">初步处理中</Option>
                <Option value="3">已办结</Option>
                <Option value="4">评定治疗中</Option>
                <Option value="5">监护中</Option>
                <Option value="6">帮扶中</Option>
                <Option value="7">再次评定</Option>
                <Option value="8">脱离管控</Option>
              </Select>
            </FormItem>
            <FormItem label="创建人" prop="founder" class="form-block">
              <Input disabled v-model="formValidate.checkin_dept" placeholder="输入创建人" />
            </FormItem>
            <FormItem label="创建日期" prop="createDate" class="form-block">
              <Date-picker disabled type="datetime" placeholder="选择日期" v-model="formValidate.createDate" format="yyyy-MM-dd"></Date-picker>
            </FormItem>
            <!-- <FormItem label="转发人" prop="forwarder" class="form-block">
              <Input disabled v-model="formValidate.forwarder" placeholder="输入转发人" />
            </FormItem>
            <FormItem label="转发日期" prop="forwardDate" class="form-block">
              <DatePicker type="date" placeholder="选择转发日期" v-model="formValidate.forwardDate"></DatePicker>
            </FormItem>-->
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
// import { saveList } from "@/api/new-file/find";
import {formatDate} from "@/util/util";
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      closed: false,
      formValidate: {
        code: "",
        // name: "",
        zhuangtai: "",
        checkin_dept: "",
        createDate: '',
        // forwarder: "",
        // forwardDate: ""
      },
      ruleValidate: {},      
    };
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        var self = this;
        setTimeout(function(){
          self.formValidate = self.$store.state.step.findData.basicInformation;
          self.formValidate.status = self.$store.state.step.findData.basicInformation.status;     
          self.formValidate.createDate = formatDate(new Date(self.$store.state.step.findData.basicInformation.createDate),'yyyy-MM-dd');                                      
        },300)
      }
    });
  },
  mounted() {
    // 如果是点进来修改
    if(true) {
      let self = this;
      console.log(this.$store.state.step.findData.basicInformation)
      setTimeout(function(){
        self.formValidate = self.$store.state.step.findData.basicInformation;
        self.formValidate.createDate = formatDate(new Date(self.$store.state.step.findData.basicInformation.createDate),'yyyy-MM-dd');                        
        self.formValidate.status = self.$store.state.step.findData.basicInformation.status;                        
      },1500);
    }
  },
  methods: {}
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
