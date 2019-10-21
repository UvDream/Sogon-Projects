import fetch from "../request";
 
// 查询车辆卡扣预警数据
export const checkData = data => {
  return fetch({
    url: "/manager/earlyWarning/searchCarWarning",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/earlyWarning/saveCarWarning",
    method: "POST",
    data
  });
};
