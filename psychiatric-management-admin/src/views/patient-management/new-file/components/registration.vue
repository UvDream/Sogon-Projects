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
        <FormItem label="上传证明文件" prop="uploadFiles" class="form-block">
          <Input v-model="formValidate.uploadFiles" placeholder="输入档案号" />
        </FormItem>
      </div>
      <!-- 第七排 -->
      <div class="form">
        <FormItem label="登记人员" prop="registrationStaff" class="form-block">
          <Input v-model="formValidate.registrationStaff" placeholder="输入档案号" />
        </FormItem>
        <FormItem label="创建日期" prop="registrationDate" class="form-block">
          <DatePicker type="registrationDate" placeholder="选择日期" v-model="formValidate.createDate"></DatePicker>
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
import TopTitle from "../../../../components/top-title/top-title";

export default {
  components: {
    TopTitle
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
        registrationDate: ""
      },
      ruleValidate: {
        patientName: [{ required: true, message: "请输入患者姓名" }],
        sex: [{ required: true, message: "请选择性别" }],
        IdNumber: [{ required: true, message: "请输入身份证号" }],
        phone: [
          { required: false },
          { type: "phone", message: "请输入正确手机号", trigger: "blur" }
        ],
        status: [{ required: true }],
        village: [{ required: true }],
        police: [{ required: true }],
        patientCondition: [{ required: true }],
        risk: [{ required: true }],
        contactFamily: [{ required: true }],
        processingMethod: [{ required: true }],
        uploadFiles: [{ required: true }],
        registrationStaff: [{ required: true }],
        registrationDate: [{ required: true }]
      }
    };
  }
};
</script>

<style scoped lang="less">
</style>