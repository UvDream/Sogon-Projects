/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 22:05:11
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 22:05:54
 * @Description:核查结算
 * @Email: UvDream@163.com
 */
import * as React from 'react';
export interface CheckSettlementProps {

}

export interface CheckSettlementState {

}

class CheckSettlement extends React.Component<CheckSettlementProps, CheckSettlementState> {
    constructor(props: CheckSettlementProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>核查结算</div>);
    }
}

export default CheckSettlement;