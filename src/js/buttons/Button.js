import React from 'react';
import style from '../../css/main.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ "xs-ib v-middle xs-px4 xs-py2 xs-fs4 color-white lh-button bg-orange bw2 bs-solid border-orange br2" + " " + this.props.className } >
                { this.props.children }
            </div>
        );
    }
}

export default Button;
