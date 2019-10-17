/*
 * @Author: wangzhongjie
 * @Date: 2019-10-16 15:20:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-17 19:47:51
 * @Description:警情质态
 * @Email: UvDream@163.com
 */
import fetch from "../request";
import qs from "qs";
// 巡逻盘查
export const checkPolice = data => {
  return fetch({
    url: "/manager/quality/policeQualityAna",
    // url: "index.json",
    // method: "GET",
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

// 警情情况
export const checkHappen = data => {
  return fetch({
    url: "/manager/quality/warningSituation",
    method: "POST",
    data: qs.stringify(data)
  });
};

// 异常报警

export const checkAbnormal = data => {
  return fetch({
    url: "/manager/quality/errorCall",
    method: "POST",
    data: qs.stringify(data)
  });
};
