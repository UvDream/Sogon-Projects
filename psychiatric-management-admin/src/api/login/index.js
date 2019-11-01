import fetch from "../fetch";

// 登陆
export const login = data => {
  return fetch({
    url: "/jsbrgl/userapi/login",
    method: "POST",
    data
  });
};
