import api from "@/api/modal";
export default {
  data() {
    return {};
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
      // debugger
      api.forward(obj).then(res=>{
        if(res.success==true){
          this.$Message.success(res.msg);
          this.$emit('closemodal');
        }
      })
    },
    saveFinish() {
      let obj = {
        tArchiveId:this.indexId,
        remarks:this.formValidate.remarks,
        tFilesList:this.tFilesList
      };
      api.finish(obj).then(res=>{
        if(res.success==true){
          this.$Message.success(res.msg);
          this.$emit('closemodal');
        };
      })
    },
    saveBack() {
      let obj = {
        tArchiveId:this.indexId,
        remarks:this.formValidate.remarks,
        curPositionid:this.formValidate.curPositionid,
        tFilesList:this.tFilesList
      };
      api.back(obj).then(res=>{
        if(res.success==true){
          this.$emit('closemodal');
          this.$Message.success("退回成功！");
        }
      })
    }
  }
};
