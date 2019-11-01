import fetch from "../fetch";
import Cookies from 'js-cookie'
// 保存
export const saveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json",
      "token": Cookies.get('TokenKey')
    }
  });
};
