<template>
  <div>
    <a-date-picker
      style="width: 180px"
      :defaultValue="moment(value, dateFormat)"
      showTime
      format="YYYY-MM-DD HH:mm:ss"
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.dateFormat = "YYYY-MM-DD HH:mm:ss";
    return {};
  },
  mounted() {
    console.log(this.value);
  },
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
