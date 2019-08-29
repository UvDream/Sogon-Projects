import React from 'react';
import './styles/Header.less';
import {Icon} from 'antd';
function TopHeader(){
   
    return(
        <div className="top">
            <div className="top-title">
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
                    登陆
                </div>
            </div>
        </div>
    )
}
export default TopHeader;