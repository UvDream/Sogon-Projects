<template>
  <a-menu
    mode="inline"
    :defaultSelectedKeys="[selectKey]"
    theme="dark"
    :style="{ height: '100%', borderRight: 0 }"
    @click="menusClick"
  >
    <a-menu-item v-for="(item, index) in menusList" :key="index">
      <a-icon :type="item.icon" />
      {{ item.name }}
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  data() {
    return {
      selectKey: 1,
      menusList: [
        {
          id: 1,
          name: "值班情况",
          icon: "folder-open"
        },
        {
          id: 2,
          name: "警情质态",
          icon: "folder-open"
        },
        {
          id: 3,
          name: "科技技防运行质态",
          icon: "folder-open"
        },
        {
          id: 4,
          name: "平台预警",
          icon: "folder-open"
        },
        {
          id: 5,
          name: "巡逻盘查质态",
          icon: "folder-open"
        },
        {
          id: 6,
          name: "现场勘查质态",
          icon: "folder-open"
        },
        {
          id: 7,
          name: "扫黑专项斗争情况",
          icon: "folder-open"
        },
        {
          id: 8,
          name: "一案一档一研判",
          icon: "folder-open"
        },
        {
          id: 9,
          name: "笔录制作质态",
          icon: "folder-open"
        },
        {
          id: 10,
          name: "入所人员管理质态",
          icon: "folder-open"
        },
        {
          id: 11,
          name: "研判分析",
          icon: "folder-open"
        },
        {
          id: 12,
          name: "其他",
          icon: "folder-open"
        }
      ],
      routes: [
        "/dashboard",
        "/policeQuality",
        "/technicalDefense",
        "/platformWarning",
        "/patrolCheck",
        "/siteSurvey",
        "/blackSweep",
        "/caseStudy",
        "/transcriptProduction",
        "/personnelManagement",
        "/analysis",
        "/other"
      ]
    };
  },
  created() {
    this.routes.forEach((item, index) => {
      if (this.$route.path == item) {
        this.selectKey = index;
      }
    });
  },
  methods: {
    menusClick(e) {
      console.log(e);
      this.$router.push(this.routes[e.key]);
    }
  }
};
</script>
<style lang="less" scoped></style>
