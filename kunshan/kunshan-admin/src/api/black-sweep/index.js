import fetch from "../request";
import qs from "qs";
// 查询扫黑专项斗争数据
export const checkData = data => {
  return fetch({
    url: "/manager/againstCrime/situation",
    method: "POST",
    data: qs.stringify(data)
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/againstCrime/saveSituation",
    method: "POST",
    data: qs.parse(data),
    headers: {"Content-Type":"application/json"}
  });
};
