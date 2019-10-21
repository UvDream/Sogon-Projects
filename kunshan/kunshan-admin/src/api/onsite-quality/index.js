import fetch from "../request";

// 查询现场勘测质态
export const checkData = data => {
  return fetch({
    url: "/manager/is/kyxczt",
    method: "POST",
    data
  });
};
// 保存
export const saveList = data => {
  return fetch({
    url: "/manager/is/savekyxczt",
    method: "POST",
    data
  });
};
