import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { AddNum, ReduceNum } from "../../store/actions/counter";
const DashBoard = (props: any) => {
    console.log(props)
    let { num, Add, Reduce } = props;
    return (
        <div>
            <Input placeholder="请输入" value={num}></Input>
            <Button onClick={() => { Add() }}>+</Button>
            <Button onClick={() => Reduce()}>-</Button>
        </div>
    )
}
const stateToProps = (state: any) => {
    console.log(state);
    return {
        num: state.counter.num,
    }
}
const dispatchToProps = (dispatch: any) => {
    return {
        Add() {
            let action = AddNum();
            dispatch(action);
        },
        Reduce() {
            let action = ReduceNum();
            dispatch(action);
        }
    }
}
export default connect(stateToProps, dispatchToProps)(DashBoard);