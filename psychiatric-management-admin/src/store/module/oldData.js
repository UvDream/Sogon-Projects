const oldData = {
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
    // 是否有权限
    authOnOff: 1,
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
         id: "222",
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
        name:"",
        principal:"",
        phone:"",
        contactTime:"",
        description:"",
        id:"",
      }
    },
    // ---03评定治疗页面
    treatData: {
      id: "",
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
    },
    // ---04四帮一页面
    // helpData: {      
    //   // 村居干部帮扶
    //   cjgbbf: {
    //     guardianRel:"",
    //     relationship:"",
    //     banNumber:"",
    //     phone:"",
    //   },
    //   // 监护民警帮扶 
    //   jhmjbf: {
    //     guardianRel:"",
    //     relationship:"",
    //     banNumber:"",
    //     phone:"",
    //   },
    //   // 防治医生帮扶
    //   fzysbf: {
    //     guardianRel:"",
    //     relationship:"",
    //     banNumber:"",
    //     phone:"",
    //   },
    //   // 监护人监护
    //   jhrjh: {
    //     guardianRel:"",
    //     relationship:"",
    //     banNumber:"",
    //     phone:"",
    //   },      
    //   cadreList: [
       
    //   ],
    //   policeList: [
        
    //   ],
    //   doctorList: [
       
    //   ],
    //   guardianList: [
       
    //   ]
    // },    
    // ---05再次评定页面
    againTreatData: {
      id: "",
      formPatientLevel: {
        status:"",
        hospital:"222",
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
          tFiles:""
        }
      ]
    }
  }
};
export default oldData;
