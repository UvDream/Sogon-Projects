import fetch from "../fetch";
import Cookies from 'js-cookie'

// 脱离管控
export const outControlSaveList = data => {
    return fetch({
      url: "/jsbrgl/rehabilitationController/saveRehabilitation",
      method: "POST",
      data,
      headers: { 
        "Content-Type": "application/json"
      }
    });
  };

  export const outControlSaveLists = data => {
    return fetch({
      url: "/jsbrgl/rehabilitationController/saveRehabilitation",
      method: "POST",
      data,
      headers: { 
        "Content-Type": "application/json"
      }
    });
  };