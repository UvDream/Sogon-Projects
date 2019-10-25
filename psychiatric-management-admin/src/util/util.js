/*
 * @Author: wangzhongjie
 * @Date: 2019-10-25 11:38:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 11:39:42
 * @Description:手机号验证
 * @Email: UvDream@163.com
 */
export const validatePhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("手机号不能为空"));
  } else if (!/^1[34578]\d{9}$/.test(value)) {
    callback("手机号格式不正确!");
  } else {
    callback();
  }
};
