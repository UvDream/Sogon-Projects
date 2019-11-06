<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-06 09:38:11
 * @Description: 值班情况
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">
        <Title title="派出所今日值班情况" v-model="data" />
        <div class="dashboard-bottom-left-content">
          <div
            class="dashboard-bottom-left-content-block"
            v-for="(item,index) in list.jld"
            :key="'info1-'+index"
          >
            <section>
              <span v-show="index+1!=list.jld.length|| list.jld.length==1 ">值班局领导:</span>
            </section>
            <section>
              <a-input
                placeholder="姓名"
                v-model="item.name"
                :disabled="disabled"
                style="margin:0 15px"
              />
              <a-input placeholder="号码" v-model="item.phone" :disabled="disabled" />
            </section>
          </div>

          <div
            class="dashboard-bottom-left-content-block"
            v-for="(item,index) in list.zzbz"
            :key="'info-'+index"
          >
            <section>
              <span v-if="index+1!=list.zzbz.length|| list.zzbz.length==1 ">总值班长:</span>
            </section>
            <section>
              <a-input
                placeholder="姓名"
                v-model="item.name"
                :disabled="disabled"
                style="margin:0 15px"
              />
              <a-input placeholder="号码" v-model="item.phone" :disabled="disabled" />
            </section>
          </div>

          <div
            class="dashboard-bottom-left-content-block"
            v-for="(item,index) in list.zbsld"
            :key="'info1-'+index"
          >
            <section>
              <span>值班所领导:</span>
            </section>
            <section>
              <a-input
                placeholder="姓名"
                v-model="item.name"
                :disabled="disabled"
                style="margin:0 15px"
              />
              <a-input placeholder="号码" v-model="item.phone" :disabled="disabled" />
            </section>
          </div>
          <div
            class="dashboard-bottom-left-content-block"
            v-for="(item,index) in list.zbmj"
            :key="index"
          >
            <section v-if="index == 0">值班民警:</section>
            <section v-else></section>
            <section>
              <a-input
                placeholder="姓名"
                v-model="item.name"
                :disabled="disabled"
                style="margin:0 15px"
              />
              <a-input placeholder="号码" v-model="item.phone" :disabled="disabled" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>当日勤务力量:</section>
            <section>
              <span style="margin:0 12px">民&#x3000;&#x3000;警</span>
              <a-input
                placeholder="人数"
                v-model="list.drqwll.mj"
                :disabled="disabled"
                style="width:80px;"
              />
              <span style="margin:0 13px">辅&#x3000;&#x3000;警</span>

              <a-input
                placeholder="人数"
                v-model="list.drqwll.fj"
                :disabled="disabled"
                style="width:80px;"
              />
            </section>
          </div>

          <div class="dashboard-bottom-left-content-block">
            <section>备勤力量:</section>
            <section>
              <span style="margin:0 12px">民&#x3000;&#x3000;警</span>
              <a-input
                placeholder="人数"
                v-model="list.bqll.mj"
                :disabled="disabled"
                style="width:80px;"
              />
              <span style="margin:0 13px">辅&#x3000;&#x3000;警</span>
              <a-input
                placeholder="人数"
                v-model="list.bqll.fj"
                :disabled="disabled"
                style="width:80px;"
              />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-btn">
            <a-button type="primary" @click="saveFunc">保存</a-button>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-center"></div>

      <div class="dashboard-bottom-right">
        <div class="dashboard-bottom-right-title">
          <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
          <span>可视化样例</span>
        </div>
        <div class="dashboard-bottom-right-content">
          <img src="../../assets/images/u233.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle.vue";
import TopSelect from "../../components/top-select/topSelect";
import data from "../../mixin/data";
import { checkOnDuty } from "../../api/on-duty/index";
export default {
  components: {
    Title,
    TopSelect
  },
  mixins: [data],
  data() {
    return {
      radioVal: 1,
      selectVal: "",
      tab: 1,
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
      list: {
        zbll: {},
        zzbz: [
          {
            name: "李四",
            phone: "333",
            type: 0
          }
        ],
        bqll: {
          mj: 0,
          fj: 31,
          type: 0
        },
        jld: [
          {
            name: "李康",
            phone: "133",
            type: 0
          },
          {
            name: "流量",
            phone: "123",
            type: 0
          }
        ],
        drqwll: {
          mj: 0,
          fj: 45,
          type: 0
        },
        zbsld: [
          {
            name: "侯杰",
            phone: "341",
            type: 0
          }
        ],
        zbmj: [
          {
            name: "程辉",
            phone: "94",
            type: 0
          }
        ],
        lzz: []
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
      this.formdata.type = val;
      this.searchFunc(this.formdata);
    },
    // 警局下拉框变化
    policeStation: function(val) {
      this.formdata.pcs = val;
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
        pcs: this.formdata.pcs
      };
      Object.assign(obj, this.list);
      saveDuty(data).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkOnDuty(data).then(res => {
        console.log("底部", res);
        // this.data = res.data.bqll.type;
        this.list = res.data;
        if (res.data.jld.length > 0) {
          this.data = res.data.jld[0].type;
        }
      });
    },
    radioChange(e) {},
    selectChange(value) {
      this.selectVal = value;
      console.log(this.selectVal);
      console.log(value);
    },
    tabCLick(id) {
      this.tab = id;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./index.less");
@import url("../police-quality/policeQuality");
</style>
