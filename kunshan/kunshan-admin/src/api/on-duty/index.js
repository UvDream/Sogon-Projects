import request from "../request";
export const dataList = data => {
  return request({
    url: "/manager/onDuty/personnalList",
    methods: "POST",
    data
  });
};
