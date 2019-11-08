import api from "@/api/modal";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    // 保存/转发
    // saveFunc(id) {
    //   let type = 0;
    //   console.log("保存转发", id, type);
    //   //   判别保存和保存并且转发
    //   id === 1 ? (type = 1) : (type = 2);
    //   console.log(type);
    //   this.handleSubmit("handleSubmit");
    // }
    saveForward(obj) {
      if(this.$route.name=="newFile"){
        obj.archivesId=this.$store.state.step.archivesId
      }
      api.forward(obj).then(res=>{
        console.log(this.$route)
        this.$Message.success("转发成功!");
        this.$store.state.step.stepStatus < 5
        ? (this.$store.state.step.stepStatus =
            this.$store.state.step.stepStatus + 1)
        : "";
        // this.$emit('closemodal');
        this.modal=false
      })
    },
    saveFinish() {
      let obj = {
        tArchiveId:this.indexId,
        remarks:this.formValidate.remarks,
        tFilesList:this.formValidate.uploadFiles
      };
      if(this.$route.name=="newFile"){
        obj.tArchiveId=this.$store.state.step.archivesId;
      }
      api.finish(obj).then(res=>{
        if(res.success==true){
          this.$Message.success(res.msg);
          // this.$emit('closemodal');
          this.modal=false;
        };
      })
    },
    //退回
    saveBack() {
      let obj = {
        tArchiveId:this.indexId,
        remarks:this.formValidate.remarks,
        curPositionid:this.curPositionid,
        tFilesList:this.formValidate.uploadFiles
      };
      if(this.$route.name=="newFile"){
        obj.tArchiveId=this.$store.state.step.archivesId;
      }
      api.back(obj).then(res=>{
        if(res.success==true){
          this.modal=false
          this.$store.state.step.authOnOff = res.data;
          this.$Message.success("退回成功！");
        }
      })
    },
    startUp() {
      let obj = {
        tArchiveId:this.indexId,
        tFilesList:this.formValidate.uploadFiles
      };
      api.startUp(obj).then(res=>{
        if(res.success==true){
          this.$store.state.step.authOnOff = res.data;
          alert(res.data)
          this.$Message.success("启动成功！");
        }else{
          this.$Message.success(res.msg);
        }
        // this.$emit('closemodal');
        this.modal=false
      })
    }
  }
};
