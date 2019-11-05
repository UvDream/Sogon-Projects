import fetch from "../fetch";
import Cookies from 'js-cookie'

// 评定治疗-病患危险等级
export const levelSaveList = data => {
  return fetch({
    url: "/jsbrgl/treatmentController/saveTreat",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

// 评定治疗-病患住院记录
export const histroyLiveSaveList = data => {
  return fetch({
    url: "/jsbrgl/treatmentController/deleteTreat",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

