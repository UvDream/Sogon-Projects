/*
 * @Author: wangzhongjie
 * @Date: 2019-08-29 15:05:19
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-29 19:21:28
 * @Description: 头部
 * @Email: UvDream@163.com
 */
import React from 'react';
import './styles/Header.less';
import {Icon} from 'antd';
function TopHeader(){
    return(
        <div className="top">
            <div className="top-title">
             <span class="icon iconfont icon-diqiu" style={{fontSize:'18px'}}></span>
                <span>南京・江宁区</span>
                公共数据开发门户
            </div>
            <div className="top-float">
                <div className="top-float-search">
                <Icon style={{fontSize:'20px',color:'#639aed'}} type="search" className="top-float-search-icon" />
                <input type="text" placeholder="请输入搜索内容"/>
                <div className="top-float-search-btn">
                    搜索
                </div>
                </div>
                <div className="top-float-user">
                    <Icon type="user"/>
                    <span>登陆</span>
                </div>
            </div>
        </div>
    )
}
export default TopHeader;