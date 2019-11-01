<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:32:28
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 17:32:52
 * @Description: 已办档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="filed">
    <Tabs :animated="false" class="demo-tabs-style1">
        <TabPane label="待办档案" icon="logo-apple">
          <Todo />
        </TabPane>
        <TabPane label="已办档案" icon="logo-windows">
          <Done />
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
.filed {
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
  .filed .ivu-tabs-bar{
    border-bottom: none;
  }
  .filed .ivu-tabs-nav{
    font-size: 20px;
    background: #EEF3F4;
    border-radius: 4px;
    border-radius: 4px;
  }
  .filed .ivu-tabs-nav .ivu-tabs-tab-active{
    background: #FFFFFF;
    border-radius: 2px;
    border-radius: 2px;
  }
  .filed .ivu-tabs-nav .ivu-tabs-ink-bar{
    background: transparent;
  }
</style>
