<template>
  <div>
    <a-date-picker
      style="width: 180px"
      :defaultValue="moment(value, dateFormat)"
      showTime
      :format="format"
      placeholder="请选择时间"
      :disabled="disabled"
      @change="onChange"
      @ok="onOk"
    />
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    value: {
      default: ""
    },
    format: {
      type: String,
      default: "YYYY-MM-DD HH:mm:ss"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.dateFormat = "YYYY-MM-DD HH:mm:ss";
    return {};
  },
  mounted() {},
  methods: {
    moment,
    onChange(value, dateString) {
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
      this.$emit("input", dateString);
    },
    onOk(value) {
      console.log("onOk: ", value._i);
    }
  }
};
</script>

<style></style>
