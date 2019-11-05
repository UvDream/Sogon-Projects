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
      debugger
      api.forward(obj).then(res=>{
        this.$Message.success("转发成功!");
      })
    },
    saveFinish() {
      let obj = {
        tArchiveId:this.indexId,
        remarks:this.formValidate.remarks,
      };
      api.finish(obj).then(res=>{
        this.$Message.success("办结成功!");
      })
    },
    saveBack() {
      let obj = {
        tArchiveId:this.indexId,
        remarks:this.formValidate.remarks,
        curPositionid:this.formValidate.curPositionid
      };
      api.back(obj).then(res=>{
        this.$Message.success("退回成功!");
      })
    },
  }
};
