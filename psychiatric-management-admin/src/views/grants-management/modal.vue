<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-31 17:09:16
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-31 17:09:47
 * @Description: 流程图
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="补助金历史审核记录" width="1000" @on-cancel="cancle" class="details">
    <Table ref="section"
      :columns="columns" 
      :data="list" 
      stripe 
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
    </Table>
    <div slot="footer">
    </div>
  </Modal>
</template>

<script>
import { formatDate } from "@/util/util";
export default {
  props:{
    value: {
      type: Boolean,
      default: false
    },
    list:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
      modal: false,
      columns: [
        {
          title: '审核时间',
          key: 'checkTime',
          render:(h,params)=>{
            return h('div',
              formatDate(new Date(params.row.checkTime),'yyyy-MM')
            )
          }
        },
        {
          title: '网格员审核',
          key: 'gridCheck',
          slot:"gridCheck"
        },
        {
          title: '社区民警审核',
          key: 'policeCheck',
          slot:"policeCheck"
        },{
          title: '社区医生审核',
          key: 'doctorCheck',
          slot:"doctorCheck"
        },
        {
          title: '审核状态',
          key: 'checkStatus',
          slot:"checkStatus"
        }
      ],
    };
  },
  watch:{
    value:function(val){
      this.modal = val;
    },
    modal:function(val){
      this.$emit('input',val);
    }
  },
  methods: {
    cancle() {
      this.modal=false;
    }
  }
};
</script>

<style scoped lang="less">
</style>
<style type="text/css">
.details .ivu-modal-footer{
  display:none;
}
</style>