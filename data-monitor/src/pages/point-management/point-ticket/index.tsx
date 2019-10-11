/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:02:30
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:45:41
 * @Description:积分奖票
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface PointTicketProps {

}

export interface PointTicketState {

}

class PointTicket extends React.Component<PointTicketProps, PointTicketState> {
    constructor(props: PointTicketProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                积分奖票
            </div>
        );
    }
}

export default PointTicket;