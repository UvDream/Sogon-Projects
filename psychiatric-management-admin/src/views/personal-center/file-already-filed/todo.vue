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
          <FormItem prop="beginCreateDate" label="开始创建时间" class="form-block">
            <DatePicker type="datetime" v-model="formInline.beginCreateDate"></DatePicker>
          </FormItem>
          <span>-</span>
          <FormItem prop="endCreateDate" label="结束创建时间" class="form-block">
            <DatePicker type="datetime" v-model="formInline.endCreateDate"></DatePicker>
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
          <Button @click="handleDeleteAll(false)">删除</Button>
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
            <img src="../../../assets/fonts/file-manage/pingding.png" style="margin-right:5px;vertical-align: middle;">
            评定中
          </span>
          <span v-if="row.status == 3" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/bangfu.png" style="margin-right:5px;vertical-align: middle;">
            已办结
          </span>
          <span v-if="row.status == 4" @click="handleStatus(row.id,index)">
            <img src="../../../assets/fonts/file-manage/zhiliao.png" style="margin-right:5px;vertical-align: middle;">
            治疗中
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
          <Button class="my-table-handle-button" @click="handledelete(row.id,index)">删除</Button>
          <Button 
            class="my-table-handle-button" 
            @click="handleforward(row.id,index)" 
            v-if="row.status == 1 || row.status == 2 || row.status == 4 || row.status == 6"
            >转发
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click="handlereturn(row.id,index)"
            v-if="row.status == 2 || row.status == 4 || row.status == 6 || row.status == 7">
            
            退回
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click="handlesetup(row.id,index)"
            v-if="row.status == 7"
            >办结
          </Button>
          <Button 
            class="my-table-handle-button" 
            @click="handlepush(row.id,index)"
            v-if="row.status == 0 || row.status == 1" >
            推送
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
    <Return :modalReturn="modalReturn" :indexId="indexId" @closemodal="closemodal"/>
    <!-- 流程图-->
    <Flow :modalFlow="modalFlow" :indexId="indexId" @closemodal="closemodal"/>
  </div>
</template>

<script>
import api from "@/api/file-manage";
import Forward from "../../patient-management/new-file/components/modal/forward";
import SetUp from "../../patient-management/new-file/components/modal/setUp";
import Return from "../../patient-management/new-file/components/modal/return";
import Flow from "../../patient-management/file-management/flow";
import { formatDate } from "@/util/util";
export default {
  components: {
    Forward,
    SetUp,
    Return,
    Flow
  },
  data (){
    return {
      closed: false,
      indexId:0,
      modalForward:false,
      modalFlow:false,
      modalSetUp:false,
      modalReturn:false,
      formInline: {
        code: '',
        status: '',
        patientName:'',
        name: '',
        beginCreateDate:'',
        endCreateDate: '',
        urgent:''
      },
      total:0,
      pageNum:1,
      pageSize: 10,
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
        this.total = res.data.total;
        this.tabList = res.data.list;
      }).catch(()=>{
        this.total =  50;
        this.tabList =  [
          {
              "id": 63,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T03:04:41.000+0000",
              "updateDate": "2019-10-30T03:04:41.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 64,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T03:06:53.000+0000",
              "updateDate": "2019-10-30T03:06:53.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 65,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T05:58:13.000+0000",
              "updateDate": "2019-10-30T05:58:13.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 67,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T07:35:11.000+0000",
              "updateDate": "2019-10-30T07:35:11.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 68,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T08:08:18.000+0000",
              "updateDate": "2019-10-30T08:08:18.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 69,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T08:08:30.000+0000",
              "updateDate": "2019-10-30T08:08:30.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 70,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T08:08:42.000+0000",
              "updateDate": "2019-10-30T08:08:42.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 71,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T08:09:03.000+0000",
              "updateDate": "2019-10-30T08:09:03.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 72,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T08:09:09.000+0000",
              "updateDate": "2019-10-30T08:09:09.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          },
          {
              "id": 73,
              "code": "XZ320623198807064421",
              "name": null,
              "status": 1,
              "patientName": "WG",
              "patientCode": "320623198807064421",
              "patientTel": null,
              "patientSex": 1,
              "patientAddr": null,
              "patientCompany": null,
              "patientStatus1": 1,
              "patientRusticate": "lizhuang",
              "patientDanger": null,
              "patientStatus2": 1,
              "createDate": "2019-10-30T08:09:40.000+0000",
              "updateDate": "2019-10-30T08:09:40.000+0000",
              "type": null,
              "checkinUserId": 1,
              "checkinDept": null,
              "guardianName": null,
              "guardianRel": null,
              "patientPolice": "lijinguan",
              "guardianCompany": null,
              "guardianTel": null,
              "isforeign": 0,
              "foreignHandle": null,
              "causeTrouble": null,
              "fileCode": null,
              "isfocal": 1,
              "tFiles": null,
              "checkinUserName": "WG",
              "curForWardDeptName": null,
              "curForWardName": null,
              "lastForWardTime": null
          }
        ];

      });
    },
    //全选中
    handleSelectAll (status) {
      this.$refs.section.selectAll(status);
    },
    //选中变化
    Modulechange(section){
      this.selectList = section;
      console.log(this.selectList);
    },
    //删除
    handledelete (id, index) {
      let _this = this;
      this.$Modal.confirm({
        title:'删除',
        content:'确认删除?',
        onOk: () => {
          let arr = [id];
          api.deleteData({ids:arr}).then(res =>{
            console.log(res);
            _this.tabList.splice(index, 1);
            _this.$Message.success("删除成功!");
          })
          
        }
      });
    },
    handleDeleteAll() {
      var _this = this;
      if(this.selectList.length==0){
        this.$Message.error('请至少选中一项')
      }else{
        //操作
        let arr = [];
        arr = this.selectList.map((item)=>{
          return item.id
        });
        console.log(arr);
        api.deleteData({ids:arr}).then(res => {
          console.log(res);
          let obj = Object.assign(
            _this.formInline,
            {pageNum:this.pageNum},
            {pageSize:this.pageSize}
          );
          _this.searchFunc(obj);
          _this.$Message.success("删除成功!");
        });
      }
    },
    //转发
    handleforward(id,index) {
      this.indexId = id;
      this.modalForward = true;
    },
    //退回
    handlereturn(id,index) {
      this.indexId = id;
      this.modalReturn = true;
    },
    //办结
    handlesetup(id,index) {
      this.indexId = id;
      this.modalSetUp = true;
    },
    //推送
    handlepush(id,index) {
      this.indexId = id;
    },
    handlePushAll() {
      var _this = this;
      if(this.selectList.length==0){
        this.$Message.error('请至少选中一项')
      }else{
        //操作
        let arr = [];
        arr = this.selectList.map((item)=>{
          return item.id
        });
        console.log(arr);
        //缺少接口
        /*api.deleteData({ids:arr}).then(res => {
          console.log(res);
          let obj = Object.assign(
            _this.formInline,
            {pageNum:this.pageNum},
            {pageSize:this.pageSize}
          );
          _this.searchFunc(obj);
          _this.$Message.success("信息推送成功!");
        });*/
      }
    },
    //查看流程图
    handleStatus(id,index) {
      this.indexId = id;
      this.modalFlow = true;
    },
    //弹窗关闭
    closemodal(){
      this.modalFlow = false;
      this.modalForward = false;
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
