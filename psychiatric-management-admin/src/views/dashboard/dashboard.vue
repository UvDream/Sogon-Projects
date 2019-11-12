<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:52:31
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-12 11:34:50
 * @Description: 首页
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <div class="dashboard-msg">
      <section v-for="(item,index) in list" :key="index">
        <div>
          <img :src="item.img" alt />
        </div>
        <div>
          <p>
            <span style="color:#333;font-size:25px">{{item.num}}</span>{{item.unit}}
          </p>
          <p>{{item.name}}</p>
        </div>
      </section>
    </div>
    <!-- 1 -->
    <div class="dashboard-file white-block">
      <div class="title">病患档案</div>
      <div class="dashboard-file-content">
        <div class="dashboard-file-content-table">
          <div class="dashboard-file-content-table-title">
            <img src="../../assets/fonts/1.png" alt />
            最新发现10名病患档案
          </div>
          <div
            class="list"
            v-for="(item,index) in tableList"
            :key="index"
            :class="{'gray':index%2===0}"
          >
            <section>{{index+1}}</section>
            <section>{{item.name}}</section>
            <section>{{item.date}}</section>
            <section>
              <span style="color:#53A7A9">档案编号</span>
            </section>
          </div>
        </div>
        <div class="dashboard-file-content-chart">
          <div class="dashboard-file-content-chart-title" style="padding-left:60px">
            <img src="../../assets/fonts/2.png" alt />
            病患档案总数变化趋势
            <div>
              <section :class="{'isTab':tab==0}" @click="tabClick(0)">月</section>
              <section :class="{'isTab':tab==1}" @click="tabClick(1)">年</section>
            </div>
          </div>
          <div style="text-align:left">
            <Polylines />
          </div>
          <!-- <Columnar /> -->
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="dashboard-file white-block" style="margin-top:20px">
      <div class="title">帮扶管控</div>
      <div class="dashboard-file-content">
        <div class="dashboard-file-content-table">
          <div class="dashboard-file-content-table-title">
            <img src="../../assets/fonts/3.png" alt />各阶段病患档案占比
          </div>
          <div style="text-align:center">
            <PieChart />
          </div>
        </div>
        <div class="dashboard-file-content-chart">
          <div class="dashboard-file-content-chart-title" style="padding-left:60px">
            <img src="../../assets/fonts/4.png" alt />各部门办理病患档案数量
          </div>
          <Columnar />
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="dashboard-file white-block" style="margin-top:20px">
      <div class="title">补助金</div>
      <div class="dashboard-file-content">
        <div class="dashboard-file-content-table">
          <div class="dashboard-file-content-table-title">
            <img src="../../assets/fonts/5.png" alt />补助金发放记录
          </div>
          <div
            class="list"
            v-for="(item,index) in tableLists"
            :key="index"
            :class="{'gray':index%2===0}"
          >
            <section>{{index+1}}</section>
            <section>{{item.name}}</section>
            <section>{{item.date}}</section>
            <section>{{item.price}}</section>
          </div>
          <!-- <PieChart /> -->
        </div>
        <div class="dashboard-file-content-chart">
          <!-- <Columnar /> -->
          <div class="dashboard-file-content-chart-title" style="padding-left:60px">
            <img src="../../assets/fonts/2.png" alt />
            补助金发放金额变化趋势
            <div>
              <section :class="{'isTab':tabs==0}" @click="tabsClick(0)">月</section>
              <section :class="{'isTab':tabs==1}" @click="tabsClick(1)">年</section>
            </div>
          </div>
          <div style="text-align:left">
            <PolylineC />
          </div>
        </div>
      </div>
    </div>
    <!-- 待办事项提醒-->
    <Modal
      title="待办事项"
      v-model="modal"
      :mask-closable="false"
      :closable="false"
      draggable
      scrollable
      width="600"
    >
      <div>您存在未处理的病患档案，请及时查看处理！</div>
      <div slot="footer">
        <Button size="large" @click="cancelModal()">取消</Button>
        <Button type="primary" size="large" @click="okModal">查看</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import api from "@/api/home/index";
import Columnar from "./components/columnar";
import PieChart from "./components/pie-chart";
import Polylines from "./components/polyline";
import PolylineC from "./components/polylineC";

export default {
  components: {
    Columnar,
    PieChart,
    Polylines,
    PolylineC
  },
  data() {
    return {
      modal: false,
      tabs: 0,
      tab: 0,
      list: [
        {
          img: require("../../assets/file.png"),
          num: "110",
          name: "病患档案总数",
          unit: "个"
        },
        {
          img: require("../../assets/help.png"),
          num: "62",
          name: "帮扶管控中病患档案数",
          unit: "个"
        },
        {
          img: require("../../assets/subsidy.png"),
          num: "48",
          name: "补助金发放总额",
          unit: "万"
        }
      ],
      tableList: [
        { id: " 1", name: "周强", date: "2015.3.1" },
        { id: " 2", name: "师永", date: "2000.3.4" },
        { id: " 3", name: "董向奎", date: "2005.7.18" },
        { id: " 4", name: "耿小新", date: "1990" },
        { id: " 5", name: "王忠亮", date: "1984.7.11" },
        { id: " 6", name: "薛亚东", date: "2012.3.21" },
        { id: " 7", name: "汪培", date: "2003.3.21" },
        { id: " 8", name: "卢桂", date: "2005.3.19" },
        { id: " 9", name: "许培", date: "2007.6.19" },
        { id: "10", name: "张丹", date: "1991.8.20" }
      ],
      tableLists: [
        { id: " 1", name: "周强", date: "2019-10-22", price: 2000 },
        { id: " 2", name: "师永", date: "2019-10-22", price: 2000 },
        { id: " 3", name: "董向奎", date: "2019-10-22", price: 2000 },
        { id: " 4", name: "耿小新", date: "2019-10-22", price: 2000 },
        { id: " 5", name: "王忠亮", date: "2019-10-22", price: 2000 },
        { id: " 6", name: "薛亚东", date: "2019-10-22", price: 2000 },
        { id: " 7", name: "汪培", date: "2019-10-22", price: 2000 },
        { id: " 8", name: "卢桂", date: "2019-10-22", price: 2000 },
        { id: " 9", name: "许培", date: "2019-10-22", price: 2000 },
        { id: "10", name: "张丹", date: "2019-10-22", price: 2000 }
      ]
    };
  },

  mounted() {
    api.isNeedDo().then(res => {
      if (res.success == true) {
        this.modal = true;
      }
    });
  },
  methods: {
    tabClick(id) {
      this.tab = id;
    },
    tabsClick(id) {
      this.tabs = id;
    },
    cancelModal() {
      this.modal = false;
    },
    okModal() {
      this.modal = false;
      this.$router.push("/fileAlreadyManagement");
    }
  }
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
