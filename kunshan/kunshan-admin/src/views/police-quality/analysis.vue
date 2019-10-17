<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 10:24:15
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-17 16:19:08
 * @Description: 警情质态分析
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="警情质态分析" v-model="data" />
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <MoreInput
            v-for="(item,index) in numberList"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.val"
            @checkChange="checkChangeFunc"
          ></MoreInput>
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">警情数据质量</span>
      </div>
      <div class="dashboard-bottom-left-table">
        <!-- <div class="dashboard-bottom-left-table-left">
          <div>/</div>
          <div>区域评估错误</div>
          <div>与类别不一致</div>
          <div>警情不完整</div>
          <div>物品未输入</div>
          <div>标注退回</div>
          <div>人员未输入</div>
          <div>类别不恰当</div>
        </div>-->
        <div class="dashboard-bottom-left-table-right">
          <div>
            <section>/</section>
            <section>青阳</section>
            <section>花桥</section>
            <section>城北</section>
            <section>兵希</section>
            <section>其他</section>
          </div>
          <div v-for="(item, index) in tableList" :key="index">
            <section>{{item.name}}</section>
            <section>
              <a-input v-model="item.qy" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.hq" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.cb" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.bx" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.other" :disabled="disabled" />
            </section>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled" @click="saveFunc">保存</a-button>
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
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkPolice } from "../../api/police-quality/index";
import MoreInput from "../../components/more-input/index";
import { EmptyObjVal } from "../../util/util";
export default {
  mixins: [data],
  components: {
    Title,
    MoreInput
  },
  data() {
    return {
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
      radioVal: 1,
      numberList: [],
      tableList: [
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "与类别不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "警情不完整", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "物品未输入", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "标注退回", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "人员未输入", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "类别不恰当", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 }
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
        EmptyObjVal(this.numberList, "val");
        EmptyObjVal(this.tableList, "qy");
        EmptyObjVal(this.tableList, "hq");
        EmptyObjVal(this.tableList, "cb");
        EmptyObjVal(this.tableList, "bx");
        EmptyObjVal(this.tableList, "other");
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
    saveFunc() {},
    radioChange(e) {},
    searchFunc(data) {
      checkPolice(data).then(res => {
        if (res.code == 0) {
          this.tableList = res.data.jqsjzl;
          this.numberList = res.data.jqztfx;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./policeQuality.less");
</style>
