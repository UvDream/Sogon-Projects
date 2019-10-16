<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-16 14:26:08
 * @Description: 值班情况
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">
        <Title title="市局今日值班情况" v-model="data" />
        <div class="dashboard-bottom-left-content">
          <div
            class="dashboard-bottom-left-content-block"
            v-for="(item,index) in list.jld"
            :key="'info1-'+index"
          >
            <section v-if="index+1==list.jld.length">局领导:</section>
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
            <section v-if="index+1==list.zzbz.length">总值班长:</section>
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
            <section>值班指挥长:</section>
            <section>
              <a-input placeholder="姓名" :disabled="disabled" style="margin:0 15px" />
              <a-input placeholder="号码" :disabled="disabled" />
            </section>
          </div>
          <div
            class="dashboard-bottom-left-content-block"
            v-for="(item,index) in list.lzz"
            :key="index"
          >
            <section v-if="index+1==list.lzz.length">联指长:</section>
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
            <section>值班力量:</section>
            <section>
              <span style="margin:0 12px">民&#x3000;&#x3000;警</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:80px;" />
              <span style="margin:0 13px">辅&#x3000;&#x3000;警</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:80px;" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section></section>
            <section>
              <span style="margin:0 12px">武装警车</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:80px;" />
              <span style="margin:0 13px">警&#x3000;&#x3000;车</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:80px;" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section></section>
            <section>
              <span style="margin:0 12px">武&#x3000;&#x3000;器</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:80px;" />
              <span style="margin:0 13px">备勤力量</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:80px;" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-btn">
            <a-button type="primary" :disabled="disabled">保存</a-button>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-right">
        <div class="dashboard-bottom-right-title">
          <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
          <span>可视化样例</span>
        </div>
        <div class="dashboard-bottom-right-content">
          <img src="../../assets/images/u186.png" alt />
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle.vue";
import TopSelect from "../../components/top-select/topSelect";
import data from "../../mixin/data";
import Bottom from "./bottom";
import { checkOnDuty } from "../../api/on-duty/index";
export default {
  components: {
    Title,
    TopSelect,
    Bottom
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
      list: {}
    };
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
      checkOnDuty(data).then(res => {
        console.log(res);
        this.list = res.data;
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
.dashboard {
  &-top {
    width: 100%;
    height: 40px;
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px rgba(77, 119, 158, 0.2);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    &-week {
      &-click {
        background-color: #fff !important;
        color: #b3b3b3 !important;
      }
      display: flex;
      & > section {
        &:hover {
          cursor: pointer;
        }
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #b3b3b3;
        background-color: #b3b3b3;
        color: #fff;
      }
    }
  }
  &-bottom {
    border-radius: 4px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px rgba(77, 119, 158, 0.2);
    margin-top: 10px;
    padding-bottom: 20px;
    display: flex;
    &-left {
      width: 50%;
      height: 100%;
      &-title {
        height: 45px;
        line-height: 45px;
        & > span {
          font-size: 16px;
          color: #333;
        }
      }
      &-content {
        &-btn {
          padding-left: 210px;
          margin-top: 20px;
        }
        &-block {
          display: flex;
          align-items: center;
          margin-top: 15px;
          color: #999999;

          .ant-input {
            width: 138px;
          }
          & > section:nth-child(1) {
            width: 130px;
            text-align: right;
          }
          & > section:nth-child(2) {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    &-right {
      width: 50%;
      height: 100%;
      position: relative;
      &-title {
        height: 45px;
        line-height: 45px;
        & > span {
          font-size: 16px;
          color: #333;
        }
      }
      &-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
      }
      // &::before {
      //   content: "";
      //   position: absolute;
      //   top: 50px;
      //   width: 1px;
      //   height: 315px;
      //   background-color: #b3b3b3;
      // }
    }
  }
}
</style>
