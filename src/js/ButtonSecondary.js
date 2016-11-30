import React from 'react';
import style from '../css/main.scss';
import Button from './Button';

class ButtonSecondary extends React.Component {

    render() {
        return (
           <Button className="bg-gray20 border-gray30 color-gray"> { this.props.children } </Button>
        );
    }
}

export default ButtonSecondary;