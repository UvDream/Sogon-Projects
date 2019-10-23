<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 17:25:49
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 11:20:57
 * @Description: 小头部
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom-left-title">
    <a-icon type="file-text" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
    <span>{{ title }}</span>
    <a-checkbox
      style="margin-left:10px"
      v-if="isCheck"
      :checked="checkAll"
      :indeterminate="indeterminate"
      @change="checkCheck"
    >全选</a-checkbox>
    <a-radio-group @change="radioChange" v-model="radioVal" style="margin-left:40px;">
      <a-radio :value="0">真实数据</a-radio>
      <a-radio :value="1">人工数据</a-radio>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: false
    },
    title: {
      default: "异常报警分析"
    },
    value: {
      type: Number,
      default: 0
    },
    checkStatus: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      radioVal: 1,
      checkAll: false,
      indeterminate: false
    };
  },
  watch: {
    value: function(val) {
      this.radioVal = val;
    },
    checkStatus: function(newVal) {
      if (newVal == 0) {
        // 未选
        this.checkAll = false;
      } else if (newVal == 1) {
        // 部分选中
        this.indeterminate = true;
      } else {
        // 全选
        this.checkAll = true;
      }
    }
  },
  mounted() {
    this.radioVal = this.value;
    if (this.checkStatus == 0) {
      this.checkAll = false;
    } else if (this.checkStatus == 1) {
      this.indeterminate = true;
    } else {
      this.checkAll = true;
    }
  },
  methods: {
    radioChange(e) {
      this.$emit("input", this.radioVal);
    },
    checkCheck(e) {
      this.checkAll = !this.checkAll;
      this.$emit("checkStatus", this.checkAll);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../views/police-quality/policeQuality.less");
</style>
