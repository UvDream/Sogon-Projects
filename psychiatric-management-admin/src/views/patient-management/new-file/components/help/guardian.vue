<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:49:27
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 16:02:34
 * @Description: 监护人帮扶
 * @Email: UvDream@163.com
 -->

<template>
  <div class="white-block">
    <TopMessage
      :title="'监护人监护'"
      :message="
        '职责说明:负责患者的日常生活照料看管，监督被监护人按量按时服药，严禁遗弃、虐待患者，平时注意患者的言行和病情的发展，及时向村居干部、派出所报告动向。'
      "
      v-model="closed"
    />
    <transition name="slide">
      <div v-if="!closed">
        <div class="search">
          <Form
            ref="formValidate"
            label-position="top"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="200"
          >
            <div class="form" style="margin-top:20px">
              <FormItem label="姓名" prop="name" class="form-block">
                <Input v-model="formValidate.name" placeholder="输入姓名" />
              </FormItem>
              <FormItem label="与患者关系" prop="relationship" class="form-block">
                <Select v-model="formValidate.relationship" placeholder="选择与患者关系">
                  <Option value="0">父母</Option>
                  <Option value="1">配偶</Option>
                  <Option value="2">子女</Option>
                  <Option value="2">其它亲属</Option>
                </Select>
              </FormItem>
              <FormItem label="救助金额领取银行卡号" prop="banNumber" class="form-block">
                <Input v-model="formValidate.banNumber" placeholder="输入身份证号" />
              </FormItem>
              <FormItem label="联系电话" prop="phone" class="form-block">
                <Input v-model="formValidate.phone" placeholder="输入联系电话" />
              </FormItem>
            </div>
          </Form>
        </div>
        <cTable :code="3" />
      </div>
    </transition>
  </div>
</template>

<script>
import TopMessage from "./components/top-title";
import cTable from "./components/table";
import vm from "../../event";
import { validatePhone } from "@/util/util";
export default {
  components: {
    TopMessage,
    cTable
  },
  data() {
    return {
      closed: false,
      formValidate: {
        name: "",
        relationship: "",
        banNumber: "",
        phone: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        relationship: [
          { required: true, message: "请输入与患者关系", trigger: "blur" }
        ],
        phone: [{ required: true, validator: validatePhone, trigger: "blur" }]
      }
    };
  },
  watch: {
    closed(val) {
      console.log("折叠", val);
    }
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        this.$store.state.form.guardian = this.formValidate
      }
    });
  },   
  methods: {}
};
</script>
