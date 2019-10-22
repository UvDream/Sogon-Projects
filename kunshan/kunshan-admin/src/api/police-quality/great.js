/*
 * @Author: wangzhongjie
 * @Date: 2019-10-16 15:20:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 09:38:36
 * @Description:警情质态
 * @Email: UvDream@163.com
 */
import fetch from "../request";

// 巡逻盘查
export const checkGreat = data => {
  return fetch({
    url: "/manager/quality/majorWarning",
    method: "POST",
    data
  });
};
// 保存重大警情
export const saveGreat = data => {
  return fetch({
    url: "/manager/quality/saveMajorWarning",
    method: "POST",
    data
  });
};
