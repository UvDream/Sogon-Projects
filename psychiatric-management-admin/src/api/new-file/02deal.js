import fetch from "../fetch";
import Cookies from 'js-cookie'

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
