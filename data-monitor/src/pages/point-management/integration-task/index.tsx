/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:46:03
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:46:56
 * @Description:积分任务
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface IntegrationTaskProps {

}

export interface IntegrationTaskState {

}

class IntegrationTask extends React.Component<IntegrationTaskProps, IntegrationTaskState> {
    constructor(props: IntegrationTaskProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                积分审批
            </div>
        );
    }
}

export default IntegrationTask;