<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 10:19:37
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-31 10:39:10
 * @Description: 严重患者精神障碍排查登记
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'严重患者精神障碍排查登记'" v-model="closed" />
    <transition name="slide">
      <Form
        ref="formValidate"
        label-position="top"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="200"
        v-if="!closed"
      >
        <!-- 第一排 -->
        <div class="form">
          <FormItem label="患者姓名" prop="patientName" class="form-block">
            <Input v-model="formValidate.patientName" placeholder="输入患者姓名" :disabled="auth"/>
          </FormItem>
          <FormItem label="患者性别" prop="sex" class="form-block">
            <Select v-model="formValidate.sex" placeholder="选择患者性别" :disabled="auth">
              <Option value="0">男</Option>
              <Option value="1">女</Option>
            </Select>
          </FormItem>
          <FormItem label="患者身份证号" prop="IdNumber" class="form-block">
            <Input v-model="formValidate.IdNumber" placeholder="输入患者身份证号" :disabled="auth"/>
          </FormItem>
          <FormItem label="患者状况" prop="status" class="form-block">
            <Select v-model="formValidate.status" placeholder="选择患者状况" :disabled="auth">
              <Option value="0">在家</Option>
              <Option value="1">住院</Option>
              <Option value="2">就学</Option>
              <Option value="3">就业</Option>
              <Option value="4">不明</Option>
              <Option value="5">其它</Option>
            </Select>
          </FormItem>
        </div>
        <!-- 第二排 -->
        <div class="form">
          <FormItem label="患者工作单位" prop="employer" class="form-blocks">
            <Input v-model="formValidate.employer" placeholder="输入患者工作单位" :disabled="auth" />
          </FormItem>
          <FormItem label="联系电话" prop="patientPhone" class="form-block">
            <Input v-model="formValidate.patientPhone" placeholder="输入联系电话"  :disabled="auth"/>
          </FormItem>
          <FormItem label="患者所属村居" prop="village" class="form-block">
            <Input v-model="formValidate.village" placeholder="输入所属村居"  :disabled="auth"/>
          </FormItem>
          <FormItem label="患者社区民警" prop="police" class="form-block">
            <Input v-model="formValidate.police" placeholder="输入患者社区民警"  :disabled="auth"/>
          </FormItem>
        </div>
        <!-- 第三排 -->
        <div class="form">
          <FormItem label="是否是外埠患者" prop="foreigner" class="form-block">
            <Select v-model="formValidate.foreigner" placeholder="选择是否为外埠患者" @on-change="selectChange"  :disabled="auth">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
          <FormItem label="外籍患者处理" prop="processingMethod" class="form-block">
            <Select v-model="formValidate.processingMethod" placeholder="选择外籍患者处理" :disabled="formValidate.foreigner != 0 && auth">
              <Option value="0">联系亲属领回</Option>
              <Option value="1">联系原籍公安</Option>
              <Option value="2">联系原籍医院</Option>
              <Option value="2">本地医院就诊</Option>
            </Select>
          </FormItem>
          <FormItem label="患者住址" prop="patientAddress" class="form-blocks">
            <Input v-model="formValidate.patientAddress" placeholder="输入患者住址"  :disabled="auth"/>
          </FormItem>
        </div>
        <!-- 第四排 -->
        <div class="form">
          <FormItem label="患者病情" prop="patientCondition" class="form-blocks">
            <Select v-model="formValidate.patientCondition" placeholder="选择患者状况" :disabled="auth">
              <Option value="0">曾在精神科住院治疗</Option>
              <Option value="1">因精神异常被家人关锁</Option>
              <Option value="2">无故冲动，伤人、毁物，或无故离家出走</Option>
              <Option value="3">行为举止古怪，在公共场合蓬头垢面或赤身露体</Option>
              <Option value="4">经常无故自语自笑，或说一些不合常理的话</Option>
              <Option value="5">变得疑心大，认为周围人都针对他或者迫害他</Option>
              <Option value="6">变得过分兴奋话多（说个不停）、活动多、爱惹事、到处乱跑等</Option>
              <Option value="7">变得冷漠、孤僻、懒散，无法正常学习、工作和生活</Option>
              <Option value="8">有过自杀行为或企图</Option>
            </Select>
          </FormItem>
          <FormItem label="患者危险性" prop="risk" class="form-blocks">
            <Select v-model="formValidate.risk" placeholder="选择患者危险性" :disabled="auth">
              <Option value="0">1级：有口头威胁，喊叫，但没有打砸行为的</Option>
              <Option value="1">2级：有打砸行为，局限在家里，针对财物，且能被劝说制止的</Option>
              <Option value="2">3级：有明显打砸行为，不分场合，针对财物，且不能接受劝说制止的</Option>
              <Option value="2">4级：有持续的打砸行为，不分场合，针对财物或人（包括自伤、自杀），不能接受劝说制止的</Option>
              <Option value="2">5级：有持械针对人的任何暴力行为，或者纵火、爆炸等行为，无论在家里还是公共场合的</Option>
            </Select>
          </FormItem>
        </div>
        <!-- 第五排 -->
        <div class="form">
          <FormItem label="监护人姓名" prop="guardianName" class="form-block">
            <Input v-model="formValidate.guardianName" placeholder="输入监护人姓名"  :disabled="auth"/>
          </FormItem>
          <FormItem label="与患者关系" prop="relationship" class="form-block">
            <Select v-model="formValidate.relationship" placeholder="选择与患者关系" :disabled="auth">
              <Option value="0">父母</Option>
              <Option value="1">配偶</Option>
              <Option value="2">子女</Option>
              <Option value="3">其它亲属</Option>
            </Select>
          </FormItem>
          <FormItem label="监护人单位" prop="guardianUnit" class="form-blocks">
            <Input v-model="formValidate.guardianUnit" placeholder="输入监护人单位"  :disabled="auth"/>
          </FormItem>
          <FormItem label="联系电话" prop="guardianPhone" class="form-block">
            <Input v-model="formValidate.guardianPhone" placeholder="输入监护人联系电话"  :disabled="auth"/>
          </FormItem>
        </div>
        <!-- 第六排 -->
        <div class="form">
          <FormItem label="肇事肇祸" prop="anecdote" class="form-textarea">
            <Input
              :disabled="auth"
              v-model="formValidate.anecdote"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="输入肇事肇祸"
            />
          </FormItem>
          <!-- 上传文件 -->
          <FormItem label="上传证明文件" prop="uploadFiles" class="form-block">
            <Upload v-model="formValidate.uploadFiles"/>
          </FormItem>
        </div>

        <!-- <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
        </FormItem>-->
      </Form>
    </transition>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import Upload from "@/components/upload/upload";
