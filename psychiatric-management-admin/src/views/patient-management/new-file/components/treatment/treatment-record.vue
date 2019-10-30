<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 16:40:34
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:04:25
 * @Description: 病患治疗记录
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopTitle :title="'病患治疗记录'" v-model="closed" />
    <Form ref="ruleForm" label-position="top" :model="ruleForm" :label-width="200">
      <div class="form-delete" v-for="(item, index) in ruleForm.more" :key="index">
        <div class="form">
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
            <Input v-model="item.hospital" placeholder="输入病患就诊医院" />
          </FormItem>
          <FormItem
            label="病患主治医生"
            :prop="'more.' + index + '.doctors'"
            class="form-block"
            :rules="{
              required: true,
              message: '请输入病患主治医生',
              trigger: 'blur'
            }"
          >
            <Input v-model="item.doctors" placeholder="输入病患主治医生" />
          </FormItem>
          <FormItem
            label="医生联系电话"
            :prop="'more.' + index + '.phone'"
            class="form-block"
            :rules="{
              required: true,
              message: '请输入医生联系电话',
              trigger: 'blur'
            }"
          >
            <Input v-model="item.phone" placeholder="输入医生联系电话" />
          </FormItem>
          <FormItem
            label="病患就诊时间"
            :prop="'more.' + index + '.dischargeTime'"
            class="form-block"
            :rules="{
              required: true,
              message: '请选择病患就诊时间',
              trigger: 'blur'
            }"
          >
            <DatePicker type="datetime" placeholder="请选择病患就诊时间" v-model="item.dischargeTime"></DatePicker>
          </FormItem>
        </div>
        <div class="form">
          <FormItem
            label="病患诊断记录情况"
            :prop="'more.' + index + '.recording'"
            class="form-blocks"
            :rules="{
              required: true,
              message: '请选择病患诊断记录情况',
              trigger: 'blur'
            }"
          >
            <Input type="textarea" v-model="item.recording" placeholder="输入病患诊断记录情况" />
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
            hospital: "",
            doctors: "",
            phone: "",
            dischargeTime: "",
            recording: "",
            uploadFiles: ""
          },
          {
            hospital: "",
            doctors: "",
            phone: "",
            dischargeTime: "",
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
        hospital: "",
        doctors: "",
        hospitalStay: "",
        dischargeTime: "",
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
  // min-height: 200px;
}
</style>
