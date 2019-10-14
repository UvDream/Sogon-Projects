<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 09:30:47
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-14 16:08:33
 * @Description: 两个输入框并列
 * @Email: UvDream@163.com
 -->
<template>
  <div class="more">
    <div v-if="isCheck">
      <a-checkbox :checked="check" @change="checkChange"></a-checkbox>
    </div>
    <div class="more-name">{{name}}:</div>
    <a-input
      placeholder="数量"
      v-model="inputVal"
      style="width:75px"
      :disabled="disabled"
      @change="inputChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    index: "",
    checkStatus: {
      type: Boolean,
      default: false
    },
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
  data() {
    return {
      inputVal: "",
      check: true
    };
  },
  watch: {
    value: function(val) {
      this.inputVal = val;
    },
    checkStatus: {
      handler(newVal, oldVal) {
        this.check = newVal;
      }
    }
  },
  mounted() {
    this.inputVal = this.value;
    this.check = this.checkStatus;
  },
  methods: {
    checkChange() {
      this.check = !this.check;
      this.$emit("checkChange", this.check, this.index);
    },
    inputChange() {
      this.$emit("input", this.inputVal);
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