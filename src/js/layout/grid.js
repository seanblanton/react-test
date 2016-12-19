import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';
import Box from './Box';
import Clearfix from './Clearfix';


const Grid = ({
  ...props
  }) => {

    return (
        <Box {...props} p="xs-pa2" display="xs-block s-ib"/>
    )
}

export default Grid;
