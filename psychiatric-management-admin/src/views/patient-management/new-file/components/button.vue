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
import { findSaveList,findSaveLists } from "@/api/new-file/01find";
import { dealSaveList,dealSaveLists } from "@/api/new-file/02deal";
import { treatSaveList,treatSaveLists } from "@/api/new-file/03treat";
import { helpSaveList,helpSaveLists } from "@/api/new-file/04help";
import { againSaveList,againSaveLists } from "@/api/new-file/05again";
import { outControlSaveList,outControlSaveLists } from "@/api/new-file/06outContrl";
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
      console.log(this.$store.state.step.stepStatus)
      vm.$emit("blur", "saveEvent");
      // 上面两个表单数据
      console.log("获取数据了", this.$store.state.step.findData);
      if(this.$store.state.step.stepStatus == 0){
        this.findSave(id);
      }else if(this.$store.state.step.stepStatus == 1){
        this.dealSave(id);
      }else if(this.$store.state.step.stepStatus == 2){
        this.treatSave(id);
      }else if(this.$store.state.step.stepStatus == 3){
        this.helpSave(id);
      }else if(this.$store.state.step.stepStatus == 4){
        this.againTreatSave(id);
      }else if(this.$store.state.step.stepStatus == 5){
        this.cureSave(id);
      }
    },

    // 01发现保存
    findSave(id) {
      console.log('findsave')
      console.log(this.$store.state.step.findStatus)
      // if (this.$store.state.findStatus) {
        let obj={
          "id":"222",
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
          
          console.log(data)

          obj.archivesId = "",
          obj.patientName = data.patientName;
          obj.patientSex = data.sex;
          obj.patientCode = data.IdNumber;
          obj.type = data.status;
          obj.patientCompany = data.employer;
          obj.patientTel = data.patient;
          obj.patientRusticate = data.village;
          obj.patientPolice = data.police;
          obj.isforeign = data.foreigner;
          obj.foreignHandle = data.processingMethod;
          obj.patientAddr = data.patientAddress;
          obj.patientStatus1 = data.patientCondition;
          obj.patientStatus2 = data.risk;
          obj.guardianName = data.guardianName;
          obj.guardianRel = data.relationship;
          obj.guardianCompany = data.guardianUnit;
          obj.guardianTel = data.guardianPhone;
          obj.causeTrouble = data.anecdote;
          obj.isfocal=data.isfocal;  

          obj.tFiles = data.uploadFiles;

          id==1?findSaveList(obj).then(res=>{
            console.log(res)  
            this.$store.state.step.archivesId = res.data.id;
            this.$store.state.step.findData.basicInformation.code = res.data.code;
            this.$store.state.step.findData.basicInformation.status = res.data.status;
            this.$store.state.step.findData.basicInformation.name = res.data.name;
            this.$store.state.step.findData.basicInformation.checkin_dept = res.data.checkin_dept;
            this.$store.state.step.findData.basicInformation.createDate = res.data.createDate;

          }):findSaveLists(obj).then(res=>{
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
    dealSave(id) {
      // if (this.$store.state.step.dealStatus) {
        console.log(this.$store.state.step.archivesId)
        console.log(this.$store.state.step.archivesId)

          let obj={
            "archivesId": this.$store.state.step.archivesId,
            "bIstreat":"123",
            "bIswilltreat":"0",
            "bDoRemarks":"222222222222222222",
            "fristRemarks":"0",
            "secondRemarks":"0",
            "thirdRemarks":"13222222222",
            "type": this.$store.state.step.isLocal,
            "wType": this.$store.state.step.isLocal,
            "tFiles":"asdfsdf",                      
          }
          


          // 左边后台接口名称，右边本地命名（表单、通信vuex）

          let vx_data_outside=this.$store.state.step.dealData.formData;
          obj.wCompanyName = vx_data_outside.name;
          obj.wCompanyLeader = vx_data_outside.principal;
          obj.wCompanyTel = vx_data_outside.phone;
          obj.wCompanyContactTime = vx_data_outside.contactTime;
          obj.wDoRemarks = vx_data_outside.description;

          obj.tFiles = vx_data_outside.uploadFiles;

          id==1?dealSaveList(obj).then(res=>{
            console.log(res)
          }):dealSaveLists(obj).then(res=>{
            console.log(res)
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 03评定治疗保存
    treatSave(id) {
      // if (this.$store.state.step.treatStatus) {
         
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

          let data=this.$store.state.step.treatData;

          console.log(data.formPatientZhuyuan)
          formPatientInfo.patientLevel = data.formPatientLevel.status;          
          formPatientInfo.hospitalName = data.formPatientLevel.hospital;
          formPatientInfo.doctorName = data.formPatientLevel.doctor;
          formPatientInfo.doctorTel = data.formPatientLevel.phone;
          formPatientInfo.doctorEvtime = data.formPatientLevel.time;
          formPatientInfo.levelRemark = data.formPatientLevel.description;
          formPatientInfo.tFiles = data.formPatientLevel.uploadFiles;

          formPatientInfo.tTreatRecords = data.formPatientTreat.concat(data.formPatientZhuyuan);
                
          id==1?treatSaveList(formPatientInfo).then(res=>{
            console.log("保存成功")
          }):treatSaveLists(formPatientInfo).then(res=>{
            console.log("保存成功")
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 04四帮一保存
    helpSave(id) {
      // if (this.$store.state.step.helpStatus) {  

          let dataInfo = {
            "archivesId": this.$store.state.step.archivesId,
            "gridUserId": "zjjjz",
            "policeUserId": "1",
            "doctorUserId": "sdssss",
            "guardianName": "daadadsa",
            "guardianRel": "daadadsa",
            "guardianBankCardNumber": "daadadsa",
            "guardianTelephone": "daadadsa",
            "tHelpRecordsList": [{
              "isubsidy": "0",
              "istilltreat": "0",
              "isguardianduty": "0",
              "causeTrouble": "sjsjsjjs",
              "recureinfo": "ssss",
              "archivesId": "56",
              "type": "3",
              "tFiles": []
            },
            {
              "isubsidy": "0",
              "istilltreat": "0",
              "isguardianduty": "0",
              "causeTrouble": "sjsjsjjs",
              "recureinfo": "ssss",
              "archivesId": "56",
              "type": "3",
              "tFiles": []
            }]
          }          

          let data=this.$store.state.form;
          
          dataInfo.gridUserId = data.cadre.userId;
          dataInfo.policeUserId = data.police.userId;
          dataInfo.doctorUserId = data.doctor.userId;
          dataInfo.guardianName = data.guardian.name;
          dataInfo.guardianTelephone = data.guardian.phone;
          dataInfo.guardianRel = data.guardian.relationship;
          dataInfo.guardianBankCardNumber = data.guardian.banNumber;
          dataInfo.tHelpRecordsList = data.cadreList.concat(data.policeList).concat(data.doctorList).concat(data.guardianList);

          id==1?helpSaveList(dataInfo).then(res=>{
            console.log(res)
          }):helpSaveLists(dataInfo).then(res=>{
            console.log(res)
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 05再次评定保存
    againTreatSave(id) {
      // if (this.$store.state.step.againTreatStatus) {
          let formPatientLevel={
            "archivesId": "272",
            "patientLevel":"123",
            "hospitalName":"0",
            "doctorName":"222222222222222222",
            "doctorTel":"0",
            "doctorEvtime":"0",
            "levelRemark":"13222222222",
            "tFiles":[],          
          }

          console.log(this.$store.state.step.againTreatData.formPatientLevel)

          let dataLevel=this.$store.state.step.againTreatData.formPatientLevel;
          formPatientLevel.patientLevel = dataLevel.status;
          formPatientLevel.hospitalName = dataLevel.hospital;
          formPatientLevel.doctorName = dataLevel.doctor;
          formPatientLevel.doctorTel = dataLevel.phone;
          formPatientLevel.doctorEvtime = dataLevel.date;
          formPatientLevel.levelRemark = dataLevel.description;
          formPatientLevel.tFiles = dataLevel.uploadFiles;                 

          id==1?againSaveList(formPatientLevel).then(res=>{
            console.log("保存成功")
          }):againSaveLists(formPatientLevel).then(res=>{
            console.log("保存成功")
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },
    // 06脱离管控保存
    cureSave(id) {
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
                      "patientRemarks": "sssss",
                      "uploadFiles": []
                  }
              ]
          }

          let data=this.$store.state.step.outControlData;
          
          console.log(data.formPatientRecorder)

          RecorderList.tCuteRecordsList = data.formPatientRecorder;        

          id==1?outControlSaveList(RecorderList).then(res=>{
            console.log(res)  
          }):outControlSaveLists(RecorderList).then(res=>{
            console.log(res)  
          })
          console.log("可以掉接口保存");
      // } else {
      //   console.error("不可以保存");
      // }
    },    
    // 转发
    pushFunc() {
      this.modalStatus=true;
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
