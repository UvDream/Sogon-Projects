/*
 * @Author: wangzhongjie
 * @Date: 2019-10-12 10:37:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-14 09:11:56
 * @Description:控制真实数据和人工数据
 * @Email: UvDream@163.com
 */
export default {
  data() {
    return {
      data: 0,
      disabled: true
    };
  },
  watch: {
    data: function(val) {
      val == 0 ? (this.disabled = true) : (this.disabled = false);
    }
  },
  methods: {
    // 单选按钮状态改变
    checkChangeFunc(val, index) {
      this.numberList[index].check = val;
      this.findCheck();
    },
    // 检测全选状态
    findCheck() {
      this.numberList.every(item => {
        return !item.check;
      })
        ? (this.checkStatus = 0)
        : "";
      this.numberList.every(item => {
        return item.check;
      })
        ? (this.checkStatus = 2)
        : "";
    },
    // 全选状态获取
    checkStatusFunc(val) {
      this.numberList.forEach(item => {
        item.check = val;
      });
    }
  }
};
