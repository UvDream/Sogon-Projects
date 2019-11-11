import fetch from "../fetch";
import Cookies from 'js-cookie'

// 获取所有数据

export const findAllMessage = data => {
  return fetch({
    url: "/jsbrgl/showAllController/findAllMessage",
    method: "POST",
    data,
    headers: { 
      "Content-Type": "application/json"
    }
  });
};
