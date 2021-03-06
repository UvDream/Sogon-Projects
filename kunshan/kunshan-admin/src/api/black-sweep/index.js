import fetch from "../request";

// 查询扫黑专项斗争数据
export const checkData = data => {
  return fetch({
    url: "/manager/againstCrime/situation",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/againstCrime/saveSituation",
    method: "POST",
    data,
    headers: { "Content-Type": "application/json" }
  });
};
