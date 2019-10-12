<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 10:35:02
 * @Description: 值班情况
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <TopSelect :select-val="selectVal" :tab-val="tab" />

    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">
        <Title title="今日值班情况" v-model="data" />
        <div class="dashboard-bottom-left-content">
          <div class="dashboard-bottom-left-content-block">
            <section>周领导:</section>
            <section>
              <a-input placeholder="姓名" :disabled="disabled" style="margin:0 15px" />
              <a-input placeholder="号码" :disabled="disabled" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section></section>
            <section>
              <a-input placeholder="姓名" :disabled="disabled" style="margin:0 15px" />
              <a-input placeholder="号码" :disabled="disabled" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>总值班长:</section>
            <section>
              <a-input placeholder="姓名" :disabled="disabled" style="margin:0 15px" />
              <a-input placeholder="号码" :disabled="disabled" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>值班指挥长:</section>
            <section>
              <a-input placeholder="姓名" :disabled="disabled" style="margin:0 15px" />
              <a-input placeholder="号码" :disabled="disabled" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>联指长:</section>
            <section>
              <a-input placeholder="姓名" :disabled="disabled" style="margin:0 15px" />
              <a-input placeholder="号码" :disabled="disabled" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>值班力量:</section>
            <section>
              <span style="margin:0 12px">民警</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:100px;" />
              <span style="margin:0 13px">辅警</span>
              <a-input placeholder="人数" :disabled="disabled" style="width:100px;" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-btn">
            <a-button type="primary">保存</a-button>
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
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle.vue";
import TopSelect from "../../components/top-select/topSelect";
export default {
  components: {
    Title,
    TopSelect
  },
  data() {
    return {
      radioVal: 1,
      selectVal: "",
      tab: 1,
      data: 0,
      disabled: true
    };
  },
  watch: {
    data: function(val) {
      val == 0 ? (this.disabled = true) : (this.disabled = false);
    }
  },

  methods: {
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
    height: 420px;
    margin-top: 10px;
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
      &::before {
        content: "";
        position: absolute;
        top: 50px;
        width: 1px;
        height: 315px;
        background-color: #b3b3b3;
      }
    }
  }
}
</style>
