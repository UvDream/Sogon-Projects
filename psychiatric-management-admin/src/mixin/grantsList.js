import api from "@/api/grants-manage";
export default {
  data() {
    return {
      list: [{
        gridCheck:"通过",//网格员审核  0-通过，1-不通过，2-未审核
        policeCheck:"通过",//社区民警审核
        doctorCheck:"通过",//卫生审核
        checkTime:"2019年11月",
        checkStatus:"",//审核状态
        patientName:"",
        patientCode:"",
        code:"",
        beginCheckDate:null,
        endCheckDate:null
      }],
      modal:false,
      total:0,
      pageNum:1,
      pageSize: 10,
    };
  },
  computed:{
    isRole:function(){
      if( sessionStorage.getItem('role')=="true" ){
        return true;
      }else{
        return false;
      }
    }
  },
  mounted() {
    let obj = Object.assign(
      this.formInline,
      {isTg:this.isTg},
      {beginCheckDate:null},
      {endCheckDate: null},
      {pageNum:this.pageNum},
      {pageSize:this.pageSize}
    );
    this.searchFunc(obj);
  },
  methods: {
    startTimeChange(e){
      this.formInline.beginCheckDate = e == "" ? null : new Date(e);
    },
    endTimeChange(e){
      this.formInline.endCheckDate = e == "" ? null : new Date(e);
    },
    //取消
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    //搜索
    search() {
      let obj = Object.assign(
        this.formInline,
        {isTg:this.isTg},
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    },
    searchFunc(data) {
      api.checkData(data).then(res => {
        if(JSON.stringify(res)=="{}"){
          this.total = 0;
          this.tabList = [];
        }else{
          console.log(res.data);
          this.total = res.data.total;
          this.tabList = res.data.list;
        }
      })
    },
    //查看
    handle(id,index) {
      api.checkOneData({archivesId:id}).then(res=>{
        if(res.success==true){
          this.list = res.data.list;
          this.modal = true;
        }
      })
    },
    pageChange(cur) {
      this.pageNum = cur;
      let obj = Object.assign(
        this.formInline,
        {isTg:this.isTg},
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    },
    pageSizeChange(pagesize) {
      this.pageSize = pagesize;
      let obj = Object.assign(
        this.formInline,
        {isTg:this.isTg},
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    }
  }
};
