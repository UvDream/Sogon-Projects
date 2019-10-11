/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:37:34
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 21:38:11
 * @Description:我的积分
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface MyScoresProps {

}

export interface MyScoresState {

}

class MyScores extends React.Component<MyScoresProps, MyScoresState> {
    constructor(props: MyScoresProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                我的积分
            </div>
        );
    }
}

export default MyScores;