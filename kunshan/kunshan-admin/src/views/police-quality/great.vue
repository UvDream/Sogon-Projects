<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 11:43:39
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-06 09:52:03
 * @Description: 重大警情
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="重大警情" v-model="data" />
      <div
        class="dashboard-bottom-left-content"
        style="margin-left:10px;height:400px; overflow-y: scroll;"
      >
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
        </div>
        <!-- ---- -->
        <div class="dashboard-bottom-left-content-great" v-show="formdata.pcs=='昆山市公安局'">
          <section>派出所</section>
          <section>详情</section>
          <section></section>
        </div>
        <div
          v-show="formdata.pcs=='昆山市公安局'"
          class="dashboard-bottom-left-content-great"
          v-for="(item,index) in greatList"
          :key="index"
        >
          <section>
            <a-input placeholder :disabled="disabled" v-model="item.pcs" />
          </section>
          <section>
            <a-input placeholder :disabled="disabled" v-model="item.jqxq" />
          </section>
          <section></section>
        </div>
      </div>
      <div class="dashboard-bottom-left-title" v-show="formdata.pcs!=='昆山市公安局'">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">重要性通知</span>
      </div>
      <div
        class="dashboard-bottom-left-content-great"
        style="margin-left:10px"
        v-show="formdata.pcs!=='昆山市公安局'"
      >
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
        <img src="../../assets/images/u363.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Time from "../../components/time/time.vue";
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkGreat, saveGreat } from "../../api/police-quality/great";
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
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
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
      this.formdata.type = val;
      this.searchFunc(this.formdata);
    },
    // 警局下拉框变化
    policeStation: function(val) {
      this.formdata.pcs = val;
      this.formdata.type = 2;

      this.searchFunc(this.formdata);
    }
    // 日,周,月变化
    // topDate: function(val) {
    //   let obj = {
    //     1: "日",
    //     2: "周",
    //     3: "月"
    //   };
    //   this.formdata.dateType = obj[val];
    //   this.searchFunc(this.formdata);
    // }
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
        zdjq: this.greatList,
        zyxtz: this.zyxtz
      };
      saveGreat(obj).then(res => {
        console.log("重大警情保存");
        console.log(res);
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkGreat(data).then(res => {
        if (res.code == 0) {
          console.log("查询重大警情");
          console.log(res);
          this.greatList = res.data.zdjq;
          res.data.zdjq[0] ? (this.data = res.data.zdjq[0].type) : "";
          this.zyxtz = res.data.zyxtz;
        }
      });
    },
    addList() {
      let list = { time: new Date(), type: "", form: "", more: "" };
      this.greatList.push(list);
    },
    radioChange(e) {},
    selectChange(e) {}
  }
};
</script>
<style lang="less" scoped>
@import url("./policeQuality.less");
</style>
