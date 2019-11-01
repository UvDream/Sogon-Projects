import fetch from "../fetch";
import Cookies from 'js-cookie'
// 保存
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

// 保存
export const handleSaveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};
