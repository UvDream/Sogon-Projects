<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-10 10:45:46
 * @Description: 值班情况
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <div class="dashboard-top">
      <a-select style="width: 250px;padding-left:14px" placeholder="请选择大屏" @change="selectChange">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <div style="padding-right:14px" class="dashboard-top-week">
        <section @click="tabCLick(1)" :class="{'dashboard-top-week-click':tab===1}">日</section>
        <section @click="tabCLick(2)" :class="{'dashboard-top-week-click':tab===2}">周</section>
        <section @click="tabCLick(3)" :class="{'dashboard-top-week-click':tab===3}">月</section>
      </div>
    </div>
    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">
        <div class="dashboard-bottom-left-title">
          <a-icon type="file-text" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
          <span>今日值班情况</span>
          <a-radio-group @change="radioChange" v-model="radioVal" style="margin-left:40px;">
            <a-radio :value="1">真实数据</a-radio>
            <a-radio :value="2">人工数据</a-radio>
          </a-radio-group>
        </div>
        <div class="dashboard-bottom-left-content">
          <div class="dashboard-bottom-left-content-block">
            <section>周领导:</section>
            <section>
              <a-input placeholder="姓名" style="margin:0 15px" />
              <a-input placeholder="号码" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section></section>
            <section>
              <a-input placeholder="姓名" style="margin:0 15px" />
              <a-input placeholder="号码" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>总值班长:</section>
            <section>
              <a-input placeholder="姓名" style="margin:0 15px" />
              <a-input placeholder="号码" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>值班指挥长:</section>
            <section>
              <a-input placeholder="姓名" style="margin:0 15px" />
              <a-input placeholder="号码" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>联指长:</section>
            <section>
              <a-input placeholder="姓名" style="margin:0 15px" />
              <a-input placeholder="号码" />
            </section>
          </div>
          <div class="dashboard-bottom-left-content-block">
            <section>值班力量:</section>
            <section>
              <span style="margin:0 12px">民警</span>
              <a-input placeholder="人数" style="width:100px;" />
              <span style="margin:0 13px">辅警</span>
              <a-input placeholder="人数" style="width:100px;" />
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
export default {
  data() {
    return {
      radioVal: 1,
      selectVal: "",
      tab: 1
    };
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