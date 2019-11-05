const form = {
  state: {
    //   村居干部帮扶
    cadre: {
      name:"",
      department:"",
      IdNumber:"",
      phone:""
    },
    // 列表信息
    cadreSelect: {
      name:"",
      department:"",
      IdNumber:"",
      phone:""
    },
    cadreList: [
      {
        helpDate: "2019"
      },
      {
        helpDate: "222"
      }
    ],
    // 监护民警帮扶
    police: {
      name:"",
      department:"",
      IdNumber:"",
      phone:""
    },
    policeSelect: {},
    policeList: [
      {
        helpDate: "2020"
      }
    ],
    // 医生帮扶
    doctor: {
      name:"",
      department:"",
      IdNumber:"",
      phone:""
    },
    doctorSelect: {},
    doctorList: [
      {
        helpDate: "2021"
      }
    ],
    // 监护人监护
    guardian: {
      name:"",
      relationship:"",
      banNumber:"",
      phone:""
    },
    guardianSelect: {},
    guardianList: [
      {
        helpDate: "2022"
      }
    ]
  }
};
export default form;
