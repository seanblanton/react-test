import React from 'react';
import style from '../../css/main.scss';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className={ "xs-fs3 xs-my0 color-black70 fw4 lh-heading" + " " + this.props.className } >
                { this.props.children }
            </h1>
        );
    }
}

export default Title;
