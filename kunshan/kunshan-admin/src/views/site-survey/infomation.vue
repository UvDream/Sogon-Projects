<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-11 15:55:15
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-21 17:38:22
 * @Description: 社会面信息采集情况
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title 
      title="社会面信息采集情况"
      v-model="data"
      ></Title>
      <div class="table">
        <div class="table-row">
          <section style="border-top: solid 1px #cbcbcb;color:#999;">类型\派出所</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">上传表单数</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">通过审核项</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">涉及采集项</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">上报总数</section>
        </div>
        <div class="table-row" v-for="(item,index) in tableListSic" :key="index">
          <section>
            <span v-model="item.pcsname">{{item.pcsname}}</span>
          </section>
          <section>
            <a-input
              placeholder="数值"
              :disabled="disabled"
              v-model="item.scbdsnum"
            />
          </section>
          <section>
            <a-input
              placeholder="数值"
              :disabled="disabled"
              v-model="item.tgshxnum"
            />
          </section>
          <section>
            <a-input
              placeholder="数值"
              :disabled="disabled"
              v-model="item.sjcjxnum"
            />
          </section>
          <section>
            <a-input
              placeholder="数值"
              :disabled="disabled"
              v-model="item.sbzsnum"
            />
          </section>
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">人像核验信息采集</span>
      </div>
      <div class="table table2">
        <div class="table-row">
          <section style="border-top: solid 1px #cbcbcb;color:#999;">类型\派出所</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">安装认证店位数</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">照片采集量</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">采集人数</section>
        </div>
        <div class="table-row" v-for="(item,index) in tableListPic" :key="index">
          <section>
            <span v-model="item.pcsname">{{item.pcsname}}</span>
          </section>
          <section>
            <a-input
              placeholder="数值"
              :disabled="disabled"
              v-model="item.azrzdwsnum"
            />
          </section>
          <section>
            <a-input
              placeholder="数值"
              :disabled="disabled"
              v-model="item.zpcjlnum"
            />
          </section>
          <section>
            <a-input
              placeholder="数值"
              :disabled="disabled"
              v-model="item.cjrsnum"
            />
          </section>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled" @click="saveFunc">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-center"></div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon
          type="exception"
          style="margin:0 10px;font-size:22px;position:relative;top:3px;"
        />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1717.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkDataSic, saveListSic, checkDataPic, saveListPic } from "../../api/onsite-quality/infomation-collect";
import axios from "axios";
 
import { EmptyObjVal, EmptyArray } from "../../util/util";
export default {
  mixins: [data],
  components: {
    Title
  },
  data() {
    return {
      radioVal: 1,
      tableListSic: [],
      tableListPic: [],
      formdata: {
        type: 2,
        time: "日",
        pcs: this.$store.state.topSelect
      }
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
        // EmptyObjVal(this.numberList, "num");
        // EmptyObjVal(this.tableList, "pcrynum");
        // EmptyObjVal(this.tableList, "pczdrynum");
      } else if (val == 0) {
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
      this.formdata.time = obj[val];
      this.searchFunc(this.formdata);
    }
  },
  mounted() {
    this.searchFunc(this.formdata);
  },
  methods: {
    saveFunc() {
      let that = this;
      let objPic = {
        type: this.data,
        pcs: this.policeStation,
        peopleCardTestInformationCollectList:this.tableListPic
      };
      let objSic = {
        type: this.data,
        time: this.formdata.time,
        societyInformationCollectList: this.tableListSic
      };
      axios.all([saveListSic(objSic),saveListPic(objPic)])
        .then(axios.spread(function (acct, perms) {
          if (acct.code == 0 && perms.code == 0) {
            that.$message.success("保存成功!");
          }
        }));
    },
    searchFunc(data) {
      checkDataSic(data).then(res => {
        this.tableListSic = res.data.societyInformationCollectList;
      });
      checkDataPic(data).then(res => {
        this.tableListPic = res.data.peopleCardTestInformationCollectList;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../police-quality/policeQuality");
.control {
  display: flex;
  flex-wrap: wrap;
}
.table {
  margin: 0 20px;
  &-row {
    display: flex;
    & > section{
      text-align: center;
      width: 20%;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #cbcbcb;
      border-left: solid 1px #cbcbcb;
      & > input{
        width:80%;
      }
    }
    & > section:last-child {
      border-right: solid 1px #cbcbcb;
    }
  }
}
.table2{
  section{
    width: 25%;
  }
}
</style>
