import fetch from "../request";
 
// 值班情况
export const checkOnDuty = data => {
  return fetch({
    url: "/manager/onDuty/personnalList",
    method: "POST",
    data
  });
};
// 保存
export const saveDuty = data => {
  return fetch({
    url: "/manager/onDuty/savePersonnalList",
    method: "POST",
    data
  });
};
