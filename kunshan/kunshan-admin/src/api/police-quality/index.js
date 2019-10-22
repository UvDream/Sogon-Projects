/*
 * @Author: wangzhongjie
 * @Date: 2019-10-16 15:20:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 08:40:40
 * @Description:警情质态
 * @Email: UvDream@163.com
 */
import fetch from "../request";

//警情质态/警情质态分析
export const checkPolice = data => {
  return fetch({
    url: "/manager/quality/policeQualityAna",
    // url: "index.json",
    // method: "GET",
    method: "POST",
    data
  });
};
// 保存警情质态
export const savePolice = data => {
  return fetch({
    url: "/manager/quality/savePoliceQualityAna",
    method: "POST",
    data
  });
};

// 警情情况
export const checkHappen = data => {
  return fetch({
    url: "/manager/quality/warningSituation",
    method: "POST",
    data
  });
};
export const saveHappen = data => {
  return fetch({
    url: "/manager/quality/saveWarningSituation",
    method: "POST",
    data
  });
};

// 异常报警

export const checkAbnormal = data => {
  return fetch({
    url: "/manager/quality/errorCall",
    method: "POST",
    data
  });
};
export const saveAbnormal = data => {
  return fetch({
    url: "/manager/quality/errorCall",
    method: "POST",
    data
  });
};
// 警情分布
export const checkDis = data => {
  return fetch({
    url: "/manager/quality/warningDistribution",
    method: "POST",
    data
  });
};
export const saveDis = data => {
  return fetch({
    url: "/manager/quality/warningDistribution",
    method: "POST",
    data
  });
};
