<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-22 17:26:14
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-23 17:34:30
 * @Description: 档案管理
 * @Email: UvDream@163.com
 -->
<template>
  <div class="file-manage">
    <div class="white-block my-form" :class="{'hidden':isShow == true}">
      <Form ref="formInline" :model="formInline" inline class="my-form-content">
        <FormItem label="档案编号">
          <Input type="text" v-model="formInline.user" placeholder="Username" />
        </FormItem>
        <FormItem label="档案状态">
          <Select v-model="formInline.status">
            <Option value="beijing">发现中</Option>
            <Option value="shanghai">已推送</Option>
            <Option value="shenzhen">评定中</Option>
            <Option value="beijing">治疗中</Option>
            <Option value="shanghai">四帮一</Option>
            <Option value="shenzhen">已康复</Option>
            <Option value="shenzhen">已办结</Option>
          </Select>
        </FormItem>
        <FormItem label="病患姓名">
          <Input type="password" v-model="formInline.password" placeholder="Password" />
        </FormItem>
        <FormItem label="重点病患">
          <Select v-model="formInline.status">
            <Option value="beijing">是</Option>
            <Option value="shanghai">否</Option>
          </Select>
        </FormItem>
        <FormItem label="病患身份证号">
          <Input type="password" v-model="formInline.password" placeholder="Password" />
        </FormItem>
        <FormItem prop="date" label="创建时间">
          <DatePicker type="date" placeholder="Select date"></DatePicker>
        </FormItem>
        <span>-</span>
        <FormItem prop="time" label="创建时间">
          <TimePicker type="time" placeholder="Select time"></TimePicker>
        </FormItem>
      </Form>
      <div class="my-form-handle">
        <Button style="margin-right: 8px">取消</Button>
        <Button type="primary">搜索</Button>
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
          <Button @click="handleSelectAll(false)">转发</Button>
          <Button @click="handleSelectAll(true)">EXCEL导入</Button>
          <Button @click="handleSelectAll(false)">删除</Button>
        </ButtonGroup>
      </div>
      <Table ref="section"
      :columns="columns" 
      :data="tabList" 
      @on-select="Check" 
      @on-select-cancel="cancelCheck" 
      @on-selection-change="Modulechange">
        <template slot-scope="{ row, index}" slot="status">
          <span v-if="row.status == 1">
          <!-- <img src="../../assets/fonts/file-manage/bangfu.png"> -->
          {{row.status}}</span>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button class="my-table-handle-button" @click="">转发</Button>
            <Button class="my-table-handle-button" @click="">退回</Button>
            <Button class="my-table-handle-button" @click="">办结</Button>
            <Button class="my-table-handle-button" @click="">推送</Button>
            <Button class="my-table-handle-button" @click="">删除</Button>
        </template>
      </Table>
      <Page :total="40" show-elevator show-sizer show-total class="my-table-page"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
        status:''
      },
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
          key: 'filenumber'
        },
        {
          title: '病患姓名',
          width: 240,
          key: 'name'
        },
        {
          title: '病患身份证号',
          width: 200,
          key: 'icd'
        },
        {
          title: '重点病患',
          width: 120,
          key: 'iskey'
        },
        {
          title: '档案状态',
          width: 100,
          slot: 'status',
          key: 'status'
        },
        {
          title: '创建人',
          width: 120,
          key: 'creater'
        },
        {
          title: '创建时间',
          width: 200,
          key: 'creatime'
        },
        {
          title: '转发人',
          width: 120,
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
          filenumber: '201910170024',
          name: 'XZ_王显平_20191017',
          icd: '320929992000100020',
          iskey: '是',
          status:1,
          creater: '欧阳小明',
          creatime: '2019-10-22 19:02:02',
          forward: '欧阳小红',
          forwardtime: '2019-10-22 19:02:02'
        },
        {
          filenumber: '201910170024',
          name: 'XZ_王显平_20191017',
          icd: '320929992000100020',
          iskey: '是',
          status:'已办结',
          creater: '欧阳小明',
          creatime: '2019-10-22 19:02:02',
          forward: '欧阳小红',
          forwardtime: '2019-10-22 19:02:02'
        }
      ]
    }
  },
  methods: {
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
    remove (index) {
      this.tabList.splice(index, 1);
    }
  }
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
<style>
.my-form-content.ivu-form-inline .ivu-form-item-label{
  font-size: 16px;
  color: #000;
}
.my-form-content.ivu-form-inline .ivu-input,
.my-form-content.ivu-form-inline .ivu-select-selection{
  width: 240px;
  height: 40px;
}
</style>