<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:20:53
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:27:51
 * @Description: 顶部标题
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <TopTitle :title="title" v-model="closed" />
    <transition name="slide">
      <div class="more-desc" v-if="!closed">
        <Icon type="ios-alert-outline" style="color:red;" />
        职责说明:{{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
import TopTitle from "@/components/top-title/top-title";

export default {
  props: {
    title: { type: String },
    message: {
      type: String
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TopTitle
  },
  mounted() {
    this.closed = this.value;
  },
  watch: {
    closed(val) {
      this.$emit("input", val);
    }
  },
  data() {
    return {
      closed: false
    };
  }
};
</script>

<style scoped lang="less">
.more-desc {
  padding-left: 25px;
  font-size: 14px;
  color: #3f3f3f;
}
</style>
