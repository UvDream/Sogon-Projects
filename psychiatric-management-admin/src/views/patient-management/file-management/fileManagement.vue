<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-22 17:26:14
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-30 14:34:30
 * @Description: 档案管理
 * @Email: UvDream@163.com
 -->
<template>
  <div class="file-manage">
    <div class="white-block my-form" :class="{'hidden':isShow == true}">
      <Form ref="formInline" :model="formInline" inline class="my-form-content">
        <FormItem label="档案编号" prop="code">
          <Input v-model="formInline.code" />
        </FormItem>
        <FormItem label="档案状态" prop="status">
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
        <FormItem label="病患姓名" prop="patientName">
          <Input v-model="formInline.patientName" />
        </FormItem>
        <FormItem label="重点病患" prop="isfocal">
          <Select v-model="formInline.isfocal">
            <Option value="0">是</Option>
            <Option value="1">否</Option>
          </Select>
        </FormItem>
        <FormItem label="病患身份证号" prop="patientCode">
          <Input v-model="formInline.patientCode" />
        </FormItem>
        <FormItem prop="date" label="开始创建时间">
          <DatePicker type="datetime" v-model="formInline.beginCreateDate"></DatePicker>
        </FormItem>
        <span>-</span>
        <FormItem prop="date" label="结束创建时间">
          <DatePicker type="datetime" v-model="formInline.endCreateDate"></DatePicker>
        </FormItem>
      </Form>
      <div class="my-form-handle">
        <Button style="margin-right: 8px" @click="handleReset('formInline')">取消</Button>
        <Button type="primary" @click="search">搜索</Button>
        <div v-if="isShow" @click="show">
          <span>展开</span>
          <Icon type="ios-arrow-down" />
        </div>
        <div v-else @click="show">
          <span>收起</span>
          <Icon type="ios-arrow-up" />
        </div>
      </div>
    </div>
    <div class="my-table">
      <div class="my-table-handle">
        <ButtonGroup size="large">
          <Button @click="handleSelectAll(true)">全选</Button>
          <Button @click="handleSelectAll(false)">取消全选</Button>
        </ButtonGroup>
        <ButtonGroup size="large">
          <Button @click="handleSelectAll(true)">推送</Button>
          <Button @click="handleDeleteAll()">删除</Button>
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
          <span v-if="row.status == 0" @click="handleStatus(row.status)">
            <img src="../../../assets/fonts/file-manage/faxian.png" style="margin-right:5px;vertical-align: middle;">
            发现中
          </span>
          <span v-if="row.status == 1" @click="handleStatus(row.status)">
            <img src="../../../assets/fonts/file-manage/tuisong.png" style="margin-right:5px;vertical-align: middle;">
            已推送
          </span>
          <span v-if="row.status == 2" @click="handleStatus(row.status)">
            <img src="../../../assets/fonts/file-manage/pingding.png" style="margin-right:5px;vertical-align: middle;">
            评定中
          </span>
          <span v-if="row.status == 3" @click="handleStatus(row.status)">
            <img src="../../../assets/fonts/file-manage/bangfu.png" style="margin-right:5px;vertical-align: middle;">
            已办结
          </span>
          <span v-if="row.status == 4" @click="handleStatus(row.status)">
            <img src="../../../assets/fonts/file-manage/zhiliao.png" style="margin-right:5px;vertical-align: middle;">
            治疗中
          </span>
          <span v-if="row.status == 5" @click="handleStatus(row.status)">
            <img src="../../../assets/fonts/file-manage/jianhu.png" style="margin-right:5px;vertical-align: middle;">
            监护中
          </span>
          <span v-if="row.status == 6" @click="handleStatus(row.status)">
            <img src="../../../assets/fonts/file-manage/bangfu.png" style="margin-right:5px;vertical-align: middle;">
            帮扶中
          </span>
          <span v-if="row.status == 7" @click="handleStatus(row.status)">
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
          <Button class="my-table-handle-button" @click="handlepush(row.id,index)">推送</Button>
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
import Forward from "../new-file/components/modal/forward";
import SetUp from "../new-file/components/modal/setUp";
import Return from "../new-file/components/modal/return";
import Flow from "./flow";
import mixin from "../../../mixin/newFile";
import { formatDate } from "@/util/util";
export default {
  mixins: [mixin],
  components: {
    Forward,
    SetUp,
    Return,
    Flow
  },
  data() {
    return {
      indexId:0,
      modalForward:false,
      modalFlow:false,
      modalSetUp:false,
      modalReturn:false,
      formInline: {
        code: '',
        status: '',
        patientName:'',
        patientCode: '',
        isfocal: '',
        beginCreateDate:'',
        endCreateDate: '',
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
        this.tabList = res.data.list;
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
    //下拉
    show() {
      this.isShow = !this.isShow;
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
    //查看流程图
    handleStatus(status) {
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
@import url("./index.less");
</style>