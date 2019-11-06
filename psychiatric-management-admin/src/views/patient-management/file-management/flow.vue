<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-31 17:09:16
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-31 17:09:47
 * @Description: 流程图
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案流传图" width="1000" @on-cancel="cancle" class="flow">
    <div class="flow-list">
      <div class="item" v-for="(item, index) in flowList">
        <div class="flow-left">
          <section>阶段 :
            <span v-if="item.curPositionid==0">发现</span>
            <span v-else-if="item.curPositionid==2">初步处理</span>
            <span v-else-if="item.curPositionid==4">评定治疗</span>
            <span v-else-if="item.curPositionid==6">四帮一</span>
            <span v-else-if="item.curPositionid==7">再次评定</span>
            <span v-else-if="item.curPositionid==8">脱离管控</span>
            <span v-else></span>
          </section>
        </div>
        <div class="flow-right">
          <div>
            <section>操作人 :<span>{{item.curForWardDeptName}}</span></section>
            <section>操作时间 :<span>{{item.operDate|format }}</span></section>
            <section>操作类型 :
              <span v-if="item.operType==0">保存/更新</span>
              <span v-else-if="item.operType==1">转发</span>
              <span v-else-if="item.operType==2">保存</span>
              <span v-else-if="item.operType==3">退回</span>
              <span v-else-if="item.operType==4">启动</span>
              <span v-else></span>
            </section>
            <section>接收人 :
              <span>{{item.targetDeptStr | splitStr}}</span>
            </section>
          </div>
          <div>
            <section>原因 :{{item.remarks}}</section>
          </div>
          <div>
            <!-- <section>证明材料 :<a>{{item.remarks}}</a></section> -->
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div slot="footer">
    </div>
  </Modal>
</template>

<script>
import mixin from "@/mixin/newFile";
import { formatDate } from "@/util/util";
export default {
  props:{
    modalFlow: {
      type: Boolean,
      default: false
    },
    indexId:{
      default: 0
    },
    flowList:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      modal: this.modalFlow
    };
  },
  filters: {
    format: time=>{
      return formatDate(new Date(time), "yyyy-MM-dd hh:mm");
    },
    splitStr: value=>{
      if(!!value){
        let arr = value.split(",");
        let str = "";
        arr.forEach((index,item)=>{
          if(item==1){
            str += ' 网络 ';
          }else if(item==2){
            str += ' 公安 ';
          }else if(item==3){
            str += ' 卫生 ';
          }else{
            str += ' 民政 ';
          }
        });
        return str;
      }else{
        return ""
      }
    }
  },
  watch:{
    modalFlow:function(val){
      this.modal = val;
    }
  },
  methods: {
    cancle() {
      this.$emit('closemodal')
    }
  }
};
</script>

<style scoped lang="less">
.flow{
  .flow-list{
    background: #F5F5F5;
    border-radius: 20px;
    border-radius: 20px;
    padding:30px;
  }
  .item{
    position: relative;
    display:flex;
    width:100%;
    border-left: 3px solid #BEC4C4;
    padding-left:30px;
    &::before{
      content:'';
      display:inline-block;
      width:16px;
      height:16px;
      border-radius:50%;
      position: absolute;
      background: #FF7A45;
      left: -8px;
      top: 0;
    }
    .flow-left{
      flex: 0 0 130px;
      font-size: 14px;
      color: #FF7A45;
      section{
        span{
          margin-left:5px;
        }
      }
    }
    .flow-right{
      display: flex;
      flex-direction: column;
      width:100%;
      &>div{
        display:flex;
        font-size: 14px;
        color: #333333;
        padding-top:20px;
        section{
          color:#333;
        }
        span{
          color: #666;
        }
      }
      &>div:nth-child(1){
        display:flex;
        justify-content: space-between;
        padding-top:0;
        &>section{
          span{
            color: #2A2A2A;
            line-height: 22px;
            margin-left:5px;
          }
          a{
            color: #53A7A9;
            margin-left:5px;
          }
        }
      }
    
    }
  }
}
</style>
<style type="text/css">

</style>