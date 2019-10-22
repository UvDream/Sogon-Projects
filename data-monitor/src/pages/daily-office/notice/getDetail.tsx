import * as React from 'react';
import { Icon } from 'antd';
import "./notice.less"

export interface GetDetailProps {

}

export interface GetDetailState {

}

class GetDetail extends React.Component<GetDetailProps, GetDetailState> {
    constructor(props: GetDetailProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="get-notice">
                <div className="header">
                    <div style={{ marginLeft: "10px" }}>
                        <Icon type="left" />返回
                    </div>
                </div>
                <div className="get-notice-main">
                    <div className="title">
                        这是标题
                    </div>
                    <div className="auth">
                        <span>曾天然</span>
                        <div></div>
                        <span>
                            发布于3月21日  21:30
                        </span>
                        <div></div>
                        <span>
                            通知:曾天然
                        </span>
                    </div>
                    <div className="get-notice-main-content">
                        大家一起看一下子哇
                    </div>
                </div>
            </div>
        );
    }
}

export default GetDetail;