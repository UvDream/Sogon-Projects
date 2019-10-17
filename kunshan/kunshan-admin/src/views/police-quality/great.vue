<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 11:43:39
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-17 14:21:59
 * @Description: 重大警情
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="重大警情" v-model="data" />
      <div class="dashboard-bottom-left-content" style="margin-left:10px">
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
            <Time v-model="item.sjtime" :disabled="disabled" :format="'YYYY-MM-DD'" />
          </section>
          <section>
            <a-select
              style="width: 120px"
              @change="selectChange"
              :disabled="disabled"
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
              style="width: 120px"
              :disabled="disabled"
              v-model="item.pcs"
            />
          </section>
          <section>
            <a-input
              placeholder="详情"
              style="width: 120px"
              :disabled="disabled"
              v-model="item.content"
            />
          </section>
          <section>
            <a-icon
              type="plus-circle"
              style="font-size:20px"
              v-if="greatList.length == index + 1 && disabled==false"
              @click="addList"
            />
          </section>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" @click="saveFunc" :disabled="disabled">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-center"></div>

    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
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
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkGreat } from "../../api/police-quality/great";
export default {
  mixins: [data],
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
          sjtime: "2019-10-12",
          type: "",
          form: "",
          more: ""
        }
      ]
    };
  },
  mounted() {
    this.searchFunc(this.formdata);
  },
  methods: {
    searchFunc(data) {
      checkGreat(data).then(res => {
        if (res.code == 0) {
          this.greatList = res.data.zdjqxq;
        }
      });
    },
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
</style>
