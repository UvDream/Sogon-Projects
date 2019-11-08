import api from "@/api/file-manage";
export default {
  data() {
    return {
      indexId:0,
      statusObj:{
        curPosit:"",
        deptName:""
      },
      flowList:[],
      modalForward:false,
      modalFlow:false,
      modalSetUp:false,
      modalReturn:false,
      modalStartUp:false,
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
      {beginCreateDate:null},
      {endCreateDate: null},
      {pageNum:this.pageNum},
      {pageSize:this.pageSize}
    );
    this.searchFunc(obj);
  },
  methods: {
    startTimeChange(e){
      this.formInline.beginCreateDate = e == "" ? null : new Date(e);
    },
    endTimeChange(e){
      this.formInline.endCreateDate = e == "" ? null : new Date(e);
    },
    //取消
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    //搜索
    search() {
      let obj = Object.assign(
        this.formInline,
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
    //全选中
    handleSelectAll (status) {
      this.$refs.section.selectAll(status);
    },
    //选中变化
    Modulechange(section){
      this.selectList = section;
      console.log(this.selectList);
    },
        //删除
    handledelete (id, index) {
      let _this = this;
      _this.$Modal.confirm({
        title:'删除',
        content:'确认删除?',
        onOk: () => {
          let arr = [id];
          api.deleteData({ids:arr}).then(res =>{
            console.log(res);
            _this.tabList.splice(index, 1);
            _this.$Message.success("删除成功!");
          })
        }
      });
    },
    handleDeleteAll() {
      var _this = this;
      if(this.selectList.length==0){
        this.$Message.error('请至少选中一项')
      }else{
        //操作
        let arr = [];
        arr = this.selectList.map((item)=>{
          return item.id
        });
        console.log(arr);
        api.deleteData({ids:arr}).then(res => {
          console.log(res);
          let obj = Object.assign(
            _this.formInline,
            {pageNum:this.pageNum},
            {pageSize:this.pageSize}
          );
          _this.searchFunc(obj);
          _this.$Message.success("删除成功!");
        });
      }
    },
    //转发
    handleforward(id,index) {
      //判断是否填写资料
      api.isSave({tArchiveId:id}).then(res=>{
        if(res.success==true){
          this.indexId = id;
          this.modalForward = true;
        }else{
          this.$Message.success("资料填写不完整，请先至档案处填写完整!");
        }
      });
    },
    //退回
    handlereturn(id,index) {
      this.indexId = id;
      api.backDept({tArchivesId:id}).then(res=>{
        if(res.success==true){
          this.statusObj = {
            curPosit:res.data.curPosit,
            deptName:res.data.deptName
          };
          this.modalReturn = true;
        }
      })
    },
    //办结
    handlesetup(id,index) {
      api.isSave({tArchiveId:id}).then(res=>{
        if(res.success==true){
          this.indexId = id;
          this.modalSetUp = true;
        }else{
          this.$Message.success("资料填写不完整，请先至档案处填写完整!");
        }
      });
    },
    //启动
    handlestart(id,index) {
      this.indexId = id;
      this.modalStartUp = true;
    },
    //推送
    handlepush(id,index) {
      api.pushMessage({tArchiveId:id}).then(res => {
        console.log(res);
        if(res.success==true){
          _this.$Message.success("信息推送成功!");
          let obj = Object.assign(
            _this.formInline,
            {pageNum:this.pageNum},
            {pageSize:this.pageSize}
          );
          _this.searchFunc(obj);
        }
      });
    },
    //查看流程图
    handleStatus(id,index) {
      api.flow({archivesId:id}).then(res=>{
        if(res.success==true){
          this.indexId = id;
          this.flowList = res.data;
          this.modalFlow = true;
        }
      })
    },
    pageChange(cur) {
      this.pageNum = cur;
      let obj = Object.assign(
        this.formInline,
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    },
    pageSizeChange(pagesize) {
      this.pageSize = pagesize;
      let obj = Object.assign(
        this.formInline,
        {pageNum:this.pageNum},
        {pageSize:this.pageSize}
      );
      this.searchFunc(obj);
    }
  }
};
