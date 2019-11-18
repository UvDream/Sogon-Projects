<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-23 17:50:12
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 13:43:15
 * @Description: 头部标题
 * @Email: UvDream@163.com
 -->

<template>
  <div class="title">
    <slot name="icon"></slot>
    {{ title }}
    <Button type="primary" :disabled="auth" @click="btnMakeSure()" v-if="makesure">确认康复</Button>
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
import { makesure } from "@/api/four/index";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: true
    },
    makesure: {
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
    // console.log("传入的值", this.value);
    this.status = this.value;
  },
  methods: {
    iconClick(bool) {
      this.status = bool;
      this.$emit("input", bool);
    },
    btnMakeSure() {
      makesure().then(res=>{
        // alert('sdf')
      })
    }
  }
};
</script>

<style></style>
