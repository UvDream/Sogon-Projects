/*
 * @Author: wangzhongjie
 * @Date: 2019-09-17 17:06:35
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 21:13:53
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
        const list = [
            {
                id: "1", name: "日常办公", children: [
                    { id: "1-1", name: "通知", url: "/" },
                    { id: "1-2", name: "工作汇报", url: "/" },
                ]
            },
            {
                id: "2", name: "积分制管理", children: [
                    { id: "2-1", name: "我的积分", url: "/" },
                    { id: "2-2", name: "积分奖扣", url: "/" },
                    { id: "2-3", name: "积分任务", url: "/" },
                    { id: "2-4", name: "积分审批", url: "/" },
                    { id: "2-5", name: "管理任务", url: "/" },
                    { id: "2-6", name: "积分排名", url: "/" },
                    { id: "2-7", name: "积分查询", url: "/" },
                    { id: "2-8", name: "积分奖票", url: "/" },
                    { id: "2-9", name: "核查结算", url: "/" },
                    { id: "2-10", name: "事件库", url: "/" },
                ]
            },
            {
                id: "3", name: "移动考勤", children: [
                    { id: "3-1", name: "考勤", url: "/" },
                    { id: "3-2", name: "排班打卡", url: "/" },
                ]
            },
            {
                id: "4", name: "系统管理", children: [
                    { id: "4-1", name: "成员管理", url: "/" },
                    { id: "4-2", name: "积分配制", url: "/" },
                    { id: "4-3", name: "角色权限配置", url: "/" },
                    { id: "4-4", name: "奖扣权限配置", url: "/" },
                ]
            },
        ]
        return (
            <Fragment>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1-1']} onClick={this.menusCLick}>
                    {
                        list.map((item) => {
                            return (
                                <SubMenu
                                    key={item.id}
                                    title={
                                        <span>
                                            <Icon type="desktop" />
                                            <span>{item.name}</span>
                                        </span>
                                    }
                                >
                                    {
                                        item.children.map((list) => {
                                            return (
                                                <Menu.Item key={list.id}>
                                                    <Link to={list.url}>
                                                        {list.name}
                                                    </Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    }
                </Menu>
            </Fragment >
        )
    }
}