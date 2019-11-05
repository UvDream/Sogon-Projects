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
    <transition name="slide">
      <div v-if="!closed">
        <div class="notification-form" >
          <Form
            ref="formValidate"
            label-position="top"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="200"
          >
            <div class="form">
              <FormItem label="病患姓名" prop="patientName" class="form-block">
                <Input v-model="formValidate.patientName" placeholder="输入病患姓名" />
              </FormItem>
              <FormItem label="档案编号" prop="code" class="form-block">
                <Input v-model="formValidate.code" placeholder="输入档案编号" />
              </FormItem>
              <FormItem label="通知状态" prop="isLook" class="form-block">
                <Select v-model="formValidate.isLook">
                  <Option value="0">未读</Option>
                  <Option value="1">已读</Option>
                </Select>
              </FormItem>
              <FormItem label="通知类型" prop="type" class="form-block">
                <Select v-model="formValidate.type">
                  <Option value="0">转发通知</Option>
                  <Option value="1">退回通知</Option>
                  <!-- <Option value="2">帮扶通知</Option> -->
                  <Option value="3">走访通知</Option>
                  <Option value="4">转发超期通知</Option>
                  <!-- <Option value="5">退回超期通知</Option> -->
                  <Option value="6">帮扶超期通知</Option>
                  <!-- <Option value="7">走访超期通知</Option> -->
                  
                </Select>
              </FormItem>
              <FormItem label="通知开始时间" prop="beginTime" class="form-block">
                <DatePicker
                  type="datetime"
                  placeholder="选择通知时间"
                  format="yyyy/MM/dd"
                  v-model="formValidate.beginTime"
                ></DatePicker>
              </FormItem>
              <FormItem label="通知结束时间" prop="endTime" class="form-block">
                <DatePicker
                  type="datetime"
                  placeholder="选择通知时间"
                  format="yyyy/MM/dd"
                  v-model="formValidate.endTime"
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
          <div class="my-table-handle">
            <ButtonGroup size="large">
              <Button @click="handleSelectAll(true)">全选</Button>
              <Button @click="handleSelectAll(false)">取消全选</Button>
            </ButtonGroup>
            <ButtonGroup size="large">
              <Button @click="handleReadAll">已读</Button>
            </ButtonGroup>
          </div>
          <Table ref="section"
          :columns="columns" 
          :data="tabList" 
          @on-selection-change="Modulechange">
            <template slot-scope="{ row, index}" slot="islook">
              <span v-if="row.islook == '0'">
                <span style="color: #F5222D;">未读</span>
              </span>
              <span v-else>
                已读
              </span>
            </template>
            <template slot-scope="{ row, index}" slot="code">
              <router-link :to="{name:'newFile', params: {id:row.code}}">
                {{row.code}}
              </router-link>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button class="my-table-handle-button" v-if="row.islook=='0'" @click="handleRead(row.id)">未读</Button>
                <Button class="my-table-handle-button" v-else :disabled="true">已读</Button>
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
      </div>
    </transition>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import api from "@/api/person-center/info";
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
        code:"",
        patientName:"",
        isLook:"",
        type:"",
        beginTime:"",
        endTime:"",
        pageNum:1,
        pageSize:10
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
          slot: 'islook',
          key: 'islook'
        },
        {
          title: '通知内容',
          width: 350,
          key: 'context',
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
                    title:params.row.context
                  }
                },params.row.context)
              ])
          }
        },
        {
          title: '通知时间',
          width: 200,
          key: 'createDate',
          render:(h,params)=>{
            return h('div',
              formatDate(new Date(params.row.createDate),'yyyy-MM-dd hh:mm')
            )
          }
        },
        {
          title: '档案编号',
          width: 150,
          key: 'code',
          slot:'code'
        },
        {
          title: '病患姓名',
          width: 120,
          key: 'patientName'
        },
        {
          title: '患者身份证号',
          width: 200,
          key: 'patientCode'
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
          "id": 10,
          "context": "您接到来自null部门转发档案，请及时查看！",
          "islook": 0,
          "userId": 1,
          "type": 0,
          "createDate": "2019-10-25T19:38:00.000+0000",
          "archivesId": 55,
          "isDo": null,
          "code": "XZ320623198807064421",
          "patientName": "WG",
          "patientCode": "320623198807064421"
        },
        {
          "id": 11,
          "context": "您接到来自null部门转发档案，请及时查看！",
          "islook": 1,
          "userId": 2,
          "type": 0,
          "createDate": "2019-10-25T19:38:00.000+0000",
          "archivesId": 55,
          "isDo": null,
          "code": "XZ320623198807064421",
          "patientName": "WG",
          "patientCode": "320623198807064421"
        }
      ],
      selectList:[]
    }
  },
  mounted() {
    let obj = Object.assign(
      this.formValidate,
      {pageNum:this.pageNum},
      {pageSize:this.pageSize}
    );
    this.searchFunc(obj);
  },
  watch:{
  },
  methods: {
    //取消
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    //搜索
    search() {
      debugger
      let ss = formatDate(new Date(this.formValidate.beginTime),'yyyy-MM-dd hh:mm:ss');
      let aa = formatDate(new Date(this.formValidate.endTime),'yyyy-MM-dd hh:mm:ss');
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
    //全选已读
    handleReadAll() {
      if(this.selectList.length==0){
        this.$Message.error('请至少选中一项')
      }else{
        //操作
        let arr = [];
        arr = this.selectList.map((item)=>{
          return item.id
        });
        api.updateMessage({ids:arr}).then(res => {
          console.log(res);
          this.$Message.success("Success!");
        });
      }
    },
    handleRead(id) {
      //已读
      let arr = [id];
      console.log(arr)
      api.updateMessage({ids:arr}).then(res => {
        if(JSON.stringify(res)=="{}"){
          this.$Message.success("Success!");
        }else{
          this.$Message.error(res.msg);
        }
      });
    },
    handleSelectAll (status) {
      this.$refs.section.selectAll(status);
    },
    Modulechange(section){
      this.selectList = section;
      console.log(this.selectList);
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
.notification {
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
