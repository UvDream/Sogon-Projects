import fetch from "../fetch";
import Cookies from 'js-cookie'

// 四帮一
export const helpSaveList = data => {
  return fetch({
    url: "/jsbrgl/fourToOneController/saveHelpful",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};
