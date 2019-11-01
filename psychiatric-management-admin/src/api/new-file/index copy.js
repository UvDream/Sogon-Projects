import fetch from "../fetch";
import Cookies from 'js-cookie'

// 评定治疗-病患危险等级
export const treatSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

// 评定治疗-病患治疗等级
export const treatSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

// 评定治疗-病患治疗等级-删除该条记录
export const treatSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};


