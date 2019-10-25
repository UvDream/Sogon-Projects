<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 14:08:06
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 15:30:58
 * @Description: 本地病患
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'本地病患'" v-model="closed" />
    <Form
      ref="formValidate"
      label-position="top"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="200"
    >
      <div class="form">
        <FormItem label="是否接受治疗" prop="isTreatment" class="form-block">
          <Select v-model="formValidate.isTreatment" placeholder="选择档案状态">
            <Option value="0">是</Option>
            <Option value="1">否</Option>
          </Select>
        </FormItem>
        <FormItem
          label="情况说明"
          prop="isTreatmentDescription"
          class="form-blockd"
        >
          <Input
            v-model="formValidate.isTreatmentDescription"
            placeholder="请输入情况说明"
          />
        </FormItem>
      </div>

      <div class="form">
        <FormItem label="第一次走访说明" prop="firstVisit" class="form-more">
          <Input
            v-model="formValidate.firstVisit"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="输入第一次走访说明"
          />
        </FormItem>
        <FormItem label="第二次走访说明" prop="secondVisit" class="form-more">
          <Input
            v-model="formValidate.secondVisit"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="输入第二次走访说明"
          />
        </FormItem>
        <FormItem label="第三次走访说明" prop="thirdVisit" class="form-more">
          <Input
            v-model="formValidate.thirdVisit"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="输入第三次走访说明"
          />
        </FormItem>
      </div>
      <div class="form">
        <FormItem label="本埠证明材料" prop="uploadFiles" class="form-block">
          <Upload />
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
import TopTitle from "../../../../../components/top-title/top-title";
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
        isTreatment: "",
        isTreatmentDescription: "",
        firstVisit: "",
        secondVisit: "",
        thirdVisit: "",
        uploadFiles: ""
      },
      ruleValidate: {
        isTreatment: [{ required: true, message: "请选择是否接受治疗" }],
        uploadFiles: [{ required: true, message: "上传本埠证明材料" }]
      }
    };
  }
};
</script>

<style></style>
