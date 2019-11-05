import fetch from "../fetch";
import Cookies from 'js-cookie'

// 再次评定
export const againSaveList = data => {
    return fetch({
      url: "/jsbrgl/reEvaluateController/saveEvaluateController",
      method: "POST",
      data,
      headers: { 
        "Content-Type": "application/json"
      }
    });
  };

  export const againSaveLists = data => {
    return fetch({
      url: "/jsbrgl/reEvaluateController/saveEvaluateController",
      method: "POST",
      data,
      headers: { 
        "Content-Type": "application/json"
      }
    });
  };