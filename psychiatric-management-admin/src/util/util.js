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

// 时间格式化
export function formatDate (date, fmt) {
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
  }
  return fmt
}