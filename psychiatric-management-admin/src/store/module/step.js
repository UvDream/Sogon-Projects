const step = {
  state: {
    // 步骤状态
    stepStatus: 0,
    // 01发现页面
    findStatus: false,
    // 02初步处理页面
    dealStatus: false,
    // 03评定治疗页面
    evaluateStatus: false,
    // 04四帮一页面
    helpStatus: false,
    // 05再次评定页面
    againStatus: false,
    // ---01发现页面
    findData: {
      basicInformation: {
        code: "",
        status: "",
        name: "",       
        checkin_dept: "",
        createDate: "",       
      },
      checkRegistration: {
         // 1
         patientName: "",
         sex: "",
         IdNumber: "",
         status: "",
         // 2
         employer: "",
         patient: "",
         village: "",
         police: "",
         // 3
         foreigner: "",
         processingMethod: "",
         patientAddress: "",
         // 4
         patientCondition: "",
         risk: "",
         // 5
         guardianName: "",
         relationship: "",
         guardianUnit: "",
         guardianPhone: "",
         // 6
         anecdote: "",
         uploadFiles: [{"filepath":"D://file"},{"filepath":"D://Filetwo"}]
      }
    },
    // ---02初步处理页面
    dealData: {
      formLocal: {
        isTreatment: "",
        isTreatmentDescription: "",
        firstVisit: "",
        secondVisit: "",
        thirdVisit: "",
        uploadFiles: ""
      },
      formOutside: {
        name:"",
        principal:"",
        phone:"",
        contactTime:"",
        description:"",
        uploadFiles:"",
        archivesId:""
      },
    },
    // ---03评定治疗页面
    treatData: {
      formPatientLevel: {
        status:"",
        hospital:"",
        doctor:"",
        phone:"",
        time:"",
        description:"",
        uploadFiles:""
      },
      formPatientTreat: {
        hospital: "",
        doctors: "",
        phone: "",
        dischargeTime: "",
        recording: "",
        uploadFiles: ""
      },
      formPatientZhuyuan: {        
        more: [
          {
            hospital: "",
            doctors: "",
            hospitalStay: "",
            dischargeTime: "",
            recording: "",
            uploadFiles: ""
          },
          {
            hospital: "",
            doctors: "",
            hospitalStay: "",
            dischargeTime: "",
            recording: "",
            uploadFiles: ""
          }
        ]
      },
    },
    // ---04四帮一页面
    treatData: {
      formPatientLevel: {
        status:"",
        hospital:"",
        doctor:"",
        phone:"",
        time:"",
        description:"",
        uploadFiles:""
      },
      formPatientTreat: {
        hospital: "",
        doctors: "",
        phone: "",
        dischargeTime: "",
        recording: "",
        uploadFiles: ""
      },
      formPatientZhuyuan: {        
        more: [
          {
            hospital: "",
            doctors: "",
            hospitalStay: "",
            dischargeTime: "",
            recording: "",
            uploadFiles: ""
          },
          {
            hospital: "",
            doctors: "",
            hospitalStay: "",
            dischargeTime: "",
            recording: "",
            uploadFiles: ""
          }
        ]
      },
    }
    // ---05再次评定页面
  }
};
export default step;
