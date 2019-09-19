
import React, { Fragment } from 'react';
import { Menu } from 'antd';

export const UserDropdown = () => {
    return (
        <Fragment>
            <Menu>
                <Menu.Item>
                    个人中心
                </Menu.Item>
                <Menu.Item>
                    设置
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    退出
                </Menu.Item>
            </Menu>
        </Fragment>
    )
}