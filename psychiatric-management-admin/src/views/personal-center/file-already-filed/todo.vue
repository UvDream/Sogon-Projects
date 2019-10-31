<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-28 13:23:28
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-28 13:23:52
 * @Description: 待办档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="todo">
    <div class="notification-form">
      <Form
        ref="formValidate"
        label-position="top"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="200"
      >
        <div class="form">
          <FormItem label="病患姓名" prop="name" class="form-block">
            <Input v-model="formValidate.name" placeholder="输入病患姓名" />
          </FormItem>
          <FormItem label="档案编号" prop="num" class="form-block">
            <Input v-model="formValidate.num" placeholder="输入档案编号" />
          </FormItem>
          <FormItem label="档案名称" prop="mc" class="form-block">
            <Input v-model="formValidate.mc" placeholder="输入档案编号" />
          </FormItem>
          <FormItem label="通知状态" prop="status" class="form-block">
            <Select v-model="formValidate.status">
              <Option value="1">未读</Option>
              <Option value="2">已读</Option>
            </Select>
          </FormItem>
          <FormItem label="创建时间" prop="time" class="form-block">
            <DatePicker
              type="date"
              placeholder="选择创建时间"
              v-model="formValidate.time"
            ></DatePicker>
          </FormItem>
          <FormItem class="form-block" style="display: flex;align-items: flex-end;">
            <Button @click="handleSubmit('formValidate')">取消</Button>
            <Button type="primary" @click="handleReset('formValidate')" style="margin-left: 8px">搜索</Button>
          </FormItem>
        </div>
      </Form>
    </div>
    <div class="my-table">
      <div class="my-table-handle">
        <ButtonGroup size="large">
          <Button @click="handleSelectAll(true)">全选</Button>
          <Button @click="handleSelectAll(false)">取消全选</Button>
        </ButtonGroup>
        <ButtonGroup size="large">
          <Button @click="handleSelectAll(true)">推送</Button>
          <Button @click="handleSelectAll(true)">转发</Button>
        </ButtonGroup>
      </div>
      <Table ref="section"
      :columns="columns" 
      :data="tabList" 
      @on-select="Check" 
      @on-select-cancel="cancelCheck" 
      @on-selection-change="Modulechange">
        <template slot-scope="{ row, index }" slot="action">
          <Button class="my-table-handle-button" @click="handleDelete(index)">删除</Button>
          <Button class="my-table-handle-button" @click="handlePush(index)">推送</Button>
          <Button class="my-table-handle-button" @click="handleForward(index)">转发</Button>
          <Button class="my-table-handle-button" @click="handleReturn(index)">退回</Button>
          <Button class="my-table-handle-button" @click="handleResult(index)">办结</Button>
        </template>
      </Table>
      <Page :total="40" show-elevator show-sizer show-total class="my-table-page"/>
    </div>
    <!-- 转发弹窗 -->
    <Forward />
    <!-- 办结弹窗 -->
    <SetUp />
    <!-- 退回弹窗-->
    <Return /> 
  </div>
</template>

<script>
import Forward from "@/views/patient-management/new-file/components/modal/forward";
import SetUp from "@/views/patient-management/new-file/components/modal//setUp";
import Return from "@/views/patient-management/new-file/components/modal//return";
import mixin from "@/mixin/newFile";
export default {
  mixins: [mixin],
  components: {
    Forward,
    SetUp,
    Return
  },
  data (){
    return {
      modalForward:true,
      modalReturn: false,
      modalResult: false,
      closed: false,
      formValidate: {
        name: "",
        num: "",
        mc: "",
        status: "",
        time: ""
      },
      ruleValidate: {},
      columns: [
        {
          type: 'selection',
          width: 60,
          fixed: 'left',
          align: 'center'
        },
        {
          title: '档案编号',
          width: 200,
          key: 'id'
        },
        {
          title: '患者姓名',
          width: 120,
          key: 'name'
        },
        {
          title: '患者身份证号',
          width: 200,
          key: 'icd'
        },
                {
          title: '重点病患',
          width: 120,
          key: 'important'
        },
        {
          title: '档案状态',
          width: 150,
          slot: 'status',
          key: 'status'
        },
        {
          title: '创建人',
          width: 150,
          key: 'creater'
        },
        {
          title: '创建时间',
          width: 200,
          key: 'creatertime'
        },
        {
          title: '转发人',
          width: 150,
          key: 'forward'
        },
        {
          title: '转发时间',
          width: 200,
          key: 'forwardtime'
        },
        {
          title: '操作',
          width: 380,
          fixed: 'right',
          slot: 'action',
          key: 'action',
          align: 'center'
        }
      ],
      tabList: [
        {
          id: '201910170024',
          name: '欧阳小明',
          icd: '320929992000100020',
          important: '是',
          status: 1,
          creater: '网格员',
          creatertime: '2019-10-22 19:02:02',
          forward: '公安',
          forwardtime: '2019-10-22 19:02:02',
        },
        {
          id: '201910170024',
          name: '欧阳小明',
          icd: '320929992000100020',
          important: '是',
          status: 1,
          creater: '网格员',
          creatertime: '2019-10-22 19:02:02',
          forward: '公安',
          forwardtime: '2019-10-22 19:02:02',
        }
      ]
    }
  },
  methods: {
    handleSubmit() {

    },
    handleReset() {

    },
    handleSelectAll (status) {
      debugger
      this.$refs.section.selectAll(status);
    },
    Check(section,row){
      debugger
    },
    cancelCheck(section,row){
      debugger
    },
    Modulechange(section){
      debugger
    },
    show() {
      this.isShow = !this.isShow;
    },
    handleDelete(index) { //删除
      this.$Modal.confirm({
        title:'提示',
        content:'确认删除?',
        onOk: () => {
          this.tabList.splice(index, 1);
        }
      });
    },
    handlePush(index) { //推送

    },
    handleResult(index) { //办结
      this.modalResult = true;
    },
    handleReturn(index) { //退回
      this.modalReturn = true;
    },
    handleForward(index) { //转发
      this.modalForward = true;
    },
  }
};
</script>

<style scoped lang="less">
@import url("../../patient-management/file-management/index.less");
.todo {
  .my-table{
    margin-top: 0;
  }
  .ivu-form-item-content button{
    height: 40px;
    width: 95px;
    color: #53A7A9;
    border-color: #53A7A9;
    background:  rgba(83,167,169,0.10);
  }
  .ivu-form-item-content button.ivu-btn-primary{
    height: 40px;
    color: #fff;
    border-color: #53A7A9;
    background:  #53A7A9;
  }
}
</style>
<style type="text/css">

</style>
