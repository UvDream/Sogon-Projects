/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-15 15:47:48
 * @Description:url
 * @Email: UvDream@163.com
 */

let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "/api"; //开发环境地址
} else if (process.env.NODE_ENV == "production") {
  baseUrl = ``; //生产环境地址
}
export { baseUrl };
