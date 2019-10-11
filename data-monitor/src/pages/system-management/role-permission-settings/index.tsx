/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:20:47
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:21:24
 * @Description:角色权限设置
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface RolePermissionSettingProps {

}

export interface RolePermissionSettingState {

}

class RolePermissionSetting extends React.Component<RolePermissionSettingProps, RolePermissionSettingState> {
    constructor(props: RolePermissionSettingProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                角色权限设置
            </div>
        );
    }
}

export default RolePermissionSetting;
