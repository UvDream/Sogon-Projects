<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:24:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 21:23:05
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
        @on-select-cancel="cancelTable"
        :columns="columns"
        :data="data"
      >
        <template slot-scope="{ row }" slot="isubsidy">
          <span v-if="row.isubsidy==0">是</span>
          <span v-if="row.isubsidy==1">否</span>
        </template>
        <template slot-scope="{ row }" slot="istilltreat">
          <span v-if="row.istilltreat==0">是</span>
          <span v-if="row.istilltreat==1">否</span>
        </template>
        <template slot-scope="{ row }" slot="isguardianduty">
          <span v-if="row.isguardianduty==0">是</span>
          <span v-if="row.isguardianduty==1">否</span>
        </template>
      </Table>
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
          <!-- 帮扶时间待删除 -->
          <FormItem label="帮扶时间" prop="helpDate" class="form-block">
            <DatePicker
              type="date"
              v-model="formValidate.helpDate"     
              format="yyyy-MM-dd"
              placeholder="请选择帮扶时间"
            ></DatePicker>
          </FormItem>
          <FormItem label="是否申请补助金" prop="isubsidy" class="form-block">
            <Select v-model="formValidate.isubsidy" placeholder="选择是否申请补助金">
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
import {formatDate} from "@/util/util";
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
        isubsidy: [{ required: true, message: "请选择是否申请补助金" }],
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
          align: "center",
          render: (h,params)=>{  
              return h('div',
                  formatDate(new Date(params.row.helpDate),'yyyy-MM-dd hh:mm')
              )
          }
        },
        {
          title: "是否符合申请补助金",
          slot: "isubsidy",
          align: "center"
        },        
        {
          title: "是否坚持治疗",
          slot: "istilltreat",
          align: "center"
        },
        {
          title: "监护人是否履行职责",
          slot: "isguardianduty",
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
    var self = this;
    setTimeout(() => {   
      console.log(self.$store.state.form.cadreList);

      self.code === 0 ? (self.data = self.cadreList) : "";
      self.code === 1 ? (self.data = self.policeList) : "";
      self.code === 2 ? (self.data = self.doctorList) : "";
      self.code === 3 ? (self.data = self.guardianList) : "";
      if(this.code === 1){
        this.columns[3].title = "是否申请补助金"      
      }
    },300);
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
          this.formValidate = {};
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    // ?删除
    deleteFunc() {
      // 全选删除逻辑
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
      // 部分选删除
      if (!this.allCheck) {
        this.$store.state.form.cadreList = this.deleteList(
          this.cadreList,
          this.$store.state.form.cadreSelect
        );
        this.$store.state.form.policeList = this.deleteList(
          this.policeList,
          this.$store.state.form.policeSelect
        );
        this.$store.state.form.doctorList = this.deleteList(
          this.doctorList,
          this.$store.state.form.doctorSelect
        );
        this.$store.state.form.guardianList = this.deleteList(
          this.guardianList,
          this.$store.state.form.guardianSelect
        );
      }
    },
    deleteList(list, data) {
      list.forEach((item, index) => {
        data.length > 0
          ? data.forEach(element => {
              if (item.helpDate == element.helpDate) {
                list.splice(index, 1);
              }
            })
          : "";
      });
      return list;
    },
    handleSelectAll(status) {
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
      this.code === 0 ? (this.$store.state.form.cadreSelect = selection) : "";
      this.code === 1 ? (this.$store.state.form.policeSelect = selection) : "";
      this.code === 2 ? (this.$store.state.form.doctorSelect = selection) : "";
      this.code === 3
        ? (this.$store.state.form.guardianSelect = selection)
        : "";
      console.log(row);
      console.log(this.$store.state.form.cadreSelect);
    },
    cancelTable(selection, row) {
      this.code === 0 ? (this.$store.state.form.cadreSelect = selection) : "";
      this.code === 1 ? (this.$store.state.form.policeSelect = selection) : "";
      this.code === 2 ? (this.$store.state.form.doctorSelect = selection) : "";
      this.code === 3
        ? (this.$store.state.form.guardianSelect = selection)
        : "";
      console.log("取消");
      console.log(selection);
      console.log(row);
      console.log(this.$store.state.form.cadreSelect);
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
