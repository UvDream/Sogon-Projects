<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 11:43:39
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-18 15:08:43
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
          <section style="margin-left:20px">事件类型</section>
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
          <section style="margin-left:20px">
            <a-select
              style="width: 150px"
              @change="selectChange"
              :disabled="disabled"
              v-model="item.sjtype"
            >
              <a-select-option
                v-for="(item,index) in dataL"
                :key="index"
                :value="item.name"
              >{{item.name}}</a-select-option>
            </a-select>
          </section>
          <section></section>

          <!-- <section>
            <a-icon
              type="plus-circle"
              style="font-size:20px"
              v-if="greatList.length == index + 1 && disabled==false"
              @click="addList"
            />
          </section>-->
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">重要性通知</span>
      </div>
      <div class="dashboard-bottom-left-content-great" style="margin-left:10px">
        <section>标题</section>
        <section>接收时间</section>
        <section></section>
      </div>
      <div
        class="dashboard-bottom-left-content-great"
        v-for="(item,index) in zyxtz"
        :key="index"
        style="margin-left:10px"
      >
        <section>
          <a-input
            placeholder="数量"
            v-model="item.content"
            :disabled="disabled"
            style="width:150px"
          />
        </section>
        <section>
          <Time v-model="item.sjtime" :disabled="disabled" :format="'YYYY-MM-DD'" />
        </section>
        <section></section>
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
        <img src="../../assets/images/u363.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Time from "../../components/time/time.vue";
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkGreat } from "../../api/police-quality/great";
import { list } from "./index";
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
      zyxtz: [],
      dataL: list,
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

  computed: {
    // 顶部派出所
    policeStation: function() {
      return this.$store.state.topSelect;
    },
    // 顶部星期
    topDate: function() {
      return this.$store.state.topDate;
    }
  },
  watch: {
    data: function(val) {
      if (val == 1) {
      } else if (val == 0) {
        this.formdata.type = val;
        this.searchFunc(this.formdata);
      }
    },
    // 警局下拉框变化
    policeStation: function(val) {
      this.formdata.pcs = val;
      this.searchFunc(this.formdata);
    },
    // 日,周,月变化
    topDate: function(val) {
      let obj = {
        1: "日",
        2: "周",
        3: "月"
      };
      this.formdata.dateType = obj[val];
      this.searchFunc(this.formdata);
    }
  },
  mounted() {
    this.searchFunc(this.formdata);
  },
  methods: {
    searchFunc(data) {
      checkGreat(data).then(res => {
        if (res.code == 0) {
          console.log("查询重大警情");
          console.log(res);
          this.greatList = res.data.zdjq;
          this.zyxtz = res.data.zyxtz;
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
