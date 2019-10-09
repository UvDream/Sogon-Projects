<template>
  <a-layout id="components-layout-demo-top-side-2" style="height:100vh">
    <a-layout-header class="header">
      <Logo></Logo>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <Menus></Menus>
      </a-layout-sider>
      <a-layout>
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>-->
        <a-layout-content
          :style="{ background: '#fff', padding: '10px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import Menus from "../components/menus/menus";
import Logo from "../components/logo/logo";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Menus,
    Logo
  }
};
</script>

<style lang="less" scoped>
.header {
  padding-left: 10px;
}
</style>