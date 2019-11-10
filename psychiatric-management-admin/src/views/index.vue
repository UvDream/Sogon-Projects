<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:53:46
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 15:14:30
 * @Description: 主界面
 * @Email: UvDream@163.com
 -->
<template>
  <div class="layout">
    <Layout style="height:100vh">
      <Layout>
        <Sider
          hide-trigger
          :style="{
            background: '#fff',
            boxShadow: '10px 0 24px 0 rgba(14,37,38,0.10)'
          }"
        >
          <Logo />
          <Menus :menus-list="menusList" />
        </Sider>
        <Layout>
          <Header
            :style="{
              background: '#ebf1f2',
              height: '122px',
              padding: '0px 20px'
            }"
          >
            <div class="header">
              <div class="header-bread">
                <span>{{ $route.meta.label }}</span>
                <!-- <Breadcrumb separator=">" :style="{marginTop:'10px'}">
                  <BreadcrumbItem>{{nowBreadcrunmb[0]}}</BreadcrumbItem>
                  <BreadcrumbItem v-if="nowBreadcrunmb.length>1">{{nowBreadcrunmb[1]}}</BreadcrumbItem>
                </Breadcrumb>-->
              </div>
              <div class="header-user">
                <div class="header-user-left">
                  <img src="../assets/fonts/avatar.png" alt />
                  <span style="margin-left: 20px ">
                    您好!
                    <span style="color:#53A7A9">{{username}}</span>
                  </span>
                  <!-- <div>
                    <img src="../assets/fonts/message.png" alt />
                    <div>11</div>
                  </div> -->
                </div>
                <div class="header-user-right" @click="logout()">
                  <img src="../assets/fonts/closed.png" alt />
                </div>
              </div>
            </div>
          </Header>
          <Content
            :style="{
              padding: '0px 24px',
              minHeight: '280px',
              background: '#ebf1f2',
              minWidth:'950px'
            }"
          >
            <router-view></router-view>
          </Content>
        </Layout>
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
          name: "统计分析",
          icon: "ios-stats",
          id: "3",
          url: "/dashboard"
        },
        {
          name: "病患分析",
          icon: "ios-medkit",
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
          url: "/personCenter",
          children: [
            { name: "个人账户", id: "2-1", url: "/personalAccount" },
            { name: "已办档案", id: "2-2", url: "/fileAlreadyManagement" },
            { name: "通知管理", id: "2-3", url: "/notificationManagement" }
          ]
        },
        /*{
          name: "系统管理",
          icon: "ios-build",
          id: "4",
          url: "/system",
          children: [
            { name: "账户管理", id: "4-1", url: "/accountManagement" },
            { name: "人员管理", id: "4-2", url: "/personManagement" },
            { name: "日志管理", id: "4-3", url: "/logManagement" }
          ]
        }*/
      ],
      breadcrumb: {
        dashboard: ["首页"],
        fileManagement: ["病患分析", "档案管理"],
        newFile: ["病患分析", "新建档案"],
        personCenter: ["个人中心"],
        personalAccount: ["个人中心", "个人账户"],
        fileAlreadyManagement: ["个人中心", "已办档案"],
        notificationManagement: ["个人中心", "通知管理"],
        system: ["系统管理"],
        accountManagement: ["系统管理", "账户管理"],
        personManagement: ["系统管理", "人员管理"],
        logManagement: ["系统管理", "日志管理"]
      },
      nowBreadcrunmb: []
    };
  },
  mounted() {
    this.nowBreadcrunmb = this.breadcrumb[this.$route.name];
  },
  watch: {
    $route(val) {
      this.nowBreadcrunmb = this.breadcrumb[val.name];
    }
  },
  computed: {
    isCollapsed: function() {
      return this.$store.state.isCollapsed;
    },
    username:function(){
      return sessionStorage.getItem('username')
    }
  },
  methods: {
    logout(){
      this.$router.push({ path: '/login' });      
    }
  }
};
</script>

<style scoped lang="less">
.header {
  height: 122px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-bread {
    line-height: 20px;
    & > span {
      font-size: 25px;
      color: #333;
    }
  }
  &-user {
    height: 50px;
    display: flex;
    align-items: center;
    &-left {
      display: flex;
      width: 280px;
      height: 50px;
      background-color: #fff;
      align-items: center;
      justify-content: flex-start;
      border-radius: 50px;
      & > img {
        width: 50px;
        height: 50px;
      }
      & > div {
        position: relative;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        & > img {
          width: 16px;
          height: 20px;
          margin-top: 15px;
        }
        & > div {
          position: absolute;
          height: 14px;
          padding: 0 4px;
          background-color: red;
          color: #ffffff;
          line-height: 14px;
          font-size: 12px;
          top: 10px;
          border-radius: 14px;
          right: 5px;
        }
      }
    }
    &-right {
      height: 50px;
      line-height: 50px;
      & > img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
<style type="text/css">
  .ivu-menu-submenu-title > i, .ivu-menu-submenu-title span > i{
    margin-right:0
  }
</style>
