import React from 'react';
import style from '../css/main.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ "ib v-middle xs-px4 xs-py2 xs-mx1 xs-my2 xs-fs2 color-white lh-button bg-orange bw1 bs-solid border-orange br3" + " " + this.props.className } >
                { this.props.children }
            </div>
        );
    }
}


export default Button;
