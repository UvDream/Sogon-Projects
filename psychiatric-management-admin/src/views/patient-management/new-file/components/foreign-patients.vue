<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-23 17:37:33
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 18:04:26
 * @Description: 外地病患
 * @Email: UvDream@163.com
 -->
<template>
  <div class="foreign">
    <TopTitle :title="'外地患者'" v-model="closed" />
  </div>
</template>

<script>
import TopTitle from "../../../../components/top-title/top-title";
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      closed: false
    };
  }
};
</script>

<style scoped lang="less">
.foreign {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 20px;
  min-height: 200px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
}
</style>