import fetch from "../fetch";
import Cookies from 'js-cookie';

// 登陆
export const login = data => {
  return fetch({
    url: "/jsbrgl/userapi/login",
    method: "POST",
    data
  });
};
