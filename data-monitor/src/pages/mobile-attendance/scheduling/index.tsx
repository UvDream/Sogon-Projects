/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:12:58
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:13:30
 * @Description: 排班打卡
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface SchedulingProps {

}

export interface SchedulingState {

}

class Scheduling extends React.Component<SchedulingProps, SchedulingState> {
    constructor(props: SchedulingProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                排班打卡
            </div>
        );
    }
}

export default Scheduling;