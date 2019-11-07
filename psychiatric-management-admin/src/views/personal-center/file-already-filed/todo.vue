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
        ref="formInline"
        label-position="top"
        :model="formInline"
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
              <Option value="2">初步处理中</Option>
              <Option value="3">已办结</Option>
              <Option value="4">评定治疗中</Option>
              <Option value="5">监护中</Option>
              <Option value="6">帮扶中</Option>
              <Option value="7">再次评定</Option>
              <Option value="8">脱离管控</Option>
            </Select>
          </FormItem>
          <FormItem label="档案名称" class="form-block" prop="name">
            <Input v-model="formInline.name" />
          </FormItem>
          <FormItem prop="beginCreateDate" label="开始创建时间" class="form-block">
            <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" @on-change="startTimeChange" v-model="formInline.beginCreateDate">
            </DatePicker>
          </FormItem>
          <span>-</span>
          <FormItem prop="endCreateDate" label="结束创建时间" class="form-block">
            <DatePicker type="datetime" format="yyyy-MM-dd HH:mm:ss" @on-change="endTimeChange" v-model="formInline.endCreateDate"
          ></DatePicker>
          </FormItem>
          <FormItem label="紧急程度状态" class="form-block" prop="urgent">
            <Select v-model="formInline.urgent">
              <Option value="0">一般</Option>
              <Option value="1">紧急</Option>
              <Option value="2">非常紧急</Option>
            </Select>
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
          <Button @click="handlePushAll(true)">推送</Button>
          <Button v-if="isRole==0 || isRole==1" @click="handleDeleteAll(false)">删除</Button>
        </ButtonGroup>
      </div>
      <Table ref="section"
        :columns="columns" 
        :data="tabList" 
        @on-selection-change="Modulechange"
      >
        <template slot-scope="{ row, index}" slot="urgent">
          <span v-if="row.urgent == '0'">
            <span>一般</span>
          </span>
          <span v-else-if="row.urgent == '1'">
            紧急
          </span>
          <span v-else>
            非常紧急
          </span>
        </template>
        <template slot-scope="{ row, index}" slot="code">
          <router-link :to="{name:'newFile', params: { id : row.code }}">
            {{row.code}}
          </router-link>
        </template>
        <template slot-scope="{ row, index}" slot="status">
          <span v-if="row.status == 0" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/faxian.png" style="margin-right:5px;vertical-align: middle;">
            发现中
          </span>
          <span v-if="row.status == 1" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/tuisong.png" style="margin-right:5px;vertical-align: middle;">
            已推送
          </span>
          <span v-if="row.status == 2" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/chubuchuli.png" style="margin-right:5px;vertical-align: middle;">
            初步处理中
          </span>
          <span v-if="row.status == 3" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/banjie.png" style="margin-right:5px;vertical-align: middle;">
            已办结
          </span>
          <span v-if="row.status == 4" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/zhiliao.png" style="margin-right:5px;vertical-align: middle;">
            评定治疗中
          </span>
          <span v-if="row.status == 5" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/jianhu.png" style="margin-right:5px;vertical-align: middle;">
            监护中
          </span>
          <span v-if="row.status == 6" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/bangfu.png" style="margin-right:5px;vertical-align: middle;">
            帮扶中
          </span>
          <span v-if="row.status == 7" @click="handleStatus(row.id,index)">
            <!-- <img src="../../../assets/fonts/file-manage/zaici.png" style="margin-right:5px;vertical-align: middle;"> -->
            再次评定
          </span>
          <span v-if="row.status == 8" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/tuoli.png" style="margin-right:5px;vertical-align: middle;">
            脱离管控
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
          <Button class="my-table-handle-button" v-if="isRole==0 || isRole==1" @click="handledelete(row.id,index)">删除</Button>
          <Button 
            class="my-table-handle-button" 
            @click="handleforward(row.id,index)" 
            v-if="(row.status == 1 || row.status == 2 || row.status == 4 || row.status == 6)&&(row.isOperRole==0)"
            >转发
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click="handlereturn(row.id,index)"
            v-if="(row.status == 2 || row.status == 4 || row.status == 6 || row.status == 7)&&(row.isOperRole==0)">
            退回
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click="handlesetup(row.id,index)"
            v-if="(row.status == 2 || row.status == 4 || row.status == 7)&&(row.isOperRole==0)"
            >办结
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click="handlepush(row.id,index)"
            v-if="row.status == 0 || row.status == 1" >
            推送
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click="handlestart(row.id,index)"
            v-if="row.status == 3" >
            启动
          </Button>
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
    <Forward :modalForward="modalForward" :indexId="indexId" @closemodal="closemodal"/>
    <!-- 办结弹窗 -->
    <SetUp :modalSetUp="modalSetUp" :indexId="indexId" @closemodal="closemodal"/>
    <!-- 退回弹窗-->
    <Return :modalReturn="modalReturn" :indexId="indexId" :statusObj="statusObj" @closemodal="closemodal"/>
    <!-- 启动弹窗-->
    <Startup :modalStartUp="modalStartUp" :indexId="indexId" @closemodal="closemodal"/>
    <!-- 流程图-->
    <Flow :modalFlow="modalFlow" :indexId="indexId" :flowList="flowList" @closemodal="closemodal"/>
  </div>
</template>

<script>
import Forward from "../../patient-management/new-file/components/modal/forward";
import SetUp from "../../patient-management/new-file/components/modal/setUp";
import Return from "../../patient-management/new-file/components/modal/return";
import Startup from "../../patient-management/new-file/components/modal/startUp";
import Flow from "../../patient-management/file-management/flow";
import fileList from "@/mixin/fileList";
import { formatDate } from "@/util/util";
export default {
  mixins: [fileList],
  components: {
    Forward,
    SetUp,
    Return,
    Flow,
    Startup
  },
  data (){
    return {
      closed: false,
      formInline: {
        code: '',
        status: '',
        patientName:'',
        name: '',
        beginCreateDate:null,
        endCreateDate: null,
        urgent:''
      },
      columns: [
        {
          type: 'selection',
          width: 60,
          fixed: 'left',
          align: 'center'
        },
        {
          title: '紧急程度',
          width: 120,
          slot: 'urgent',
          key: 'urgent'
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
          width: 150,
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
  methods: {}
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
