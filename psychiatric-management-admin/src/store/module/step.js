const step = {
  state: {
    // 步骤状态
    stepStatus: 0,
    // 发现页面
    findStatus: false,
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
    treatmentData: {
      formLocal: {
        name:"",
        principal:"",
        phone:"",
        contactTime:"",
        description:"",
      },
      formOutside: {
        isTreatment: "",
        isTreatmentDescription: "",
        firstVisit: "",
        secondVisit: "",
        thirdVisit: "",
        uploadFiles: ""
      },
    },
    evaluateData: {
      formPatientLevel: {
        status:"",
        hospital:"",
        doctor:"",
        phone:"",
        date:"",
        description:"",
        uploadFiles:""
      },
      formPatientTreat: {
        hospital:"",
        doctor:"",
        phone:"",
        time:"",
        description:""
      },
      formPatientZhuyuan: {
        hospital:"",
        doctor:"",
        phone:"",
        time:"",
        description:""
      },
    }
  }
};
export default step;
