<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-31 17:09:16
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-31 17:09:47
 * @Description: 流程图
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案流传图" width="900" @on-cancel="cancle" class="flow">
    <div class="flow-list">
      <div class="item" v-for="(item, index) in tabList">
        <div class="flow-left">
          <section>阶段 :<span>发现</span></section>
        </div>
        <div class="flow-right">
          <div>
            <section>操作人 :<span>网格员</span></section>
            <section>操作时间 :<span>2019-10-31 19:23:23</span></section>
            <section>操作类型 :<span>新建</span></section>
            <section>接收人 :<span>网格员</span></section>
          </div>
          <div>
            <section>原因 :asjdkasjdk</section>
          </div>
          <div>
            <section>证明材料 :<a>asjdkasjdk</a></section>
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
export default {
  props:["modalFlow"],
  data() {
    return {
      modal: this.modalFlow,
      tabList:[{},{}]
    };
  },
  methods: {
    cancle() {
      this.$emit('closemodal',false)
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
      flex: 0 0 100px;
      font-size: 16px;
      color: #333333;
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