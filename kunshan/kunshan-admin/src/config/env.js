/*
 * @Author: wangzhongjie
 * @Date: 2019-10-09 16:23:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-09 16:25:00
 * @Description:url
 * @Email: UvDream@163.com
 */

let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = `http://192.168.1.192:6902/zuul`; //开发环境地址
} else if (process.env.NODE_ENV == "production") {
  baseUrl = `http://auto2.ikuijia.com/zuul`; //生产环境地址
}
export { baseUrl };
