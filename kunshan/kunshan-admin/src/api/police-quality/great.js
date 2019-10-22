/*
 * @Author: wangzhongjie
 * @Date: 2019-10-16 15:20:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-21 11:52:17
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
    url: "/manager/pi/xlpczt",
    method: "POST",
    data
  });
};
