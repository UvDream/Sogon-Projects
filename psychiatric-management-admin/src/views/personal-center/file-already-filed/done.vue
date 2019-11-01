<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-28 13:23:28
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-28 13:23:52
 * @Description: 已办档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="done">
    <div class="notification-form">
      <Form
        ref="formInline"
        label-position="top"
        :model="formInline"
        :rules="ruleValidate"
        :label-width="200">
        <div class="form">
          <FormItem label="病患姓名" class="form-block" prop="patientName">
            <Input v-model="formInline.patientName" />
          </FormItem>
          <FormItem label="档案编号" class="form-block" prop="code">
            <Input v-model="formInline.code" />
          </FormItem>
          <FormItem label="档案状态" class="form-block" prop="status">
            <Select v-model="formInline.status">
              <Option value="0">发现中</Option>
              <Option value="1">已推送</Option>
              <Option value="2">评定中</Option>
              <Option value="3">已办结</Option>
              <Option value="4">治疗中</Option>
              <Option value="5">监护中</Option>
              <Option value="6">帮扶中</Option>
              <Option value="7">已康复</Option>
            </Select>
          </FormItem>
          <FormItem label="档案名称" class="form-block" prop="name">
            <Input v-model="formInline.name" />
          </FormItem>
          <FormItem prop="date" label="开始创建时间" class="form-block">
            <DatePicker type="datetime" v-model="formInline.beginCreateDate"></DatePicker>
          </FormItem>
          <span>-</span>
          <FormItem prop="date" label="结束创建时间" class="form-block">
            <DatePicker type="datetime" v-model="formInline.endCreateDate"></DatePicker>
          </FormItem>
          <FormItem class="form-block" style="display: flex;align-items: flex-end;">
            <Button @click="handleReset('formInline')">取消</Button>
            <Button type="primary" @click="search" style="margin-left: 8px">搜索</Button>
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
          <Button @click="handleSelectAll(false)">删除</Button>
        </ButtonGroup>
      </div>
      <Table ref="section"
        :columns="columns" 
        :data="tabList" 
        @on-selection-change="Modulechange"
      >
        <template slot-scope="{ row, index}" slot="code">
          <router-link :to="{name:'newFile', params: { id : row.code }}">
            {{row.code}}
          </router-link>
        </template>
        <template slot-scope="{ row, index}" slot="status">
          <span v-if="row.status == 0">
            <img src="../../../assets/fonts/file-manage/faxian.png" style="margin-right:5px;vertical-align: middle;">
            发现中
          </span>
          <span v-if="row.status == 1">
            <img src="../../../assets/fonts/file-manage/tuisong.png" style="margin-right:5px;vertical-align: middle;">
            已推送
          </span>
          <span v-if="row.status == 2">
            <img src="../../../assets/fonts/file-manage/pingding.png" style="margin-right:5px;vertical-align: middle;">
            评定中
          </span>
          <span v-if="row.status == 3">
            <img src="../../../assets/fonts/file-manage/bangfu.png" style="margin-right:5px;vertical-align: middle;">
            已办结
          </span>
          <span v-if="row.status == 4">
            <img src="../../../assets/fonts/file-manage/zhiliao.png" style="margin-right:5px;vertical-align: middle;">
            治疗中
          </span>
          <span v-if="row.status == 5">
            <img src="../../../assets/fonts/file-manage/jianhu.png" style="margin-right:5px;vertical-align: middle;">
            监护中
          </span>
          <span v-if="row.status == 6">
            <img src="../../../assets/fonts/file-manage/bangfu.png" style="margin-right:5px;vertical-align: middle;">
            帮扶中
          </span>
          <span v-if="row.status == 7">
            <img src="../../../assets/fonts/file-manage/bangfu.png" style="margin-right:5px;vertical-align: middle;">
            已康复
          </span>
        </template>
        <template slot-scope="{ row, index}" slot="isfocal">
          <span v-if="row.isfocal == 1">
            否
          </span>
          <span v-else>
            是
          </span>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button class="my-table-handle-button" @click="handledelete(index)">删除</Button>
          <Button 
            class="my-table-handle-button" 
            @click="handleforward(index)" 
            v-if="row.status == 1 || row.status == 2 || row.status == 4 || row.status == 6"
            >转发
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click=""
            v-if="row.status == 2 || row.status == 4 || row.status == 6 || row.status == 7">
            退回
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click=""
            v-if="row.status == 7"
            >办结
          </Button>
          <Button class="my-table-handle-button" @click="">推送</Button>
        </template>
      </Table>
      <Page 
        :total="total" 
        :page-size="pageSize"
        :current="pageNum"
        show-elevator 
        show-sizer 
        show-total 
        class="my-table-page"
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
      />
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
import api from "@/api/file-manage";
import Forward from "../../patient-management/new-file/components/modal/forward";
import SetUp from "../../patient-management/new-file/components/modal/setUp";
import Return from "../../patient-management/new-file/components/modal/return";
import Flow from "../../patient-management/file-management/flow";
import mixin from "@/mixin/newFile";
import { formatDate } from "@/util/util";
export default {
  mixins: [mixin],
  components: {
    Forward,
    SetUp,
    Return,
    Flow
  },
  data (){
    return {
      closed: false,
      modalForward:false,
      formInline: {
        code: '',
        status: '',
        patientName:'',
        name: '',
        isfocal: '',
        beginCreateDate:'',
        endCreateDate: ''
      },
      total:0,
      pageNum:1,
      pageSize: 10,
      isShow: true,
      height: '238px',
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
          slot: 'code',
          key: 'code'
        },
        {
          title: '病患姓名',
          width: 240,
          key: 'patientName'
        },
        {
          title: '病患身份证号',
          width: 200,
          key: 'patientCode'
        },
        {
          title: '重点病患',
          width: 120,
          key: 'isfocal',
          slot:'isfocal'
        },
        {
          title: '档案状态',
          width: 120,
          slot: 'status',
          key: 'status'
        },
        {
          title: '创建人',
          width: 120,
          key: 'checkinUserName'
        },
        {
          title: '创建时间',
          width: 200,
          key: 'createDate',
          render:(h,params)=>{
            return h('div',
              formatDate(new Date(params.row.createDate),'yyyy-MM-dd hh:mm')
            )
          }
        },
        {
          title: '转发人',
          width: 120,
          key: 'curForWardDeptName'
        },
        {
          title: '转发时间',
          width: 200,
          key: 'lastForWardTime',
          render:(h,params)=>{
            return h('div',
              formatDate(new Date(params.row.lastForWardTime),'yyyy-MM-dd hh:mm')
            )
          }
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
      tabList: [],
      selectList: []
    }
  },
  mounted() {
    let obj = Object.assign(
      this.formInline,
      {pageNum:this.pageNum},
      {pageSize:this.pageSize}
    );
    this.searchFunc(obj);
  },
  methods: {
    //取消
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    //搜索
    search() {
      let obj = Object.assign(
        this.formInline,
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    },
    searchFunc(data) {
      api.checkData(data).then(res => {
        console.log(res.data);
        this.total = res.data.count;
        this.tabList = res.data.data;
      });
    },
    handleSelectAll (status) {
      this.$refs.section.selectAll(status);
    },
    Modulechange(section){
      debugger
    },
    show() {
      this.isShow = !this.isShow;
    },
    handledelete (index) {
      this.$Modal.confirm({
        title:'删除',
        content:'确认删除?',
        onOk: () => {
          //this.tabList.splice(index, 1);
        }
      });
    },
    handleforward(index) {

    },
    pageChange(cur) {
      this.pageNum = cur;
      let obj = Object.assign(
        this.formInline,
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    },
    pageSizeChange(pagesize) {
      this.pageSize = pagesize;
      let obj = Object.assign(
        this.formInline,
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    }
  }
};
</script>

<style scoped lang="less">
@import url("../../patient-management/file-management/index.less");
.done {
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
