/*
 * @Author: wangzhongjie
 * @Date: 2019-10-14 16:17:33
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-15 14:55:10
 * @Description:公用方法
 * @Email: UvDream@163.com
 */

//  清空数组对象指定的键的值
export const EmptyObjVal = (array, obj) => {
  array.forEach(element => {
    element[obj] = "";
  });
};
// 取出数组中满足要求键值的对象
export const DeleteEmptyArray = (array, obj, val) => {
  let arr = [];
  array.forEach(item => {
    if (item[obj] != val) {
      arr.push(item);
    }
  });
  return arr;
};
// 判断键值对是否为空
export const EmptyArray = (array, obj) => {
  return array.every(item => {
    return item[obj] == "";
  });
};
