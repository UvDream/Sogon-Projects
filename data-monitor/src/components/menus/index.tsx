/*
 * @Author: wangzhongjie
 * @Date: 2019-09-17 17:06:35
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-17 17:06:35
 * @Description: 菜单
 * @Email: UvDream@163.com
 */
import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class Menus extends Component {
    render() {
        return (
            <Fragment>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>仪表盘</span>
                    </Menu.Item>
                    <SubMenu
                        key="2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>平台监控</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">操作日志</Menu.Item>
                        <Menu.Item key="6">运行日志</Menu.Item>
                    </SubMenu>

                </Menu>
            </Fragment>
        )
    }
}