import data from "../../../../../mixin/newFile";
import vm from "../../event";
import { validatePhone } from "@/util/util";

export default {
  mixins: [data],
  components: {
    TopTitle,
    Upload
  },
  data() {
    return {
      auth: false,
      closed: false,
      formList: {"patientCode":"320623198807064421","isforeign":"0","tFiles":[{"filepath":"D://file"},{"filepath":"D://Filetwo"}]},
      formValidate: {
        // 1
        patientName: "",
        sex: "",
        patientPhone: "",
        IdNumber: "",
        status: "",
        // 2
        employer: "",
        patient: "",
        village: "",
        police: "",
        // 3
        foreigner: "",
        processingMethod: "",
        patientAddress: "",
        // 4
        patientCondition: "",
        risk: "",
        // 5
        guardianName: "",
        relationship: "",
        guardianUnit: "",
        guardianPhone: "",
        // 6
        anecdote: "",
        uploadFiles: ""
      },
      ruleValidate: {
        // 1
        patientName: [
          { required: true, message: "请输入患者姓名", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择患者性别", trigger: "blur" }],
        IdNumber: [
          { required: true, message: "请输入患者身份证号", trigger: "blur" },
          {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: "证件号码格式有误！",
            trigger: "blur"
          }
        ],
        status: [
          { required: true, message: "请选择患者状态", trigger: "blur" }
        ],
        // 2
        village: [
          { required: true, message: "请输入患者所属村居", trigger: "blur" }
        ],
        // patientPhone: [
        //   { required: false, validator: validatePhone, trigger: "blur" }
        // ],
        police: [
          { required: true, message: "请输入患者社区民警", trigger: "blur" }
        ],
        // 3
        foreigner: [
          { required: true, message: "请选择是否外埠患者", trigger: "blur" }
        ],
        processingMethod: [
          { required: true, message: "请选择外埠患者处理方式", trigger: "blur" }
        ],
        // 4
        patientCondition: [
          { required: true, message: "请选择患者病情", trigger: "blur" }
        ],
        risk: [
          { required: true, message: "请选择患者危险性", trigger: "blur" }
        ],
        // 5
        guardianName: [
          { required: true, message: "请输入监护人姓名", trigger: "blur" }
        ],
        // guardianPhone: [
        //   { required: false, validator: validatePhone, trigger: "blur" }
        // ],
        relationship: [
          { required: true, message: "请选择与患者关系", trigger: "blur" }
        ]

        // 6
        // uploadFiles: [
        //   { required: false, message: "请上传证明文件", trigger: "blur" }
        // ]
      }
    };
  },
  created() {
    vm.$on("blur", val => {
      if (val == "saveEvent") {
        this.handleSubmit("formValidate");
      }
    });
  },
  mounted() {
    // 如果是点进来修改
    var self = this;
    setTimeout(() => {      
      if(true) {
        console.log(self.$store.state.step.findData.checkRegistration)
          self.formValidate = JSON.parse(JSON.stringify(self.$store.state.step.findData.checkRegistration));
          self.formValidate.sex = (self.$store.state.step.findData.checkRegistration.sex || 0) + "";
          self.formValidate.patientPhone = (self.$store.state.step.findData.checkRegistration.patientPhone || "") + "";
          self.formValidate.status = (self.$store.state.step.findData.checkRegistration.status || 0) + "";
          self.formValidate.foreigner = (self.$store.state.step.findData.checkRegistration.foreigner || 0) + "";
          self.formValidate.processingMethod = (self.$store.state.step.findData.checkRegistration.processingMethod || 0) + "";
          self.formValidate.patientCondition = (self.$store.state.step.findData.checkRegistration.patientCondition || 0) + "";
          self.formValidate.risk = (self.$store.state.step.findData.checkRegistration.risk || 0) + "";
          self.formValidate.guardianPhone = (self.$store.state.step.findData.checkRegistration.guardianPhone || "") + "";
          self.formValidate.relationship = (self.$store.state.step.findData.checkRegistration.relationship || 0) + "";
        
        }
    }, 300);
  },
  methods: {
    selectChange(e){
      console.log(e)
      this.$store.state.step.isForeign=e;
      if(this.formValidate.foreigner != 0){
        this.ruleValidate.processingMethod = false;
        this.formValidate.processingMethod = "";
      }else {
        this.ruleValidate.processingMethod = true;
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.$store.state.step.findData.checkRegistration = this.formValidate;
          this.$store.state.step.findStatus = true;
          console.log(this.$store.state.step.findStatus)
        } else {
          this.$Message.error("Fail!");
          this.$store.state.step.findStatus = false;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
