<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-11 15:55:15
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-21 17:39:22
 * @Description: 现场勘测质态
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" style="height:100%">
    <div class="dashboard-bottom-left">
      <Title 
      title="现场勘验质态" 
      v-model="data"
      />
      <div class="control" style="margin-left:10px">
        <MoreInput
          v-for="(item,index) in numberList"
          :key="index"
          :index="index"
          :disabled="disabled"
          :name="item.name"
          v-model="item.num"
        ></MoreInput>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" @click="saveFunc">保存</a-button>
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
        <img src="../../assets/images/u1715.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import { checkData, saveList } from "../../api/onsite-quality/index";
import axios from "axios";
 
import { EmptyObjVal, EmptyArray } from "../../util/util";
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
        pcs: "昆山市公安局"
      },
      obj: {
        1: "日",
        2: "周",
        3: "月"
      },
      numberList: [],
    };
  },
  computed: {
    policeStation: function() {
      return this.$store.state.topSelect
    },
    topDate: function() {
      return this.$store.state.topDate
    }
  },
  watch: {
    data:function(val) {
      this.formdata.type = val;
      this.searchFunc(this.formdata);
    },
    policeStation: function(val) {
      this.formdata.pcs = val;
      this.formdata.type = 2;
      this.searchFunc(this.formdata);
    },
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
    // 保存
    saveFunc() {
      let obj = {
        type: this.data,
        dateType: this.obj[this.topDate],
        pcs: this.policeStation,
        kyxczt: this.numberList
      };
      saveList(obj).then(res => {
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    // 查询现场勘验质态
    searchFunc(data) {
      checkData(data).then(res => {
        this.numberList = res.data.kyxczt;
        this.data = res.data.kyxczt[0].type;
      });
    },
  }
};
</script>

<style lang="less" scoped>
@import url("../police-quality/policeQuality");
.control {
  display: flex;
  flex-wrap: wrap;
}
</style>
