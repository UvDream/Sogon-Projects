<!--
 * @Author: wangzhongjie
 * @Date: 2019-11-07 10:21:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-07 19:03:57
 * @Description: 病患档案总数变化趋势
 * @Email: UvDream@163.com
 -->
<template>
  <div id="bh"></div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      data: [
        {
          month: "1月",
          value: 3
        },
        {
          month: "2月",
          value: 4
        },
        {
          month: "3月",
          value: 3.5
        },
        {
          month: "4月",
          value: 5
        },
        {
          month: "5月",
          value: 4.9
        },
        {
          month: "6月",
          value: 6
        },
        {
          month: "7月",
          value: 7
        },
        {
          month: "8月",
          value: 9
        },
        {
          month: "9月",
          value: 13
        },
        {
          month: "10月",
          value: 1
        },
        {
          month: "11月",
          value: 5
        },
        {
          month: "12月",
          value: 2
        }
      ]
    };
  },
  mounted() {
    this.initComponent();
  },
  methods: {
    initComponent() {
      const chart = new G2.Chart({
        container: "bh",
        width: 550,
        height: 420
      });
      chart.source(this.data);
      //   -----
      chart.scale("value", {
        min: 0
      });
      chart.scale("month", {
        range: [0, 1]
      });
      chart.tooltip({
        crosshairs: {
          type: "line"
        }
      });
      chart
        .line()
        .position("month*value")
        .color("#86c7c9");
      chart
        .point()
        .position("month*value")
        .size(4)
        .shape("circle")
        .color("#86c7c9")
        .style({
          stroke: "#fff",
          lineWidth: 1
        });
      //   ------
      this.chart = chart;
      this.chart.render();
    }
  }
};
</script>

<style>
</style>