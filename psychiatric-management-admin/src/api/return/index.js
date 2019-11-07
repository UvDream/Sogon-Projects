import fetch from "../fetch";
// 退回
export const returnSaveList = data => {
  return fetch({
    url: "/jsbrgl/functionController/backDept",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};
