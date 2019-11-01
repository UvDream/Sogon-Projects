import fetch from "../fetch";
// 保存
export const saveList = data => {
  return fetch({
    url: "/jsbrgl/createArchives/saveArchives",
    method: "POST",
    data
  });
};
