<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:53:46
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 17:19:41
 * @Description: 主界面
 * @Email: UvDream@163.com
 -->
<template>
  <div class="layout">
    <Layout style="height:100vh">
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Logo />
          <Menus :menus-list="menusList" />
        </Sider>
        <Layout>
          <Header :style="{background: '#ebf1f2',height:'122px',padding:'0px 10px'}">
            <div class="header">
              <div class="header-bread">
                <span>{{$route.meta.label}}</span>
                <Breadcrumb separator=">" :style="{marginTop:'10px'}">
                  <BreadcrumbItem>{{nowBreadcrunmb[0]}}</BreadcrumbItem>
                  <BreadcrumbItem v-if="nowBreadcrunmb.length>1">{{nowBreadcrunmb[1]}}</BreadcrumbItem>
                </Breadcrumb>
              </div>
              <div class="header-user">
                <div class="header-user-left">
                  <img src="../assets/fonts/avatar.png" alt />
                  <span>
                    您好!
                    <span style="color:#53A7A9">民政局张云满</span>
                  </span>
                  <div>
                    <img src="../assets/fonts/message.png" alt />
                    <div>11</div>
                  </div>
                </div>
                <div class="header-user-right">
                  <img src="../assets/fonts/closed.png" alt />
                </div>
              </div>
            </div>
          </Header>
          <Content :style="{padding: '0px 24px', minHeight: '280px', background: '#ebf1f2'}">
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
          name: "首页",
          icon: "ios-barcode-outline",
          id: "3",
          url: "/dashboard"
        },
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
      ],
      breadcrumb: {
        dashboard: ["首页"],
        fileManagement: ["病患分析", "档案管理"],
        newFile: ["病患分析", "新建档案"],
        personalAccount: ["个人中心", "个人账户"],
        fileAlreadyManagement: ["个人中心", "已办档案"],
        notificationManagement: ["个人中心", "通知管理"]
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
    }
  },
  methods: {}
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
      justify-content: space-between;
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
          width: 20px;
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