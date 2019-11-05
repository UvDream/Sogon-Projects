const step = {
  state: {
    // 是否·本地·
    isLocal:0,
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
    archivesId: "276",
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
      formPatientLevel: {
        status:"12",
        hospital:"12",
        doctor:"12",
        phone:"12",
        time:"12",
        description:"12",
        uploadFiles:[]
      },
      formPatientTreat: [
        {
          id: "9",
          patientHospital: null,
          patientDoctor: null,
          doctorTel: null,
          treatTime: null,
          checkinTime: null,
          checkoutTime: null,
          treatRemark: null,
          fileCode: "1572874968047",
          treatId: "",
          type: "0",
          tFiles: []
        }
      ],
      formPatientZhuyuan: [
        {
          id: "9",
          patientHospital: null,
          patientDoctor: null,
          doctorTel: null,
          treatTime: null,
          checkinTime: null,
          checkoutTime: null,
          treatRemark: null,
          fileCode: "1572874968047",
          treatId: "",
          type: "0",
          tFiles: []
        }
      ],
      formPatientInfo: {
        // "id": "12",
        archivesId: "",
        patientLevel: "1",
        hospitalName: "cdhjas",
        doctorName: "xasxas",
        doctorTel: "1111111",
        doctorEvtime: null,
        levelRemark: "sajdakdhask",
        tFiles: [],
        tTreatRecords: [
            {
                id: "9",
                patientHospital: null,
                patientDoctor: null,
                doctorTel: null,
                treatTime: null,
                checkinTime: null,
                checkoutTime: null,
                treatRemark: null,
                fileCode: "1572874968047",
                treatId: "",
                type: "0",
                tFiles: []
            },
            {
                id: "9",
                patientHospital: null,
                patientDoctor: null,
                doctorTel: null,
                treatTime: null,
                checkinTime: null,
                checkoutTime: null,
                treatRemark: null,
                fileCode: "1572874968047",
                treatId: "",
                type: "1",
                tFiles: []
            }
        ]
      }
    },
    // ---04四帮一页面
    helpData: {
      cjgbbfData: {
        name:"",
        department:"",
        IdNumber:"",
        phone:""       
      },
      jhmjbfData: {
        hospital: "",
        doctors: "",
        phone: "",
        dischargeTime: "",
        recording: "",
        uploadFiles: []
      },
      
    },    
    // ---05再次评定页面
    againTreatData: {
      formPatientLevel: {
        status:"",
        hospital:"",
        doctor:"",
        phone:"",
        time:"",
        description:"",
        uploadFiles:""
      },
    },
    // ---06脱离管控
    outControlData: {
      formPatientRecorder: [
        {
          patientCuteDate:"",
          patientCuteType:"",
          patientCompany:"",
          patientRemarks:"",
        }
      ]
    }
  }
};
export default step;
