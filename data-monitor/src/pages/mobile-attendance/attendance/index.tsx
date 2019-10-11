/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:10:34
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:11:08
 * @Description:考勤
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface AttendanceProps {

}

export interface AttendanceState {

}

class Attendance extends React.Component<AttendanceProps, AttendanceState> {
    constructor(props: AttendanceProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                考勤
            </div>
        );
    }
}

export default Attendance;