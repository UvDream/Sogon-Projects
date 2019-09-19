
import React, { Fragment } from 'react';
import { Menu } from 'antd';

export const UserDropdown = () => {
    return (
        <Fragment>
            <Menu>
                <Menu.Item>
                    1st menu item
                    </Menu.Item>
                <Menu.Item>
                    2nd menu item
                    </Menu.Item>
            </Menu>
        </Fragment>
    )
}