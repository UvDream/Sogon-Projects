<template>
  <a-menu
    mode="inline"
    :defaultSelectedKeys="['1']"
    theme="dark"
    :defaultOpenKeys="['sub1']"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <a-menu-item v-for="(item,index) in menusList" :key="index">
      <a-icon type="mail" />
      {{item.name}}
    </a-menu-item>

    <!-- <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="user" />subnav 1
        </span>
        <a-menu-item key="1">option1</a-menu-item>
        <a-menu-item key="2">option2</a-menu-item>
        <a-menu-item key="3">option3</a-menu-item>
        <a-menu-item key="4">option4</a-menu-item>
    </a-sub-menu>-->
  </a-menu>
</template>
<script>
export default {
  data() {
    return {
      menusList: [
        {
          id: 1,
          name: "值班情况"
        },
        {
          id: 2,
          name: "警情质态"
        },
        {
          id: 3,
          name: "科技技防运行质态"
        },
        {
          id: 4,
          name: "平台预警"
        },
        {
          id: 5,
          name: "巡逻盘查质态"
        },
        {
          id: 6,
          name: "现场勘查质态"
        },
        {
          id: 7,
          name: "扫黑专项斗争情况"
        },
        {
          id: 8,
          name: "一案一档一研判"
        },
        {
          id: 9,
          name: "笔录制作质态"
        },
        {
          id: 10,
          name: "入所人员管理质态"
        },
        {
          id: 11,
          name: "研判分析"
        },
        {
          id: 12,
          name: "其他"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>