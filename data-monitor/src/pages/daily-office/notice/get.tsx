/*
 * @Author: wangzhongjie
 * @Date: 2019-10-11 21:27:43
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-21 20:32:50
 * @Description:通知
 * @Email: UvDream@163.com
 */
import React from 'react';
import "./notice.less";
import { Row, Col, Icon, Button } from 'antd';
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
            <div className="notice">
                <div className="header">
                    <span className="header-title">发送的通知</span>
                    <Button type="primary" style={{ float: "right", marginTop: "15px", marginRight: "20px" }}>发通知</Button>

                </div>

                <div className="notice-block">
                    <div className="notice-block-top">
                        <Row>

                            <Col span={2}>
                                <div className="notice-block-top-avatar">
                                    天然2
                                </div>
                            </Col>
                            <Col span={19} style={{ paddingTop: "5px" }}>
                                <div className="text">2018的资料大家看一2018的资料大家看一下2018的资料大家看一下2018的资料大家看一下2018的资料大家看一下2018的资料大家看一下2018的资料大家看一下2018的资料大家看一下下</div>
                                <div className="text">
                                    文件需要大家看一下
                                </div>
                            </Col>
                            <Col span={3}>18:20</Col>
                        </Row>
                    </div>
                    <div className="notice-block-bottom">
                        <Icon type="message" style={{ marginRight: "5px" }} />11
                    </div>
                </div>
            </div >
        );
    }
}

export default Notice;