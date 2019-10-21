import fetch from "../request";
 
// 查询社会面信息采集
export const checkDataSic = data => {
  return fetch({
    url: "/manager/sic/shmxxcjqk",
    method: "POST",
    data
  });
};
// 保存社会
export const saveListSic = data => {
  return fetch({
    url: "/manager/sic/saveshmxxcjqk",
    method: "POST",
    data
  });
};

// 查询人像核验信息采集
export const checkDataPic = data => {
  return fetch({
    url: "/manager/pctic/rzhyxxcjqk",
    method: "POST",
    data
  });
};
// 保存人像
export const saveListPic = data => {
  return fetch({
    url: "/manager/pctic/saverzhyxxcjqk",
    method: "POST",
    data
  });
};
