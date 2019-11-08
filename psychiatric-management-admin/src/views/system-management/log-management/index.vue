<!--
 * @Author: xiahongxiu
 * @Date: 2019-11-07 13:30:00
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-11-07 13:42:00
 * @Description: 日志管理
 * @Email: UvDream@163.com
 -->

<template>
  <div class="log-mana">
    <TopTitle :title="'日志管理'" v-model="closed">
      <template v-slot:icon>
        <img src="../../../assets/fonts/center/account.png" :style="{verticalAlign:'middle'}" />
      </template>
    </TopTitle>
    <transition name="slide">
      <div v-if="!closed">
        <div class="log-mana-form" >
          <Form
            ref="formValidate"
            label-position="top"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="200"
          >
            <div class="form">
              <FormItem label="操作部门" prop="deptId" class="form-block">
                <Select v-model="formValidate.deptId">
                  <Option value="1">网格员</Option>
                  <Option value="2">公安</Option>
                  <Option value="3">卫生</Option>
                  <Option value="4">民政</Option>
                </Select>
              </FormItem>
              <FormItem label="操作类型" prop="type" class="form-block">
                <Select v-model="formValidate.type">
                  <Option value="0">登陆</Option>
                  <Option value="1">新增</Option>
                  <Option value="2">删除</Option>
                  <Option value="3">编辑</Option>
                  <Option value="4">查询</Option>
                </Select>
              </FormItem>
              <FormItem label="操作开始时间" prop="beginTime" class="form-block">
                <DatePicker
                  type="datetime"
                  placeholder="选择时间"
                  v-model="formValidate.beginTime"
                  format="yyyy-MM-dd HH:mm:ss"
                  @on-change="startTimeChange"
                ></DatePicker>
              </FormItem>
              <FormItem label="操作结束时间" prop="endTime" class="form-block">
                <DatePicker
                  type="datetime"
                  placeholder="选择时间"
                  format="yyyy-MM-dd HH:mm:ss"
                  v-model="formValidate.endTime"
                  @on-change="endTimeChange"
                ></DatePicker>
              </FormItem>
              <FormItem class="form-block" style="display: flex;align-items: flex-end;">
                <Button @click="handleReset('formValidate')">取消</Button>
                <Button type="primary" @click="search" style="margin-left: 8px">搜索</Button>
              </FormItem>
            </div>
          </Form>
        </div>
        <div class="my-table">          
          <Table
          :columns="columns" 
          :data="tabList">
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
      </div>
    </transition>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import api from "@/api/system/log";
import { formatDate } from "@/util/util";
export default {
  components: {
    TopTitle,
  },
  data (){
    return {
      closed: false,
      total:0,
      pageNum:1,
      pageSize: 10,
      formValidate: {
        deptId:"",
        type:"",
        beginTime:"",
        endTime:""
        },
      ruleValidate: {},
      columns: [
        {
          title: '序号',
          width: 200,
          key: 'id'
        },
        {
          title: '操作部门',
          width: 250,
          key: 'deptId'
        },
        {
          title: '操作账户',
          width: 250,
          key: 'username'
        },
        {
          title: '操作时间',
          width: 250,
          slot: 'createtime',
          render:(h,params)=>{
            return h('div',
              formatDate(new Date(params.row.createtime),'yyyy-MM-dd hh:mm')
            )
          }
        },
        {
          title: '子系统',
          width: 250,
          key: 'systemname'
        },
        {
          title: '模块系统',
          width: 250,
          key: 'modulename'
        },
        {
          title: '操作类型',
          width: 250,
          key: 'type'
        },
        
      ],
      tabList: [{
        id:1,
        username:"1",//;用户名称
        createtime:"2019-11-07 19:09:20",
        systemname:"",//子系统
        modulename:"",//模块名称
        deptId:1,
        type:1//类型0增1删2改3查
      }],
      selectList:[]
    }
  },
  mounted() {
    let obj = Object.assign(
      this.formValidate,
      {beginTime:null},
      {endTime: null},
      {pageNum:this.pageNum},
      {pageSize:this.pageSize}
    );
    //this.searchFunc(obj);
  },
  watch:{
  },
  methods: {
    startTimeChange(e){
      this.formValidate.beginTime = e == "" ? null : new Date(e);
    },
    endTimeChange(e){
      this.formValidate.endTime = e == "" ? null : new Date(e);
    },
    //取消
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    //搜索
    search() {
      debugger
      let obj = Object.assign(
        this.formValidate,
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    },
    searchFunc(data) {
      api.checkData(data).then(res => {
        console.log(res.data);
        this.total = res.data.total;
        this.tabList = res.data.list;
      });
    },
    pageChange(cur) {
      this.pageNum = cur;
      let obj = Object.assign(
        this.formValidate,
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    },
    pageSizeChange(pagesize) {
      this.pageSize = pagesize;
      let obj = Object.assign(
        this.formValidate,
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
.log-mana {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
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
