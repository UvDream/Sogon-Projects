/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 19:45:49
 * @Description:url
 * @Email: UvDream@163.com
 */

let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "/api"; //开发环境地址
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `http://50.78.138.7:8081`; //生产环境地址
}
export { baseUrl };
