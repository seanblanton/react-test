import React from 'react';
import style from '../../css/main.scss';
import Title from './Title';
import Close from './Close';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="xs-flex xs-flex-justify-between xs-px4 xs-pt4 xs-pb3 bs-b-solid bw1 border-gray20">
              <Title className="xs-ib"> Share Settings </Title>
              <Close className="xs-ib xs-flex-self-center"/>
            </div>
        );
    }
}

export default Header;
