import fetch from "../request";
 
// 巡逻盘查
export const checkPatrol = data => {
  return fetch({
    url: "/manager/pi/xlpczt",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/pi/savexlpczt",
    method: "POST",
    data
  });
};
