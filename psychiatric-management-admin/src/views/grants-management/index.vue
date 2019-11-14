<!--
 * @Author: xiahongxiu
 * @Date: 2019-11-13 15:44:28
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-11-13 15:44:28
 * @Description: 补助金管理
 * @Email: UvDream@163.com
 -->
<template>
  <div class="grants">
    <Tabs :animated="false" class="demo-tabs-style1">
        <TabPane label="未通过" icon="logo-apple">
          <transition name="slide">
            <Todo v-if="!status" />
          </transition>
        </TabPane>
        <TabPane label="已通过" icon="logo-windows">
          <transition name="slide">
            <Done v-if="!status" />
          </transition>
        </TabPane>
    </Tabs>
    <Icon
      type="ios-arrow-dropup-circle"
      size="60px"
      v-if="!status"
      class="icon"
      @click="iconClick(true)"
    />
    <Icon
      type="ios-arrow-dropdown-circle"
      size="60px"
      v-if="status"
      class="icon"
      @click="iconClick(false)"
    />
  </div>
</template>

<script>
import Todo from "./todo"
import Done from "./done"
export default {
  components:{
    Todo,
    Done
  },
  data() {
    return {
      status: false
    }
  },
  methods: {
    iconClick(bool) {
      this.status = bool;
    }
  }
};
</script>

<style scoped lang="less">
.grants {
  position: relative;
  margin-top: 20px;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
  .my-table{
    margin-top: 0;
  }
  .icon {
    position: absolute;
    top: 10px;
    right: 0;
    margin-top  : 10px;
    color       : #666;
    font-size   : 20px;
    margin-right: 10px;
  }
}
</style>
<style type="text/css">
  .grants .ivu-tabs-bar{
    border-bottom: none;
  }
  .grants .ivu-tabs-nav{
    font-size: 20px;
    background: #EEF3F4;
    border-radius: 4px;
    border-radius: 4px;
  }
  .grants .ivu-tabs-nav .ivu-tabs-tab-active{
    background: #FFFFFF;
    border-radius: 2px;
    border-radius: 2px;
  }
  .grants .ivu-tabs-nav .ivu-tabs-ink-bar{
    background: transparent;
  }
  .grants .ivu-icon-logo-apple:before{
    background:url('../../assets/fonts/pass.png');
    content: "";
    width: 15px;
    height: 17px;
    display: inline-block;
  }
  .grants .ivu-icon-logo-windows:before{
    background:url('../../assets/fonts/nopass.png');
    content: "";
    width: 15px;
    height: 17px;
    display: inline-block;
  }
</style>
