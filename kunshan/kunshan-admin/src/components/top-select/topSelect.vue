<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 08:47:45
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 11:11:27
 * @Description: 顶部下拉选择框
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-top">
    <a-select
      defaultValue="昆山市公安局"
      style="width: 250px;padding-left:14px"
      placeholder="请选择大屏"
      @change="selectChange"
    >
      <a-select-option
        v-for="(item,index) in policeStation"
        :key="index"
        :value="item.value"
      >{{item.value}}</a-select-option>
    </a-select>
    <div style="padding-right:14px" class="dashboard-top-week">
      <section @click="tabCLick(1)" :class="{ 'dashboard-top-week-click': tab === 1 }">日</section>
      <section @click="tabCLick(2)" :class="{ 'dashboard-top-week-click': tab === 2 }">周</section>
      <section @click="tabCLick(3)" :class="{ 'dashboard-top-week-click': tab === 3 }">月</section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectVal: "",
    tabVal: {
      default: 1
    }
  },
  data() {
    return {
      tab: 1,
      policeStation: [
        {
          value: "城北派出所"
        },
        {
          value: "同心派出所"
        },
        {
          value: "城西派出所"
        },
        {
          value: "兵希派出所"
        },
        {
          value: "长江派出所"
        },
        {
          value: "周市派出所"
        },
        {
          value: "锦溪派出所"
        },
        {
          value: "淀山湖派出所"
        },
        {
          value: "正仪派出所"
        },
        {
          value: "花桥派出所"
        },
        {
          value: "陆家派出所"
        },
        {
          value: "新镇派出所"
        },
        {
          value: "巴城派出所"
        },
        {
          value: "青阳派出所"
        },
        {
          value: "石浦派出所"
        },
        {
          value: "千灯派出所"
        },
        {
          value: "蓬朗派出所"
        },
        {
          value: "城中派出所"
        },
        {
          value: "张浦派出所"
        },
        {
          value: "中华园派出所"
        },
        {
          value: "吴淞江派出所"
        },
        {
          value: "周庄派出所"
        },
        {
          value: "综合保税区派出所"
        },
        {
          value: "科教园派出所"
        },
        {
          value: "曹安派出所"
        },
        {
          value: "昆山市公安局"
        }
      ]
    };
  },
  created() {
    this.tab = this.tabVal;
  },
  methods: {
    selectChange(value) {
      this.$emit("selectOk", value);
      this.$store.state.topSelect = value;
    },
    tabCLick(id) {
      this.tab = id;
      this.$emit("tabOk", id);
      this.$store.state.topDate = id;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../views/police-quality/policeQuality.less");
</style>