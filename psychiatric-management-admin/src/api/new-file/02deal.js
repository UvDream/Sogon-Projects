import fetch from "../fetch";
import Cookies from 'js-cookie'

// 初步处理
export const dealSaveList = data => {
  return fetch({
    url: "/jsbrgl/evaluateArchivesController/saveEvaluate",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};
export const dealSaveLists= data => {
  return fetch({
    url: "/jsbrgl/evaluateArchivesController/saveEvaluate",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};
