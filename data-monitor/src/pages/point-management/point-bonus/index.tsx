/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:40:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:44:44
 * @Description:积分奖扣
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface PointBonusProps {

}

export interface PointBonusState {

}

class PointBonus extends React.Component<PointBonusProps, PointBonusState> {
    constructor(props: PointBonusProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                积分奖扣
            </div>
        );
    }
}

export default PointBonus;
