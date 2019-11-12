<template>
  <div class="white-block btn" style="height:100px">
    <div>
      <!-- 转发弹窗 -->
      <Forward v-model="modalStatus"  />
      <!-- 办结弹窗 -->
      <SetUp  v-model="setModal"/>
      <!-- 退回弹窗-->
      <Return v-model="returnModal" :statusObj="statusObj"/>
      <Button type="info" @click="cancelFunc">返回列表</Button>
      <Button type="primary" @click="saveFunc(1)" :disabled="auth">保存</Button>
      <Button type="primary" v-if="status==0" @click="saveFunc(2)" :disabled="auth">保存并推送</Button>
      <Button
        type="primary"
        ghost
        @click="pushFunc"
        v-if="status==0 || status ==1 || status==2 || status==3||status==4"        
       :disabled="auth">转发</Button>
      <Button type="primary" v-if=" status ==1 || status==2 ||status==4||status==5" @click="setUpFunc" :disabled="auth">办结</Button>
      <Button
        type="primary"
        ghost
        v-if=" status ==1||status==2 ||status==3 ||status==4||status==5"
        @click="returnFunc"
        :disabled="auth"
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
import { backDept } from "@/api/return/index";
export default {
  computed: {
    status: function() {
      return this.$store.state.step.stepStatus;
    },
    listenAuth() {
      return this.$store.state.step.authOnOff;
    }
  },
  mixins: [mixin],
  data(){
    return{
      auth: false,
      modalStatus:false,
      setModal:false,
      returnModal:false,
      statusObj:{
        curPosit:"",
        deptName:""
      },
    }
  },
  components: {
    Forward,
    SetUp,
    Return
  },
  watch: {
    listenAuth: function(oldVal,newVal){
      this.auth = newVal;
    }
  },
  mounted(){
    console.log(this.auth)
    console.log(this.$store.state.authOnOff )
    if(this.$store.state.authOnOff == 1){
      this.auth = true;
    }else {
      this.auth = false;
    }
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
      if (this.$store.state.step.findStatus) {
        let obj={
          "id":"",
          "patientName":"",
          "patientSex":"",
          "patientCode":"",
          "type":"",
          "patientCompany":"",
          "patientTel":"",
          "patientRusticate":"",
          "patientPolice":"",
          "isforeign":"",
          "foreignHandle":"",
          "patientAddr":"",
          "patientStatus1":"",
          "patientStatus2":"",
          "guardianName":"",
          "guardianRel":"",
          "guardianCompany":"",
          "guardianTel":"",
          "causeTrouble":"",
          "tFiles":[],
          "isfocal":""
          }

          let data=this.$store.state.step.findData.checkRegistration;
          
          console.log(data)

          // obj.archivesId = "",
          
          obj.id = this.$store.state.step.archivesId;
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
            if(res.data.id != undefined){
              this.$store.state.step.archivesId = res.data.id;            
            }
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
      } else {
        console.error("不可以保存");
      }
    },
    // 02初步处理保存
    dealSave(id) {
      // if (this.$store.state.step.dealStatus) {
        console.log(this.$store.state.step.archivesId)
        console.log(this.$store.state.step.archivesId)

          let obj={
            "id":"",
            "archivesId": this.$store.state.step.archivesId,
            "bIstreat":"123",
            "bIswilltreat":"0",
            "bDoRemarks":"222222222222222222",
            "fristRemarks":"0",
            "secondRemarks":"0",
            "thirdRemarks":"13222222222",
            "type": this.$store.state.step.isForeign,
            "wType": this.$store.state.step.isForeign,
            "tFiles":"asdfsdf",                      
          }        

          // 左边后台接口名称，右边本地命名（表单、通信vuex）

          let vx_data_outside=this.$store.state.step.dealData.formData;
          obj.id = this.$store.state.step.dealData.id;
          obj.wCompanyName = vx_data_outside.name;
          obj.wCompanyLeader = vx_data_outside.principal;
          obj.wCompanyTel = vx_data_outside.phone;
          obj.wCompanyContactTime = vx_data_outside.contactTime;
          obj.wDoRemarks = vx_data_outside.description;

          obj.tFiles = vx_data_outside.uploadFiles;


          obj.bIstreat = vx_data_outside.isTreatment;
          obj.bDoRemarks = vx_data_outside.isTreatmentDescription;
          obj.fristRemarks = vx_data_outside.firstVisit;
          obj.secondRemarks = vx_data_outside.secondVisit;
          obj.thirdRemarks = vx_data_outside.thirdVisit;

          id==1?dealSaveList(obj).then(res=>{
            
          }):dealSaveLists(obj).then(res=>{
            
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
            "id": "",
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
          formPatientInfo.id = this.$store.state.step.treatData.id;
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
            "id":"",
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
          dataInfo.id = this.$store.state.form.id;
          dataInfo.gridUserId = data.cadre.userId;
          dataInfo.policeUserId = data.police.userId;
          dataInfo.doctorUserId = data.doctor.userId;
          dataInfo.guardianName = data.guardian.name;
          dataInfo.guardianTelephone = data.guardian.phone;
          dataInfo.guardianRel = data.guardian.relationship;
          dataInfo.guardianBankCardNumber = data.guardian.banNumber;
          data.cadreList.forEach(element => {
            element.type = 0;
          });
          data.policeList.forEach(element => {
            element.type = 1;
          });
          data.doctorList.forEach(element => {
            element.type = 2;
          });
          data.guardianList.forEach(element => {
            element.type = 3;
          });
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
            "id":"",
            "archivesId": this.$store.state.step.archivesId,
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
          formPatientLevel.id = this.$store.state.step.againTreatData.id;
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
              "id":"",
              "archivesId": this.$store.state.step.archivesId,
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

          RecorderList.id = this.$store.state.step.outControlData.id;

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
      console.log(this.$store.state.step.stepStatus)
      console.log(this.$store.state.step.findData.checkRegistration.foreigner)
      if(this.$store.state.step.stepStatus == 0) {      
        if(this.$store.state.step.findData.checkRegistration.foreigner == 1){
          this.$store.state.step.ruleForm.forward = [
            { deptId: "2"}
          ]          
        }else if(this.$store.state.step.findData.checkRegistration.foreigner == 0){
            console.log(this.$store.state.step.findData.checkRegistration.processingMethod)
            if(this.$store.state.step.findData.checkRegistration.processingMethod == 2 || this.$store.state.step.findData.checkRegistration.processingMethod == 3){
                this.$store.state.step.ruleForm.forward = [
                  { deptId: "3"}
                ]
              }else {
                this.$store.state.step.ruleForm.forward = [
                  { deptId: "2"}
                ]
            }
        }
    }else if(this.$store.state.step.stepStatus == 1) {
       this.$store.state.step.ruleForm.forward = [
        { deptId: "3"}
      ]
    }else if(this.$store.state.step.stepStatus == 2) {
       this.$store.state.step.ruleForm.forward = [
        { deptId: "1"},
        { deptId: "2"},
        { deptId: "3"}
      ]
    }else if(this.$store.state.step.stepStatus == 3) {
       this.$store.state.step.ruleForm.forward = [
        { deptId: "3"}
      ]
    }else if(this.$store.state.step.stepStatus == 4) {
       this.$store.state.step.ruleForm.forward = [
        { deptId: "4"}
      ]
    }
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
      this.returnModal=true;
      backDept({tArchivesId:this.$store.state.step.archivesId}).then(res=>{
        if(res.success==true){
          this.statusObj = {
            curPosit:res.data.curPosit,
            deptName:res.data.deptName
          };
        }
      })
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
