<template>
  <div class="white-block btn" style="height:100px">
    <div>
      <!-- 转发弹窗 -->
      <Forward :modalForward="modalStatus" />
      <!-- 办结弹窗 -->
      <SetUp  :modalSetUp="setModal"/>
      <!-- 退回弹窗-->
      <Return :modalReturn="returnModal" />
      <Button type="info" @click="cancelFunc">返回列表</Button>
      <Button type="primary" @click="saveFunc(1)">保存</Button>
      <Button type="primary" v-if="status==0" @click="saveFunc(2)">保存并推送</Button>
      <Button
        type="primary"
        ghost
        @click="pushFunc"
        v-if="status==0 || status ==1 || status==2 || status==3||status==4"
      >转发</Button>
      <Button type="primary" v-if=" status ==1 || status==2 ||status==4||status==5" @click="setUpFunc">办结</Button>
      <Button
        type="primary"
        ghost
        v-if=" status ==1||status==2 ||status==3 ||status==4||status==5"
        @click="returnFunc"
      >退回</Button>
    </div>
  </div>
</template>

<script>
import Forward from "./modal/forward";
import SetUp from "./modal/setUp";
import Return from "./modal/return";
import mixin from "../../../../mixin/newFile";
import vm from "../event";
import { findSaveList } from "@/api/new-file/01find";
import { dealSaveList } from "@/api/new-file/02deal";
import { levelSaveList,historyTreatSaveList,historyTreatDelete,histroyLiveSaveList,histroyLiveDelete } from "@/api/new-file/03treat";
import { helpSaveList } from "@/api/new-file/04help";
import { againSaveList } from "@/api/new-file/05again";
import { outControlSaveList } from "@/api/new-file/06outContrl";
export default {
  computed: {
    status: function() {
      return this.$store.state.step.stepStatus;
    }
  },
  mixins: [mixin],
  data(){
    return{
      modalStatus:false,
      setModal:false,
      returnModal:false
    }
  },
  components: {
    Forward,
    SetUp,
    Return
  },
  methods: {
    
    // 保存
    saveFunc(id) {
      console.log("保存动作", id);
      vm.$emit("blur", "saveEvent");
      // 上面两个表单数据
      console.log("获取数据了", this.$store.state.step.findData);
      if(this.$store.state.step.stepStatus == 0){
        this.findSave();
      }else if(this.$store.state.step.stepStatus == 1){
        this.dealSave();
      }else if(this.$store.state.step.stepStatus == 2){
        this.treatSave();
      }else if(this.$store.state.step.stepStatus == 3){
        this.helpSave();
      }else if(this.$store.state.step.stepStatus == 4){
        this.againTreatSave();
      }else if(this.$store.state.step.stepStatus == 5){
        this.cureSave();
      }
    },

    // 01发现保存
    findSave() {
      console.log(this.$store.state.step.findStatus)
      // if (this.$store.state.findStatus) {
        let obj={
          "patientName":"123",
          "patientSex":"0",
          "patientCode":"222222222222222222",
          "type":"0",
          "patientCompany":"0",
          "patientTel":"13222222222",
          "patientRusticate":"asdfsdf",
          "patientPolice":"asdfa",
          "isforeign":"0",
          "foreignHandle":"1",
          "patientAddr":"asfadsfasdfdsa",
          "patientStatus1":"2",
          "patientStatus2":"2",
          "guardianName":"范范",
          "guardianRel":"0",
          "guardianCompany":"0",
          "guardianTel":"13222222222",
          "causeTrouble":"sadfasfsdafdasf",
          "tFiles":[{"filepath":"D://file"},{"filepath":"D://Filetwo"}],
          "isfocal":"0"
          }

          let data=this.$store.state.step.findData.checkRegistration;
          
          // obj.patientName = data.patientName;
          // obj.patientSex = data.sex;
          // obj.patientCode = data.IdNumber;
          // obj.type = data.status;
          // obj.patientCompany = data.employer;
          // obj.patientTel = data.patient;
          // obj.patientRusticate = data.village;
          // obj.patientPolice = data.police;
          // obj.isforeign = data.foreigner;
          // obj.foreignHandle = data.processingMethod;
          // obj.patientAddr = data.patientAddress;
          // obj.patientStatus1 = data.patientCondition;
          // obj.patientStatus2 = data.risk;
          // obj.guardianName = data.guardianName;
          // obj.guardianRel = data.relationship;
          // obj.guardianCompany = data.guardianUnit;
          // obj.guardianTel = data.guardianPhone;
          // obj.causeTrouble = data.anecdote;
          // obj.isfocal=data.isfocal;  

          // obj.tFiles = data.uploadFiles;

          findSaveList(obj).then(res=>{
            console.log(res)  
            this.$store.state.step.archivesId = res.data.id;
            this.$store.state.step.findData.basicInformation.code = res.data.code;
            this.$store.state.step.findData.basicInformation.status = res.data.status;
            this.$store.state.step.findData.basicInformation.name = res.data.name;
            this.$store.state.step.findData.basicInformation.checkin_dept = res.data.checkin_dept;
            this.$store.state.step.findData.basicInformation.createDate = res.data.createDate;

          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 02初步处理保存
    dealSave() {
      // if (this.$store.state.step.dealStatus) {
        console.log(this.$store.state.step.archivesId)
        console.log(this.$store.state.step.archivesId)

          let objLocal={
            "archivesId": this.$store.state.step.archivesId,
            "bIstreat":"123",
            "bIswilltreat":"0",
            "bDoRemarks":"222222222222222222",
            "fristRemarks":"0",
            "secondRemarks":"0",
            "thirdRemarks":"13222222222",
            "type": "0",
            "wType": "0",
            // "tFiles":"asdfsdf",                      
          }

          let objOutside={
            "archivesId": this.$store.state.step.archivesId,
            "wCompanyName":"123",
            "wCompanyLeader":"0",
            "wCompanyTel":"222222222222222222",
            "wCompanyContactTime":"0",
            "wDoRemarks":"0",
            "type": "1",
            "wType": "1",
            // "tFiles":"13222222222",
          }

          


          // 左边后台接口名称，右边本地命名（表单、通信vuex）
          // local
          // let vx_data_local=this.$store.state.step.dealData.formLocal;
          // objLocal.bIstreat = vx_data_local.isTreatment;
          // objLocal.bDoRemarks = vx_data_local.isTreatmentDescription;
          // objLocal.fristRemarks = vx_data_local.firstVisit;
          // objLocal.secondRemarks = vx_data_local.secondVisit;
          // objLocal.thirdRemarks = vx_data_local.thirdVisit;

          // objLocal.tFiles = vx_data_local.uploadFiles;     

          // objLocal
          dealSaveList(objLocal).then(res=>{
            
          })          

          // outside
          // let vx_data_outside=this.$store.state.step.dealData.formOutside;
          // objOutside.wCompanyName = vx_data_outside.name;
          // objOutside.wCompanyLeader = vx_data_outside.principal;
          // objOutside.wCompanyTel = vx_data_outside.phone;
          // objOutside.wCompanyContactTime = vx_data_outside.contactTime;
          // objOutside.wDoRemarks = vx_data_outside.description;

          // objOutside.tFiles = vx_data_outside.uploadFiles;

          dealSaveList(objOutside).then(res=>{
            console.log(res)
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 03评定治疗保存
    treatSave() {
      // if (this.$store.state.step.treatStatus) {
          // let formPatientLevel={
          //   "archivesId": this.$store.state.step.archivesId,
          //   "patientLevel":"123",
          //   "hospitalName":"0",
          //   "doctorName":"222222222222222222",
          //   "doctorTel":"0",
          //   "doctorEvtime":"0",
          //   "levelRemark":"13222222222",
          //   // "tFiles":"asdfsdf",          
          // }

          // let formPatientTreat={
          //   "archivesId": this.$store.state.step.archivesId,
          //   "type":"0",
          //   "patientHospital":"wws",
          //   "patientDoctor":"0",
          //   "doctorTel":"222222222222222222",
          //   "treatTime":"0",
          //   "checkinTime":"0",            
          //   "treatRemark":"13222222222",
          //   "tFiles":"13222222222"
          // }

          // let formPatientZhuyuan={
          //   "archivesId": this.$store.state.step.archivesId,
          //   "type":"1",
          //   "patientHospital":"123",
          //   "doctorName":"0",
          //   "checkinTime":"222222222222222222",
          //   "checkoutTime":"0",
          //   "treatRemark":"0",
          //   "tFiles":"13222222222",
          // }

          let formPatientInfo = 
          {
            // "id": "12",
            "archivesId": this.$store.state.step.archivesId,
            "patientLevel": "1",
            "hospitalName": "cdhjas",
            "doctorName": "xasxas",
            "doctorTel": "1111111",
            "doctorEvtime": null,
            "levelRemark": "sajdakdhask",
            "tFiles": [],
            "tTreatRecords": [
                {
                    "id": "9",
                    "patientHospital": null,
                    "patientDoctor": null,
                    "doctorTel": null,
                    "treatTime": null,
                    "checkinTime": null,
                    "checkoutTime": null,
                    "treatRemark": null,
                    "fileCode": "1572874968047",
                    "treatId": "",
                    "type": "0",
                    "tFiles": []
                },
                {
                    "id": "9",
                    "patientHospital": null,
                    "patientDoctor": null,
                    "doctorTel": null,
                    "treatTime": null,
                    "checkinTime": null,
                    "checkoutTime": null,
                    "treatRemark": null,
                    "fileCode": "1572874968047",
                    "treatId": "",
                    "type": "1",
                    "tFiles": []
                }
            ]
          }

          let dataLevel=this.$store.state.step.treatData.formPatientLevel;
          // formPatientLevel.patientLevel = dataLevel.status;
          // formPatientLevel.hospitalName = dataLevel.hospital;
          // formPatientLevel.doctorName = dataLevel.doctor;
          // formPatientLevel.doctorTel = dataLevel.phone;
          // formPatientLevel.doctorEvtime = dataLevel.time;
          // formPatientLevel.levelRemark = dataLevel.description;
          // formPatientLevel.tFiles = dataLevel.uploadFiles;       

          let dataTreat=this.$store.state.step.treatData.formPatientTreat;
          // formPatientTreat.patientHospital = dataLevel.hospital;
          // formPatientTreat.patientDoctor = dataLevel.doctors;
          // formPatientTreat.doctorTel = dataLevel.phone;
          // formPatientTreat.treatTime = dataLevel.dischargeTime;
          // formPatientTreat.treatRemark = dataLevel.recording;   
          // formPatientTreat.tFiles = dataLevel.uploadFiles;   

          let dataLive=this.$store.state.step.treatData.formPatientZhuyuan;
          // formPatientZhuyuan.patientHospital = dataLevel.hospital;
          // formPatientZhuyuan.doctorName = dataLevel.doctors;
          // formPatientZhuyuan.checkinTime = dataLevel.hospitalStay;
          // formPatientZhuyuan.checkoutTime = dataLevel.dischargeTime;
          // formPatientZhuyuan.treatRemark = dataLevel.recording;
          // formPatientZhuyuan.tFiles = dataLevel.uploadFiles;   
          

          levelSaveList(formPatientInfo).then(res=>{
            console.log("保存成功")
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 04四帮一保存
    helpSave() {
      // if (this.$store.state.step.helpStatus) {
          let objLocal={
            "bIstreat":"123",
            "bIswilltreat":"0",
            "bDoRemarks":"222222222222222222",
            "fristRemarks":"0",
            "secondRemarks":"0",
            "thirdRemarks":"13222222222",
            "tFiles":"asdfsdf",          
          }

          let objOutside={
            "wCompanyName":"123",
            "wCompanyLeader":"0",
            "wCompanyTel":"222222222222222222",
            "wCompanyContactTime":"0",
            "wDoRemarks":"0",
            "tFiles":"13222222222",
          }

          let dataInfo = {
          "guardianName": "zjjjz",
          "guardianRel": "1",
          "guardianBankCardNumber": "sdssss",
          "guardianTelephone": "daadadsa",
          "archivesId": "56",
          "tHelpRecordsList": [{
            "isubsidy": "0",
            "istilltreat": "0",
            "isguardianduty": "0",
            "causeTrouble": "sjsjsjjs",
            "recureinfo": "ssss",
            "archivesId": "56",
            "type": "3"
          }]
        }
          

          let data=this.$store.state.step.findData.checkRegistration;
          
          // objLocal.bIstreat = data.patientName;
          // objLocal.bIswilltreat = data.sex;
          // objLocal.bDoRemarks = data.IdNumber;
          // objLocal.fristRemarks = data.status;
          // objLocal.secondRemarks = data.employer;
          // objLocal.thirdRemarks = data.patient;
          // objLocal.tFiles = data.village;       
          
          dataInfo.cadre = this.$store.state.form.treatData.cjgbbfData;

          dataInfo.tHelpRecordsList = this.$store.state.form.cadreList;
          dataInfo.tHelpRecordsList = this.$store.state.form.policeList;
          dataInfo.tHelpRecordsList = this.$store.state.form.doctorList;
          dataInfo.tHelpRecordsList = this.$store.state.form.guardianList;

          helpSaveList(dataInfo).then(res=>{
            console.log(res)
            this.$store.state.step.findData.basicInformation = res.data.code;
            this.$store.state.step.findData.basicInformation = res.data.status;
            this.$store.state.step.findData.basicInformation = res.data.name;
            this.$store.state.step.findData.basicInformation = res.data.checkin_dept;
            this.$store.state.step.findData.basicInformation = res.data.createDate;
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 05再次评定保存
    againTreatSave() {
      // if (this.$store.state.step.againTreatStatus) {
          let formPatientLevel={
            "archivesId": "272",
            "patientLevel":"123",
            "hospitalName":"0",
            "doctorName":"222222222222222222",
            "doctorTel":"0",
            "doctorEvtime":"0",
            "levelRemark":"13222222222",
            // "tFiles":"asdfsdf",          
          }

          let dataLevel=this.$store.state.step.againTreatData.formPatientLevel;
          formPatientLevel.patientLevel = dataLevel.status;
          formPatientLevel.hospitalName = dataLevel.hospital;
          formPatientLevel.doctorName = dataLevel.doctor;
          formPatientLevel.doctorTel = dataLevel.phone;
          formPatientLevel.doctorEvtime = dataLevel.time;
          formPatientLevel.levelRemark = dataLevel.description;
          // formPatientLevel.tFiles = dataLevel.uploadFiles;                 

          againSaveList(formPatientLevel).then(res=>{
            console.log("保存成功")
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 06脱离管控保存
    cureSave() {
      // if (this.$store.state.step.outControlStatus) {
          let RecorderList = 
          {
              // "archivesId": this.$store.state.step.archivesId,
              "archivesId": "272",
              "tCuteRecordsList": [
                  {
                      "patientCuteDate": "",
                      "patientCuteType": "1", 
                      "patientCompany": "曙光", 
                      "patientRemarks": "sssss"
                  },
                  {
                      "patientCuteDate": "",
                      "patientCuteType": "1", 
                      "patientCompany": "曙光", 
                      "patientRemarks": "sssss"
                  }
              ]
          }

          let data=this.$store.state.step.outControlData;
          
          RecorderList.tCuteRecordsList = data.formPatientRecorder;        

          outControlSaveList(RecorderList).then(res=>{
            console.log(res)  
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },    
    // 转发
    pushFunc() {
      this.modalStatus=true
      // this.$store.state.step.stepStatus < 5
      //   ? (this.$store.state.step.stepStatus =
      //       this.$store.state.step.stepStatus + 1)
      //   : "";
    },
    // 办结
    setUpFunc(){
      this.setModal=true;
    },
    // 退回
    returnFunc(){
      this.returnModal=true
    },
    // 取消
    cancelFunc() {
      this.$router.push("/fileManagement");
    }
  }
};
</script>

<style scoped lang="less">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  & > div {
    .ivu-btn {
      margin: 0 10px;
    }
    .ivu-btn-info {
      background: #bec4c4;
      border-radius: 4px;
      border-radius: 4px;
      border: 1px solid #bec4c4;
    }
  }
}
</style>
