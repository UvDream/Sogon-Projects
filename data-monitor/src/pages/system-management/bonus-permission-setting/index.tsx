/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:22:22
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:23:24
 * @Description:奖扣权限配置
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface BonusPermissionSettingProps {

}

export interface BonusPermissionSettingState {

}

class BonusPermissionSetting extends React.Component<BonusPermissionSettingProps, BonusPermissionSettingState> {
    constructor(props: BonusPermissionSettingProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                奖扣权限配置
            </div>
        );
    }
}

export default BonusPermissionSetting;
