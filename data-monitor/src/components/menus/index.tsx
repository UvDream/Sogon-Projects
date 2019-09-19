/*
 * @Author: wangzhongjie
 * @Date: 2019-09-17 17:06:35
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-19 15:04:20
 * @Description: 菜单
 * @Email: UvDream@163.com
 */
import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import { ClickParam } from 'antd/es/menu';


const { SubMenu } = Menu;


export default class Menus extends Component {
    menusCLick = (event: ClickParam) => {
        console.log("菜单点击", event)
    }
    render() {
        return (
            <Fragment>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.menusCLick}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="dashboard" />
                            <span>仪表盘</span>
                        </Link>

                    </Menu.Item>
                    <SubMenu
                        key="2"
                        title={
                            <span>
                                <Icon type="desktop" />
                                <span>平台监控</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">
                            <Link to="/operationLog">
                                操作日志
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="6">运行日志</Menu.Item>
                    </SubMenu>

                </Menu>
            </Fragment >
        )
    }

}