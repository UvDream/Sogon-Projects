<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:53:46
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 18:20:33
 * @Description: 主界面
 * @Email: UvDream@163.com
 -->
<template>
  <div class="layout">
    <Layout style="height:100vh">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Logo />
        <Menus :menus-list="menusList" />
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content :style="{margin: '10px', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Logo from "../components/logo/logo.vue";
import Menus from "../components/menus/menus";
export default {
  components: {
    Logo,
    Menus
  },
  data() {
    return {
      menusList: [
        {
          name: "病患分析",
          icon: "ios-barcode-outline",
          id: "1",
          children: [
            { name: "档案管理", id: "1-1", url: "/fileManagement" },
            { name: "新建档案", id: "1-2", url: "/newFile" }
          ]
        },
        {
          name: "个人中心",
          icon: "md-person",
          id: "2",
          children: [
            { name: "个人账户", id: "2-1", url: "/personalAccount" },
            { name: "已办档案", id: "2-2", url: "/fileAlreadyManagement" },
            { name: "通知管理", id: "2-3", url: "/notificationManagement" }
          ]
        }
      ]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    isCollapsed: function() {
      return this.$store.state.isCollapsed;
    }
  },
  methods: {
    collapsedSider() {
      //   this.$refs.side1.toggleCollapse();
      this.$store.state.isCollapsed = !this.$store.state.isCollapsed;
    }
  }
};
</script>

<style scoped lang="less">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  height: 100vh;
  overflow: hidden;
  outline: 1px solid red;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>