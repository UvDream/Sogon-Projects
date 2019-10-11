<template>
  <div>
    <div class="dashboard-bottom-left-title">
      <a-icon
        type="file-text"
        style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
      />
      <span style="font-size:12px">最近{{ title }}重复报警电话TOP10</span>
    </div>
    <div class="dashboard-bottom-left-content">
      <div class="dashboard-bottom-left-content-four">
        <div
          class="dashboard-bottom-left-content-four-title"
          style="border-bottom: 1px solid #ccc;"
        >
          <section style="padding-left:15px">报警电话</section>
          <section>报警次数</section>
          <section style="padding-left:15px">报警电话</section>
          <section>报警次数</section>
        </div>
        <div class="dashboard-bottom-left-content-four-content">
          <div v-for="(item, index) in phoneList" :key="index">
            <section>
              <div>{{ index + 1 }}</div>
              <a-input
                placeholder="手机号码"
                v-model="item.phone"
                style="width:120px"
              />
            </section>
            <section>
              <a-input
                placeholder="数量"
                v-model="item.num"
                style="width:100px;margin-left:10px"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "24小时"
    },
    phoneList: {
      type: Array,
      default: function() {
        return [
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" },
          { phone: "", num: "" }
        ];
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./policeQuality.less");
</style>
