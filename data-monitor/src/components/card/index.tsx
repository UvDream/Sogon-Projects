import React from 'react';


export interface CardProps {
    number: number,
    contrast: boolean
}

export interface CardState {
}

class Card extends React.Component<CardProps, CardState> {
    render() {
        return (
            <div>
                卡片
                {this.props.number}
            </div>
        );
    }
}

export default Card;