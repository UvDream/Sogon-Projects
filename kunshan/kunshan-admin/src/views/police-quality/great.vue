<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 11:43:39
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-10 17:37:33
 * @Description: 重大警情
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="重大警情" />
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-great">
          <section>事件时间</section>
          <section>事件类型</section>
          <section>所属派出所</section>
          <section>详情</section>
          <section></section>
        </div>
        <div
          class="dashboard-bottom-left-content-great"
          v-for="(item, index) in greatList"
          :key="index"
        >
          <section>
            <Time v-model="item.time" />
          </section>
          <section>
            <a-select
              style="width: 160px"
              @change="selectChange"
              v-model="item.type"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
          </section>
          <section>
            <a-input
              placeholder="所属派出所"
              style="width: 160px"
              v-model="item.from"
            />
          </section>
          <section>
            <a-input
              placeholder="详情"
              style="width: 160px"
              v-model="item.more"
            />
          </section>
          <section>
            <a-icon
              type="plus-circle"
              style="font-size:20px"
              v-if="greatList.length == index + 1"
              @click="addList"
            />
          </section>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" @click="saveFunc">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon
          type="exception"
          style="margin:0 10px;font-size:22px;position:relative;top:3px;"
        />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u325.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Time from "../../components/time/time.vue";
import Title from "../../components/two-titlw/twoTitle";

export default {
  components: {
    Time,
    Title
  },
  data() {
    this.dateFormat = "YYYY-MM-DD";
    return {
      radioVal: 1,
      greatList: [
        {
          time: "2019-10-12 10:10:10",
          type: "",
          form: "",
          more: ""
        }
      ]
    };
  },
  methods: {
    addList() {
      let list = { time: new Date(), type: "", form: "", more: "" };
      this.greatList.push(list);
    },
    radioChange(e) {},
    selectChange(e) {},
    saveFunc() {
      console.log(this.greatList);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./policeQuality.less");

.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 80px;
    width: 1px;
    height: 80%;
    background-color: #b3b3b3;
  }
}
</style>
