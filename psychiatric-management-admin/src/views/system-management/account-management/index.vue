<!--
 * @Author: xiahongxiu
 * @Date: 2019-11-07 11:10:34
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-11-07 11:10:34
 * @Description: 账户管理
 * @Email: UvDream@163.com
 -->

<template>
  <div class="account-mana">
    <TopTitle :title="'账户管理'" v-model="closed">
      <template v-slot:icon>
        <img src="../../../assets/fonts/center/account.png" :style="{verticalAlign:'middle'}" />
      </template>
    </TopTitle>
    <transition name="slide">
      <div v-if="!closed">
        <div class="account-mana-form" >
          <Form
            ref="formValidate"
            label-position="top"
            :model="formValidate"
            :label-width="200"
          >
            <div class="form">
              <FormItem label="账户名" prop="name" class="form-block">
                <Input v-model="formValidate.name" placeholder="输入账户名" />
              </FormItem>
              <FormItem label="所属部门" prop="deptId" class="form-block">
                <Select v-model="formValidate.deptId">
                  <Option value="1">网格员</Option>
                  <Option value="2">公安</Option>
                  <Option value="3">卫生</Option>
                  <Option value="4">民政</Option>
                </Select>
              </FormItem>
              <FormItem label="系统角色" prop="role" class="form-block">
                <Select v-model="formValidate.role">
                  <Option value="0">系统管理员</Option>
                  <Option value="1">部门管理员</Option>
                  <Option value="2">部门操作员</Option>
                </Select>
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
              <Button @click="handleAdd">新增账户</Button>
            </ButtonGroup>
          </div>
          <Table ref="section"
          :columns="columns" 
          :data="tabList" 
          @on-selection-change="Modulechange">
            <template slot-scope="{ row, index }" slot="action">
                <Button class="my-table-handle-button" @click="handledelete(row.id,index)">删除</Button>
                <Button class="my-table-handle-button" @click="handleEdit(row.id,index)">编辑</Button>
                <Button class="my-table-handle-button" @click="handleReset(row.id,index)">重置密码</Button>
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
    <Modal
      :title="isAdd?'新增账户':'修改账户'"
      v-model="modal"
      :mask-closable="false"
      :closable="false"
      draggable
      scrollable
      width="600"
      >
      <div>
        <Form
          ref="formValidate2"
          label-position="left"
          :model="formValidate2"
          :rules="ruleValidate2"
          :label-width="150">
          <div class="form">
            <FormItem label="账户名称" prop="name" class="m-form-block">
              <Input v-model="formValidate2.name" placeholder="输入名称"  />
            </FormItem>
            <FormItem label="登录密码" prop="pwd" class="m-form-block">
              <Input v-model="formValidate2.pwd" placeholder="输入密码"  />
            </FormItem>
            <FormItem label="联系电话" prop="phone" class="m-form-block">
              <Input v-model="formValidate2.phone" placeholder="输入联系电话"  />
            </FormItem>
            <FormItem label="真实姓名" prop="realname" class="m-form-block">
              <Input v-model="formValidate2.realname" placeholder="输入真实姓名"  />
            </FormItem>
            <FormItem label="所属部门" prop="deptId" class="m-form-block">
              <Select v-model="formValidate2.deptId" style="width: 185px;">
                <Option value="1">网格员</Option>
                <Option value="2">公安</Option>
                <Option value="3">卫生</Option>
                <Option value="4">民政</Option>
              </Select>
            </FormItem>
            <FormItem label="系统角色" prop="role" class="m-form-block">
              <Select v-model="formValidate2.role" style="width: 185px;">
                <Option value="0">系统管理员</Option>
                <Option value="1">部门管理员</Option>
                <Option value="1">部门操作员</Option>
              </Select>
            </FormItem>
          </div>
        </Form>
      </div>
      <div slot="footer">
        <Button size="large" @click="cancel()">取消</Button>
        <Button type="primary" size="large" @click="ok('formValidate2')">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";
import api from "@/api/system/account";
import { formatDate,validatePhone } from "@/util/util";
export default {
  components: {
    TopTitle,
  },
  data (){
    return {
      closed: false,
      modal:false,
      isAdd:true,
      total:0,
      pageNum:1,
      pageSize: 10,
      formValidate: {
        name:"",
        deptId:"",
        role:""
      },
      formValidate2: {
        name:"",
        pwd: "",
        phone:"",
        realname:"",
        deptId:"",
        role:""
      },
      ruleValidate2: {
        name: [{ required: true, message: "请输入账户名称", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入登录密码", trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: 'blur' },],
        realname: [{ trigger: "blur", max:25 }],
        deptId: [{ required: true, message: "请输入所属部门", trigger: "blur" }],
        role: [{ required: true, message: "请输入系统角色", trigger: 'blur' },],
      },
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
          title: '账户名',
          width: 150,
          key: 'name'
        },
        {
          title: '登录密码',
          width: 250,
          key: 'pwd'
        },
        {
          title: '联系电话',
          width: 200,
          key: 'telephone'
        },
        {
          title: '所属部门',
          width: 150,
          key: 'deptId',
        },
        {
          title: '真实姓名',
          width: 150,
          key: 'realname'
        },
        {
          title: '系统角色',
          width: 200,
          key: 'role'
        },
        {
          title: '操作',
          width: 280,
          fixed: 'right',
          slot: 'action',
          key: 'action',
          align: 'center'
        }
      ],
      tabList: [{
        id:1,
        name:"欧阳小明",
        pwd:"111111",
        telephone:"18288299920",
        deptId:1,
        realname:"aa",
        role:1
      }],
      selectList:[]
    }
  },
  mounted() {
    let obj = Object.assign(
      this.formValidate,
      {pageNum:this.pageNum},
      {pageSize:this.pageSize}
    );
    //this.searchFunc(obj);
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
    //新增
    handleAdd() {
      this.isAdd = true;
      this.modal = true;
    },
    ok (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          /*api.add(this.formValidate2).then(res => {
            if(JSON.stringify(res)=="{}"){
              this.$Message.success(this.isAdd?"新增":"修改"+"账户成功!");
              this.modal = false;
            }else{
              this.$Message.error(res.msg);
            }
          });*/
        }
      });
    },
    cancel () {
      this.modal = false;
    },
    //删除
    handledelete (id, index) {
      let _this = this;
      _this.$Modal.confirm({
        title:'删除',
        content:'确认删除?',
        onOk: () => {
          let arr =[id];
          api.deleteInfos({ids:arr}).then(res =>{
            console.log(res);
            _this.tabList.splice(index, 1);
            _this.$Message.success("删除成功!");
          })
        }
      });
    },
    //编辑
    handleEdit(id, index) {
      this.isAdd = false;
      this.modal = true;
      let obj = Object.assign(this.formValidate2,{id:id})
      /*api.updateUserInfo(obj).then(res => {
        if(JSON.stringify(res)=="{}"){
          this.$Message.success("Success!");
        }else{
          this.$Message.error(res.msg);
        }
      });*/
    },
    //重置
    handleReset(id, index) {
      
      /*api.updateMessage({id:arr}).then(res => {
        if(JSON.stringify(res)=="{}"){
          this.$Message.success("Success!");
        }else{
          this.$Message.error(res.msg);
        }
      });*/
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
.account-mana {
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
.my-table-handle-button.ivu-btn:nth-child(3){
  width:88px;
}
</style>
