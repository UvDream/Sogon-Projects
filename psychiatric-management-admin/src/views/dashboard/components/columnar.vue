<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:52:31
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-07 15:15:22
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
          机构: "公安",
          档案数量: 18.9
        },
        {
          name: "已办档案",
          机构: "民政",
          档案数量: 28.8
        },
        {
          name: "已办档案",
          机构: "卫生",
          档案数量: 39.3
        },
        {
          name: "待办档案",
          机构: "公安",
          档案数量: 12.4
        },
        {
          name: "待办档案",
          机构: "民政",
          档案数量: 23.2
        },
        {
          name: "待办档案",
          机构: "卫生",
          档案数量: 34.5
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
        .position("机构*档案数量")
        .color("name", function(val) {
          console.log(val);
          if (val == "已办档案") {
            return "#50c41a";
          }

          if (val == "待办档案") {
            return "#fb8d15";
          }
        })
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
