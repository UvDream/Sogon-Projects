/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:51:40
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 21:52:29
 * @Description:管理任务
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface ManagementTaskProps {

}

export interface ManagementTaskState {

}

class ManagementTask extends React.Component<ManagementTaskProps, ManagementTaskState> {
    constructor(props: ManagementTaskProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                管理任务
        </div>
        );
    }
}

export default ManagementTask;