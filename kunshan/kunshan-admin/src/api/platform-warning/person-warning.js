import fetch from "../request";
 
// 查询人像卡扣预警数据
export const checkData = data => {
  return fetch({
    url: "/manager/earlyWarning/searchPeopleWarning",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/earlyWarning/savePeopleWarning",
    method: "POST",
    data
  });
};
