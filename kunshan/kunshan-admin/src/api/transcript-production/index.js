import fetch from "../request";
import qs from "qs";
// 笔录制作质态
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


