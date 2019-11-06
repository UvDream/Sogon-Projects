<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:52:31
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-06 17:30:51
 * @Description: 柱状图
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <div id="c1"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initComponent();
  },
  data() {
    return {
      chart: null,
      data: [
        { genre: "1号", sold: 275 },
        { genre: "2号", sold: 115 },
        { genre: "3号", sold: 120 },
        { genre: "4号", sold: 350 },
        { genre: "5号", sold: 150 }
      ]
    };
  },
  methods: {
    initComponent() {
      const chart = new G2.Chart({
        container: "c1",
        width: 600,
        height: 300
      });
      chart.source(this.data);
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      this.chart = chart;
      this.chart.render();
    }
  }
};
</script>

<style scoped lang="less"></style>
