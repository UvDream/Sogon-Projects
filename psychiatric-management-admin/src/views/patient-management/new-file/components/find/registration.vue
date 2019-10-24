<template>
  <div class="white-block">
    <TopTitle :title="'严重患者精神障碍排查登记'" v-model="closed" />
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <!-- 第一排 -->
      <div class="form">
        <FormItem label="患者姓名" prop="patientName" class="form-block">
          <Input v-model="formValidate.patientName" placeholder="输入档案号" />
        </FormItem>
        <FormItem label="患者性别" prop="sex" class="form-block">
          <Select v-model="formValidate.sex" placeholder="选择档案状态">
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">未知</Option>
          </Select>
        </FormItem>
        <FormItem label="患者身份证号" prop="IdNumber" class="form-block">
          <Input v-model="formValidate.IdNumber" placeholder="输入身份证号" />
        </FormItem>
        <FormItem label="患者电话" prop="phone" class="form-block">
          <Input v-model="formValidate.phone" placeholder="输入患者电话" />
        </FormItem>
      </div>
      <!-- 第二排 -->
      <div class="form">
        <FormItem label="患者住址" prop="address" class="form-blocks">
          <Input v-model="formValidate.address" placeholder="输入患者住址" />
        </FormItem>
        <FormItem label="患者工作单位" prop="employer" class="form-blocks">
          <Input v-model="formValidate.employer" placeholder="输入患者住址" />
        </FormItem>
        <FormItem label="患者状况" prop="status" class="form-block">
          <Select v-model="formValidate.status" placeholder="选择患者状况">
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">未知</Option>
          </Select>
        </FormItem>
      </div>
      <!-- 第三排 -->
      <div class="form">
        <FormItem label="监护人姓名" prop="guardianName" class="form-block">
          <Input v-model="formValidate.guardianName" placeholder="输入监护人姓名" />
        </FormItem>
        <FormItem label="与患者关系" prop="relationship" class="form-block">
          <Input v-model="formValidate.relationship" placeholder="输入与患者关系" />
        </FormItem>
        <FormItem label="联系电话" prop="guardianPhone" class="form-block">
          <Input v-model="formValidate.guardianPhone" placeholder="输入监护人联系电话" />
        </FormItem>
        <FormItem label="所属村居" prop="village" class="form-block">
          <Input v-model="formValidate.village" placeholder="输入所属村居" />
        </FormItem>
        <FormItem label="社区民警" prop="police" class="form-block">
          <Input v-model="formValidate.police" placeholder="输入所属村居" />
        </FormItem>
      </div>
      <!-- 第四排 -->
      <div class="form">
        <FormItem label="监护人单位" prop="guardianUnit" class="form-blocks">
          <Input v-model="formValidate.guardianUnit" placeholder="输入患者住址" />
        </FormItem>
        <FormItem label="患者病情" prop="patientCondition" class="form-blocks">
          <Select v-model="formValidate.patientCondition" placeholder="选择患者状况">
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">未知</Option>
          </Select>
        </FormItem>
      </div>
      <!-- 第五排 -->
      <div class="form">
        <FormItem label="危险性评估" prop="risk" class="form-blocks">
          <Select v-model="formValidate.risk" placeholder="选择危险性">
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">未知</Option>
          </Select>
        </FormItem>
        <FormItem label="是否可以联系家属" prop="contactFamily" class="form-block">
          <Select v-model="formValidate.contactFamily" placeholder="选择档案状态">
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">未知</Option>
          </Select>
        </FormItem>
        <FormItem label="外籍患者处理方式" prop="processingMethod" class="form-block">
          <Select v-model="formValidate.processingMethod" placeholder="选择档案状态">
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">未知</Option>
          </Select>
        </FormItem>
      </div>
      <!-- 第六排 -->
      <div class="form">
        <FormItem label="肇事肇祸" prop="anecdote" class="form-textarea">
          <Input
            v-model="formValidate.anecdote"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="输入所属村居"
          />
        </FormItem>
        <!-- 上传文件 -->
        <FormItem label="上传证明文件" prop="uploadFiles" class="form-block">
          <Upload />
        </FormItem>
      </div>
      <!-- 第七排 -->
      <div class="form">
        <FormItem label="登记人员" prop="registrationStaff" class="form-block">
          <Input v-model="formValidate.registrationStaff" placeholder="输入档案号" />
        </FormItem>
        <FormItem label="登记日期" prop="registrationDate" class="form-block">
          <DatePicker type="date" placeholder="请选择登记日期" v-model="formValidate.createDate"></DatePicker>
        </FormItem>
      </div>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import Upload from "@/components/upload/upload";

export default {
  components: {
    TopTitle,
    Upload
  },
  data() {
    return {
      closed: false,
      formValidate: {
        patientName: "",
        sex: "",
        IdNumber: "",
        phone: "",
        address: "",
        employer: "",
        status: "",
        // 监护人姓名
        guardianName: "",
        relationship: "",
        guardianPhone: "",
        village: "",
        police: "",
        guardianUnit: "",
        patientCondition: "",
        // 危险性评估
        risk: "",
        contactFamily: "",
        processingMethod: "",
        anecdote: "",
        uploadFiles: "",
        // 登记人员
        registrationStaff: "",
        registrationDate: "2019-10-11"
      },
      ruleValidate: {
        patientName: [{ required: true, message: "请输入患者姓名" }],
        sex: [{ required: true, message: "请选择性别" }],
        IdNumber: [{ required: true, message: "请输入身份证号" }],
        // phone: [
        //   { required: false },
        //   { type: "phone", message: "请输入正确手机号", trigger: "blur" }
        // ],
        status: [{ required: true, message: "请选择患者状况" }],
        village: [{ required: true, message: "请输入所属村居" }],
        police: [{ required: true, message: "请输入社区民警" }],
        patientCondition: [{ required: true, message: "请选择患者病情" }],
        risk: [{ required: true, message: "请选择危险性评估" }],
        contactFamily: [{ required: true, message: "请选择是否联系到家属" }],
        processingMethod: [
          { required: true, message: "请选择外籍患者处理方式" }
        ],
        uploadFiles: [{ required: true, message: "上传证明文件" }],
        registrationStaff: [{ required: true, message: "请输入登记人员" }],
        registrationDate: [{ required: true, message: "请选择登记日期" }]
      }
    };
  },
  mounted() {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
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