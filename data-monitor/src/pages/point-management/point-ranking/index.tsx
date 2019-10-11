/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:53:49
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 21:56:24
 * @Description:积分排名
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface PointRankingProps {

}

export interface PointRankingState {

}

class PointRanking extends React.Component<PointRankingProps, PointRankingState> {
    constructor(props: PointRankingProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                积分排名
            </div>
        );
    }
}

export default PointRanking;