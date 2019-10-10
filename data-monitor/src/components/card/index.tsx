import React from 'react';
import "./card.less"

export interface CardProps {
    number: number,
    contrast: boolean,
    title: String,
    total: number
}

class Card extends React.Component<CardProps> {
    render() {
        return (
            <div className="card">
                <div className="card-title">
                    {this.props.title}
                </div>
                <div className="card-content">
                    {((item) => {
                        if (item.contrast) {
                            return (
                                <div className="card-content-num">
                                    <span>{item.number}</span>/
                                    <span>{item.total}</span>
                                </div>
                            )
                        } else {
                            return <span>{item.number}</span>
                        }
                    })(this.props)}
                </div>
            </div>
        );
    }
}

export default Card;