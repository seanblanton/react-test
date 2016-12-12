import React from 'react';
import style from '../../css/main.scss';
import Title from './Title';
import Close from './Close';
import Box from './Box';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box>
              <Title title="Share Settings"/>
              <Close className="xs-ib xs-flex-self-center"/>
            </Box>
        );
    }
}

export default Header;
