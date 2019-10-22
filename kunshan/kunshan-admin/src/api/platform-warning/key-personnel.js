import fetch from "../request";
 
// 查询重点人员情况数据
export const checkData = data => {
  return fetch({
    url: "/manager/earlyWarning/keyPerson",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/earlyWarning/saveKeyPerson",
    method: "POST",
    data
  });
};
