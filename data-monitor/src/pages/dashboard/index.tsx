import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { AddNum, ReduceNum } from "../../store/actions/counter";
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import Card from "../../components/card/index";
const DashBoard = (props: any) => {
    // 数据源
    const data = [
        { genre: '星期一', sold: 275, income: 2300 },
        { genre: '星期二', sold: 115, income: 667 },
        { genre: '星期三', sold: 120, income: 982 },
        { genre: '星期四', sold: 350, income: 5271 },
        { genre: '星期五', sold: 150, income: 3710 }
    ];
    // 定义度量
    const cols = {
        sold: { alias: '销售量' },
        genre: { alias: '游戏种类' }
    };


    console.log(props)
    let { num, Add, Reduce } = props;
    return (
        <div>
            <Chart width={600} height={400} data={data} scale={cols}>
                <Axis name="genre" title />
                <Axis name="sold" title />
                <Legend position="top" />
                <Tooltip />
                <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
            <Card number={11} contrast={false} />
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