import fetch from "../request";
import qs from "qs";
// 巡逻盘查
export const checkPatrol = data => {
  return fetch({
    url: "/manager/pi/xlpczt",
    method: "POST",
    data: qs.stringify(data)
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/pi/xlpczt",
    method: "POST",
    data: qs.stringify(data)
  });
};
