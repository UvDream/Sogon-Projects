<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-23 17:50:12
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 18:03:27
 * @Description: 头部标题
 * @Email: UvDream@163.com
 -->

<template>
  <div class="title">
    {{ title }}
    <Icon
      type="ios-arrow-dropup-circle"
      size="60px"
      v-if="!status"
      class="icon"
      @click="iconClick(true)"
    />
    <Icon
      type="ios-arrow-dropdown-circle"
      size="60px"
      v-if="status"
      class="icon"
      @click="iconClick(false)"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      status: false
    };
  },
  mounted() {
    this.status = this.value;
  },
  methods: {
    iconClick(bool) {
      this.status = bool;
      this.$emit("input", bool);
    }
  }
};
</script>

<style></style>
