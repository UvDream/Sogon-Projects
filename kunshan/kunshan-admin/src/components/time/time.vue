<template>
  <div>
    <a-date-picker
      style="width: 165px"
      :defaultValue="moment(value, dateFormat)"
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="请选择时间"
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
