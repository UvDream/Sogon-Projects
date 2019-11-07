<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:52:31
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-07 11:37:29
 * @Description: 柱状图
 * @Email: UvDream@163.com
 -->
<template>
  <div id="c1"></div>
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
        {
          name: "已办档案",
          月份: "公安",
          月均降雨量: 18.9
        },
        {
          name: "已办档案",
          月份: "民政",
          月均降雨量: 28.8
        },
        {
          name: "已办档案",
          月份: "卫生",
          月均降雨量: 39.3
        },
        {
          name: "待办档案",
          月份: "公安",
          月均降雨量: 12.4
        },
        {
          name: "待办档案",
          月份: "民政",
          月均降雨量: 23.2
        },
        {
          name: "待办档案",
          月份: "卫生",
          月均降雨量: 34.5
        }
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
      // ------
      chart
        .interval()
        .position("月份*月均降雨量")
        .color("name")
        .adjust([
          {
            type: "dodge",
            marginRatio: 1 / 32
          }
        ]);
      // ---------
      this.chart = chart;
      this.chart.render();
    }
  }
};
</script>

<style scoped lang="less"></style>
