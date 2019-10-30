<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:24:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 09:42:46
 * @Description: 表格
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <div class="all-check">
      <div>
        <section @click="handleSelectAll(true)">全选</section>
        <section @click="handleSelectAll(false)" style="color:#999">取消全选</section>
      </div>
      <section>删除</section>
      <span style="line-height:40px;margin-left:10px">
        <Icon type="ios-sync" />刷新
      </span>
    </div>
    <!-- 表格 -->
    <div class="table">
      <Table border ref="selection" :columns="columns" :data="data"></Table>
    </div>
    <div class="add">
      <div @click="modal=true">
        <Icon type="ios-add-circle-outline" style="margin-right:5px" />添加信息
      </div>
    </div>
    <div class="table-foot">
      <Button type="primary" ghost>确认病患康复</Button>
      <Page :total="40" size="small" show-elevator show-sizer show-total />
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
          <FormItem label="帮扶时间" prop="time" class="form-block">
            <Input v-model="formValidate.time" placeholder="输入办结原因说明" />
          </FormItem>
          <FormItem label="是否符合补助条件" prop="isCondition" class="form-block">
            <Select v-model="formValidate.isCondition" placeholder="选择是否符合补助条件">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
          <FormItem label="是否坚持治疗" prop="isTreatment" class="form-block">
            <Select v-model="formValidate.isTreatment" placeholder="选择是否坚持治疗">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
          <FormItem label="是否履行监护人职责" prop="isFulfill" class="form-block">
            <Select v-model="formValidate.isFulfill" placeholder="选择是否履行监护人职责">
              <Option value="0">是</Option>
              <Option value="1">否</Option>
            </Select>
          </FormItem>
        </div>
        <FormItem style="margin-left:30px" label="病患肇事肇祸情况" prop="reason" class="form-blocks">
          <Input
            v-model="formValidate.reason"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="输入病患肇事肇祸情况"
          />
        </FormItem>
        <FormItem style="margin-left:30px" label="上传证明文件" prop="uploadFiles" class="form-block">
          <Upload />
        </FormItem>
      </Form>
      <div slot="footer" style="text-align:center">
        <Button type="primary" size="large">
          <Icon type="ios-add-circle-outline" style="margin-right:10px" />新增
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Upload from "@/components/upload/upload";

export default {
  components: {
    Upload
  },
  data() {
    return {
      modal: false,
      formValidate: {
        time: "",
        isCondition: "",
        isTreatment: "",
        isFulfill: "",
        reason: "",
        uploadFiles: ""
      },
      ruleValidate: {
        time: [{ required: true, message: "请输入帮扶时间" }],
        isCondition: [{ required: true, message: "请选择是否符合补助条件" }],
        isTreatment: [{ required: true, message: "请选择是否坚持治疗" }],
        isFulfill: [{ required: true, message: "请选择监护人是否履行职责" }],
        reason: [{ required: true, message: "请输入办结原因" }],
        uploadFiles: [{ required: true, message: "请上传证明材料" }]
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
          key: "name",
          align: "center"
        },
        {
          title: "是否符合补助条件",
          key: "age",
          align: "center"
        },
        {
          title: "是否坚持治疗",
          key: "address",
          align: "center"
        },
        {
          title: "监护人是否履行职责",
          key: "address",
          align: "center"
        },
        {
          title: "病患康复及治疗情况",
          key: "address",
          align: "center"
        },
        {
          title: "病患肇事肇祸情况",
          key: "address",
          align: "center"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
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
