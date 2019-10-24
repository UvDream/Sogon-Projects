<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 10:24:15
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 14:10:10
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
            v-model="item.num"
            @checkChange="checkChangeFunc"
          ></MoreInput>
        </div>
      </div>
      <div class="dashboard-bottom-left-title"  v-show="formdata.pcs=='昆山市公安局'">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">警情数据质量</span>
      </div>
      <div class="table"  v-show="formdata.pcs=='昆山市公安局'">
        <div class="table-left">
          <div>/</div>
          <div>区域评估错误</div>
          <div>与类别不一致</div>
          <div>警情不完整</div>
          <div>物品未输入</div>
          <div>标注退回</div>
          <div>人员未输入</div>
          <div>类别不恰当</div>
        </div>
        <div class="table-right">
          <div v-for="(item,index) in  tableList" :key="index">
            <div style="padding: 0 5px;">{{item.name}}</div>
            <div style="padding: 0 5px;"><a-input v-model="item.qypgcw" :disabled="disabled" /></div>
            <div style="padding: 0 5px;"><a-input v-model="item.ylbbyz" :disabled="disabled" /></div>
            <div style="padding: 0 5px;"><a-input v-model="item.jqbws" :disabled="disabled" /></div>
            <div style="padding: 0 5px;"><a-input v-model="item.wpwsr" :disabled="disabled" /></div>
            <div style="padding: 0 5px;"><a-input v-model="item.bzth" :disabled="disabled" /></div>
            <div style="padding: 0 5px;"><a-input v-model="item.rywsr" :disabled="disabled" /></div>
            <div style="padding: 0 5px;"><a-input v-model="item.lbbqd" :disabled="disabled" /></div>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" @click="saveFunc">保存</a-button>
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
import { checkPolice, savePolice } from "../../api/police-quality/index";
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
        {
          name: "青阳",
          qypgcw: "12",
          ylbbyz: "13",
          jqbws: "22",
          wpwsr: "44",
          bzth: "55",
          rywsr: "33",
          lbbqd: "66"
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
    this.searchFunc(this.formdata);
  },
  methods: {
    saveFunc() {
      let obj = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.formdata.pcs,
        jqzt: this.numberList,
        jqzl: this.tableList
      };
      console.log(obj);
      savePolice(obj).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    radioChange(e) {},
    searchFunc(data) {
      checkPolice(data).then(res => {
        console.log("警情质态分析");
        console.log("警情质态分析", res);
        if (res.code == 0) {
          res.data.jqzt ? (this.data = res.data.jqzt[0].type) : "";
          this.tableList = res.data.jqzl;
          this.numberList = res.data.jqzt;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./policeQuality.less");
.table {
  display: flex;
  padding-left: 20px;
  &-left {
    border-top: 1px solid #cbcbcb;
    width: 113px;

    & > div {
      height: 40px;
      line-height: 40px;
      border-left: 1px solid #cbcbcb;
      border-bottom: 1px solid #cbcbcb;
    }
  }
  &-right {
    border-top: 1px solid #cbcbcb;
    border-right: 1px solid #cbcbcb;
    display: flex;

    & > div > div {
      width: 60px;
      height: 40px;
      line-height: 40px;
      border-left: 1px solid #cbcbcb;
      border-bottom: 1px solid #cbcbcb;
      text-align: center;
    }
  }
}
</style>
