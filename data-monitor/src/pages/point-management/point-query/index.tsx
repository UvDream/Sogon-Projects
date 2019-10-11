/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:00:57
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:01:33
 * @Description:积分查询
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface PointQueryProps {

}

export interface PointQueryState {

}

class PointQuery extends React.Component<PointQueryProps, PointQueryState> {
    constructor(props: PointQueryProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                积分查询
            </div>
        );
    }
}

export default PointQuery;