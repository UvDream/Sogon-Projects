<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:27:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 17:01:00
 * @Description: 新建档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="new">
    <TopStep />
    <!-- 发现 -->
    <Find v-if="status == 0" />
    <!-- 评定 -->
    <Assessment v-if="status == 1" />
    <!-- 治疗 -->
    <Treatment v-if="status == 2" />
    <!-- 帮扶 -->
    <Help v-if="status == 3" />
    <!-- 再次评定 -->
    <AgainAssessment v-if="status == 4" />
    <!-- 康复 -->
    <Guardianship v-if="status == 5" />
  </div>
</template>

<script>
import TopStep from "./components/top-step.vue";
import Find from "./find";
// 评定
import Assessment from "./assessment";
// 治疗
import Treatment from "./treatment";
// 监护
import Guardianship from "./guardianship";
// 帮扶
import Help from "./help";
// 再次评定
import AgainAssessment from "./again-assessment";

// 获取默认数据
import {findAllMessage} from "@/api/new-file/oldData"

export default {
  components: {
    TopStep,
    Find,
    Assessment,
    Treatment,
    Guardianship,
    Help,
    AgainAssessment
  },
  mounted() {
    // status : row.status,id: row.id,isOperRole: row.isOperRole
    // this.$store.state.step.stepStatus = this.$route.params.status == undefined?0:this.$route.params.status;
    // this.$store.state.step.stepStatus = this.$route.params.status == undefined?0:this.$route.params.status;
    this.$store.state.step.stepStatus = 0;
    this.$store.state.authOnOff = this.$route.params.isOperRole;
    this.$store.state.archivesId = this.$route.params.id;
    console.log(this.$route.params.id)
    console.log(this.$store.state)
    // 如果是修改则执行下面
    if(this.$route.params.status !== undefined) {
      findAllMessage({"archivesId":this.$store.state.archivesId}).then(res=>{
        console.log(res)
        debugger
        let data = res.data;           
        // 发现
        let obj_checkRegistration=this.$store.state.oldData.findData.checkRegistration; 
        let obj_basicInformation=this.$store.state.oldData.findData.basicInformation; 

            obj_basicInformation.code = data[0].code;
            obj_basicInformation.status = data[0].status;
            obj_basicInformation.checkin_dept = data[0].checkinUserName;
            // obj_basicInformation.createDate = data[0].createDate;

            // obj.archivesId = "",
            obj_checkRegistration.patientName = data[0].patientName;
            obj_checkRegistration.sex = data[0].patientSex;
            obj_checkRegistration.IdNumber = data[0].patientCode;
            obj_checkRegistration.status = data[0].type;
            obj_checkRegistration.employer = data[0].patientCompany;
            obj_checkRegistration.patient = data[0].patientTel;
            obj_checkRegistration.village = data[0].patientRusticate;
            obj_checkRegistration.police = data[0].patientPolice;
            obj_checkRegistration.foreigner = data[0].isforeign;
            obj_checkRegistration.processingMethod = data[0].foreignHandle;
            obj_checkRegistration.patientAddress = data[0].patientAddr;
            obj_checkRegistration.patientCondition = data[0].patientStatus1;
            obj_checkRegistration.risk = data[0].patientStatus2;
            obj_checkRegistration.guardianName = data[0].guardianName;
            obj_checkRegistration.relationship = data[0].guardianRel;
            obj_checkRegistration.guardianUnit = data[0].guardianCompany;
            obj_checkRegistration.guardianPhone = data[0].guardianTel;
            obj_checkRegistration.anecdote = data[0].causeTrouble;
            obj_checkRegistration.isfocal= data[0].isfocal;
            obj_checkRegistration.uploadFiles = data[0].tFiles;       
            
        // 初步处理
            let obj_dealData=this.$store.state.oldData.dealData.formData; 
            obj_dealData.name = data[1].wCompanyName;
            obj_dealData.principal = data[1].wCompanyLeader;
            obj_dealData.phone = data[1].wCompanyTel;
            obj_dealData.contactTime = data[1].wCompanyContactTime;
            obj_dealData.description = data[1].wDoRemarks;

            obj_dealData.name = data[1].bIstreat;
            obj_dealData.principal = data[1].bDoRemarks;
            obj_dealData.phone = data[1].fristRemarks;
            obj_dealData.contactTime = data[1].secondRemarks;
            obj_dealData.description = data[1].thirdRemarks;
            
            // obj_dealData.isTreatment = data[1].bIstreat;
            // obj_dealData.isTreatmentDescription = data[1].bDoRemarks;
            // obj_dealData.firstVisit = data[1].
            // obj_dealData.secondVisit = 
            // obj_dealData.thirdVisit = 
            // obj_dealData.uploadFiles = 

            // obj_dealData.name = data[1].
            // obj_dealData.principal = data[1].
            // obj_dealData.phone = data[1].
            // obj_dealData.contactTime = data[1].
            // obj_dealData.description = data[1].
            // obj_dealData.uploadFiles = data[1].

        // 评定治疗
            // let obj_treatData_formPatientLevel = this.$store.state.oldData.treatData.formPatientLevel; 
            // let obj_treatData_formPatientTreat = this.$store.state.oldData.treatData.formPatientTreat

        // 四帮一

        // 再次评定

        // 脱离管控

      })
    }
  },
  computed: {
    status: function() {
      return this.$store.state.step.stepStatus;
    }
  }
};
</script>

<style scoped lang="less"></style>
