import fetch from "../fetch";
import Cookies from 'js-cookie'

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