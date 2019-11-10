<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 13:52:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 15:49:15
 * @Description: 菜单
 * @Email: UvDream@163.com
 -->
<template>
  <Menu
    theme="light"
    :open-names="openKey"
    :accordion="true"
    :active-name="activeName"
    width="auto"
  >
    <MenuItem
      v-for="item in menusList"
      :key="item.id + 'sh'"
      :name="item.id"
      :to="item.url"
      v-show="!item.children"
    >
      <div style="height:120px;font-size:16px;line-height:25px;">
        <Icon :type="item.icon" size="40" style="margin-top:25px" />
        <div>{{ item.name }}</div>
      </div>
    </MenuItem>
    <Submenu v-for="(item, index) in menusList" :key="index" :name="item.id" v-show="item.children">
      <template slot="title">
        <Icon :type="item.icon" size="40" style="margin-top:25px" />
        <div>{{ item.name }}</div>
      </template>
      <MenuItem
        v-for="(items, index) in item.children"
        :key="index"
        :name="items.id"
        :to="items.url"
        @click.native="resetMenuInfo"
      >{{ items.name }}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  data() {
    return {
      openKey: ["1"],
      activeName: "3",
    };
  },
  props: {
    menusList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    isCollapsed: function() {
      return this.$store.state.isCollapsed;
    }
  },
  watch: {},
  mounted() {
    this.activeName = this.activeFunc(this.$route.path);
  },
  methods: {
    // 点击菜单触发事件
    resetMenuInfo(){
      var self = this;
      if(this.$route.name=="newFile") {
        setTimeout(function(){
          self.resetVueStore();
          self.$store.state.step.stepStatus = 0;
        },500)
        }      
    },
    activeFunc(path) {
      let num;
      this.menusList.forEach(element => {
        element.url == path ? (num = element.id) : "";
        element.children
          ? element.children.forEach(item => {
              item.url === path ? (num = item.id) : "";
            })
          : "";
      });
      return num;
    },
    resetVueStore(){
      this.$store.state.step.isLocal = 0;
      this.$store.state.step.stepStatus = 0;
      this.$store.state.step.findStatus = true;
      this.$store.state.step.dealStatus = false;
      this.$store.state.step.treatStatus = false;
      this.$store.state.step.helpStatus = false;
      this.$store.state.step.againTreatStatus = false;
      this.$store.state.step.outControlStatus = false;
      this.$store.state.step.archivesId = "";
      this.$store.state.step.authOnOff = 1;
      this.$store.state.step.findData.id = "";
      this.$store.state.step.findData.basicInformation.code = "";
      this.$store.state.step.findData.basicInformation.status = "";
      this.$store.state.step.findData.basicInformation.name = "";
      this.$store.state.step.findData.basicInformation.checkin_dept = "";
      this.$store.state.step.findData.basicInformation.code = "createDate";
      this.$store.state.step.findData.checkRegistration.id = "";
      this.$store.state.step.findData.checkRegistration.patientName = "";
      this.$store.state.step.findData.checkRegistration.sex = "";
      this.$store.state.step.findData.checkRegistration.IdNumber = "";
      this.$store.state.step.findData.checkRegistration.status = "";
      this.$store.state.step.findData.checkRegistration.employer = "";
      this.$store.state.step.findData.checkRegistration.patient = "";
      this.$store.state.step.findData.checkRegistration.village = "";
      this.$store.state.step.findData.checkRegistration.police = "";
      this.$store.state.step.findData.checkRegistration.foreigner = "";
      this.$store.state.step.findData.checkRegistration.processingMethod = "";
      this.$store.state.step.findData.checkRegistration.patientAddress = "";
      this.$store.state.step.findData.checkRegistration.patientCondition = "";
      this.$store.state.step.findData.checkRegistration.risk = "";
      this.$store.state.step.findData.checkRegistration.guardianName = "";
      this.$store.state.step.findData.checkRegistration.relationship = "";
      this.$store.state.step.findData.checkRegistration.guardianUnit = "";
      this.$store.state.step.findData.checkRegistration.guardianPhone = "";
      this.$store.state.step.findData.checkRegistration.anecdote = "";
      this.$store.state.step.findData.checkRegistration.uploadFiles = []
      this.$store.state.step.dealData.id = "";
      this.$store.state.step.dealData.formData.isTreatment = "";
      this.$store.state.step.dealData.formData.isTreatmentDescription = "";
      this.$store.state.step.dealData.formData.firstVisit = "";
      this.$store.state.step.dealData.formData.secondVisit = "";
      this.$store.state.step.dealData.formData.thirdVisit = "";
      this.$store.state.step.dealData.formData.uploadFiles = "";
      this.$store.state.step.dealData.formData.type = "0";
      this.$store.state.step.dealData.formData.wType = "0";

      this.$store.state.step.treatData.id = "";
      this.$store.state.step.treatData.formPatientLevel.status = "";
      this.$store.state.step.treatData.formPatientLevel.status = "";
      this.$store.state.step.treatData.formPatientLevel.status = "";
      this.$store.state.step.treatData.formPatientLevel.hospital = "";
      this.$store.state.step.treatData.formPatientLevel.doctor = "";
      this.$store.state.step.treatData.formPatientLevel.phone = "";
      this.$store.state.step.treatData.formPatientLevel.time = "";
      this.$store.state.step.treatData.formPatientLevel.description = "";
      this.$store.state.step.treatData.formPatientLevel.uploadFiles = [];

      this.$store.state.step.treatData.formPatientTreat[0].id = "";
      this.$store.state.step.treatData.formPatientTreat[0].patientHospital = "";
      this.$store.state.step.treatData.formPatientTreat[0].patientDoctor = "";
      this.$store.state.step.treatData.formPatientTreat[0].doctorTel = "";
      this.$store.state.step.treatData.formPatientTreat[0].treatTime = "";
      this.$store.state.step.treatData.formPatientTreat[0].checkinTime = "";
      this.$store.state.step.treatData.formPatientTreat[0].checkoutTime = "";
      this.$store.state.step.treatData.formPatientTreat[0].treatRemark = "";
      this.$store.state.step.treatData.formPatientTreat[0].fileCode = "";
      this.$store.state.step.treatData.formPatientTreat[0].treatId = "";
      this.$store.state.step.treatData.formPatientTreat[0].type = "0";
      this.$store.state.step.treatData.formPatientTreat[0].tFiles = [];

      this.$store.state.step.treatData.formPatientZhuyuan[0].id = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].patientHospital = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].patientDoctor = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].doctorTel = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].treatTime = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].checkinTime = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].checkoutTime = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].treatRemark = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].fileCode = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].treatId = "";
      this.$store.state.step.treatData.formPatientZhuyuan[0].type = "0";
      this.$store.state.step.treatData.formPatientZhuyuan[0].tFiles = [];


      this.$store.state.step.againTreatData.id = "";
      this.$store.state.step.againTreatData.formPatientLevel.id = "";
      this.$store.state.step.againTreatData.formPatientLevel.status = "";
      this.$store.state.step.againTreatData.formPatientLevel.hospital = "";
      this.$store.state.step.againTreatData.formPatientLevel.doctor = "";
      this.$store.state.step.againTreatData.formPatientLevel.phone = "";
      this.$store.state.step.againTreatData.formPatientLevel.date = "";
      this.$store.state.step.againTreatData.formPatientLevel.description = "";
      this.$store.state.step.againTreatData.formPatientLevel.uploadFiles = [];

      this.$store.state.step.outControlData.id = "";
      this.$store.state.step.outControlData.formPatientRecorder[0].patientCuteDate = "";
      this.$store.state.step.outControlData.formPatientRecorder[0].patientCuteType = "";
      this.$store.state.step.outControlData.formPatientRecorder[0].patientCompany = "";
      this.$store.state.step.outControlData.formPatientRecorder[0].patientRemarks = "";
      this.$store.state.step.outControlData.formPatientRecorder[0].uploadFiles = [];
    
    }
  }
};
</script>

<style  lang="less">
.ivu-menu-item {
  text-align: center;
  font-size: 14px;
  min-height: 60px;
  line-height: 60px;
  padding: 0 !important;
}
// 一级菜单
.ivu-menu-submenu-title {
  height: 120px !important;
  text-align: center;
  padding: 0 !important;
}
.ivu-menu-submenu-title-icon {
  display: none !important;
}
</style>
