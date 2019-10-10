<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 10:24:15
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-10 10:47:04
 * @Description: 警情质态分析
 * @Email: UvDream@163.com
 -->
 <template>
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
          <div>
            <section>问题总数:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>接警问题:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>处警问题数据:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>协警问题数:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">警情数据质量</span>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u325.png" alt />
      </div>
    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      radioVal: 1
    };
  },
  methods: {
    radioChange(e) {}
  }
};
</script>
 
 <style lang="less" scoped>
@import url("./policeQuality.less");
</style>
