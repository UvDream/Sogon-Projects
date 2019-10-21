import fetch from "../request";
 
// 查询一案一档一研判数据
export const checkData = data => {
  return fetch({
    url: "/manager/ocof/yaydyyp",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/ocof/saveyaydyyp",
    method: "POST",
    data: qs.parse(data),
    headers: {"Content-Type":"application/json"}
  });
};
