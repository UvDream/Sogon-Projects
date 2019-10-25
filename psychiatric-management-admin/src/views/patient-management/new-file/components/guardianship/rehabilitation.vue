<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 19:23:28
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 19:30:12
 * @Description: 康复
 * @Email: UvDream@163.com
 -->

<template>
  <div class="white-block">
    <TopTitle :title="'病患康复记录'" v-model="closed" />
    <Form
      ref="ruleForm"
      label-position="top"
      :model="ruleForm"
      :label-width="200"
    >
      <div
        class="form-delete"
        v-for="(item, index) in ruleForm.more"
        :key="index"
      >
        <div class="form">
          <FormItem
            label="病患康复日期"
            :prop="'more.' + index + '.date'"
            class="form-block"
            :rules="{
              required: true,
              message: '请选择病患康复日期',
              trigger: 'blur'
            }"
          >
            <DatePicker
              type="datetime"
              placeholder="请选择病患康复日期"
              v-model="item.date"
            ></DatePicker>
          </FormItem>
          <FormItem
            label="病患就诊医院"
            class="form-block"
            :prop="'more.' + index + '.hospital'"
            :rules="{
              required: true,
              message: '请输入病患就诊医院',
              trigger: 'blur'
            }"
          >
            <Select v-model="item.hospital" placeholder="选择档案状态">
              <Option value="0">男</Option>
              <Option value="1">女</Option>
              <Option value="2">未知</Option>
            </Select>
          </FormItem>
          <FormItem
            label="病患工作单位"
            :prop="'more.' + index + '.unit'"
            class="form-blocks"
            :rules="{
              required: true,
              message: '请输入病患工作单位',
              trigger: 'blur'
            }"
          >
            <Input v-model="item.unit" placeholder="输入病患工作单位" />
          </FormItem>
        </div>
        <div class="form">
          <FormItem
            label="病患康复情况说明"
            :prop="'more.' + index + '.recording'"
            class="form-blocks"
            :rules="{
              required: true,
              message: '请输入病患康复情况说明',
              trigger: 'blur'
            }"
          >
            <Input
              type="textarea"
              v-model="item.recording"
              placeholder="输入病患康复情况说明"
            />
          </FormItem>
          <FormItem
            label="病患治疗证明材料"
            :prop="'more.' + index + '.uploadFiles'"
            class="form-block"
            :rules="{
              required: true,
              message: '请上传病患治疗证明材料',
              trigger: 'blur'
            }"
          >
            <Upload />
          </FormItem>
        </div>

        <Button class="delete-btn" @click="handleRemove(index)">
          <img src="../../../../../assets/fonts/delete.png" alt />
          删除该条记录
        </Button>
      </div>

      <!-- <FormItem class="form-add"> -->
      <!-- <Button type="primary" @click="handleSubmit('ruleForm')">Submit</Button> -->
      <div class="form-add">
        <div @click="handleAdd">
          <img src="../../../../../assets/fonts/add.png" alt />
          添加信息
        </div>
      </div>
      <!-- </FormItem> -->
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
      ruleForm: {
        more: [
          {
            date: "",
            hospital: "",
            unit: "",
            recording: "",
            uploadFiles: ""
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    // 添加
    handleAdd() {
      let obj = {
        date: "",
        hospital: "",
        unit: "",
        recording: "",
        uploadFiles: ""
      };
      this.ruleForm.more.push(obj);
    },
    // 删除
    handleRemove(index) {
      this.ruleForm.more.splice(index, 1);
    }
  }
};
</script>
<style lang="less" scoped>
.add-block {
  outline: 1px solid red;
  width: 100%;
  min-height: 200px;
}
</style>
