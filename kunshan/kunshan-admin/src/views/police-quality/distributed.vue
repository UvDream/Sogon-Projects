<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 15:46:06
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 14:02:41
 * @Description: 警情分布
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="警情分布" v-model="data"/>
      <div class="dashboard-bottom-left-title" v-show="formdata.pcs=='昆山市公安局'">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">派出所违法警情Top5</span>
      </div>
      <div class="dashboard-bottom-left-content-block" v-show="formdata.pcs=='昆山市公安局'">
        <MoreInput
          v-for="(item,index) in top"
          :key="index"
          :index="index"
          :disabled="disabled"
          :name="item.pcsname"
          v-model="item.num"
        />
      </div>
      <div class="dashboard-bottom-left-title" v-show="formdata.pcs=='昆山市公安局'">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px" v-show="formdata.pcs=='昆山市公安局'">违法警情分布</span>
      </div>
      <div class="dashboard-bottom-left-content-block">
        <MoreInput
          v-for="(item,index) in jqfb"
          :key="index"
          :index="index"
          :disabled="disabled"
          :name="item.name"
          v-model="item.num"
        />
      </div>

      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">
          本所共受理违法犯罪警情
          <a-input placeholder="数量" v-model="num" :disabled="disabled" style="width:80px" />起
        </span>
      </div>
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <MoreInput
            v-for="(item,index) in wfjq"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.num"
          />
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">有效报警分布</span>
      </div>
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <MoreInput
            v-for="(item,index) in slbj"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.num"
          />
        </div>
      </div>

      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" @click="saveFunc">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u516.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import MoreInput from "../../components/more-input/index";
import { checkDis, saveDis } from "../../api/police-quality/index";
export default {
  mixins: [data],
  components: {
    Title,
    MoreInput
  },
  data() {
    return {
      radioVal: 1,
      top: [],
      wfjq: [],
      jqfb: [],
      slbj: [],
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
      num: 0
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
      this.formdata.type = val;
      this.searchFunc(this.formdata);
    },
    // 警局下拉框变化
    policeStation: function(val) {
      this.formdata.pcs = val;
      this.formdata.type = 2;

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
    this.formdata.type = 2;
    this.formdata.pcs = "昆山市公安局";
    this.searchFunc(this.formdata);
  },
  methods: {
    saveFunc() {
      let obj = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.formdata.pcs,
        top: this.top,
        wfjq: this.wfjq,
        jqfb: this.jqfb,
        slbj: this.slbj
      };
      saveDis(obj).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkDis(data).then(res => {
        console.log("警情分布");
        console.log(res);
        if (res.code == 0) {
          res.data.top.type ? (this.data = res.data.top.type) : "";
          this.top = res.data.top;
          this.wfjq = res.data.wfjq;
          this.slbj = res.data.slbj;
          this.jqfb = res.data.jqfb;
          this.wfjq.forEach(item => {
            this.num = this.num + item.num;
          });
        }
      });
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
