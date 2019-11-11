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
    if(this.$route.params.status == undefined?0:this.$route.params.status) {
      if(this.$route.params.status == 0){
        this.$store.state.step.stepStatus = 0;
      }else if(this.$route.params.status == 2){
        this.$store.state.step.stepStatus = 1;
      }else if(this.$route.params.status == 4){
        this.$store.state.step.stepStatus = 2;
      }else if(this.$route.params.status == 6){
        this.$store.state.step.stepStatus = 3;
      }else if(this.$route.params.status == 7){
        this.$store.state.step.stepStatus = 4;
      }else if(this.$route.params.status == 8){
        this.$store.state.step.stepStatus = 5;
      }
    }
    // this.$store.state.step.stepStatus = this.$route.params.status == undefined?0:this.$route.params.status;
    // this.$store.state.step.stepStatus = 0;
    this.$store.state.authOnOff = this.$route.params.isOperRole;
    this.$store.state.archivesId = this.$route.params.id;
    console.log(this.$route.params.id)
    console.log(this.$store.state)
    // this.$route.params = {}

    console.log(this.$route)
    // 如果是修改则执行下面
    if(this.$route.params.status !== undefined) {
      findAllMessage({"archivesId":this.$store.state.archivesId}).then(res=>{
        console.log(res)
        let data = res.data;       
        this.$store.state.step.archivesId = this.$store.state.archivesId;    
        // 发现
        let obj_checkRegistration=this.$store.state.step.findData.checkRegistration; 
        let obj_basicInformation=this.$store.state.step.findData.basicInformation; 

            obj_basicInformation.code = data[0].code;
            obj_basicInformation.status = data[0].status;
            obj_basicInformation.checkin_dept = data[0].checkinUserName;
            // obj_basicInformation.createDate = data[0].createDate;
            this.$store.state.step.isLocal = data[0].isforeign;
            // obj.archivesId = "",
            this.$store.state.step.findData.id = data[0].id;
            obj_checkRegistration.patientName = data[0].patientName;
            obj_checkRegistration.sex = data[0].patientSex;
            obj_checkRegistration.patientPhone = data[0].patientPhone;
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
            let obj_dealData=this.$store.state.step.dealData.formData; 
            this.$store.state.step.dealData.id = data[1].id;
            // obj.archivesId = "",
            obj_dealData.name = data[1].wCompanyName;
            obj_dealData.principal = data[1].wCompanyLeader;
            obj_dealData.phone = data[1].wCompanyTel;
            obj_dealData.contactTime = data[1].wCompanyContactTime;
            obj_dealData.description = data[1].wDoRemarks;

            obj_dealData.isTreatment = data[1].bIstreat;
            obj_dealData.isTreatmentDescription = data[1].bDoRemarks;
            obj_dealData.firstVisit = data[1].fristRemarks;
            obj_dealData.secondVisit = data[1].secondRemarks;
            obj_dealData.thirdVisit = data[1].thirdRemarks;     
            obj_dealData.wType = data[1].wType;
            obj_dealData.type = data[1].type;          

        // 评定治疗
            let obj_treatData = this.$store.state.step.treatData;
            this.$store.state.step.treatData.id = data[2].id;
            // obj_treatData.formPatientLevel.time = data[2].doctorEvtime;
            obj_treatData.formPatientLevel.doctor = data[2].doctorName;
            obj_treatData.formPatientLevel.phone = data[2].doctorTel;
            obj_treatData.formPatientLevel.hospital = data[2].hospitalName;
            obj_treatData.formPatientLevel.description = data[2].levelRemark;
            obj_treatData.formPatientLevel.status = data[2].patientLevel;
            obj_treatData.formPatientLevel.uploadFiles = data[2].tFiles;
            let formPatientTreatArr = [];
            let formPatientZhuyuanArr = [];
            data[2].tTreatRecords.forEach((element,index) => {              
              // 0 是 治疗
              if(element.type == 0) {
                formPatientTreatArr.push(data[2].tTreatRecords[index])
              }else if(element.type == 1){
                formPatientZhuyuanArr.push(data[2].tTreatRecords[index])
              }
            });

            obj_treatData.formPatientTreat = formPatientTreatArr;
            obj_treatData.formPatientZhuyuan = formPatientZhuyuanArr;
                       

        // 四帮一
            let obj_helpData = this.$store.state.form; 
            // gridUserId
            // policeUserId
            // doctorUserId
            // guardianName
            // guardianRel
            // guardianBankCardNumber
            // guardianTelephone
       
            
            this.$store.state.form.id = data[3].id;
            obj_helpData.guardian.name = data[3].guardianName;
            obj_helpData.guardian.relationship = data[3].guardianRel;
            obj_helpData.guardian.banNumber = data[3].guardianBankCardNumber;
            obj_helpData.guardian.phone = data[3].guardianTelephone;

            obj_helpData.cadre.department = data[3].gridUser.deptId;
            obj_helpData.cadre.name = data[3].gridUser.id;
            obj_helpData.cadre.IdNumber = data[3].gridUser.idCode;
            obj_helpData.cadre.phone = data[3].gridUser.telephone;

            obj_helpData.police.department = data[3].policeUser.deptId;
            obj_helpData.police.name = data[3].policeUser.id;
            obj_helpData.police.IdNumber = data[3].policeUser.idCode;
            obj_helpData.police.phone = data[3].policeUser.telephone;

            obj_helpData.doctor.department = data[3].doctorUser.deptId;
            obj_helpData.doctor.name = data[3].doctorUser.id;
            obj_helpData.doctor.IdNumber = data[3].doctorUser.idCode;
            obj_helpData.doctor.phone = data[3].doctorUser.telephone;
            


            let cadreListArr = [];
            let policeList = [];
            let doctorList = [];
            let guardianList = [];

            data[3].tHelpRecordsList.forEach((element,index) => {
              console.log(element)
              // 0 是 治疗
              if(element.type == 0) {
                cadreListArr.push(data[3].tHelpRecordsList[index]);
              }else if(element.type == 1){
                policeList.push(data[3].tHelpRecordsList[index]);
              }else if(element.type == 2){
                doctorList.push(data[3].tHelpRecordsList[index]);
              }else if(element.type == 3){
                guardianList.push(data[3].tHelpRecordsList[index]);
              }
            });

            obj_helpData.cadreList = cadreListArr;
            obj_helpData.policeList = policeList;
            obj_helpData.doctorList = doctorList;
            obj_helpData.guardianList = guardianList;


        // 再次评定
        let obj_againTreat = this.$store.state.step.againTreatData;
            this.$store.state.step.againTreatData.id = data[4].id;
            // obj_againTreat.formPatientLevel.time = data[2].doctorEvtime;
            obj_againTreat.formPatientLevel.doctor = data[4].doctorName;
            obj_againTreat.formPatientLevel.phone = data[4].doctorTel;
            obj_againTreat.formPatientLevel.hospital = data[4].hospitalName;
            obj_againTreat.formPatientLevel.description = data[4].levelRemark;
            obj_againTreat.formPatientLevel.status = data[4].patientLevel;
            obj_againTreat.formPatientLevel.uploadFiles = data[4].tFiles;

        // 脱离管控
        let obj_outControl = this.$store.state.step.outControlData;
            this.$store.state.step.outControlData.id = data[5].id;
            // obj_againTreat.formPatientLevel.time = data[2].doctorEvtime;
            console.log(data[5].tCuteRecordsList)
            obj_outControl.formPatientRecorder = data[5].tCuteRecordsList;
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
