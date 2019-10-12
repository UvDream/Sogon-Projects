/*
 * @Author: wangzhongjie
 * @Date: 2019-10-12 10:37:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 10:50:27
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
  methods: {}
};
