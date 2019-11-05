import fetch from "../fetch";
import Cookies from 'js-cookie'

// 评定治疗

export const treatSaveList = data => {
  return fetch({
    url: "/jsbrgl/treatmentController/saveTreat",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

export const treatSaveLists = data => {
  return fetch({
    url: "/jsbrgl/treatmentController/saveTreat",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};