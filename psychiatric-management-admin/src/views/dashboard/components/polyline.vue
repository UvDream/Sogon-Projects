<!--
 * @Author: wangzhongjie
 * @Date: 2019-11-07 10:21:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-07 10:32:08
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
          year: "1991",
          value: 3
        },
        {
          year: "1992",
          value: 4
        },
        {
          year: "1993",
          value: 3.5
        },
        {
          year: "1994",
          value: 5
        },
        {
          year: "1995",
          value: 4.9
        },
        {
          year: "1996",
          value: 6
        },
        {
          year: "1997",
          value: 7
        },
        {
          year: "1998",
          value: 9
        },
        {
          year: "1999",
          value: 13
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
      chart.scale("year", {
        range: [0, 1]
      });
      chart.tooltip({
        crosshairs: {
          type: "line"
        }
      });
      chart.line().position("year*value");
      chart
        .point()
        .position("year*value")
        .size(4)
        .shape("circle")
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