/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:06:53
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:07:37
 * @Description:事件库
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface EventLibraryProps {

}

export interface EventLibraryState {

}

class EventLibrary extends React.Component<EventLibraryProps, EventLibraryState> {
    constructor(props: EventLibraryProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                事件库
            </div>
        );
    }
}

export default EventLibrary;