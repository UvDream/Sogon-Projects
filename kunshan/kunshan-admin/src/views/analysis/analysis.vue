<!--
 * @Author: xingmiao
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: xingmiao
 * @LastEditTime: 2019-10-11 11:53:54
 * @Description: 研判分析
 * @Email: arvin1234567890@foxmail.com
 -->
<template>
  <div class="platform" style="padding-bottom:20px">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <!-- 1 -->
    <pageBox1 />
    <!-- 2 -->
    <pageBox2 />
    <pageBox3 />
    <pageBox4 />
    <pageBox5 />
    <pageBox6 />
    <pageBox7 />
    <pageBox8 />
    <pageBox9 />
    <pageBox10 />
    <pageBox11 />
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle.vue";
// 最近半年电信
import PageBox1 from "./pageBox1";
// 最近30天案发
import PageBox2 from "./pageBox2";
import PageBox3 from "./pageBox3";
import PageBox4 from "./pageBox4";
import PageBox5 from "./pageBox5";
import PageBox6 from "./pageBox6";
import PageBox7 from "./pageBox7";
import PageBox8 from "./pageBox8";
import PageBox9 from "./pageBox9";
import PageBox10 from "./pageBox10";
import PageBox11 from "./pageBox11";
export default {
  components: {
    TopSelect,
    Title,
    PageBox1,
    PageBox2,
    PageBox3,
    PageBox4,
    PageBox5,
    PageBox6,
    PageBox7,
    PageBox8,
    PageBox9,
    PageBox10,
    PageBox11,
  },
  data() {
    return {
      selectVal: "",
      tab: 1
    };
  }
};
</script>

<style lang="less" scopes>
@import url("../police-quality/policeQuality");
</style>
