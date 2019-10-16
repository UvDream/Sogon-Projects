/*
 * @Author: wangzhongjie
 * @Date: 2019-10-16 15:20:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-16 16:12:04
 * @Description:警情质态
 * @Email: UvDream@163.com
 */
import fetch from "../request";
import qs from "qs";
// 巡逻盘查
export const checkGreat = data => {
  return fetch({
    url: "/manager/quality/majorWarning",
    method: "POST",
    data: qs.stringify(data)
  });
};
// 保存
export const savePolice = data => {
  return fetch({
    url: "/manager/pi/xlpczt",
    method: "POST",
    data: qs.stringify(data)
  });
};
