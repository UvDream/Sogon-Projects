import fetch from "../request";
 
// 查询侵财关注人员维护、预警处置情况
export const checkData = data => {
  return fetch({
    url: "/manager/earlyWarning/searchqcgzrywhyjczqk",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/earlyWarning/saveqcgzrywhyjczqk",
    method: "POST",
    data
  });
};
