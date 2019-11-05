import fetch from "../fetch";

// 村干部
export const villageLeaders = data => {
  return fetch({
    url: "/jsbrgl/userapi/login",
    method: "POST",
    data
  });
};
// 部门
export const department = data => {
  return fetch({
    url: "/jsbrgl/userapi/login",
    method: "POST",
    data
  });
};
// 民警
export const police = data => {
  return fetch({
    url: "/jsbrgl/userapi/login",
    method: "POST",
    data
  });
};
// 医生
export const doctor = data => {
  return fetch({
    url: "/jsbrgl/userapi/login",
    method: "POST",
    data
  });
};
// 列表
export const listFunc = data => {
  return fetch({
    url: "/jsbrgl/userapi/login",
    method: "POST",
    data
  });
};

// 部门接口
export const departmentFunc = data => {
  return fetch({
    url: "/jsbrgl/fourToOneController/selectDept",
    method: "POST",
    data
  });
};
export const nameFunc = data => {
  return fetch({
    url: "/jsbrgl/fourToOneController/selectUser",
    method: "POST",
    data
  });
};
