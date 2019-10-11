/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:18:29
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:19:10
 * @Description:成员管理
 * @Email: UvDream@163.com
 */
import * as React from 'react';

export interface MemberManagementProps {

}

export interface MemberManagementState {

}

class MemberManagement extends React.Component<MemberManagementProps, MemberManagementState> {
    constructor(props: MemberManagementProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                成员管理
            </div>
        );
    }
}

export default MemberManagement;