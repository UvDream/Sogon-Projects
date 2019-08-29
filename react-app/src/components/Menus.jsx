/*
 * @Author: wangzhongjie
 * @Date: 2019-08-29 15:24:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-29 19:21:37
 * @Description: 头部菜单栏
 * @Email: UvDream@163.com
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/Menus.less';
function Menus() {
  const [list] = useState([
    { url:"/",name: "首页" },
    { url:"/test/",name: "数据目录" },
    { url:"",name: "数据接口" },
    { url:"",name: "应用成果" },
    { url:"",name: "开放直属" },
    { url:"",name: "互动交流" },
    { url:"",name: "开发者中心" },
    { url:"",name: "个人中心" },

  ]);
  let [tab, tabClick] = useState(0)
  return (
    <div className="menus">
      <div className='menus-list'>
        {list.map((val, index) => (
          <Link to={val.url}  key={index}>
            <section className={tab === index ? 'active' : ''} onClick={() => { tabClick(tab = index) }}>
              {val.name}
            </section>
          </Link>
        ))}
      </div>

    </div>
  )
}
export default Menus;