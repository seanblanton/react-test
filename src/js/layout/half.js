import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';
import Box from './Box';
import Grid from './Grid';
import Clearfix from './Clearfix';


const Half = ({
  ...props
  }) => {

    return (
        <Grid {...props} width="xs-col12of12 s-col6of12"/>
    )
}

export default Half;
