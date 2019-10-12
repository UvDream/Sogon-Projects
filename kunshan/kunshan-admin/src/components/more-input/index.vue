<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 09:30:47
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 11:20:20
 * @Description: 两个输入框并列
 * @Email: UvDream@163.com
 -->
<template>
  <div class="more">
    <div v-if="isCheck">
      <a-checkbox></a-checkbox>
    </div>
    <div class="more-name">{{name}}:</div>
    <a-input
      placeholder="数量"
      v-model="value"
      style="width:75px"
      :disabled="disabled"
      @change="inputChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: "",
    value: ""
  },
  methods: {
    inputChange() {
      this.$emit("input", this.value);
    }
  }
};
</script>

<style lang="less" scoped>
.more {
  width: 50%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  &-name {
    width: 100px;
    text-align: right;
    color: #999;
    font-size: 12px;
  }
}
</style>