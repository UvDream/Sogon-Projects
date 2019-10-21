import fetch from "../request";
 
// 查询布控情况数据
export const checkData = data => {
  return fetch({
    url: "/manager/earlyWarning/searchbkqk",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/earlyWarning/savebkqk",
    method: "POST",
    data
  });
};
