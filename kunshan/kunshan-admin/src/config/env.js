/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-14 15:11:10
 * @Description:url
 * @Email: UvDream@163.com
 */

let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = `http://10.10.10.23:8089`; //开发环境地址
} else if (process.env.NODE_ENV == "production") {
  baseUrl = ``; //生产环境地址
}
export { baseUrl };
