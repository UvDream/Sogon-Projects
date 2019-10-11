/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:48:50
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 21:49:56
 * @Description:积分审批
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface PointApprovalProps {

}

export interface PointApprovalState {

}

class PointApproval extends React.Component<PointApprovalProps, PointApprovalState> {
    constructor(props: PointApprovalProps) {
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

export default PointApproval;
