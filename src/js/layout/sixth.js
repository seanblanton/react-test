import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';
import Box from './Box';
import Grid from './Grid';
import Clearfix from './Clearfix';


const Sixth = ({
  ...props
  }) => {

    return (
        <Grid {...props} width="xs-col12of12 s-col2of12"/>
    )
}

export default Sixth;
