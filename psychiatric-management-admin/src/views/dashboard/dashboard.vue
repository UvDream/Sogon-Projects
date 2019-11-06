<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:52:31
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-06 17:29:27
 * @Description: 首页
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <Columnar />
    <div>
      <PieChart />
    </div>
  </div>
</template>

<script>
import Columnar from "./components/columnar";
import PieChart from "./components/pie-chart";
export default {
  components: {
    Columnar,
    PieChart
  }
};
</script>

<style scoped lang="less"></style>
