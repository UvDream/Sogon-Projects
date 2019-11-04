<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:24:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 16:41:18
 * @Description: 表格
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <div class="all-check">
      <div>
        <!-- <section @click="handleSelectAll(true)">全选</section>
        <section @click="handleSelectAll(false)" style="color:#999">取消全选</section>-->
      </div>
      <section @click="deleteFunc">删除</section>
      <!-- <span style="line-height:40px;margin-left:10px">
        <Icon type="ios-sync" />刷新
      </span>-->
    </div>
    <!-- 表格 -->
    <div class="table">
      <Table
        border
        ref="selection"
        @on-select-all="selectAll"
        @on-select-all-cancel="cancelAll"
        @on-select="selectTable"
        :columns="columns"
        :data="data"
      ></Table>
    </div>
    <div class="add">
      <div @click="modal=true">
        <Icon type="ios-add-circle-outline" style="margin-right:5px" />添加信息
      </div>
    </div>
    <div class="table-foot">
      <!-- <Button type="primary" ghost>确认病患康复</Button> -->
      <!-- <Page :total="40" size="small" show-elevator show-sizer show-total /> -->
    </div>
    <!-- 新增病患记录 -->
    <Modal v-model="modal" title="新增帮扶记录" width="600" @on-cancel="modal=false">
      <Form
        ref="formValidate"
        label-position="top"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="200"
      >
        <div class="form">
          <FormItem label="帮扶时间" prop="helpDate" class="form-block">
            <DatePicker
              type="date"
              v-model="formValidate.helpDate"
              format="yyyy/MM/dd"
              placeholder="请选择帮扶时间"
            ></DatePicker>
          </FormItem>
          <FormItem label="是否符合补助条件" prop="isubsidy" class="form-block">
            <Select v-model="formValidate.isubsidy" placeholder="选择是否符合补助条件">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
          <FormItem label="是否坚持治疗" prop="istilltreat" class="form-block">
            <Select v-model="formValidate.istilltreat" placeholder="选择是否坚持治疗">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
          <FormItem label="是否履行监护人职责" prop="isguardianduty" class="form-block">
            <Select v-model="formValidate.isguardianduty" placeholder="选择是否履行监护人职责">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
        </div>
        <FormItem style="margin-left:30px" label="病患肇事肇祸情况" prop="causeTrouble" class="form-blocks">
          <Input
            v-model="formValidate.causeTrouble"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="输入病患肇事肇祸情况"
          />
        </FormItem>
        <FormItem style="margin-left:30px" label="病患康复情况" prop="recureinfo" class="form-blocks">
          <Input
            v-model="formValidate.recureinfo"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="输入病患康复情况"
          />
        </FormItem>
        <FormItem style="margin-left:30px" label="上传证明文件" prop="fileCode" class="form-block">
          <Upload v-model="formValidate.fileCode" />
        </FormItem>
      </Form>
      <div slot="footer" style="text-align:center">
        <Button type="primary" size="large" @click="addFunc('formValidate')">
          <Icon type="ios-add-circle-outline" style="margin-right:10px" />新增
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Upload from "@/components/upload/upload";
export default {
  props: {
    // 区分块
    code: {
      type: Number,
      default: 0
    }
  },
  computed: {
    cadreList: function() {
      return this.$store.state.form.cadreList;
    },
    policeList: function() {
      return this.$store.state.form.policeList;
    },
    doctorList: function() {
      return this.$store.state.form.doctorList;
    },
    guardianList: function() {
      return this.$store.state.form.guardianList;
    }
  },
  watch: {
    cadreList(val) {
      this.code === 0 ? (this.data = val) : "";
    },
    policeList(val) {
      this.code === 1 ? (this.data = val) : "";
    },
    doctorList(val) {
      this.code === 2 ? (this.data = val) : "";
    },
    guardianList(val) {
      this.code === 3 ? (this.data = val) : "";
    }
  },
  components: {
    Upload
  },
  data() {
    return {
      allCheck: false,
      modal: false,
      formValidate: {
        helpDate: "",
        isubsidy: "",
        istilltreat: "",
        isguardianduty: "",
        causeTrouble: "",
        recureinfo: "",
        fileCode: ""
      },
      ruleValidate: {
        helpDate: [{ required: true, message: "请输入帮扶时间" }],
        isubsidy: [{ required: true, message: "请选择是否符合补助条件" }],
        istilltreat: [{ required: true, message: "请选择是否坚持治疗" }],
        isguardianduty: [
          { required: true, message: "请选择监护人是否履行职责" }
        ]
      },
      // 表格
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          type: "index",
          title: "序号",
          align: "center",
          width: "70"
        },
        {
          title: "帮扶日期",
          key: "helpDate",
          align: "center"
        },
        {
          title: "是否符合补助条件",
          key: "isubsidy",
          align: "center"
        },
        {
          title: "是否坚持治疗",
          key: "istilltreat",
          align: "center"
        },
        {
          title: "监护人是否履行职责",
          key: "isguardianduty",
          align: "center"
        },
        {
          title: "病患康复及治疗情况",
          key: "recureinfo",
          align: "center"
        },
        {
          title: "病患肇事肇祸情况",
          key: "causeTrouble",
          align: "center"
        }
      ],
      data: []
    };
  },
  mounted() {
    this.code === 0 ? (this.data = this.cadreList) : "";
    this.code === 1 ? (this.data = this.policeList) : "";
    this.code === 2 ? (this.data = this.doctorList) : "";
    this.code === 3 ? (this.data = this.guardianList) : "";
  },
  methods: {
    // 新增
    addFunc(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.code === 0
            ? this.$store.state.form.cadreList.push(this.formValidate)
            : "";
          this.code === 1
            ? this.$store.state.form.policeList.push(this.formValidate)
            : "";
          this.code === 2
            ? this.$store.state.form.doctorList.push(this.formValidate)
            : "";
          this.code === 3
            ? this.$store.state.form.guardianList.push(this.formValidate)
            : "";
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    // ?删除
    deleteFunc() {
      console.log("删除");
      console.log(this.allCheck);
      console.log(this.code);
      this.code === 0
        ? this.allCheck
          ? (this.$store.state.form.cadreList = [])
          : ""
        : "";
      this.code === 1
        ? this.allCheck
          ? (this.$store.state.form.policeList = [])
          : ""
        : "";
      this.code === 2
        ? this.allCheck
          ? (this.$store.state.form.doctorList = [])
          : ""
        : "";
      this.code === 3
        ? this.allCheck
          ? (this.$store.state.form.guardianList = [])
          : ""
        : "";
    },
    handleSelectAll(status) {
      console.log("全选");
      this.allCheck = status;
      this.$refs.selection.selectAll(status);
    },
    selectAll(data) {
      this.allCheck = true;
    },
    cancelAll(data) {
      this.allCheck = false;
    },
    selectTable(selection, row) {
      console.log(selection);
      console.log(row);
    }
  }
};
</script>

<style scoped lang="less">
.add {
  color: #53a7a9;
  font-size: 16px;
  padding-left: 25px;
  cursor: default;
}
.table {
  margin: 10px 25px;
  &-foot {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
  }
}

.all-check {
  display: flex;
  padding-left: 25px;
  color: #5e6166;
  & > section {
    cursor: default;
  }
  & > div {
    display: flex;
    border-radius: 4px;
    & > section {
      border: 1px solid #dde2e2;
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      cursor: default;
    }

    & > section:nth-child(1) {
      border-right: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    & > section:nth-child(2) {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-left: none;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 1px;
        height: 30px;
        background-color: #dde2e2;
      }
    }
  }
  & > span {
    cursor: default;
  }
  & > section {
    margin-left: 10px;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #dde2e2;
    border-radius: 4px;
  }
}
</style>
