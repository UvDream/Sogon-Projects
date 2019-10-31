<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:33:30
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 17:33:42
 * @Description: 通知管理
 * @Email: UvDream@163.com
 -->

<template>
  <div class="notification">
    <TopTitle :title="'通知管理'" v-model="closed">
      <template v-slot:icon>
        <img src="../../../assets/fonts/center/account.png" :style="{verticalAlign:'middle'}" />
      </template>
    </TopTitle>
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
          <FormItem label="通知状态" prop="status" class="form-block">
            <Select v-model="formValidate.status">
              <Option value="1">未读</Option>
              <Option value="2">已读</Option>
            </Select>
          </FormItem>
          <FormItem label="通知类型" prop="type" class="form-block">
            <Select v-model="formValidate.type">
              <Option value="1">转发通知</Option>
              <Option value="2">退回通知</Option>
              <Option value="3">定时帮扶</Option>
              <Option value="4">定时走访</Option>
            </Select>
          </FormItem>
          <FormItem label="通知时间" prop="time" class="form-block">
            <DatePicker
              type="date"
              placeholder="选择通知时间"
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
          <Button @click="handleSelectAll(true)">已读</Button>
        </ButtonGroup>
      </div>
      <Table ref="section"
      :columns="columns" 
      :data="tabList" 
      @on-select-all="CheckAll" 
      @on-select-all-cancel="cancelCheckAll" 
      @on-selection-change="Modulechange">
        <template slot-scope="{ row, index}" slot="status">
          <span v-if="row.status == 1">
            <span style="color: #F5222D;">已读</span>
          </span>
          <span v-else>
            已读
          </span>
        </template>
        <template slot-scope="{ row, index}" slot="num">
          <router-link :to="{name:'newFile', params: {id:row.id}}">
            {{row.num}}
          </router-link>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button class="my-table-handle-button" @click="handleRead(index)">已读</Button>
        </template>
      </Table>
      <Page :total="40" show-elevator show-sizer show-total class="my-table-page"/>
    </div>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
export default {
  components: {
    TopTitle,
  },
  data (){
    return {
      closed: false,
      formValidate: {
        name: "",
        num: "",
        status: "",
        accountname: "",
        password: ""
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
          title: '序号',
          width: 200,
          key: 'id'
        },
        {
          title: '状态',
          width: 150,
          slot: 'status',
          key: 'status'
        },
        {
          title: '通知内容',
          width: 300,
          key: 'content',
          render: (h,params)=>{
            return h('div',[
                h('span',{
                  style:{
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps:{
                    title:params.row.content
                  }
                },params.row.content)
              ])
          }
        },
        {
          title: '通知时间',
          width: 200,
          key: 'time'
        },
        {
          title: '档案编号',
          width: 150,
          key: 'num',
          slot:'num'
        },
        {
          title: '病患姓名',
          width: 120,
          key: 'name'
        },
        {
          title: '患者身份证号',
          width: 200,
          key: 'icd'
        },
        {
          title: '操作',
          width: 150,
          fixed: 'right',
          slot: 'action',
          key: 'action',
          align: 'center'
        }
      ],
      tabList: [
        {
          id: '201910170024',
          status: 1,
          content: '您接到来自XX部门转发档案已超过七天未处理，请及时您接到来自XX部门转发档案已超过七天未处理，请及时您接到来自XX部门转发档案已超过七天未处理，请及时您接到来自XX部门转发档案已超过七天未处理，请及时…',
          time: '2019-10-22 19:02:02',
          num: '201910170024',
          name: '欧阳小明',
          icd: '320929992000100020',
        },
        {
          id: '201910170024',
          status: 0,
          content: '您接到来自XX部门转发档案已超过七天未处理，请及时…',
          time: '2019-10-22 19:02:02',
          num: '201910170024',
          name: '欧阳小明',
          icd: '320929992000100020',
        }
      ],
      selectList:[]
    }
  },
  methods: {
    handleSubmit() {

    },
    handleReset() {

    },
    handleSelectAll (status) {
      this.$refs.section.selectAll(status);
    },
    cancelAll(section){
      debugger
      this.selectList = section;
      console.log(this.selectList)
    },
    cancelCheckAll(section){
      debugger
      this.selectList = section;
      console.log(this.selectList)
    },
    Modulechange(section){
      debugger
      this.selectList = section;
      console.log(this.selectList)
    },
    show() {
      this.isShow = !this.isShow;
    },
    remove (index) {
      this.tabList.splice(index, 1);
    },
    handleRead(index) {
      //已读
    }
  }
};
</script>

<style scoped lang="less">
@import url("../../patient-management/file-management/index.less");
.notification {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
  min-height: 200px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
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
