import fetch from "../fetch";
import Cookies from 'js-cookie'
// 发现
export const findSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

// 初步处理
export const dealSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

// 评定治疗
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

// 四帮一
export const forToOneSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};

// 再次评定
export const againSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};