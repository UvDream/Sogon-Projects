const step = {
  state: {        
    // 是否·本地·
    isForeign:0,
    // 步骤状态
    stepStatus: 0,
    // 01发现页面
    findStatus: true,
    // 02初步处理页面
    dealStatus: false,
    // 03评定治疗页面
    treatStatus: false,
    // 04四帮一页面
    helpStatus: false,
    // 05再次评定页面
    againTreatStatus: false,
    // 06再次评定页面
    outControlStatus: false,
    // archivesId
    archivesId: "",
    // 是否有权限
    authOnOff: 1,
    // 转发部门
    ruleForm: {
      forward: [
        { deptId: "1"}
      ]
    },
    // ---01发现页面
    findData: {
      id: "",
      basicInformation: {
        code: "",
        status: "",
        name: "",       
        checkin_dept: "",
        createDate: "",       
      },
      checkRegistration: {
         // 1
         id: "",
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
         uploadFiles: []
      }
    },
    // ---02初步处理页面
    dealData: {
      id: "",
      formData: {
        isTreatment: "",
        isTreatmentDescription: "",
        firstVisit: "",
        secondVisit: "",
        thirdVisit: "",
        uploadFiles: [],
        type: "0",
        wType: "0",
      }
    },
    // ---03评定治疗页面
    treatData: {
      id: "",
      formPatientLevel: {
        status:"",
        hospital:"",
        doctor:"",
        phone:"",
        time:"",
        description:"",
        uploadFiles:[]
      },
      formPatientTreat: [
        {
          id: "",
          patientHospital: null,
          patientDoctor: null,
          doctorTel: null,
          treatTime: null,
          checkinTime: null,
          checkoutTime: null,
          treatRemark: null,
          fileCode: "",
          treatId: "",
          type: "0",
          tFiles: []
        }
      ],
      formPatientZhuyuan: [
        {
          id: "",
          patientHospital: null,
          patientDoctor: null,
          doctorTel: null,
          treatTime: null,
          checkinTime: null,
          checkoutTime: null,
          treatRemark: null,
          fileCode: "",
          treatId: "",
          type: "0",
          tFiles: []
        }
      ],
    },

    // ---05再次评定页面
    againTreatData: {
      id: "",
      formPatientLevel: {
        status:"",
        hospital:"",
        doctor:"",
        phone:"",
        date:"",
        description:"",
        uploadFiles:[]
      },
    },
    // ---06脱离管控
    outControlData: {
      id: "",
      formPatientRecorder: [
        {
          patientCuteDate:"",
          patientCuteType:"",
          patientCompany:"",
          patientRemarks:"",
          uploadFiles:""
        }
      ]
    }
  }
};
export default step;
