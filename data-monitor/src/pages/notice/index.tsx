/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:27:43
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 21:28:31
 * @Description:通知
 * @Email: UvDream@163.com
 */
import React from 'react';
export interface NoticeProps {

}

export interface NoticeState {

}

class Notice extends React.Component<NoticeProps, NoticeState> {
    constructor(props: NoticeProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>通知</div>
        );
    }
}

export default Notice;