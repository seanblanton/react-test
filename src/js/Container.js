import Button from './Button';
import ButtonSecondary from './ButtonSecondary';
import React from 'react';
import style from '../css/main.scss';

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="xs-col4of12 bg-white border-gray20 br1 xs-mx-auto bw1 bs-solid border-gray40 shadow-2 xs-my4 xs-pa5">
                <Button> Submit </Button>
                <ButtonSecondary> Cancel </ButtonSecondary>
            </div>);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }
}

export default Container;