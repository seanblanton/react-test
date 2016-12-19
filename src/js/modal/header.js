import React from 'react';
import style from '../../css/main.scss';
import Title from './Title';
import Close from './Close';
import Box from '../layout/Box';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box flex="xs-flex" flexJustify="xs-flex-justify-between" className="xs-pt4 xs-px4 xs-pb0">
              <Title title="Share Settings" />
              <Close className="xs-ib xs-flex-self-center"/>
            </Box>


        );
    }
}

export default Header;
