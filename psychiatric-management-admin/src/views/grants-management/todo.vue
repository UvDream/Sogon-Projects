<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-28 13:23:28
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-28 13:23:52
 * @Description: 未通过
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
          <FormItem label="病患身份证号" class="form-block" prop="patientCode">
            <Input v-model="formInline.patientCode" />
          </FormItem>
          <FormItem label="档案编号" class="form-block" prop="code">
            <Input v-model="formInline.code" />
          </FormItem>
          <FormItem prop="beginCheckDate" label="开始审核时间" class="form-block">
            <DatePicker type="date" format="yyyy-MM" @on-change="startTimeChange" v-model="formInline.beginCheckDate">
            </DatePicker>
          </FormItem>
          <span>-</span>
          <FormItem prop="endCheckDate" label="结束审核时间" class="form-block">
            <DatePicker type="date" format="yyyy-MM" @on-change="endTimeChange" v-model="formInline.endCheckDate"
          ></DatePicker>
          </FormItem>
          <FormItem class="form-block" style="display: flex;align-items: flex-end;">
            <Button @click="handleReset('formInline')">取消</Button>
            <Button type="primary" @click="search" style="margin-left: 8px">搜索</Button>
          </FormItem>
        </div>
      </Form>
    </div>
    <div class="my-table">
      <div style="font-size: 16px">
        未审核通过<span style="color: #53A7A9;">{{total}}</span>个档案
      </div>
      <Table ref="section"
        :columns="columns" 
        :data="tabList" 
      >
        <template slot-scope="{ row, index}" slot="gridCheck">
          <span v-if="row.gridCheck == '0'">
            <span>通过</span>
          </span>
          <span v-else-if="row.gridCheck == '1'">
            <span style="color: #FF7A45;">不通过</span>
          </span>
          <span v-else>
            <span style="color: #53A7A9;">未审核</span>
          </span>
        </template>
        <template slot-scope="{ row, index}" slot="policeCheck">
          <span v-if="row.policeCheck == '0'">
            <span>通过</span>
          </span>
          <span v-else-if="row.policeCheck == '1'">
            <span style="color: #FF7A45;">不通过</span>
          </span>
          <span v-else>
            <span style="color: #53A7A9;">未审核</span>
          </span>
        </template>
        <template slot-scope="{ row, index}" slot="doctorCheck">
          <span v-if="row.doctorCheck == '0'">
            <span>通过</span>
          </span>
          <span v-else-if="row.doctorCheck == '1'">
            <span style="color: #FF7A45;">不通过</span>
          </span>
          <span v-else>
            <span style="color: #53A7A9;">未审核</span>
          </span>
        </template>
        <template slot-scope="{ row, index}" slot="checkStatus">
          <span v-if="row.checkStatus == '0'">
            <span>通过</span>
          </span>
          <span v-else>
            <span style="color: #FF7A45;">不通过</span>
          </span>
        </template>
        <template slot-scope="{ row, index}" slot="code">
          <router-link :to="{name:'newFile', params: { status : row.status,id: row.id,isOperRole: row.isOperRole }}">
            {{row.code}}
          </router-link>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button class="my-table-handle-button" @click="handle(row.archivesId,index)">查看</Button>
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
    <!-- 流程图-->
    <ModalTable v-model="modal" :list="list" />
  </div>
</template>

<script>
import ModalTable from "./modal";
import grantsList from "@/mixin/grantsList";
import { formatDate } from "@/util/util";
export default {
  mixins: [grantsList],
  components: {
    ModalTable
  },
  data (){
    return {
      closed: false,
      isTg:1,
      formInline: {
        patientName:"",
        patientCode:"",
        code:"",
        beginCheckDate:null,
        endCheckDate:null
      },
      columns: [
        {
          title: '病患姓名',
          width: 240,
          key: 'patientName'
        },
        {
          title: '病患身份证号',
          width: 250,
          key: 'patientCode'
        },
        {
          title: '病患档案',
          width: 250,
          slot: 'code',
          key: 'code'
        },
        {
          title: '网格员审核',
          width: 120,
          key: 'gridCheck',
          slot:'gridCheck'
        },
        {
          title: '社区民警审核',
          width: 150,
          slot: 'policeCheck',
          key: 'policeCheck'
        },
        {
          title: '社区医生审核',
          width: 120,
          key: 'doctorCheck',
          slot:'doctorCheck'
        },
        {
          title: '审核时间',
          width: 200,
          key: 'checkTime',
          render:(h,params)=>{
            return h('div',
              formatDate(new Date(params.row.checkTime),'yyyy-MM')
            )
          }
        },
        {
          title: '审核状态',
          width: 120,
          key: 'checkStatus',
          slot:'checkStatus'
        },
        {
          title: '审核记录',
          width: 100,
          fixed: 'right',
          slot: 'action',
          key: 'action',
          align: 'center'
        }
      ],
      tabList: [{
        patientName:"李若兰",
        patientCode:"350125199402158745",
        code:"XZB340201199202158754",
        isfocal:"通过",
        policeCheck:"通过",
        doctorCheck:"通过",
        checkTime:"2019年11月",
        checkStatus:"通过"
      }],
      selectList: []
    }
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import url("../patient-management/file-management/index.less");
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
